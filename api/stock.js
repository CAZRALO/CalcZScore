const cheerio = require('cheerio');

let STOCK_DIRECTORY = [];
let classifyEnterprise = null;
let searchStockDirectory = null;
let PRELOADED_STOCKS = {};
let CRAWLED_DATABASE = {};

try {
  const stockDirModule = require('../stock_directory.js');
  STOCK_DIRECTORY = stockDirModule.STOCK_DIRECTORY || [];
  classifyEnterprise = stockDirModule.classifyEnterprise || null;
  searchStockDirectory = stockDirModule.searchStockDirectory || null;
  PRELOADED_STOCKS = stockDirModule.PRELOADED_STOCKS || {};
} catch (e) {
  // Directory might not exist or be imported differently
}

try {
  CRAWLED_DATABASE = require('../crawled_700_database.json');
} catch (e) {
  // Crawled database might not exist yet
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

  const queryInput = req.query.symbol || req.query.name || req.query.q || '';
  if (!queryInput || typeof queryInput !== 'string') {
    return res.status(400).json({ error: 'Vui lòng cung cấp mã chứng khoán hoặc tên công ty (ví dụ: ?symbol=HPG hoặc ?symbol=Vinamilk)' });
  }

  let rawInput = queryInput.trim();
  let ticker = rawInput.toUpperCase();

  // If input is not directly found as a registered ticker in directory, search by company name
  const isDirectTicker = STOCK_DIRECTORY.some(item => item.s && item.s.toUpperCase() === ticker);
  if (!isDirectTicker && searchStockDirectory) {
    const matched = searchStockDirectory(rawInput);
    if (matched && matched.length > 0) {
      ticker = matched[0].s.toUpperCase();
    }
  }

  if (!/^[A-Z0-9]{3,10}$/.test(ticker)) {
    return res.status(400).json({
      error: `Không thể tìm thấy mã chứng khoán phù hợp cho từ khóa: "${rawInput}". Vui lòng thử lại với mã 3 ký tự (ví dụ: HPG, VNM, FPT...).`
    });
  }

  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language': 'vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7'
  };

  try {
    const currentYear = new Date().getFullYear();

    // Check pre-registered directory entry
    const dirEntry = STOCK_DIRECTORY.find(item => item.s && item.s.toUpperCase() === ticker);

    // Endpoints designed to cover all years from 2015 to 2025:
    // 2025 -> 2022..2025; 2024 -> 2021..2024; 2021 -> 2018..2021; 2018 -> 2015..2018; 2017 -> 2014..2017
    const targetYears = [2025, 2024, 2021, 2018, 2017];

    const [ssiRes, ...cafeFPages] = await Promise.allSettled([
      fetch(`https://iboard-query.ssi.com.vn/stock/${ticker}`, { headers: { 'User-Agent': headers['User-Agent'] } }),
      ...targetYears.map(async (yr) => {
        const [bsRes, incRes] = await Promise.allSettled([
          fetch(`https://s.cafef.vn/bao-cao-tai-chinh/${ticker}/bsheet/${yr}/0/0/0/bao-cao.chn`, { headers }),
          fetch(`https://s.cafef.vn/bao-cao-tai-chinh/${ticker}/incsta/${yr}/0/0/0/bao-cao.chn`, { headers })
        ]);
        const bsHtml = (bsRes.status === 'fulfilled' && bsRes.value.ok) ? await bsRes.value.text() : '';
        const incHtml = (incRes.status === 'fulfilled' && incRes.value.ok) ? await incRes.value.text() : '';
        return { yr, bsHtml, incHtml };
      })
    ]);

    let ssiData = null;
    if (ssiRes.status === 'fulfilled' && ssiRes.value.ok) {
      try {
        ssiData = await ssiRes.value.json();
      } catch (e) {
        // ignore
      }
    }

    // Company identity
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

    // Helper to parse detected 4-digit years from table headers
    function parseYears($) {
      let detected = [];
      $('tr').each((_, row) => {
        const texts = $(row).find('td, th').map((_, el) => $(el).text().trim()).get();
        const yearCandidates = texts.filter(t => /^\d{4}$/.test(t) && parseInt(t, 10) >= 2000 && parseInt(t, 10) <= 2030);
        if (yearCandidates.length >= 2) {
          detected = yearCandidates;
          return false;
        }
      });
      return detected;
    }

    function cleanVal(str) {
      if (!str) return 0;
      let s = str.trim();
      const isNegative = s.startsWith('-') || (s.startsWith('(') && s.endsWith(')'));
      s = s.replace(/[^\d.,]/g, '');
      const num = parseFloat(s.replace(/\./g, '').replace(',', '.'));
      if (isNaN(num)) return 0;
      const valInBillions = Math.round(num / 1e9);
      return isNegative ? -Math.abs(valInBillions) : valInBillions;
    }

    function extractMetric($, rowYears, matchCriteria) {
      const result = {};
      $('tr').each((_, row) => {
        const cells = $(row).find('td, th').map((_, el) => $(el).text().trim()).get();
        if (cells.length > rowYears.length) {
          const rowTitle = cells[0].toUpperCase();
          if (matchCriteria(rowTitle)) {
            rowYears.forEach((yr, idx) => {
              result[yr] = cleanVal(cells[idx + 1]);
            });
            return false;
          }
        }
      });
      return result;
    }

    const merged = {
      tsnh: {}, nnh: {}, tts: {}, lncpp: {}, lntt: {}, cplv: {}, vhtt: {}, tnpt: {}, dtt: {}
    };
    const detectedYearsSet = new Set();

    for (const item of cafeFPages) {
      if (item.status !== 'fulfilled' || !item.value) continue;
      const { bsHtml, incHtml } = item.value;
      if (!bsHtml && !incHtml) continue;

      const $bs = cheerio.load(bsHtml || '');
      const $inc = cheerio.load(incHtml || '');

      // Fallback company name from title if needed
      if (companyName === ticker && bsHtml) {
        const pageTitle = $bs('title').text();
        const match = pageTitle.match(/^(.*?)(?:\s*-\s*Báo cáo tài chính|\s*-\s*CafeF)/i);
        if (match && match[1].trim()) {
          companyName = match[1].trim();
        }
      }

      let rowYears = parseYears($bs);
      if (rowYears.length === 0) rowYears = parseYears($inc);
      if (rowYears.length === 0) continue;

      const tsnh = extractMetric($bs, rowYears, name => name.includes('TÀI SẢN NGẮN HẠN') && (name.includes('A-') || name.includes('A.') || name.includes('A -')));
      const tts  = extractMetric($bs, rowYears, name => name.includes('TỔNG CỘNG TÀI SẢN') || (name.includes('TỔNG TÀI SẢN') && !name.includes('DÀI HẠN')));
      const nnh  = extractMetric($bs, rowYears, name => name.includes('NỢ NGẮN HẠN') && (name.includes('I.') || name.includes('I -') || name.includes('I-')));
      const tnpt = extractMetric($bs, rowYears, name => name.includes('NỢ PHẢI TRẢ') && (name.includes('C.') || name.includes('C -') || name.includes('C-') || name.includes('C - NỢ')));
      const vcsh = extractMetric($bs, rowYears, name => name.includes('VỐN CHỦ SỞ HỮU') && (name.includes('D.') || name.includes('D -') || name.includes('D-') || name.includes('D - VỐN')));
      const lncpp = extractMetric($bs, rowYears, name => name.includes('CHƯA PHÂN PHỐI') || name.includes('LỢI NHUẬN SAU THUẾ CHƯA PHÂN PHỐI'));

      const dtt  = extractMetric($inc, rowYears, name => name.includes('DOANH THU THUẦN VỀ BÁN HÀNG') || name.includes('DOANH THU THUẦN'));
      const lntt = extractMetric($inc, rowYears, name => name.includes('TỔNG LỢI NHUẬN KẾ TOÁN TRƯỚC THUẾ') || name.includes('LỢI NHUẬN TRƯỚC THUẾ'));
      const cplv = extractMetric($inc, rowYears, name => name.includes('CHI PHÍ LÃI VAY'));

      rowYears.forEach(yrStr => {
        const y = parseInt(yrStr, 10);
        if (y >= 2015 && y <= 2025) {
          detectedYearsSet.add(y);
          if (tsnh[yrStr] && !merged.tsnh[yrStr]) merged.tsnh[yrStr] = tsnh[yrStr];
          if (tts[yrStr] && !merged.tts[yrStr])   merged.tts[yrStr]  = tts[yrStr];
          if (nnh[yrStr] && !merged.nnh[yrStr])   merged.nnh[yrStr]  = nnh[yrStr];
          if (vcsh[yrStr] && !merged.vhtt[yrStr]) merged.vhtt[yrStr] = vcsh[yrStr];
          if (tnpt[yrStr] && !merged.tnpt[yrStr]) merged.tnpt[yrStr] = tnpt[yrStr];
          if (lncpp[yrStr] !== undefined && !merged.lncpp[yrStr]) merged.lncpp[yrStr] = lncpp[yrStr];
          if (dtt[yrStr] && !merged.dtt[yrStr])   merged.dtt[yrStr]  = dtt[yrStr];
          if (lntt[yrStr] !== undefined && !merged.lntt[yrStr]) merged.lntt[yrStr] = lntt[yrStr];
          if (cplv[yrStr] !== undefined && !merged.cplv[yrStr]) merged.cplv[yrStr] = cplv[yrStr];
        }
      });
    }

    // Blend preloaded database if available to complete any gaps (e.g., 2015)
    const preloadedEntry = PRELOADED_STOCKS[ticker] || CRAWLED_DATABASE[ticker];
    if (preloadedEntry && preloadedEntry.data) {
      const keys = ['tsnh', 'nnh', 'tts', 'lncpp', 'lntt', 'cplv', 'vhtt', 'tnpt', 'dtt'];
      keys.forEach(k => {
        if (preloadedEntry.data[k]) {
          Object.keys(preloadedEntry.data[k]).forEach(yrStr => {
            const y = parseInt(yrStr, 10);
            if (y >= 2015 && y <= 2025) {
              if (!merged[k][yrStr] || merged[k][yrStr] === 0) {
                merged[k][yrStr] = preloadedEntry.data[k][yrStr];
                detectedYearsSet.add(y);
              }
            }
          });
        }
      });
      if (preloadedEntry.companyName && (!companyName || companyName === ticker)) {
        companyName = preloadedEntry.companyName;
      }
    }

    // Determine final list of years
    let sortedYears = Array.from(detectedYearsSet).sort((a, b) => a - b);

    // If years empty, return 404
    if (sortedYears.length === 0) {
      return res.status(404).json({
        error: `Không tìm thấy Báo cáo tài chính giai đoạn 2015 - 2025 cho mã ${ticker}. Doanh nghiệp có thể chưa nộp BCTC theo năm hoặc mã chưa đúng.`
      });
    }

    // Special check for Banks & Financial Institutions
    const hasTSNH = Object.values(merged.tsnh).some(v => v > 0);
    const hasTTS = Object.values(merged.tts).some(v => v > 0);

    const industry = (dirEntry && dirEntry.ind) || ssiData?.data?.industryName || '';
    const classification = classifyEnterprise ? classifyEnterprise({
      symbol: ticker,
      exchange,
      industry,
      companyName
    }) : null;

    if (!hasTSNH || !hasTTS || (classification && classification.isFinancial)) {
      return res.status(422).json({
        error: `Mã ${ticker} (${companyName}) thuộc khối Ngân hàng / Chứng khoán / Bảo hiểm hoặc tổ chức tài chính đặc thù. Mô hình Altman Z-Score không áp dụng cho cấu trúc bảng cân đối đặc thù của khối tài chính (tiền gửi là nợ chi phối).`,
        isFinancialInstitution: true,
        classification,
        companyName,
        exchange
      });
    }

    // Balance Sheet Fallbacks & Consistencies
    sortedYears.forEach(y => {
      const yr = String(y);
      if (!merged.tts[yr]) {
        // Look for neighbor year
        const prev = String(y - 1);
        const next = String(y + 1);
        merged.tts[yr] = merged.tts[prev] || merged.tts[next] || 0;
      }
      if (!merged.tnpt[yr] && merged.tts[yr] && merged.vhtt[yr]) {
        merged.tnpt[yr] = Math.max(0, merged.tts[yr] - merged.vhtt[yr]);
      }
      if (!merged.vhtt[yr] && merged.tts[yr] && merged.tnpt[yr]) {
        merged.vhtt[yr] = Math.max(0, merged.tts[yr] - merged.tnpt[yr]);
      }
      if (merged.lncpp[yr] === undefined) merged.lncpp[yr] = 0;
      if (merged.cplv[yr] === undefined) merged.cplv[yr] = 0;
      if (merged.dtt[yr] === undefined) merged.dtt[yr] = 0;
      if (merged.lntt[yr] === undefined) merged.lntt[yr] = 0;
      if (merged.tsnh[yr] === undefined) merged.tsnh[yr] = 0;
      if (merged.nnh[yr] === undefined) merged.nnh[yr] = 0;
    });

    // Edge cache on Vercel: 24h cache, 12h stale-while-revalidate
    res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=43200');

    return res.status(200).json({
      success: true,
      symbol: ticker,
      companyName,
      exchange,
      industry,
      classification,
      isUnlisted: Boolean(isUnlisted),
      currentPrice,
      years: sortedYears,
      unit: 'tỷ VNĐ',
      data: merged
    });

  } catch (err) {
    console.error(`Error fetching financials for ${ticker}:`, err);
    return res.status(500).json({
      error: `Đã xảy ra lỗi khi trích xuất số liệu BCTC giai đoạn 2015 - 2025 cho mã ${ticker}: ${err.message}`
    });
  }
};
