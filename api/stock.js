const cheerio = require('cheerio');

let STOCK_DIRECTORY = [];
try {
  const stockDirModule = require('../stock_directory.js');
  STOCK_DIRECTORY = stockDirModule.STOCK_DIRECTORY || [];
} catch (e) {
  // Directory might not exist or be imported differently
}

module.exports = async (req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { symbol } = req.query;
  if (!symbol || typeof symbol !== 'string') {
    return res.status(400).json({ error: 'Vui lòng cung cấp mã chứng khoán hợp lệ (ví dụ: ?symbol=HPG)' });
  }

  const ticker = symbol.trim().toUpperCase();
  if (!/^[A-Z0-9]{3,10}$/.test(ticker)) {
    return res.status(400).json({ error: 'Mã chứng khoán không đúng định dạng.' });
  }

  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language': 'vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7'
  };

  try {
    const currentYear = new Date().getFullYear();
    let baseYear = currentYear - 1; // Default to last complete fiscal year

    // Check pre-registered directory entry
    const dirEntry = STOCK_DIRECTORY.find(item => item.s && item.s.toUpperCase() === ticker);

    // Helper to fetch CafeF + SSI in parallel
    async function fetchCafeFData(yr) {
      const [bsRes, incRes, ssiRes] = await Promise.allSettled([
        fetch(`https://s.cafef.vn/bao-cao-tai-chinh/${ticker}/bsheet/${yr}/0/0/0/bao-cao.chn`, { headers }),
        fetch(`https://s.cafef.vn/bao-cao-tai-chinh/${ticker}/incsta/${yr}/0/0/0/bao-cao.chn`, { headers }),
        fetch(`https://iboard-query.ssi.com.vn/stock/${ticker}`, { headers: { 'User-Agent': headers['User-Agent'] } })
      ]);

      const bsHtml = (bsRes.status === 'fulfilled' && bsRes.value.ok) ? await bsRes.value.text() : '';
      const incHtml = (incRes.status === 'fulfilled' && incRes.value.ok) ? await incRes.value.text() : '';
      
      let ssiData = null;
      if (ssiRes.status === 'fulfilled' && ssiRes.value.ok) {
        try {
          ssiData = await ssiRes.value.json();
        } catch (e) {
          // ignore
        }
      }

      return { bsHtml, incHtml, ssiData };
    }

    let { bsHtml, incHtml, ssiData } = await fetchCafeFData(baseYear);

    // Parse SSI info for company name and exchange
    let companyName = (dirEntry && dirEntry.n) || ticker;
    let exchange = (dirEntry && dirEntry.e) || 'HOSE';
    let currentPrice = 0;

    if (ssiData?.data) {
      companyName = ssiData.data.companyNameVi || ssiData.data.companyNameEn || companyName;
      if (ssiData.data.exchange) {
        exchange = ssiData.data.exchange.toUpperCase();
      } else if (ssiData.data.market === 'UPX') {
        exchange = 'UPCOM';
      }
      currentPrice = ssiData.data.refPrice || ssiData.data.priorClosePrice || 0;
    }

    let isUnlisted = exchange.includes('UPCOM') || 
                       exchange.includes('OTC') || 
                       exchange.includes('CHƯA NIÊM YẾT') ||
                       (dirEntry && dirEntry.e === 'UPCOM');

    if (isUnlisted) {
      exchange = 'UPCOM';
    }

    let $bs = cheerio.load(bsHtml);
    let $inc = cheerio.load(incHtml);

    // Fallback company name from HTML title if missing
    if (companyName === ticker) {
      const pageTitle = $bs('title').text();
      const match = pageTitle.match(/^(.*?)(?:\s*-\s*Báo cáo tài chính|\s*-\s*CafeF)/i);
      if (match && match[1].trim()) {
        companyName = match[1].trim();
      }
    }

    // Detect years from table header
    function parseYears($) {
      let detected = [];
      $('tr').each((_, row) => {
        const texts = $(row).find('td, th').map((_, el) => $(el).text().trim()).get();
        // Match 4-digit years between 2000 and currentYear
        const yearCandidates = texts.filter(t => /^\d{4}$/.test(t) && parseInt(t, 10) >= 2000 && parseInt(t, 10) <= currentYear);
        if (yearCandidates.length >= 2) {
          detected = yearCandidates;
          return false; // Break
        }
      });
      return detected;
    }

    let years = parseYears($bs);
    if (years.length === 0) {
      years = parseYears($inc);
    }

    // If baseYear didn't have data, try baseYear - 1 (in case latest year not yet submitted)
    if (years.length === 0 && baseYear > 2020) {
      baseYear = baseYear - 1;
      const retry = await fetchCafeFData(baseYear);
      if (retry.bsHtml) {
        bsHtml = retry.bsHtml;
        incHtml = retry.incHtml || incHtml;
        $bs = cheerio.load(bsHtml);
        $inc = cheerio.load(incHtml);
        years = parseYears($bs);
        if (years.length === 0) years = parseYears($inc);
      }
    }

    if (years.length === 0) {
      return res.status(404).json({
        error: `Không tìm thấy Báo cáo tài chính cho mã ${ticker}. Doanh nghiệp có thể chưa nộp BCTC theo năm hoặc mã chưa đúng.`
      });
    }

    // Sort years ascending: e.g. [2022, 2023, 2024, 2025]
    years.sort((a, b) => parseInt(a, 10) - parseInt(b, 10));

    function cleanVal(str) {
      if (!str) return 0;
      let s = str.trim();
      // Handle negative numbers: e.g. -3.970.123 or (3.970.123)
      const isNegative = s.startsWith('-') || (s.startsWith('(') && s.endsWith(')'));
      s = s.replace(/[^\d.,]/g, '');
      const num = parseFloat(s.replace(/\./g, '').replace(',', '.'));
      if (isNaN(num)) return 0;
      const valInBillions = Math.round(num / 1e9);
      return isNegative ? -Math.abs(valInBillions) : valInBillions;
    }

    function extractMetric($, matchCriteria) {
      const result = {};
      $('tr').each((_, row) => {
        const cells = $(row).find('td, th').map((_, el) => $(el).text().trim()).get();
        if (cells.length > years.length) {
          const rowTitle = cells[0].toUpperCase();
          const isMatch = matchCriteria(rowTitle);
          if (isMatch) {
            years.forEach((yr, idx) => {
              result[yr] = cleanVal(cells[idx + 1]);
            });
            return false;
          }
        }
      });
      return result;
    }

    // Extract Balance Sheet Metrics
    const tsnh = extractMetric($bs, name => name.includes('TÀI SẢN NGẮN HẠN') && (name.includes('A-') || name.includes('A.') || name.includes('A -')));
    const tts  = extractMetric($bs, name => name.includes('TỔNG CỘNG TÀI SẢN') || (name.includes('TỔNG TÀI SẢN') && !name.includes('DÀI HẠN')));
    const nnh  = extractMetric($bs, name => name.includes('NỢ NGẮN HẠN') && (name.includes('I.') || name.includes('I -') || name.includes('I-')));
    const tnpt = extractMetric($bs, name => name.includes('NỢ PHẢI TRẢ') && (name.includes('C.') || name.includes('C -') || name.includes('C-') || name.includes('C - NỢ')));
    const vcsh = extractMetric($bs, name => name.includes('VỐN CHỦ SỞ HỮU') && (name.includes('D.') || name.includes('D -') || name.includes('D-') || name.includes('D - VỐN')));
    const lncpp = extractMetric($bs, name => name.includes('CHƯA PHÂN PHỐI') || name.includes('LỢI NHUẬN SAU THUẾ CHƯA PHÂN PHỐI'));

    // Extract Income Statement Metrics
    const dtt  = extractMetric($inc, name => name.includes('DOANH THU THUẦN VỀ BÁN HÀNG') || name.includes('DOANH THU THUẦN'));
    const lntt = extractMetric($inc, name => name.includes('TỔNG LỢI NHUẬN KẾ TOÁN TRƯỚC THUẾ') || name.includes('LỢI NHUẬN TRƯỚC THUẾ'));
    const cplv = extractMetric($inc, name => name.includes('CHI PHÍ LÃI VAY'));

    // Special check for Banks & Financial Institutions
    const hasTSNH = Object.values(tsnh).some(v => v > 0);
    const hasTTS = Object.values(tts).some(v => v > 0);

    if (!hasTSNH || !hasTTS) {
      return res.status(422).json({
        error: `Mã ${ticker} (${companyName}) thuộc khối Ngân hàng / Chứng khoán / Bảo hiểm hoặc tổ chức tài chính đặc thù. Mô hình Altman Z-Score chỉ áp dụng cho doanh nghiệp Sản xuất, Thương mại và Dịch vụ phi tài chính.`,
        isFinancialInstitution: true,
        companyName,
        exchange
      });
    }

    // Balance Sheet Fallbacks & Consistencies
    years.forEach(yr => {
      // If TNPT is missing or 0, TNPT = TTS - VCSH
      if (!tnpt[yr] && tts[yr] && vcsh[yr]) {
        tnpt[yr] = Math.max(0, tts[yr] - vcsh[yr]);
      }
      // If VCSH is missing or 0, VCSH = TTS - TNPT
      if (!vcsh[yr] && tts[yr] && tnpt[yr]) {
        vcsh[yr] = Math.max(0, tts[yr] - tnpt[yr]);
      }
      if (!lncpp[yr]) lncpp[yr] = 0;
      if (!cplv[yr]) cplv[yr] = 0;
    });

    // Market cap proxy: use VCSH (Book Value) for Model Z' or scaled equity
    const vhtt = { ...vcsh };

    // Edge cache on Vercel: 24h cache, 12h stale-while-revalidate
    res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=43200');

    return res.status(200).json({
      success: true,
      symbol: ticker,
      companyName,
      exchange,
      isUnlisted: Boolean(isUnlisted),
      currentPrice,
      years: years.map(y => parseInt(y, 10)),
      unit: 'tỷ VNĐ',
      data: {
        tsnh,
        nnh,
        tts,
        lncpp,
        lntt,
        cplv,
        vhtt,
        tnpt,
        dtt
      }
    });

  } catch (err) {
    console.error(`Error fetching financials for ${ticker}:`, err);
    return res.status(500).json({
      error: `Đã xảy ra lỗi khi trích xuất số liệu BCTC cho mã ${ticker}: ${err.message}`
    });
  }
};
