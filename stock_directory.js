/**
 * DANH MỤC CÁC CÔNG TY TIÊU BIỂU NIÊM YẾT TRÊN THỊ TRƯỜNG CHỨNG KHOÁN VIỆT NAM
 * Hỗ trợ tìm kiếm nhanh theo: Mã cổ phiếu (Ticker), Tên tiếng Việt có dấu và không dấu
 */
const STOCK_DIRECTORY = [
  // THÉP & KIM LOẠI
  { s: 'HPG', n: 'Tập đoàn Hòa Phát', e: 'HOSE', ind: 'Thép & Vật liệu' },
  { s: 'HSG', n: 'Tập đoàn Hoa Sen', e: 'HOSE', ind: 'Thép & Tôn mạ' },
  { s: 'NKG', n: 'Thép Nam Kim', e: 'HOSE', ind: 'Thép & Tôn mạ' },
  { s: 'TLH', n: 'Thép Tiến Lên', e: 'HOSE', ind: 'Thép & Kim loại' },
  { s: 'POM', n: 'Thép Pomina', e: 'HOSE', ind: 'Sản xuất Thép' },
  { s: 'TVN', n: 'Tổng Công ty Thép Việt Nam', e: 'UPCOM', ind: 'Thép' },
  { s: 'SMC', n: 'Đầu tư Thương mại SMC', e: 'HOSE', ind: 'Thép & Kim loại' },

  // CÔNG NGHỆ, VIỄN THÔNG
  { s: 'FPT', n: 'Công ty Cổ phần FPT', e: 'HOSE', ind: 'Công nghệ & Viễn thông' },
  { s: 'CMG', n: 'Tập đoàn Công nghệ CMC', e: 'HOSE', ind: 'Công nghệ thông tin' },
  { s: 'ELC', n: 'Công nghệ Elcom', e: 'HOSE', ind: 'Công nghệ viễn thông' },
  { s: 'CTR', n: 'Tổng Công ty Công trình Viettel', e: 'HOSE', ind: 'Hạ tầng viễn thông' },
  { s: 'VGI', n: 'Tổng Công ty Đầu tư Quốc tế Viettel', e: 'UPCOM', ind: 'Viễn thông quốc tế' },
  { s: 'FOX', n: 'Viễn thông FPT (FPT Telecom)', e: 'UPCOM', ind: 'Viễn thông' },

  // THỰC PHẨM, ĐỒ UỐNG & NÔNG NGHIỆP
  { s: 'VNM', n: 'Sữa Việt Nam (Vinamilk)', e: 'HOSE', ind: 'Sữa & Thực phẩm dinh dưỡng' },
  { s: 'MSN', n: 'Tập đoàn Masan', e: 'HOSE', ind: 'Hàng tiêu dùng & Bán lẻ' },
  { s: 'SAB', n: 'Tổng Công ty Bia - Rượu - Nước giải khát Sài Gòn (Sabeco)', e: 'HOSE', ind: 'Bia & Đồ uống' },
  { s: 'BHN', n: 'Bia - Rượu - Nước giải khát Hà Nội (Habeco)', e: 'HOSE', ind: 'Bia & Đồ uống' },
  { s: 'DBC', n: 'Tập đoàn Dabaco', e: 'HOSE', ind: 'Chăn nuôi & Thức ăn chăn nuôi' },
  { s: 'BAF', n: 'Nông nghiệp BAF Việt Nam', e: 'HOSE', ind: 'Chăn nuôi heo công nghệ cao' },
  { s: 'QNS', n: 'Đường Quảng Ngãi', e: 'UPCOM', ind: 'Đường & Sữa đậu nành Fami' },
  { s: 'SBT', n: 'Thành Thành Công - Biên Hòa (TTC AgriS)', e: 'HOSE', ind: 'Nông nghiệp & Đường' },
  { s: 'KDC', n: 'Tập đoàn KIDO', e: 'HOSE', ind: 'Dầu ăn & Kem, Thực phẩm' },
  { s: 'PAN', n: 'Tập đoàn PAN', e: 'HOSE', ind: 'Nông nghiệp & Thủy sản' },
  { s: 'HAG', n: 'Hoàng Anh Gia Lai', e: 'HOSE', ind: 'Nông nghiệp & Chuối Heo' },
  { s: 'HNG', n: 'Nông nghiệp Quốc tế Hoàng Anh Gia Lai', e: 'UPCOM', ind: 'Nông nghiệp' },
  { s: 'MML', n: 'Masan MEATLife', e: 'UPCOM', ind: 'Thịt mát MEATDeli' },

  // BÁN LẺ & TIÊU DÙNG
  { s: 'MWG', n: 'Đầu tư Thế Giới Di Động (TGDD, ĐMX, BHX)', e: 'HOSE', ind: 'Bán lẻ công nghệ & Bách hóa' },
  { s: 'PNJ', n: 'Vàng bạc Đá quý Phú Nhuận', e: 'HOSE', ind: 'Trang sức & Vàng bạc' },
  { s: 'FRT', n: 'Bán lẻ Kỹ thuật số FPT (FPT Shop, Long Châu)', e: 'HOSE', ind: 'Bán lẻ ICT & Dược phẩm' },
  { s: 'DGW', n: 'Thế Giới Số (Digiworld)', e: 'HOSE', ind: 'Phân phối ICT & Tiêu dùng' },
  { s: 'PET', n: 'Dịch vụ Tổng hợp Dầu khí (Petrosetco)', e: 'HOSE', ind: 'Phân phối & Dịch vụ' },

  // HÓA CHẤT, PHÂN BÓN & CAO SU
  { s: 'DGC', n: 'Hóa chất Đức Giang', e: 'HOSE', ind: 'Hóa chất phốt pho vàng' },
  { s: 'DPM', n: 'Tổng Công ty Phân bón & Hóa chất Dầu khí (Đạm Phú Mỹ)', e: 'HOSE', ind: 'Phân bón & Hóa chất' },
  { s: 'DCM', n: 'Phân bón Dầu khí Cà Mau (Đạm Cà Mau)', e: 'HOSE', ind: 'Phân bón & Hóa chất' },
  { s: 'BFC', n: 'Phân bón Bình Điền (Đầu Trâu)', e: 'HOSE', ind: 'Phân bón NPK' },
  { s: 'CSV', n: 'Hóa chất Cơ bản Miền Nam', e: 'HOSE', ind: 'Hóa chất xút - clo' },
  { s: 'LAS', n: 'Supe Phốt phát và Hóa chất Lâm Thao', e: 'HNX', ind: 'Phân bón' },
  { s: 'GVR', n: 'Tập đoàn Công nghiệp Cao su Việt Nam', e: 'HOSE', ind: 'Cao su & KCN' },
  { s: 'PHR', n: 'Cao su Phước Hòa', e: 'HOSE', ind: 'Cao su & KCN' },
  { s: 'DPR', n: 'Cao su Đồng Phú', e: 'HOSE', ind: 'Cao su' },
  { s: 'DRC', n: 'Cao su Đà Nẵng', e: 'HOSE', ind: 'Săm lốp' },
  { s: 'CSM', n: 'Công nghiệp Cao su Miền Nam (Casumina)', e: 'HOSE', ind: 'Săm lốp' },

  // XÂY DỰNG, HẠ TẦNG & VẬT LIỆU XÂY DỰNG
  { s: 'VCG', n: 'Xuất nhập khẩu và Xây dựng Việt Nam (Vinaconex)', e: 'HOSE', ind: 'Xây dựng & Bất động sản' },
  { s: 'CTD', n: 'Xây dựng Coteccons', e: 'HOSE', ind: 'Xây dựng dân dụng & Công nghiệp' },
  { s: 'HBC', n: 'Tập đoàn Xây dựng Hòa Bình', e: 'UPCOM', ind: 'Xây dựng' },
  { s: 'HHV', n: 'Đầu tư Hạ tầng Giao thông Đèo Cả', e: 'HOSE', ind: 'Hạ tầng giao thông & BOT' },
  { s: 'C4G', n: 'Tập đoàn CIENCO4', e: 'UPCOM', ind: 'Hạ tầng giao thông' },
  { s: 'CII', n: 'Đầu tư Hạ tầng Kỹ thuật TP.HCM', e: 'HOSE', ind: 'Hạ tầng & Cầu đường' },
  { s: 'FCN', n: 'Công ty Cổ phần FECON', e: 'HOSE', ind: 'Nền móng & Công trình ngầm' },
  { s: 'PC1', n: 'Tập đoàn PC1', e: 'HOSE', ind: 'Xây lắp điện & Năng lượng' },
  { s: 'HT1', n: 'Xi măng Vicem Hà Tiên', e: 'HOSE', ind: 'Xi măng & Vật liệu' },
  { s: 'BCC', n: 'Xi măng Bỉm Sơn', e: 'HNX', ind: 'Xi măng' },
  { s: 'VGC', n: 'Tổng Công ty Viglacera', e: 'HOSE', ind: 'Vật liệu xây dựng & KCN' },
  { s: 'PTB', n: 'Phú Tài', e: 'HOSE', ind: 'Gỗ & Đá ốp lát, Ô tô' },

  // BẤT ĐỘNG SẢN & KHU CÔNG NGHIỆP
  { s: 'VHM', n: 'Vinhomes', e: 'HOSE', ind: 'Bất động sản nhà ở' },
  { s: 'VIC', n: 'Tập đoàn Vingroup', e: 'HOSE', ind: 'Đa ngành, BĐS & Công nghiệp' },
  { s: 'VRE', n: 'Vincom Retail', e: 'HOSE', ind: 'Trung tâm thương mại' },
  { s: 'KDH', n: 'Đầu tư và Kinh doanh Nhà Khang Điền', e: 'HOSE', ind: 'Bất động sản' },
  { s: 'NLG', n: 'Đầu tư Nam Long', e: 'HOSE', ind: 'Bất động sản đô thị' },
  { s: 'DXG', n: 'Tập đoàn Đất Xanh', e: 'HOSE', ind: 'Bất động sản & Dịch vụ BĐS' },
  { s: 'PDR', n: 'Bất động sản Phát Đạt', e: 'HOSE', ind: 'Bất động sản' },
  { s: 'DIG', n: 'Tổng Công ty Cổ phần Đầu tư Phát triển Xây dựng (DIC Corp)', e: 'HOSE', ind: 'Bất động sản & Đô thị' },
  { s: 'CEO', n: 'Tập đoàn C.E.O', e: 'HNX', ind: 'Bất động sản nghỉ dưỡng' },
  { s: 'NVL', n: 'Tập đoàn Đầu tư Địa ốc No Va (Novaland)', e: 'HOSE', ind: 'Bất động sản' },
  { s: 'KBC', n: 'Tổng Công ty Phát triển Đô thị Kinh Bắc', e: 'HOSE', ind: 'Bất động sản KCN' },
  { s: 'IDC', n: 'Tổng Công ty IDICO', e: 'HNX', ind: 'Bất động sản KCN & Năng lượng' },
  { s: 'BCM', n: 'Tổng Công ty Đầu tư và Phát triển Công nghiệp (Becamex IDC)', e: 'HOSE', ind: 'Bất động sản KCN' },
  { s: 'SZC', n: 'Sonadezi Châu Đức', e: 'HOSE', ind: 'Bất động sản KCN' },
  { s: 'TCH', n: 'Đầu tư Dịch vụ Tài chính Hoàng Huy', e: 'HOSE', ind: 'Bất động sản & Xe đầu kéo' },
  { s: 'HDC', n: 'Phát triển Nhà Bà Rịa - Vũng Tàu (Hodeco)', e: 'HOSE', ind: 'Bất động sản' },
  { s: 'NTL', n: 'Phát triển Đô thị Từ Liêm (Lideco)', e: 'HOSE', ind: 'Bất động sản' },

  // DẦU KHÍ & NĂNG LƯỢNG
  { s: 'GAS', n: 'Tổng Công ty Khí Việt Nam (PV GAS)', e: 'HOSE', ind: 'Khí tự nhiên & Khí hóa lỏng' },
  { s: 'PLX', n: 'Tập đoàn Xăng dầu Việt Nam (Petrolimex)', e: 'HOSE', ind: 'Phân phối xăng dầu' },
  { s: 'PVD', n: 'Khoan và Dịch vụ Khoan Dầu khí (PV Drilling)', e: 'HOSE', ind: 'Dịch vụ khoan dầu khí' },
  { s: 'PVS', n: 'Dịch vụ Kỹ thuật Dầu khí Việt Nam (PTSC)', e: 'HNX', ind: 'Dịch vụ dầu khí & Điện gió ngoài khơi' },
  { s: 'BSR', n: 'Lọc hóa dầu Bình Sơn (Nhà máy Lọc dầu Dung Quất)', e: 'UPCOM', ind: 'Lọc hóa dầu' },
  { s: 'OIL', n: 'Tổng Công ty Dầu Việt Nam (PVOIL)', e: 'UPCOM', ind: 'Phân phối xăng dầu' },
  { s: 'POW', n: 'Tổng Công ty Điện lực Dầu khí Việt Nam (PV Power)', e: 'HOSE', ind: 'Sản xuất điện năng' },
  { s: 'REE', n: 'Cơ Điện Lạnh (REE Corp)', e: 'HOSE', ind: 'Năng lượng, Nước sạch & Cơ điện lạnh' },
  { s: 'HDG', n: 'Tập đoàn Hà Đô', e: 'HOSE', ind: 'Năng lượng tái tạo & Bất động sản' },
  { s: 'GEG', n: 'Điện Gia Lai', e: 'HOSE', ind: 'Năng lượng tái tạo' },
  { s: 'NT2', n: 'Điện lực Dầu khí Nhơn Trạch 2', e: 'HOSE', ind: 'Nhiệt điện khí' },
  { s: 'PPC', n: 'Nhiệt điện Phả Lại', e: 'HOSE', ind: 'Nhiệt điện than' },

  // VẬN TẢI, CẢNG BIỂN & LOGISTICS
  { s: 'GMD', n: 'Gemadept', e: 'HOSE', ind: 'Khai thác Cảng biển & Logistics' },
  { s: 'HAH', n: 'Vận tải và Xếp dỡ Hải An', e: 'HOSE', ind: 'Vận tải container & Cảng biển' },
  { s: 'VSC', n: 'Container Việt Nam (Viconship)', e: 'HOSE', ind: 'Cảng biển Hải Phòng' },
  { s: 'PVT', n: 'Vận tải Dầu khí (PVTrans)', e: 'HOSE', ind: 'Vận tải tàu dầu khí' },
  { s: 'VOS', n: 'Vận tải biển Việt Nam (Vosco)', e: 'HOSE', ind: 'Vận tải biển hàng rời' },
  { s: 'TMS', n: 'Transimex', e: 'HOSE', ind: 'Kho vận & Logistics' },
  { s: 'SGP', n: 'Cảng Sài Gòn', e: 'UPCOM', ind: 'Cảng biển' },
  { s: 'ACV', n: 'Tổng Công ty Cảng Hàng không Việt Nam', e: 'UPCOM', ind: 'Hạ tầng sân bay' },
  { s: 'VJC', n: 'Hàng không Vietjet', e: 'HOSE', ind: 'Vận tải hàng không' },
  { s: 'HVN', n: 'Vietnam Airlines', e: 'HOSE', ind: 'Hàng không quốc gia' },

  // THỦY SẢN & XUẤT KHẨU
  { s: 'VHC', n: 'Vĩnh Hoàn', e: 'HOSE', ind: 'Chế biến cá tra xuất khẩu' },
  { s: 'ANV', n: 'Nam Việt (Navico)', e: 'HOSE', ind: 'Chế biến cá tra' },
  { s: 'FMC', n: 'Thực phẩm Sao Ta', e: 'HOSE', ind: 'Chế biến tôm xuất khẩu' },
  { s: 'IDI', n: 'Đầu tư và Phát triển Đa quốc gia I.D.I', e: 'HOSE', ind: 'Thủy sản cá tra' },
  { s: 'MPC', n: 'Thủy sản Minh Phú', e: 'UPCOM', ind: 'Vua tôm xuất khẩu' },

  // DỆT MAY & DA GIÀY
  { s: 'TNG', n: 'Đầu tư và Thương mại TNG', e: 'HNX', ind: 'May mặc xuất khẩu' },
  { s: 'MSH', n: 'May Sông Hồng', e: 'HOSE', ind: 'May mặc xuất khẩu' },
  { s: 'TCM', n: 'Dệt may - Đầu tư - Thương mại Thành Công', e: 'HOSE', ind: 'Dệt may trọn gói' },
  { s: 'VGT', n: 'Tập đoàn Dệt May Việt Nam (Vinatex)', e: 'UPCOM', ind: 'Dệt may' },
  { s: 'STK', n: 'Sợi Thế Kỷ', e: 'HOSE', ind: 'Sợi tái chế & Sợi polyester' },

  // DƯỢC PHẨM & Y TẾ
  { s: 'DHG', n: 'Dược Hậu Giang', e: 'HOSE', ind: 'Sản xuất Dược phẩm' },
  { s: 'IMP', n: 'Dược phẩm Imexpharm', e: 'HOSE', ind: 'Sản xuất thuốc chuẩn EU-GMP' },
  { s: 'TRA', n: 'Traphaco', e: 'HOSE', ind: 'Đông dược & Dược phẩm' },
  { s: 'DBD', n: 'Dược - Trang thiết bị Y tế Bình Định (Bidiphar)', e: 'HOSE', ind: 'Thuốc ung thư & Dược phẩm' },
  { s: 'DMC', n: 'Xuất nhập khẩu Y tế Domesco', e: 'HOSE', ind: 'Dược phẩm' },
  { s: 'DVN', n: 'Tổng Công ty Dược Việt Nam (Vinapharm)', e: 'UPCOM', ind: 'Dược phẩm' }
];

// Helper để loại bỏ dấu tiếng Việt phục vụ tìm kiếm mượt mà
function removeVietnameseAccents(str) {
  if (!str) return '';
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase();
}

/**
 * Tìm kiếm công ty theo từ khóa (Mã cổ phiếu hoặc tên công ty)
 */
function searchStockDirectory(keyword) {
  if (!keyword || typeof keyword !== 'string') return [];
  const cleanKw = keyword.trim();
  if (cleanKw.length === 0) return [];
  
  const kwUpper = cleanKw.toUpperCase();
  const kwNoAccent = removeVietnameseAccents(cleanKw);

  return STOCK_DIRECTORY.filter(item => {
    // 1. Khớp chính xác hoặc chứa mã cổ phiếu
    if (item.s.includes(kwUpper)) return true;
    // 2. Khớp tên có dấu
    if (item.n.toLowerCase().includes(cleanKw.toLowerCase())) return true;
    // 3. Khớp tên không dấu
    const nameNoAccent = removeVietnameseAccents(item.n);
    return nameNoAccent.includes(kwNoAccent);
  }).slice(0, 10); // Lấy tối đa 10 kết quả phù hợp nhất
}

/**
 * HỆ THỐNG TỰ ĐỘNG PHÂN LOẠI DOANH NGHIỆP VÀO MÔ HÌNH ALTMAN Z VÀ Z''
 * Chuẩn lý thuyết học thuật Edward Altman:
 * - Mô hình Z (1968): Doanh nghiệp SẢN XUẤT niêm yết HOSE/HNX (5 biến số X1-X5, Vốn hóa thị trường).
 * - Mô hình Z'' (1995/2000): Doanh nghiệp PHI SẢN XUẤT (Bán lẻ, Dịch vụ, BĐS, Xây dựng, Công nghệ...) hoặc CHƯA NIÊM YẾT / UPCoM (4 biến số X1-X4, Vốn CSH sổ sách).
 * - Cảnh báo: Ngân hàng / Bảo hiểm / Chứng khoán không áp dụng mô hình Altman.
 */
function classifyEnterprise(input) {
  if (!input) return null;
  let symbol = '', exchange = '', industry = '', companyName = '';
  
  if (typeof input === 'string') {
    symbol = input.trim().toUpperCase();
    const dirItem = STOCK_DIRECTORY.find(x => x.s === symbol);
    if (dirItem) {
      exchange = dirItem.e || '';
      industry = dirItem.ind || '';
      companyName = dirItem.n || '';
    }
  } else if (typeof input === 'object') {
    symbol = (input.symbol || input.s || '').trim().toUpperCase();
    exchange = (input.exchange || input.e || '').trim().toUpperCase();
    industry = (input.industry || input.ind || input.i || '').trim();
    companyName = (input.companyName || input.name || input.n || '').trim();

    if (symbol && (!industry || !exchange)) {
      const dirItem = STOCK_DIRECTORY.find(x => x.s === symbol);
      if (dirItem) {
        if (!exchange) exchange = dirItem.e || '';
        if (!industry) industry = dirItem.ind || '';
        if (!companyName) companyName = dirItem.n || '';
      }
    }
  }

  const combined = `${symbol} ${exchange} ${industry} ${companyName}`.toLowerCase();
  const combinedNoAccent = removeVietnameseAccents(combined);
  const indNoAccent = removeVietnameseAccents(industry).toLowerCase();
  const nameNoAccent = removeVietnameseAccents(companyName).toLowerCase();

  // 1. Nhận diện nhóm Ngân hàng, Chứng khoán, Bảo hiểm, Định chế tài chính
  const BANK_TICKERS = [
    'VCB', 'BID', 'CTG', 'TCB', 'MBB', 'ACB', 'VPB', 'STB', 'HDB', 'SHB', 'TPB', 'LPB', 'MSB', 'OCB', 'VIB', 'SSB', 'EIB', 'BAB', 'NAB', 'BVB', 'KLB', 'PGB', 'SGB', 'ABB', 'VAB',
    'SSI', 'VND', 'HCM', 'VCI', 'SHS', 'MBS', 'CTS', 'BSI', 'FTS', 'AGR', 'VIX', 'ORS', 'TVS', 'APG', 'WSS', 'IVS',
    'BVH', 'BMI', 'PVI', 'MIG', 'BIC', 'PTI', 'PRE', 'VNR'
  ];

  const isBankTicker = BANK_TICKERS.includes(symbol);
  const isBankKeyword = (
    /ngan hang|chung khoan|bao hiem|tin dung|quan ly quy|bank|securities|insurance/.test(indNoAccent) ||
    /ngan hang tmcp|ngan hang thuong mai|ctcp chung khoan|cong ty chung khoan|tong cong ty bao hiem|tap doan bao viet/.test(nameNoAccent)
  );

  if (isBankTicker || isBankKeyword) {
    return {
      model: 'INAPPLICABLE',
      modelName: 'Không Khuyến Nghị Áp Dụng',
      category: 'financial',
      categoryLabel: 'Ngân hàng / Bảo hiểm / Tài chính',
      isManufacturing: false,
      isListed: exchange === 'HOSE' || exchange === 'HNX',
      isFinancial: true,
      reason: 'Cấu trúc tài chính ngân hàng/tổ chức tài chính mang tính đặc thù (tiền gửi huy động là nợ chi phối, không có tài sản/vốn lưu động truyền thống). Chuẩn Altman Z/Z\'\' không áp dụng được, nên dùng mô hình CAMELS hoặc tỷ lệ an toàn vốn CAR (Basel II/III).',
      badgeClass: 'bg-amber-950 text-amber-300 border-amber-500/50',
      badgeTag: '⚠️ Ngân Hàng / TC'
    };
  }

  // 2. Nhận diện doanh nghiệp UPCoM hoặc Chưa niêm yết
  const isUnlisted = exchange.includes('UPCOM') || exchange.includes('OTC') || exchange.includes('CHUA') || exchange.includes('UNLISTED');
  if (isUnlisted) {
    return {
      model: 'ZdoublePrime',
      modelName: "Mô hình Z'' (1995)",
      category: 'unlisted_upcom',
      categoryLabel: 'Chưa niêm yết / Sàn UPCoM',
      isManufacturing: false,
      isListed: false,
      isFinancial: false,
      formula: "Z'' = 6.56·X₁ + 3.26·X₂ + 6.72·X₃ + 1.05·X₄",
      reason: 'Doanh nghiệp đăng ký giao dịch trên sàn UPCoM hoặc chưa niêm yết tập trung. Theo học thuyết Edward Altman (1995/2000), áp dụng mô hình Z\'\' 4 biến số (X₁ - X₄) sử dụng Giá trị sổ sách Vốn chủ sở hữu thay cho Vốn hóa thị trường.',
      badgeClass: 'bg-purple-950 text-purple-300 border-purple-500/50',
      badgeTag: "Z'' (1995)"
    };
  }

  // 3. Doanh nghiệp niêm yết HOSE / HNX: Phân biệt Phi sản xuất vs Sản xuất
  const nonMfgKeywords = [
    'bat dong san', 'bds', 'dia oc', 'nha o', 'do thi', 'khu cong nghiep', 'kcn', 'trung tam thuong mai',
    'ban le', 'thuong mai', 'phan phoi', 'ict', 'cong nghe', 'phan mem', 'vien thong', 'tin hoc',
    'logistics', 'cang bien', 'kho van', 'van tai', 'hang khong', 'tau bien', 'container', 'hang hai',
    'xay dung', 'thi cong', 'ha tang', 'bot', 'cau duong', 'nen mong', 'xay lap',
    'dich vu', 'du lich', 'khach san', 'nha hang', 'giai tri', 'truyen thong', 'tu van',
    'phan phoi xang dau', 'dich vu dau khi', 'khoan dau', 'ky thuat dau khi'
  ];

  const isNonMfg = nonMfgKeywords.some(kw => combinedNoAccent.includes(kw));
  if (isNonMfg) {
    return {
      model: 'ZdoublePrime',
      modelName: "Mô hình Z'' (1995)",
      category: 'non_manufacturing',
      categoryLabel: 'Phi sản xuất / Dịch vụ / BĐS',
      isManufacturing: false,
      isListed: true,
      isFinancial: false,
      formula: "Z'' = 6.56·X₁ + 3.26·X₂ + 6.72·X₃ + 1.05·X₄",
      reason: 'Doanh nghiệp phi sản xuất (Bất động sản, Thương mại, Bán lẻ, Xây dựng, Dịch vụ, Công nghệ, Logistics). Theo chuẩn Edward Altman, loại bỏ biến số X₅ (Vòng quay tài sản) để phản ánh trung thực nguy cơ kiệt quệ tài chính.',
      badgeClass: 'bg-purple-950 text-purple-300 border-purple-500/50',
      badgeTag: "Z'' (1995)"
    };
  }

  // 4. Mặc định cho doanh nghiệp niêm yết: Sản xuất công nghiệp / Chế biến / Chế tạo
  return {
    model: 'Z',
    modelName: 'Mô hình Z (1968)',
    category: 'manufacturing_listed',
    categoryLabel: 'Sản xuất niêm yết',
    isManufacturing: true,
    isListed: true,
    isFinancial: false,
    formula: 'Z = 1.2·X₁ + 1.4·X₂ + 3.3·X₃ + 0.6·X₄ + 0.999·X₅',
    reason: 'Doanh nghiệp sản xuất công nghiệp, chế biến, chế tạo đã niêm yết trên HOSE/HNX. Áp dụng chuẩn Altman 1968 với đầy đủ 5 biến số X₁ - X₅ và Vốn hóa thị trường.',
    badgeClass: 'bg-blue-950 text-blue-300 border-blue-500/50',
    badgeTag: 'Z (1968)'
  };
}

// Gán thông tin phân loại tự động vào từng mục trong danh mục
STOCK_DIRECTORY.forEach(item => {
  const cls = classifyEnterprise(item);
  item.model = cls.model;
  item.category = cls.category;
  item.categoryLabel = cls.categoryLabel;
  item.badgeTag = cls.badgeTag;
  item.reason = cls.reason;
});

const PRELOADED_STOCKS = {
  "HPG": {
    "success": true,
    "symbol": "HPG",
    "companyName": "Công ty Cổ phần Tập đoàn Hòa Phát",
    "exchange": "HOSE",
    "isUnlisted": false,
    "currentPrice": 21300,
    "years": [
      2015,
      2016,
      2017,
      2018,
      2019,
      2020,
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2015": 12385,
        "2016": 18183,
        "2017": 33068,
        "2018": 25309,
        "2019": 30437,
        "2020": 56747,
        "2021": 94155,
        "2022": 80515,
        "2023": 82716,
        "2024": 86674,
        "2025": 103659
      },
      "nnh": {
        "2015": 6944,
        "2016": 11985,
        "2017": 18520,
        "2018": 22636,
        "2019": 26984,
        "2020": 51975,
        "2021": 73459,
        "2022": 62385,
        "2023": 71513,
        "2024": 75225,
        "2025": 94186
      },
      "tts": {
        "2015": 25552,
        "2016": 33227,
        "2017": 53022,
        "2018": 78223,
        "2019": 101776,
        "2020": 131511,
        "2021": 178236,
        "2022": 170336,
        "2023": 187783,
        "2024": 224490,
        "2025": 257899
      },
      "lncpp": {
        "2015": 6550,
        "2016": 9486,
        "2017": 13397,
        "2018": 15126,
        "2019": 15877,
        "2020": 21792,
        "2021": 41763,
        "2022": 33834,
        "2023": 40593,
        "2024": 49599,
        "2025": 51038
      },
      "lntt": {
        "2015": 3971,
        "2016": 7702,
        "2017": 9288,
        "2018": 10071,
        "2019": 9097,
        "2020": 15357,
        "2021": 37057,
        "2022": 9923,
        "2023": 7793,
        "2024": 13694,
        "2025": 18041
      },
      "cplv": {
        "2015": 279,
        "2016": 280,
        "2017": 480,
        "2018": 540,
        "2019": 937,
        "2020": 2192,
        "2021": 2526,
        "2022": 3084,
        "2023": 3585,
        "2024": 2287,
        "2025": 3115
      },
      "vhtt": {
        "2015": 16768,
        "2016": 19850,
        "2017": 32398,
        "2018": 40623,
        "2019": 47787,
        "2020": 59220,
        "2021": 90781,
        "2022": 96113,
        "2023": 102836,
        "2024": 114647,
        "2025": 131220
      },
      "tnpt": {
        "2015": 8784,
        "2016": 13376,
        "2017": 20625,
        "2018": 37600,
        "2019": 53989,
        "2020": 72292,
        "2021": 87456,
        "2022": 74223,
        "2023": 84946,
        "2024": 109842,
        "2025": 126679
      },
      "dtt": {
        "2015": 27453,
        "2016": 33283,
        "2017": 46162,
        "2018": 55836,
        "2019": 63658,
        "2020": 90119,
        "2021": 149680,
        "2022": 141409,
        "2023": 118953,
        "2024": 138855,
        "2025": 156116
      }
    }
  },
  "VNM": {
    "success": true,
    "symbol": "VNM",
    "companyName": "Công ty Cổ phần Sữa Việt Nam",
    "exchange": "HOSE",
    "isUnlisted": false,
    "currentPrice": 59900,
    "years": [
      2015,
      2016,
      2017,
      2018,
      2019,
      2020,
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2015": 16732,
        "2016": 18674,
        "2017": 20307,
        "2018": 20560,
        "2019": 24722,
        "2020": 29666,
        "2021": 36110,
        "2022": 31560,
        "2023": 35936,
        "2024": 37554,
        "2025": 36261
      },
      "nnh": {
        "2015": 6004,
        "2016": 6457,
        "2017": 10196,
        "2018": 10640,
        "2019": 14443,
        "2020": 14213,
        "2021": 17068,
        "2022": 15308,
        "2023": 17139,
        "2024": 18460,
        "2025": 18520
      },
      "tts": {
        "2015": 27478,
        "2016": 29379,
        "2017": 34667,
        "2018": 37366,
        "2019": 44700,
        "2020": 48432,
        "2021": 53332,
        "2022": 48483,
        "2023": 52673,
        "2024": 55049,
        "2025": 53312
      },
      "lncpp": {
        "2015": 5392,
        "2016": 5592,
        "2017": 5737,
        "2018": 7155,
        "2019": 7875,
        "2020": 6910,
        "2021": 7594,
        "2022": 3353,
        "2023": 3926,
        "2024": 3471,
        "2025": 0
      },
      "lntt": {
        "2015": 9367,
        "2016": 11238,
        "2017": 12229,
        "2018": 12052,
        "2019": 12796,
        "2020": 13519,
        "2021": 12922,
        "2022": 10496,
        "2023": 10968,
        "2024": 11600,
        "2025": 11650
      },
      "cplv": {
        "2015": 31,
        "2016": 46,
        "2017": 29,
        "2018": 51,
        "2019": 109,
        "2020": 144,
        "2021": 89,
        "2022": 166,
        "2023": 354,
        "2024": 279,
        "2025": 326
      },
      "vhtt": {
        "2015": 20924,
        "2016": 22406,
        "2017": 23873,
        "2018": 26271,
        "2019": 29731,
        "2020": 33647,
        "2021": 35850,
        "2022": 32817,
        "2023": 35026,
        "2024": 36174,
        "2025": 30685
      },
      "tnpt": {
        "2015": 6554,
        "2016": 6973,
        "2017": 10794,
        "2018": 11095,
        "2019": 14969,
        "2020": 14785,
        "2021": 17482,
        "2022": 15666,
        "2023": 17648,
        "2024": 18875,
        "2025": 18829
      },
      "dtt": {
        "2015": 40080,
        "2016": 46794,
        "2017": 51041,
        "2018": 52562,
        "2019": 56318,
        "2020": 59636,
        "2021": 60919,
        "2022": 59956,
        "2023": 60369,
        "2024": 61783,
        "2025": 63646
      }
    }
  },
  "FPT": {
    "success": true,
    "symbol": "FPT",
    "companyName": "Công ty Cổ phần FPT",
    "exchange": "HOSE",
    "isUnlisted": false,
    "currentPrice": 72700,
    "years": [
      2015,
      2016,
      2017,
      2018,
      2019,
      2020,
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2015": 18959,
        "2016": 21909,
        "2017": 16060,
        "2018": 18406,
        "2019": 18979,
        "2020": 25612,
        "2021": 35118,
        "2022": 30938,
        "2023": 36706,
        "2024": 45536,
        "2025": 58137
      },
      "nnh": {
        "2015": 14968,
        "2016": 17430,
        "2017": 11100,
        "2018": 14451,
        "2019": 16102,
        "2020": 22365,
        "2021": 29761,
        "2022": 24521,
        "2023": 29652,
        "2024": 34836,
        "2025": 41525
      },
      "tts": {
        "2015": 26046,
        "2016": 29833,
        "2017": 25000,
        "2018": 29757,
        "2019": 33394,
        "2020": 41734,
        "2021": 53698,
        "2022": 51650,
        "2023": 60283,
        "2024": 72000,
        "2025": 88142
      },
      "lncpp": {
        "2015": 4395,
        "2016": 4614,
        "2017": 5511,
        "2018": 5293,
        "2019": 5961,
        "2020": 6391,
        "2021": 7000,
        "2022": 7712,
        "2023": 8674,
        "2024": 11031,
        "2025": 14302
      },
      "lntt": {
        "2015": 2851,
        "2016": 3014,
        "2017": 4255,
        "2018": 3858,
        "2019": 4665,
        "2020": 5263,
        "2021": 6337,
        "2022": 7662,
        "2023": 9203,
        "2024": 11070,
        "2025": 13044
      },
      "cplv": {
        "2015": 263,
        "2016": 374,
        "2017": 369,
        "2018": 238,
        "2019": 359,
        "2020": 385,
        "2021": 484,
        "2022": 646,
        "2023": 833,
        "2024": 552,
        "2025": 810
      },
      "vhtt": {
        "2015": 10182,
        "2016": 11448,
        "2017": 13238,
        "2018": 14775,
        "2019": 16799,
        "2020": 18606,
        "2021": 21418,
        "2022": 25356,
        "2023": 29933,
        "2024": 35728,
        "2025": 43748
      },
      "tnpt": {
        "2015": 15863,
        "2016": 18385,
        "2017": 11761,
        "2018": 14982,
        "2019": 16595,
        "2020": 23129,
        "2021": 32280,
        "2022": 26294,
        "2023": 30350,
        "2024": 36272,
        "2025": 44394
      },
      "dtt": {
        "2015": 37960,
        "2016": 39531,
        "2017": 42659,
        "2018": 23214,
        "2019": 27717,
        "2020": 29830,
        "2021": 35657,
        "2022": 44010,
        "2023": 52618,
        "2024": 62849,
        "2025": 70113
      }
    }
  },
  "MWG": {
    "success": true,
    "symbol": "MWG",
    "companyName": "Công ty Cổ phần Đầu tư Thế Giới Di Động",
    "exchange": "HOSE",
    "isUnlisted": false,
    "currentPrice": 71300,
    "years": [
      2015,
      2016,
      2017,
      2018,
      2019,
      2020,
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2015": 8432,
        "2016": 12288,
        "2017": 18863,
        "2018": 23372,
        "2019": 35012,
        "2020": 37317,
        "2021": 51955,
        "2022": 44578,
        "2023": 51950,
        "2024": 65836,
        "2025": 77202
      },
      "nnh": {
        "2015": 4460,
        "2016": 11013,
        "2017": 15714,
        "2018": 17929,
        "2019": 28442,
        "2020": 29423,
        "2021": 42593,
        "2022": 26000,
        "2023": 30765,
        "2024": 42316,
        "2025": 50770
      },
      "tts": {
        "2015": 9252,
        "2016": 14854,
        "2017": 22823,
        "2018": 28123,
        "2019": 41708,
        "2020": 46031,
        "2021": 62971,
        "2022": 55834,
        "2023": 60111,
        "2024": 70438,
        "2025": 83946
      },
      "lncpp": {
        "2015": 1027,
        "2016": 2262,
        "2017": 2699,
        "2018": 3990,
        "2019": 7150,
        "2020": 10390,
        "2021": 12675,
        "2022": 8724,
        "2023": 8160,
        "2024": 12582,
        "2025": 18068
      },
      "lntt": {
        "2015": 1365,
        "2016": 2006,
        "2017": 2809,
        "2018": 3786,
        "2019": 5053,
        "2020": 5410,
        "2021": 6472,
        "2022": 6056,
        "2023": 690,
        "2024": 4826,
        "2025": 8633
      },
      "cplv": {
        "2015": 24,
        "2016": 120,
        "2017": 233,
        "2018": 436,
        "2019": 568,
        "2020": 594,
        "2021": -674,
        "2022": 1362,
        "2023": 1448,
        "2024": 1137,
        "2025": 1471
      },
      "vhtt": {
        "2015": 2342,
        "2016": 3841,
        "2017": 5909,
        "2018": 8983,
        "2019": 12144,
        "2020": 15482,
        "2021": 20378,
        "2022": 23933,
        "2023": 23360,
        "2024": 28122,
        "2025": 33176
      },
      "tnpt": {
        "2015": 6910,
        "2016": 11013,
        "2017": 16914,
        "2018": 19139,
        "2019": 29565,
        "2020": 30549,
        "2021": 42593,
        "2022": 31902,
        "2023": 36752,
        "2024": 42316,
        "2025": 50770
      },
      "dtt": {
        "2015": 25297,
        "2016": 44613,
        "2017": 66340,
        "2018": 86516,
        "2019": 102174,
        "2020": 108546,
        "2021": 122958,
        "2022": 133405,
        "2023": 118280,
        "2024": 134341,
        "2025": 155928
      }
    }
  },
  "DGC": {
    "success": true,
    "symbol": "DGC",
    "companyName": "Công ty Cổ phần Tập đoàn Hóa chất Đức Giang",
    "exchange": "HOSE",
    "isUnlisted": false,
    "currentPrice": 38750,
    "years": [
      2015,
      2016,
      2017,
      2018,
      2019,
      2020,
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2015": 1385,
        "2016": 839,
        "2017": 371,
        "2018": 2136,
        "2019": 2263,
        "2020": 3433,
        "2021": 5997,
        "2022": 10985,
        "2023": 12467,
        "2024": 12701,
        "2025": 16127
      },
      "nnh": {
        "2015": 542,
        "2016": 641,
        "2017": 220,
        "2018": 1565,
        "2019": 1270,
        "2020": 1809,
        "2021": 2188,
        "2022": 2571,
        "2023": 3493,
        "2024": 2053,
        "2025": 4103
      },
      "tts": {
        "2015": 2216,
        "2016": 2005,
        "2017": 886,
        "2018": 4730,
        "2019": 4722,
        "2020": 5876,
        "2021": 8520,
        "2022": 13405,
        "2023": 15536,
        "2024": 15821,
        "2025": 19538
      },
      "lncpp": {
        "2015": 236,
        "2016": 296,
        "2017": 60,
        "2018": 914,
        "2019": 836,
        "2020": 1140,
        "2021": 2947,
        "2022": 5084,
        "2023": 5989,
        "2024": 7205,
        "2025": 8490
      },
      "lntt": {
        "2015": 350,
        "2016": 342,
        "2017": 140,
        "2018": 907,
        "2019": 599,
        "2020": 1001,
        "2021": 2637,
        "2022": 6376,
        "2023": 3485,
        "2024": 3400,
        "2025": 3567
      },
      "cplv": {
        "2015": 32,
        "2016": 6,
        "2017": 0,
        "2018": 26,
        "2019": 28,
        "2020": 20,
        "2021": 14,
        "2022": 18,
        "2023": 32,
        "2024": 22,
        "2025": 41
      },
      "vhtt": {
        "2015": 1288,
        "2016": 1364,
        "2017": 666,
        "2018": 3165,
        "2019": 3452,
        "2020": 4067,
        "2021": 6332,
        "2022": 10834,
        "2023": 12027,
        "2024": 13701,
        "2025": 15371
      },
      "tnpt": {
        "2015": 928,
        "2016": 641,
        "2017": 220,
        "2018": 1565,
        "2019": 1270,
        "2020": 1809,
        "2021": 2188,
        "2022": 2572,
        "2023": 3509,
        "2024": 2120,
        "2025": 4167
      },
      "dtt": {
        "2015": 2238,
        "2016": 2622,
        "2017": 626,
        "2018": 6090,
        "2019": 5091,
        "2020": 6236,
        "2021": 9550,
        "2022": 14444,
        "2023": 9748,
        "2024": 9865,
        "2025": 11262
      }
    }
  },
  "MSN": {
    "success": true,
    "symbol": "MSN",
    "companyName": "Công ty Cổ phần Tập đoàn MaSan",
    "exchange": "HOSE",
    "isUnlisted": false,
    "currentPrice": 66500,
    "years": [
      2015,
      2016,
      2017,
      2018,
      2019,
      2020,
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2015": 24198,
        "2016": 22876,
        "2017": 15145,
        "2018": 12500,
        "2019": 24262,
        "2020": 29761,
        "2021": 43630,
        "2022": 47675,
        "2023": 43763,
        "2024": 53570,
        "2025": 36234
      },
      "nnh": {
        "2015": 14820,
        "2016": 17898,
        "2017": 15533,
        "2018": 15796,
        "2019": 30492,
        "2020": 38875,
        "2021": 34548,
        "2022": 65321,
        "2023": 50423,
        "2024": 58712,
        "2025": 40257
      },
      "tts": {
        "2015": 71902,
        "2016": 73039,
        "2017": 63529,
        "2018": 64579,
        "2019": 97297,
        "2020": 115737,
        "2021": 126093,
        "2022": 141343,
        "2023": 147383,
        "2024": 147585,
        "2025": 128963
      },
      "lncpp": {
        "2015": 10753,
        "2016": 7016,
        "2017": 12350,
        "2018": 16193,
        "2019": 28559,
        "2020": 2182,
        "2021": 18796,
        "2022": 11382,
        "2023": 11798,
        "2024": 9327,
        "2025": 14356
      },
      "lntt": {
        "2015": 2525,
        "2016": 4446,
        "2017": 4139,
        "2018": 6244,
        "2019": 7105,
        "2020": 2325,
        "2021": 11489,
        "2022": 5147,
        "2023": 2563,
        "2024": 6025,
        "2025": 7888
      },
      "cplv": {
        "2015": 2250,
        "2016": 3112,
        "2017": 3435,
        "2018": 2668,
        "2019": 1866,
        "2020": 3770,
        "2021": 4669,
        "2022": 4848,
        "2023": 6946,
        "2024": 6405,
        "2025": 5418
      },
      "vhtt": {
        "2015": 33831,
        "2016": 20313,
        "2017": 20225,
        "2018": 34080,
        "2019": 51888,
        "2020": 25030,
        "2021": 42337,
        "2022": 36637,
        "2023": 38237,
        "2024": 40752,
        "2025": 45079
      },
      "tnpt": {
        "2015": 38071,
        "2016": 52726,
        "2017": 43303,
        "2018": 30499,
        "2019": 45409,
        "2020": 90706,
        "2021": 83757,
        "2022": 104706,
        "2023": 109146,
        "2024": 106832,
        "2025": 83885
      },
      "dtt": {
        "2015": 30628,
        "2016": 43297,
        "2017": 37621,
        "2018": 38188,
        "2019": 37354,
        "2020": 77218,
        "2021": 88629,
        "2022": 76189,
        "2023": 78252,
        "2024": 83178,
        "2025": 81621
      }
    }
  },
  "VHM": {
    "success": true,
    "symbol": "VHM",
    "companyName": "Công ty Cổ phần Vinhomes",
    "exchange": "HOSE",
    "isUnlisted": false,
    "currentPrice": 72000,
    "years": [
      2015,
      2016,
      2017,
      2018,
      2019,
      2020,
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2015": 14200,
        "2016": 16492,
        "2017": 44421,
        "2018": 91203,
        "2019": 139555,
        "2020": 102312,
        "2021": 94437,
        "2022": 196535,
        "2023": 242341,
        "2024": 285479,
        "2025": 496890
      },
      "nnh": {
        "2015": 9800,
        "2016": 26828,
        "2017": 34223,
        "2018": 42872,
        "2019": 121557,
        "2020": 103385,
        "2021": 75401,
        "2022": 187762,
        "2023": 211073,
        "2024": 278532,
        "2025": 343090
      },
      "tts": {
        "2015": 31500,
        "2016": 37521,
        "2017": 51304,
        "2018": 119689,
        "2019": 197241,
        "2020": 215326,
        "2021": 230516,
        "2022": 361813,
        "2023": 444631,
        "2024": 564209,
        "2025": 787857
      },
      "lncpp": {
        "2015": 2100,
        "2016": 2971,
        "2017": 5003,
        "2018": 7627,
        "2019": 26040,
        "2020": 56259,
        "2021": 79413,
        "2022": 99934,
        "2023": 133392,
        "2024": 167206,
        "2025": 202644
      },
      "lntt": {
        "2015": 2450,
        "2016": 2795,
        "2017": 2109,
        "2018": 19719,
        "2019": 29746,
        "2020": 36517,
        "2021": 48183,
        "2022": 38643,
        "2023": 43310,
        "2024": 40848,
        "2025": 52810
      },
      "cplv": {
        "2015": 620,
        "2016": 385,
        "2017": 902,
        "2018": 2383,
        "2019": 2378,
        "2020": 3002,
        "2021": 2348,
        "2022": 2076,
        "2023": 3053,
        "2024": 7589,
        "2025": 11214
      },
      "vhtt": {
        "2015": 12300,
        "2016": 9549,
        "2017": 10124,
        "2018": 48145,
        "2019": 64715,
        "2020": 89130,
        "2021": 131407,
        "2022": 148522,
        "2023": 182636,
        "2024": 220744,
        "2025": 249217
      },
      "tnpt": {
        "2015": 19200,
        "2016": 27972,
        "2017": 41180,
        "2018": 71544,
        "2019": 132526,
        "2020": 126196,
        "2021": 99109,
        "2022": 213291,
        "2023": 261994,
        "2024": 343465,
        "2025": 538641
      },
      "dtt": {
        "2015": 16800,
        "2016": 11217,
        "2017": 15297,
        "2018": 38664,
        "2019": 51627,
        "2020": 71547,
        "2021": 84986,
        "2022": 62393,
        "2023": 103557,
        "2024": 102323,
        "2025": 153271
      }
    }
  },
  "PNJ": {
    "success": true,
    "symbol": "PNJ",
    "companyName": "Công ty Cổ phần Vàng bạc Đá quý Phú Nhuận",
    "exchange": "HOSE",
    "isUnlisted": false,
    "currentPrice": 37300,
    "years": [
      2015,
      2016,
      2017,
      2018,
      2019,
      2020,
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2015": 2350,
        "2016": 3103,
        "2017": 3896,
        "2018": 5405,
        "2019": 7333,
        "2020": 7144,
        "2021": 9292,
        "2022": 11966,
        "2023": 12958,
        "2024": 15693,
        "2025": 18614
      },
      "nnh": {
        "2015": 1180,
        "2016": 2022,
        "2017": 1489,
        "2018": 2677,
        "2019": 4018,
        "2020": 3232,
        "2021": 4563,
        "2022": 4883,
        "2023": 4612,
        "2024": 5942,
        "2025": 6874
      },
      "tts": {
        "2015": 2890,
        "2016": 3588,
        "2017": 4492,
        "2018": 6438,
        "2019": 8603,
        "2020": 8483,
        "2021": 10619,
        "2022": 13337,
        "2023": 14428,
        "2024": 17208,
        "2025": 20164
      },
      "lncpp": {
        "2015": 215,
        "2016": 374,
        "2017": 772,
        "2018": 885,
        "2019": 1045,
        "2020": 1605,
        "2021": 1950,
        "2022": 2522,
        "2023": 2740,
        "2024": 3301,
        "2025": 4411
      },
      "lntt": {
        "2015": 202,
        "2016": 591,
        "2017": 907,
        "2018": 1206,
        "2019": 1507,
        "2020": 1346,
        "2021": 1279,
        "2022": 2312,
        "2023": 2489,
        "2024": 2651,
        "2025": 3548
      },
      "cplv": {
        "2015": 85,
        "2016": 73,
        "2017": 55,
        "2018": 61,
        "2019": 115,
        "2020": 154,
        "2021": 104,
        "2022": 94,
        "2023": 119,
        "2024": 47,
        "2025": 119
      },
      "vhtt": {
        "2015": 1480,
        "2016": 1500,
        "2017": 2950,
        "2018": 3745,
        "2019": 4577,
        "2020": 5242,
        "2021": 6013,
        "2022": 8444,
        "2023": 9806,
        "2024": 11255,
        "2025": 13275
      },
      "tnpt": {
        "2015": 1410,
        "2016": 2088,
        "2017": 1543,
        "2018": 2693,
        "2019": 4026,
        "2020": 3241,
        "2021": 4606,
        "2022": 4893,
        "2023": 4621,
        "2024": 5952,
        "2025": 6889
      },
      "dtt": {
        "2015": 7680,
        "2016": 8565,
        "2017": 10977,
        "2018": 14571,
        "2019": 17001,
        "2020": 17511,
        "2021": 19547,
        "2022": 33876,
        "2023": 33137,
        "2024": 37823,
        "2025": 34976
      }
    }
  },
  "DBC": {
    "success": true,
    "symbol": "DBC",
    "companyName": "Công ty Cổ phần Tập đoàn DABACO Việt Nam",
    "exchange": "HOSE",
    "isUnlisted": false,
    "currentPrice": 16000,
    "years": [
      2015,
      2016,
      2017,
      2018,
      2019,
      2020,
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2015": 2240,
        "2016": 3228,
        "2017": 3328,
        "2018": 3771,
        "2019": 4378,
        "2020": 4653,
        "2021": 5637,
        "2022": 7065,
        "2023": 7101,
        "2024": 7838,
        "2025": 9450
      },
      "nnh": {
        "2015": 1980,
        "2016": 2630,
        "2017": 3462,
        "2018": 4075,
        "2019": 4820,
        "2020": 4255,
        "2021": 5172,
        "2022": 7213,
        "2023": 7142,
        "2024": 6421,
        "2025": 6646
      },
      "tts": {
        "2015": 4120,
        "2016": 5529,
        "2017": 6989,
        "2018": 8350,
        "2019": 9592,
        "2020": 10101,
        "2021": 10863,
        "2022": 12974,
        "2023": 13012,
        "2024": 14122,
        "2025": 15977
      },
      "lncpp": {
        "2015": 320,
        "2016": 415,
        "2017": 198,
        "2018": 360,
        "2019": 348,
        "2020": 1243,
        "2021": 595,
        "2022": 8,
        "2023": 28,
        "2024": 772,
        "2025": 1510
      },
      "lntt": {
        "2015": 285,
        "2016": 523,
        "2017": 279,
        "2018": 393,
        "2019": 345,
        "2020": 1554,
        "2021": 980,
        "2022": 79,
        "2023": 98,
        "2024": 854,
        "2025": 1623
      },
      "cplv": {
        "2015": 110,
        "2016": 111,
        "2017": 0,
        "2018": -189,
        "2019": -282,
        "2020": 310,
        "2021": 182,
        "2022": 180,
        "2023": 262,
        "2024": 264,
        "2025": 261
      },
      "vhtt": {
        "2015": 1750,
        "2016": 2339,
        "2017": 2503,
        "2018": 2747,
        "2019": 3026,
        "2020": 4207,
        "2021": 4686,
        "2022": 4641,
        "2023": 4666,
        "2024": 6766,
        "2025": 8069
      },
      "tnpt": {
        "2015": 2370,
        "2016": 3190,
        "2017": 4487,
        "2018": 5603,
        "2019": 6566,
        "2020": 5894,
        "2021": 6177,
        "2022": 8333,
        "2023": 8345,
        "2024": 7355,
        "2025": 7908
      },
      "dtt": {
        "2015": 5790,
        "2016": 6256,
        "2017": 5855,
        "2018": 6674,
        "2019": 7187,
        "2020": 10022,
        "2021": 10813,
        "2022": 11558,
        "2023": 11110,
        "2024": 13574,
        "2025": 14898
      }
    }
  },
  "VCG": {
    "success": true,
    "symbol": "VCG",
    "companyName": "Tổng Công ty Cổ phần Xuất nhập khẩu và Xây dựng Việt Nam",
    "exchange": "HOSE",
    "isUnlisted": false,
    "currentPrice": 15050,
    "years": [
      2015,
      2016,
      2017,
      2018,
      2019,
      2020,
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2015": 10423,
        "2016": 12619,
        "2017": 12988,
        "2018": 12370,
        "2019": 12055,
        "2020": 13397,
        "2021": 21296,
        "2022": 19324,
        "2023": 0,
        "2024": 17689,
        "2025": 23627
      },
      "nnh": {
        "2015": 9887,
        "2016": 10680,
        "2017": 10435,
        "2018": 9055,
        "2019": 7723,
        "2020": 8992,
        "2021": 15470,
        "2022": 12763,
        "2023": 0,
        "2024": 12912,
        "2025": 16137
      },
      "tts": {
        "2015": 20730,
        "2016": 22801,
        "2017": 21629,
        "2018": 20085,
        "2019": 19318,
        "2020": 19610,
        "2021": 30969,
        "2022": 31999,
        "2023": 0,
        "2024": 29441,
        "2025": 31269
      },
      "lncpp": {
        "2015": 347,
        "2016": 505,
        "2017": 1100,
        "2018": 858,
        "2019": 948,
        "2020": 2157,
        "2021": 1838,
        "2022": 1683,
        "2023": 0,
        "2024": 1869,
        "2025": 4495
      },
      "lntt": {
        "2015": 603,
        "2016": 803,
        "2017": 1951,
        "2018": 795,
        "2019": 965,
        "2020": 2127,
        "2021": 719,
        "2022": 985,
        "2023": 0,
        "2024": 1373,
        "2025": 4878
      },
      "cplv": {
        "2015": 338,
        "2016": 282,
        "2017": 285,
        "2018": 274,
        "2019": 267,
        "2020": 255,
        "2021": 506,
        "2022": 757,
        "2023": 0,
        "2024": 434,
        "2025": 376
      },
      "vhtt": {
        "2015": 7328,
        "2016": 7455,
        "2017": 7858,
        "2018": 7999,
        "2019": 7738,
        "2020": 7163,
        "2021": 7628,
        "2022": 9931,
        "2023": 0,
        "2024": 11116,
        "2025": 12482
      },
      "tnpt": {
        "2015": 13402,
        "2016": 15346,
        "2017": 13771,
        "2018": 12086,
        "2019": 11580,
        "2020": 12447,
        "2021": 23342,
        "2022": 22069,
        "2023": 0,
        "2024": 18325,
        "2025": 18787
      },
      "dtt": {
        "2015": 8026,
        "2016": 8533,
        "2017": 10898,
        "2018": 9731,
        "2019": 9502,
        "2020": 5551,
        "2021": 5749,
        "2022": 8453,
        "2023": 0,
        "2024": 12870,
        "2025": 16071
      }
    }
  },
  "TVN": {
    "success": true,
    "symbol": "TVN",
    "companyName": "CTCP - Tong cong ty Thep Viet Nam",
    "exchange": "UPCOM",
    "isUnlisted": true,
    "currentPrice": 9200,
    "years": [
      2015,
      2016,
      2017,
      2018,
      2019,
      2020,
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2015": 4958,
        "2016": 5888,
        "2017": 5693,
        "2018": 6466,
        "2019": 8281,
        "2020": 8193,
        "2021": 13400,
        "2022": 10129,
        "2023": 10707,
        "2024": 12879,
        "2025": 15089
      },
      "nnh": {
        "2015": 6323,
        "2016": 6445,
        "2017": 5431,
        "2018": 5570,
        "2019": 9885,
        "2020": 9243,
        "2021": 13624,
        "2022": 10302,
        "2023": 10904,
        "2024": 12463,
        "2025": 14211
      },
      "tts": {
        "2015": 13724,
        "2016": 14752,
        "2017": 14508,
        "2018": 14931,
        "2019": 22619,
        "2020": 22261,
        "2021": 27395,
        "2022": 23239,
        "2023": 23346,
        "2024": 25116,
        "2025": 28076
      },
      "lncpp": {
        "2015": -156,
        "2016": 783,
        "2017": 1518,
        "2018": 1785,
        "2019": 2153,
        "2020": 2870,
        "2021": 3533,
        "2022": 2563,
        "2023": 1853,
        "2024": 2020,
        "2025": 2486
      },
      "lntt": {
        "2015": 288,
        "2016": 948,
        "2017": 898,
        "2018": 666,
        "2019": 503,
        "2020": 673,
        "2021": 1032,
        "2022": -723,
        "2023": -252,
        "2024": 357,
        "2025": 660
      },
      "cplv": {
        "2015": 271,
        "2016": 236,
        "2017": 218,
        "2018": 193,
        "2019": 417,
        "2020": 267,
        "2021": 252,
        "2022": 341,
        "2023": 354,
        "2024": 304,
        "2025": 336
      },
      "vhtt": {
        "2015": 6750,
        "2016": 7599,
        "2017": 8356,
        "2018": 8699,
        "2019": 9613,
        "2020": 10060,
        "2021": 10869,
        "2022": 9892,
        "2023": 9279,
        "2024": 9381,
        "2025": 10328
      },
      "tnpt": {
        "2015": 6974,
        "2016": 7152,
        "2017": 6152,
        "2018": 6232,
        "2019": 13006,
        "2020": 12202,
        "2021": 16526,
        "2022": 13348,
        "2023": 14067,
        "2024": 15735,
        "2025": 17748
      },
      "dtt": {
        "2015": 17094,
        "2016": 17849,
        "2017": 19803,
        "2018": 24668,
        "2019": 34021,
        "2020": 31291,
        "2021": 40572,
        "2022": 38492,
        "2023": 30305,
        "2024": 36155,
        "2025": 44458
      }
    }
  },
  "VGI": {
    "success": true,
    "symbol": "VGI",
    "companyName": "CTCP Dau tu quoc te Viettel",
    "exchange": "UPCOM",
    "isUnlisted": true,
    "currentPrice": 84700,
    "years": [
      2015,
      2016,
      2017,
      2018,
      2019,
      2020,
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2015": 11200,
        "2016": 20934,
        "2017": 18670,
        "2018": 22937,
        "2019": 22993,
        "2020": 26498,
        "2021": 29071,
        "2022": 34453,
        "2023": 37540,
        "2024": 48681,
        "2025": 58016
      },
      "nnh": {
        "2015": 8400,
        "2016": 17980,
        "2017": 21959,
        "2018": 17859,
        "2019": 16463,
        "2020": 16820,
        "2021": 16603,
        "2022": 16586,
        "2023": 18103,
        "2024": 22599,
        "2025": 32499
      },
      "tts": {
        "2015": 26800,
        "2016": 46826,
        "2017": 51967,
        "2018": 57869,
        "2019": 60869,
        "2020": 59004,
        "2021": 52851,
        "2022": 50303,
        "2023": 52464,
        "2024": 63439,
        "2025": 81511
      },
      "lncpp": {
        "2015": 1200,
        "2016": -2518,
        "2017": -3452,
        "2018": -5377,
        "2019": -3546,
        "2020": -3804,
        "2021": -4680,
        "2022": -3970,
        "2023": -3377,
        "2024": 2284,
        "2025": 9130
      },
      "lntt": {
        "2015": 950,
        "2016": -3115,
        "2017": 27,
        "2018": -140,
        "2019": 12,
        "2020": 1201,
        "2021": 880,
        "2022": 3014,
        "2023": 3879,
        "2024": 10667,
        "2025": 15176
      },
      "cplv": {
        "2015": 380,
        "2016": 573,
        "2017": 691,
        "2018": 943,
        "2019": 954,
        "2020": 815,
        "2021": 536,
        "2022": 486,
        "2023": 375,
        "2024": 315,
        "2025": 332
      },
      "vhtt": {
        "2015": 12400,
        "2016": 18335,
        "2017": 18458,
        "2018": 24713,
        "2019": 28868,
        "2020": 29868,
        "2021": 28634,
        "2022": 29108,
        "2023": 30517,
        "2024": 35832,
        "2025": 42838
      },
      "tnpt": {
        "2015": 14400,
        "2016": 28491,
        "2017": 33508,
        "2018": 33157,
        "2019": 32001,
        "2020": 29136,
        "2021": 24217,
        "2022": 21195,
        "2023": 21947,
        "2024": 27607,
        "2025": 38672
      },
      "dtt": {
        "2015": 13500,
        "2016": 15336,
        "2017": 19023,
        "2018": 16867,
        "2019": 17104,
        "2020": 18962,
        "2021": 19242,
        "2022": 23630,
        "2023": 28212,
        "2024": 35368,
        "2025": 44271
      }
    }
  },
  "FOX": {
    "success": true,
    "symbol": "FOX",
    "companyName": "CTCP vien thong FPT",
    "exchange": "UPCOM",
    "isUnlisted": true,
    "currentPrice": 61500,
    "years": [
      2015,
      2016,
      2017,
      2018,
      2019,
      2020,
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2015": 3120,
        "2016": 4535,
        "2017": 4261,
        "2018": 7035,
        "2019": 6934,
        "2020": 9350,
        "2021": 13672,
        "2022": 10099,
        "2023": 11508,
        "2024": 15257,
        "2025": 16934
      },
      "nnh": {
        "2015": 2450,
        "2016": 4827,
        "2017": 4763,
        "2018": 7388,
        "2019": 7968,
        "2020": 10717,
        "2021": 13968,
        "2022": 10427,
        "2023": 11028,
        "2024": 13000,
        "2025": 14681
      },
      "tts": {
        "2015": 7850,
        "2016": 8528,
        "2017": 8218,
        "2018": 11724,
        "2019": 13331,
        "2020": 16081,
        "2021": 21049,
        "2022": 18426,
        "2023": 20141,
        "2024": 23768,
        "2025": 26105
      },
      "lncpp": {
        "2015": 1120,
        "2016": 1490,
        "2017": 1240,
        "2018": 1039,
        "2019": 1567,
        "2020": 1082,
        "2021": 1822,
        "2022": 2840,
        "2023": 2066,
        "2024": 3190,
        "2025": 2872
      },
      "lntt": {
        "2015": 1040,
        "2016": 1193,
        "2017": 1217,
        "2018": 1458,
        "2019": 1808,
        "2020": 2074,
        "2021": 2395,
        "2022": 2818,
        "2023": 3042,
        "2024": 3588,
        "2025": 4364
      },
      "cplv": {
        "2015": 85,
        "2016": 151,
        "2017": 119,
        "2018": 133,
        "2019": 210,
        "2020": 243,
        "2021": 221,
        "2022": 335,
        "2023": 445,
        "2024": 296,
        "2025": 347
      },
      "vhtt": {
        "2015": 3950,
        "2016": 3202,
        "2017": 3302,
        "2018": 4121,
        "2019": 5023,
        "2020": 5078,
        "2021": 6289,
        "2022": 7920,
        "2023": 9074,
        "2024": 10646,
        "2025": 11231
      },
      "tnpt": {
        "2015": 3900,
        "2016": 5326,
        "2017": 4916,
        "2018": 7603,
        "2019": 8308,
        "2020": 11003,
        "2021": 14760,
        "2022": 10506,
        "2023": 11067,
        "2024": 13122,
        "2025": 14874
      },
      "dtt": {
        "2015": 5950,
        "2016": 6666,
        "2017": 7651,
        "2018": 8822,
        "2019": 10398,
        "2020": 11466,
        "2021": 12686,
        "2022": 14730,
        "2023": 15806,
        "2024": 17610,
        "2025": 19507
      }
    }
  },
  "QNS": {
    "success": true,
    "symbol": "QNS",
    "companyName": "CTCP DUONG QUANG NGAI",
    "exchange": "UPCOM",
    "isUnlisted": true,
    "currentPrice": 49200,
    "years": [
      2015,
      2016,
      2017,
      2018,
      2019,
      2020,
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2015": 3850,
        "2016": 1775,
        "2017": 1907,
        "2018": 3178,
        "2019": 3840,
        "2020": 4188,
        "2021": 5323,
        "2022": 6090,
        "2023": 8093,
        "2024": 10011,
        "2025": 10881
      },
      "nnh": {
        "2015": 1820,
        "2016": 1968,
        "2017": 2345,
        "2018": 2622,
        "2019": 2553,
        "2020": 2517,
        "2021": 2710,
        "2022": 2750,
        "2023": 3281,
        "2024": 3627,
        "2025": 3544
      },
      "tts": {
        "2015": 6020,
        "2016": 6124,
        "2017": 6999,
        "2018": 8002,
        "2019": 9048,
        "2020": 9150,
        "2021": 9876,
        "2022": 10266,
        "2023": 12053,
        "2024": 13808,
        "2025": 14350
      },
      "lncpp": {
        "2015": 1850,
        "2016": 2198,
        "2017": 2135,
        "2018": 2467,
        "2019": 2813,
        "2020": 2910,
        "2021": 3368,
        "2022": 3701,
        "2023": 4778,
        "2024": 5851,
        "2025": 6424
      },
      "lntt": {
        "2015": 1350,
        "2016": 1543,
        "2017": 1138,
        "2018": 1405,
        "2019": 1543,
        "2020": 1266,
        "2021": 1439,
        "2022": 1505,
        "2023": 2447,
        "2024": 2645,
        "2025": 2212
      },
      "cplv": {
        "2015": 45,
        "2016": 70,
        "2017": 76,
        "2018": 90,
        "2019": 77,
        "2020": 71,
        "2021": 66,
        "2022": 83,
        "2023": 136,
        "2024": 94,
        "2025": 107
      },
      "vhtt": {
        "2015": 3950,
        "2016": 3911,
        "2017": 4482,
        "2018": 5353,
        "2019": 6470,
        "2020": 6605,
        "2021": 7095,
        "2022": 7465,
        "2023": 8581,
        "2024": 10002,
        "2025": 10646
      },
      "tnpt": {
        "2015": 2070,
        "2016": 2213,
        "2017": 2517,
        "2018": 2649,
        "2019": 2578,
        "2020": 2545,
        "2021": 2781,
        "2022": 2802,
        "2023": 3472,
        "2024": 3807,
        "2025": 3704
      },
      "dtt": {
        "2015": 7850,
        "2016": 6972,
        "2017": 7633,
        "2018": 8031,
        "2019": 7681,
        "2020": 6490,
        "2021": 7335,
        "2022": 8255,
        "2023": 10021,
        "2024": 10243,
        "2025": 10575
      }
    }
  },
  "HNG": {
    "success": true,
    "symbol": "HNG",
    "companyName": "CTCP Nong nghiep Quoc te Hoang Anh Gia Lai",
    "exchange": "UPCOM",
    "isUnlisted": true,
    "currentPrice": 6400,
    "years": [
      2015,
      2016,
      2017,
      2018,
      2019,
      2020,
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2015": 4950,
        "2016": 6643,
        "2017": 4417,
        "2018": 4177,
        "2019": 3872,
        "2020": 6230,
        "2021": 2849,
        "2022": 3039,
        "2023": 2659,
        "2024": 2474,
        "2025": 3121
      },
      "nnh": {
        "2015": 3820,
        "2016": 6125,
        "2017": 6601,
        "2018": 8514,
        "2019": 7913,
        "2020": 10979,
        "2021": 4828,
        "2022": 7328,
        "2023": 9609,
        "2024": 14304,
        "2025": 16543
      },
      "tts": {
        "2015": 18600,
        "2016": 35468,
        "2017": 32282,
        "2018": 30532,
        "2019": 23280,
        "2020": 24670,
        "2021": 14017,
        "2022": 12670,
        "2023": 14096,
        "2024": 16695,
        "2025": 19678
      },
      "lncpp": {
        "2015": 820,
        "2016": 1142,
        "2017": 911,
        "2018": 103,
        "2019": -2324,
        "2020": -2306,
        "2021": -3426,
        "2022": -7003,
        "2023": -8102,
        "2024": -9384,
        "2025": -10371
      },
      "lntt": {
        "2015": 1050,
        "2016": -978,
        "2017": 441,
        "2018": -626,
        "2019": -2375,
        "2020": 48,
        "2021": -1299,
        "2022": -3566,
        "2023": -1110,
        "2024": -1282,
        "2025": -980
      },
      "cplv": {
        "2015": 390,
        "2016": 701,
        "2017": 813,
        "2018": 639,
        "2019": 571,
        "2020": 556,
        "2021": 304,
        "2022": 308,
        "2023": 325,
        "2024": 313,
        "2025": 415
      },
      "vhtt": {
        "2015": 9200,
        "2016": 10484,
        "2017": 10153,
        "2018": 10676,
        "2019": 9738,
        "2020": 8680,
        "2021": 5997,
        "2022": 3034,
        "2023": 2256,
        "2024": 1636,
        "2025": 1045
      },
      "tnpt": {
        "2015": 9400,
        "2016": 24984,
        "2017": 22129,
        "2018": 19856,
        "2019": 13543,
        "2020": 15990,
        "2021": 8020,
        "2022": 9635,
        "2023": 11840,
        "2024": 15060,
        "2025": 18633
      },
      "dtt": {
        "2015": 4720,
        "2016": 4776,
        "2017": 3321,
        "2018": 3688,
        "2019": 1811,
        "2020": 2375,
        "2021": 1199,
        "2022": 742,
        "2023": 606,
        "2024": 492,
        "2025": 678
      }
    }
  },
  "MML": {
    "success": true,
    "symbol": "MML",
    "companyName": "CTCP Masan MeatLife",
    "exchange": "UPCOM",
    "isUnlisted": true,
    "currentPrice": 26600,
    "years": [
      2015,
      2016,
      2017,
      2018,
      2019,
      2020,
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2015": 1820,
        "2016": 1820,
        "2017": 4605,
        "2018": 3512,
        "2019": 4326,
        "2020": 6212,
        "2021": 4342,
        "2022": 3975,
        "2023": 4751,
        "2024": 1753,
        "2025": 2203
      },
      "nnh": {
        "2015": 1450,
        "2016": 1450,
        "2017": 3331,
        "2018": 2369,
        "2019": 3492,
        "2020": 7370,
        "2021": 2523,
        "2022": 3098,
        "2023": 3461,
        "2024": 3245,
        "2025": 5242
      },
      "tts": {
        "2015": 4950,
        "2016": 4950,
        "2017": 14621,
        "2018": 12782,
        "2019": 14711,
        "2020": 17957,
        "2021": 11871,
        "2022": 13346,
        "2023": 12733,
        "2024": 11229,
        "2025": 11368
      },
      "lncpp": {
        "2015": 290,
        "2016": 0,
        "2017": 1499,
        "2018": 25,
        "2019": 140,
        "2020": 263,
        "2021": 132,
        "2022": -13,
        "2023": -399,
        "2024": -1042,
        "2025": -479
      },
      "lntt": {
        "2015": 380,
        "2016": 0,
        "2017": 956,
        "2018": 336,
        "2019": 568,
        "2020": 680,
        "2021": 1699,
        "2022": -236,
        "2023": -542,
        "2024": 23,
        "2025": 624
      },
      "cplv": {
        "2015": 85,
        "2016": 0,
        "2017": 491,
        "2018": 235,
        "2019": 285,
        "2020": 424,
        "2021": 465,
        "2022": 396,
        "2023": 508,
        "2024": 376,
        "2025": 0
      },
      "vhtt": {
        "2015": 2850,
        "2016": 2850,
        "2017": 8543,
        "2018": 7181,
        "2019": 7523,
        "2020": 8463,
        "2021": 5751,
        "2022": 5624,
        "2023": 5084,
        "2024": 4469,
        "2025": 5201
      },
      "tnpt": {
        "2015": 2100,
        "2016": 2100,
        "2017": 6078,
        "2018": 5601,
        "2019": 7188,
        "2020": 9494,
        "2021": 6120,
        "2022": 7723,
        "2023": 7649,
        "2024": 6759,
        "2025": 6167
      },
      "dtt": {
        "2015": 4150,
        "2016": 4150,
        "2017": 18690,
        "2018": 13977,
        "2019": 13799,
        "2020": 16119,
        "2021": 18891,
        "2022": 4785,
        "2023": 6984,
        "2024": 7650,
        "2025": 9230
      }
    }
  },
  "HBC": {
    "success": true,
    "symbol": "HBC",
    "companyName": "CTCP Tap doan Xay dung Hoa Binh",
    "exchange": "UPCOM",
    "isUnlisted": true,
    "currentPrice": 3600,
    "years": [
      2015,
      2016,
      2017,
      2018,
      2019,
      2020,
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2015": 4620,
        "2016": 9900,
        "2017": 11693,
        "2018": 13523,
        "2019": 14423,
        "2020": 13608,
        "2021": 14877,
        "2022": 13604,
        "2023": 0,
        "2024": 13735,
        "2025": 0
      },
      "nnh": {
        "2015": 3950,
        "2016": 8886,
        "2017": 10905,
        "2018": 12313,
        "2019": 12044,
        "2020": 10748,
        "2021": 11644,
        "2022": 12641,
        "2023": 13703,
        "2024": 12411,
        "2025": 0
      },
      "tts": {
        "2015": 5820,
        "2016": 11450,
        "2017": 13998,
        "2018": 15901,
        "2019": 16721,
        "2020": 15552,
        "2021": 16577,
        "2022": 15594,
        "2023": 0,
        "2024": 15412,
        "2025": 0
      },
      "lncpp": {
        "2015": 310,
        "2016": 535,
        "2017": 823,
        "2018": 628,
        "2019": 836,
        "2020": 846,
        "2021": 793,
        "2022": -2101,
        "2023": -3240,
        "2024": -2299,
        "2025": 0
      },
      "lntt": {
        "2015": 215,
        "2016": 715,
        "2017": 1074,
        "2018": 795,
        "2019": 527,
        "2020": 114,
        "2021": 149,
        "2022": -2334,
        "2023": -1080,
        "2024": 1009,
        "2025": 0
      },
      "cplv": {
        "2015": 145,
        "2016": 145,
        "2017": 266,
        "2018": 306,
        "2019": 322,
        "2020": 317,
        "2021": 299,
        "2022": 520,
        "2023": 557,
        "2024": 404,
        "2025": 0
      },
      "vhtt": {
        "2015": 1250,
        "2016": 1830,
        "2017": 2467,
        "2018": 2923,
        "2019": 3960,
        "2020": 4148,
        "2021": 4057,
        "2022": 1219,
        "2023": 93,
        "2024": 1748,
        "2025": 0
      },
      "tnpt": {
        "2015": 4570,
        "2016": 9620,
        "2017": 11531,
        "2018": 12978,
        "2019": 12762,
        "2020": 11404,
        "2021": 12520,
        "2022": 14376,
        "2023": 15156,
        "2024": 13664,
        "2025": 0
      },
      "dtt": {
        "2015": 5080,
        "2016": 10766,
        "2017": 16037,
        "2018": 18299,
        "2019": 18610,
        "2020": 11225,
        "2021": 11356,
        "2022": 14149,
        "2023": 7537,
        "2024": 6421,
        "2025": 0
      }
    }
  },
  "C4G": {
    "success": true,
    "symbol": "C4G",
    "companyName": "CTCP Tập đoàn CIENCO4",
    "exchange": "UPCOM",
    "isUnlisted": true,
    "currentPrice": 5400,
    "years": [
      2015,
      2016,
      2017,
      2018,
      2019,
      2020,
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2015": 3450,
        "2016": 3450,
        "2017": 3378,
        "2018": 3687,
        "2019": 3152,
        "2020": 3556,
        "2021": 3905,
        "2022": 4273,
        "2023": 5530,
        "2024": 5344,
        "2025": 0
      },
      "nnh": {
        "2015": 2980,
        "2016": 2980,
        "2017": 3317,
        "2018": 3695,
        "2019": 3027,
        "2020": 3271,
        "2021": 3488,
        "2022": 2822,
        "2023": 2895,
        "2024": 2951,
        "2025": 0
      },
      "tts": {
        "2015": 6420,
        "2016": 6420,
        "2017": 7398,
        "2018": 7856,
        "2019": 7074,
        "2020": 7407,
        "2021": 7810,
        "2022": 8271,
        "2023": 9605,
        "2024": 9409,
        "2025": 0
      },
      "lncpp": {
        "2015": 245,
        "2016": 0,
        "2017": 80,
        "2018": 91,
        "2019": 182,
        "2020": 125,
        "2021": 64,
        "2022": 213,
        "2023": 139,
        "2024": 317,
        "2025": 0
      },
      "lntt": {
        "2015": 195,
        "2016": 0,
        "2017": 159,
        "2018": 159,
        "2019": 159,
        "2020": 159,
        "2021": 87,
        "2022": 186,
        "2023": 161,
        "2024": 215,
        "2025": 0
      },
      "cplv": {
        "2015": 160,
        "2016": 0,
        "2017": 231,
        "2018": 264,
        "2019": 0,
        "2020": 0,
        "2021": 236,
        "2022": 207,
        "2023": 203,
        "2024": 172,
        "2025": 0
      },
      "vhtt": {
        "2015": 1450,
        "2016": 1450,
        "2017": 1164,
        "2018": 1121,
        "2019": 1213,
        "2020": 1160,
        "2021": 1281,
        "2022": 2493,
        "2023": 3743,
        "2024": 3920,
        "2025": 0
      },
      "tnpt": {
        "2015": 4970,
        "2016": 4970,
        "2017": 6233,
        "2018": 6735,
        "2019": 5861,
        "2020": 6247,
        "2021": 6529,
        "2022": 5778,
        "2023": 5863,
        "2024": 5489,
        "2025": 0
      },
      "dtt": {
        "2015": 3920,
        "2016": 3920,
        "2017": 4049,
        "2018": 3126,
        "2019": 3126,
        "2020": 3126,
        "2021": 1885,
        "2022": 2726,
        "2023": 2629,
        "2024": 3265,
        "2025": 0
      }
    }
  },
  "BSR": {
    "success": true,
    "symbol": "BSR",
    "companyName": "CÔNG TY CỔ PHẦN – TỔNG CÔNG TY LỌC HÓA DẦU VIỆT NAM",
    "exchange": "UPCOM",
    "isUnlisted": true,
    "currentPrice": 27550,
    "years": [
      2015,
      2016,
      2017,
      2018,
      2019,
      2020,
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2015": 18500,
        "2016": 30182,
        "2017": 31835,
        "2018": 24036,
        "2019": 26896,
        "2020": 29997,
        "2021": 44544,
        "2022": 58471,
        "2023": 68681,
        "2024": 71516,
        "2025": 70241
      },
      "nnh": {
        "2015": 12400,
        "2016": 14956,
        "2017": 17810,
        "2018": 13100,
        "2019": 12916,
        "2020": 20407,
        "2021": 26940,
        "2022": 26015,
        "2023": 28442,
        "2024": 31984,
        "2025": 23774
      },
      "tts": {
        "2015": 52100,
        "2016": 62690,
        "2017": 63261,
        "2018": 53212,
        "2019": 53584,
        "2020": 55895,
        "2021": 66796,
        "2022": 78488,
        "2023": 86595,
        "2024": 88387,
        "2025": 85143
      },
      "lncpp": {
        "2015": 4200,
        "2016": -3,
        "2017": -6,
        "2018": 256,
        "2019": 2975,
        "2020": 28,
        "2021": 6562,
        "2022": 14652,
        "2023": 16340,
        "2024": 11826,
        "2025": 7414
      },
      "lntt": {
        "2015": 6100,
        "2016": 4704,
        "2017": 8110,
        "2018": 253,
        "2019": 3054,
        "2020": -2852,
        "2021": 6941,
        "2022": 15586,
        "2023": 9639,
        "2024": 736,
        "2025": 6005
      },
      "cplv": {
        "2015": 410,
        "2016": 647,
        "2017": 530,
        "2018": 219,
        "2019": 360,
        "2020": 325,
        "2021": 407,
        "2022": 253,
        "2023": 288,
        "2024": 261,
        "2025": 274
      },
      "vhtt": {
        "2015": 31200,
        "2016": 32573,
        "2017": 34440,
        "2018": 31378,
        "2019": 34054,
        "2020": 31065,
        "2021": 37564,
        "2022": 51190,
        "2023": 57269,
        "2024": 55538,
        "2025": 60513
      },
      "tnpt": {
        "2015": 20900,
        "2016": 30117,
        "2017": 28821,
        "2018": 21834,
        "2019": 19530,
        "2020": 24830,
        "2021": 29232,
        "2022": 27298,
        "2023": 29326,
        "2024": 32849,
        "2025": 24630
      },
      "dtt": {
        "2015": 94500,
        "2016": 73686,
        "2017": 81333,
        "2018": 56059,
        "2019": 102824,
        "2020": 57959,
        "2021": 101080,
        "2022": 167124,
        "2023": 147423,
        "2024": 123027,
        "2025": 141582
      }
    }
  },
  "OIL": {
    "success": true,
    "symbol": "OIL",
    "companyName": "Tổng Công ty Dầu Việt Nam - Công ty cổ phần",
    "exchange": "UPCOM",
    "isUnlisted": true,
    "currentPrice": 14000,
    "years": [
      2015,
      2016,
      2017,
      2018,
      2019,
      2020,
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2015": 11200,
        "2016": 15133,
        "2017": 15133,
        "2018": 18005,
        "2019": 20106,
        "2020": 16345,
        "2021": 21550,
        "2022": 23233,
        "2023": 32977,
        "2024": 35543,
        "2025": 38938
      },
      "nnh": {
        "2015": 9800,
        "2016": 10605,
        "2017": 10605,
        "2018": 13699,
        "2019": 15278,
        "2020": 11228,
        "2021": 15725,
        "2022": 17215,
        "2023": 27144,
        "2024": 29953,
        "2025": 33687
      },
      "tts": {
        "2015": 18500,
        "2016": 21304,
        "2017": 21304,
        "2018": 24664,
        "2019": 26481,
        "2020": 22075,
        "2021": 27198,
        "2022": 28810,
        "2023": 38839,
        "2024": 41734,
        "2025": 45610
      },
      "lncpp": {
        "2015": 450,
        "2016": -1912,
        "2017": 0,
        "2018": -882,
        "2019": -733,
        "2020": -899,
        "2021": -402,
        "2022": -186,
        "2023": -6,
        "2024": 70,
        "2025": 129
      },
      "lntt": {
        "2015": 520,
        "2016": 626,
        "2017": 0,
        "2018": 83,
        "2019": 412,
        "2020": -111,
        "2021": 928,
        "2022": 912,
        "2023": 798,
        "2024": 633,
        "2025": 654
      },
      "cplv": {
        "2015": 110,
        "2016": 157,
        "2017": 0,
        "2018": 65,
        "2019": 196,
        "2020": 146,
        "2021": 145,
        "2022": 180,
        "2023": 261,
        "2024": 188,
        "2025": 339
      },
      "vhtt": {
        "2015": 7200,
        "2016": 10411,
        "2017": 10411,
        "2018": 10656,
        "2019": 10872,
        "2020": 10566,
        "2021": 11185,
        "2022": 11327,
        "2023": 11393,
        "2024": 11448,
        "2025": 11555
      },
      "tnpt": {
        "2015": 11300,
        "2016": 10893,
        "2017": 10893,
        "2018": 14008,
        "2019": 15609,
        "2020": 11509,
        "2021": 16012,
        "2022": 17483,
        "2023": 27446,
        "2024": 30286,
        "2025": 34055
      },
      "dtt": {
        "2015": 49800,
        "2016": 39263,
        "2017": 39263,
        "2018": 23619,
        "2019": 79861,
        "2020": 50028,
        "2021": 57836,
        "2022": 104214,
        "2023": 102663,
        "2024": 124460,
        "2025": 150557
      }
    }
  },
  "SGP": {
    "success": true,
    "symbol": "SGP",
    "companyName": "CTCP Cang Sai Gon",
    "exchange": "UPCOM",
    "isUnlisted": true,
    "currentPrice": 20200,
    "years": [
      2015,
      2016,
      2017,
      2018,
      2019,
      2020,
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2015": 1250,
        "2016": 757,
        "2017": 1295,
        "2018": 1383,
        "2019": 1589,
        "2020": 1685,
        "2021": 1878,
        "2022": 1695,
        "2023": 1162,
        "2024": 1634,
        "2025": 2049
      },
      "nnh": {
        "2015": 890,
        "2016": 644,
        "2017": 1262,
        "2018": 505,
        "2019": 497,
        "2020": 374,
        "2021": 692,
        "2022": 564,
        "2023": 415,
        "2024": 767,
        "2025": 892
      },
      "tts": {
        "2015": 4850,
        "2016": 3442,
        "2017": 4386,
        "2018": 4614,
        "2019": 4736,
        "2020": 4902,
        "2021": 5438,
        "2022": 5396,
        "2023": 5367,
        "2024": 5757,
        "2025": 6098
      },
      "lncpp": {
        "2015": 180,
        "2016": -927,
        "2017": -577,
        "2018": -437,
        "2019": -297,
        "2020": -72,
        "2021": 210,
        "2022": 284,
        "2023": 365,
        "2024": 179,
        "2025": 493
      },
      "lntt": {
        "2015": 210,
        "2016": 80,
        "2017": 498,
        "2018": 255,
        "2019": 279,
        "2020": 286,
        "2021": 974,
        "2022": 241,
        "2023": 363,
        "2024": 225,
        "2025": 429
      },
      "cplv": {
        "2015": 65,
        "2016": 14,
        "2017": 11,
        "2018": 9,
        "2019": 7,
        "2020": 5,
        "2021": 5,
        "2022": 13,
        "2023": 5,
        "2024": 1,
        "2025": 36
      },
      "vhtt": {
        "2015": 3100,
        "2016": 1391,
        "2017": 1753,
        "2018": 1897,
        "2019": 2037,
        "2020": 2262,
        "2021": 2563,
        "2022": 2687,
        "2023": 2844,
        "2024": 2877,
        "2025": 3214
      },
      "tnpt": {
        "2015": 1750,
        "2016": 2051,
        "2017": 2634,
        "2018": 2717,
        "2019": 2699,
        "2020": 2640,
        "2021": 2874,
        "2022": 2709,
        "2023": 2523,
        "2024": 2881,
        "2025": 2884
      },
      "dtt": {
        "2015": 1450,
        "2016": 1202,
        "2017": 1161,
        "2018": 1079,
        "2019": 1121,
        "2020": 936,
        "2021": 1371,
        "2022": 1112,
        "2023": 942,
        "2024": 1106,
        "2025": 1226
      }
    }
  },
  "ACV": {
    "success": true,
    "symbol": "ACV",
    "companyName": "Tong cong ty Cang hang khong Viet Nam",
    "exchange": "UPCOM",
    "isUnlisted": true,
    "currentPrice": 39300,
    "years": [
      2015,
      2016,
      2017,
      2018,
      2019,
      2020,
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2015": 21500,
        "2016": 22151,
        "2017": 26343,
        "2018": 31264,
        "2019": 37291,
        "2020": 37974,
        "2021": 37568,
        "2022": 18195,
        "2023": 42680,
        "2024": 40695,
        "2025": 26970
      },
      "nnh": {
        "2015": 2850,
        "2016": 8255,
        "2017": 7354,
        "2018": 7621,
        "2019": 6518,
        "2020": 3893,
        "2021": 3688,
        "2022": 2166,
        "2023": 6722,
        "2024": 7634,
        "2025": 12336
      },
      "tts": {
        "2015": 43200,
        "2016": 47337,
        "2017": 49163,
        "2018": 53524,
        "2019": 58176,
        "2020": 56902,
        "2021": 54979,
        "2022": 27445,
        "2023": 67348,
        "2024": 77282,
        "2025": 91910
      },
      "lncpp": {
        "2015": 4800,
        "2016": 2058,
        "2017": 4849,
        "2018": 6360,
        "2019": 8885,
        "2020": 9705,
        "2021": 9793,
        "2022": 11707,
        "2023": 22542,
        "2024": 32166,
        "2025": 17767
      },
      "lntt": {
        "2015": 2150,
        "2016": 3419,
        "2017": 5343,
        "2018": 7575,
        "2019": 10156,
        "2020": 2000,
        "2021": 990,
        "2022": 7851,
        "2023": 10492,
        "2024": 14465,
        "2025": 15409
      },
      "cplv": {
        "2015": 45,
        "2016": 76,
        "2017": 96,
        "2018": 95,
        "2019": 96,
        "2020": 96,
        "2021": 89,
        "2022": 14,
        "2023": 67,
        "2024": 61,
        "2025": 60
      },
      "vhtt": {
        "2015": 28900,
        "2016": 25054,
        "2017": 27384,
        "2018": 30749,
        "2019": 36757,
        "2020": 37565,
        "2021": 37653,
        "2022": 25223,
        "2023": 50414,
        "2024": 60041,
        "2025": 69902
      },
      "tnpt": {
        "2015": 14300,
        "2016": 22283,
        "2017": 21778,
        "2018": 22775,
        "2019": 21419,
        "2020": 19337,
        "2021": 17327,
        "2022": 2222,
        "2023": 16934,
        "2024": 17241,
        "2025": 22007
      },
      "dtt": {
        "2015": 10800,
        "2016": 10646,
        "2017": 13830,
        "2018": 16090,
        "2019": 18329,
        "2020": 7767,
        "2021": 4752,
        "2022": 4754,
        "2023": 19998,
        "2024": 22597,
        "2025": 25898
      }
    }
  },
  "MPC": {
    "success": true,
    "symbol": "MPC",
    "companyName": "Công ty Cổ phần Tập đoàn Thuỷ sản Minh Phú",
    "exchange": "UPCOM",
    "isUnlisted": true,
    "currentPrice": 13900,
    "years": [
      2015,
      2016,
      2017,
      2018,
      2019,
      2020,
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2015": 5820,
        "2016": 6633,
        "2017": 8032,
        "2018": 7623,
        "2019": 6385,
        "2020": 6943,
        "2021": 7179,
        "2022": 7561,
        "2023": 6890,
        "2024": 6176,
        "2025": 7566
      },
      "nnh": {
        "2015": 3950,
        "2016": 2353,
        "2017": 4411,
        "2018": 4119,
        "2019": 2985,
        "2020": 3546,
        "2021": 3947,
        "2022": 4547,
        "2023": 4351,
        "2024": 4260,
        "2025": 5372
      },
      "tts": {
        "2015": 7650,
        "2016": 8190,
        "2017": 9510,
        "2018": 9093,
        "2019": 8064,
        "2020": 8936,
        "2021": 9559,
        "2022": 10638,
        "2023": 10209,
        "2024": 9537,
        "2025": 11205
      },
      "lncpp": {
        "2015": 680,
        "2016": 846,
        "2017": 1452,
        "2018": 1507,
        "2019": 346,
        "2020": 669,
        "2021": 812,
        "2022": 1009,
        "2023": 776,
        "2024": 184,
        "2025": 727
      },
      "lntt": {
        "2015": 710,
        "2016": 101,
        "2017": 792,
        "2018": 902,
        "2019": 498,
        "2020": 762,
        "2021": 775,
        "2022": 940,
        "2023": -96,
        "2024": -130,
        "2025": 584
      },
      "cplv": {
        "2015": 120,
        "2016": 219,
        "2017": 181,
        "2018": 203,
        "2019": 151,
        "2020": 89,
        "2021": 53,
        "2022": 85,
        "2023": 141,
        "2024": 143,
        "2025": 147
      },
      "vhtt": {
        "2015": 2950,
        "2016": 2293,
        "2017": 2992,
        "2018": 3725,
        "2019": 5022,
        "2020": 5322,
        "2021": 5492,
        "2022": 5785,
        "2023": 5625,
        "2024": 4913,
        "2025": 5361
      },
      "tnpt": {
        "2015": 4700,
        "2016": 5897,
        "2017": 6519,
        "2018": 5368,
        "2019": 3042,
        "2020": 3613,
        "2021": 4067,
        "2022": 4853,
        "2023": 4751,
        "2024": 4624,
        "2025": 5844
      },
      "dtt": {
        "2015": 12900,
        "2016": 11973,
        "2017": 15665,
        "2018": 16925,
        "2019": 16998,
        "2020": 14329,
        "2021": 13578,
        "2022": 16425,
        "2023": 10767,
        "2024": 14735,
        "2025": 14598
      }
    }
  },
  "VGT": {
    "success": true,
    "symbol": "VGT",
    "companyName": "CTCP - Tap doan Det may Viet Nam",
    "exchange": "UPCOM",
    "isUnlisted": true,
    "currentPrice": 11000,
    "years": [
      2015,
      2016,
      2017,
      2018,
      2019,
      2020,
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2015": 9272,
        "2016": 9232,
        "2017": 9475,
        "2018": 10547,
        "2019": 9341,
        "2020": 7302,
        "2021": 9546,
        "2022": 9556,
        "2023": 9012,
        "2024": 9552,
        "2025": 10763
      },
      "nnh": {
        "2015": 6842,
        "2016": 6882,
        "2017": 7475,
        "2018": 8779,
        "2019": 7313,
        "2020": 5674,
        "2021": 6989,
        "2022": 7078,
        "2023": 6894,
        "2024": 7067,
        "2025": 8043
      },
      "tts": {
        "2015": 18811,
        "2016": 19794,
        "2017": 20906,
        "2018": 21895,
        "2019": 19834,
        "2020": 18020,
        "2021": 20346,
        "2022": 20034,
        "2023": 19076,
        "2024": 19266,
        "2025": 20555
      },
      "lncpp": {
        "2015": 563,
        "2016": 555,
        "2017": 569,
        "2018": 657,
        "2019": 739,
        "2020": 717,
        "2021": 1420,
        "2022": 1221,
        "2023": 875,
        "2024": 931,
        "2025": 1427
      },
      "lntt": {
        "2015": 627,
        "2016": 684,
        "2017": 748,
        "2018": 761,
        "2019": 766,
        "2020": 593,
        "2021": 1456,
        "2022": 1212,
        "2023": 539,
        "2024": 835,
        "2025": 1480
      },
      "cplv": {
        "2015": 354,
        "2016": 334,
        "2017": 356,
        "2018": 457,
        "2019": 517,
        "2020": 332,
        "2021": 238,
        "2022": 306,
        "2023": 348,
        "2024": 340,
        "2025": 318
      },
      "vhtt": {
        "2015": 7333,
        "2016": 7594,
        "2017": 7821,
        "2018": 7996,
        "2019": 7940,
        "2020": 8069,
        "2021": 9233,
        "2022": 9430,
        "2023": 9142,
        "2024": 9276,
        "2025": 10006
      },
      "tnpt": {
        "2015": 11478,
        "2016": 12200,
        "2017": 13085,
        "2018": 13899,
        "2019": 11894,
        "2020": 9951,
        "2021": 11113,
        "2022": 10604,
        "2023": 9934,
        "2024": 9990,
        "2025": 10549
      },
      "dtt": {
        "2015": 15159,
        "2016": 15462,
        "2017": 17447,
        "2018": 19101,
        "2019": 18986,
        "2020": 13909,
        "2021": 16003,
        "2022": 18273,
        "2023": 16466,
        "2024": 17326,
        "2025": 18373
      }
    }
  },
  "DVN": {
    "success": true,
    "symbol": "DVN",
    "companyName": "Tong CTCP  Duoc Viet Nam",
    "exchange": "UPCOM",
    "isUnlisted": true,
    "currentPrice": 17300,
    "years": [
      2015,
      2016,
      2017,
      2018,
      2019,
      2020,
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2015": 2950,
        "2016": 4640,
        "2017": 462,
        "2018": 3647,
        "2019": 3524,
        "2020": 3943,
        "2021": 3768,
        "2022": 3767,
        "2023": 4080,
        "2024": 4363,
        "2025": 4710
      },
      "nnh": {
        "2015": 2150,
        "2016": 3172,
        "2017": 45,
        "2018": 2996,
        "2019": 2820,
        "2020": 3137,
        "2021": 2816,
        "2022": 2946,
        "2023": 2886,
        "2024": 2914,
        "2025": 3589
      },
      "tts": {
        "2015": 4820,
        "2016": 6898,
        "2017": 2441,
        "2018": 5714,
        "2019": 5709,
        "2020": 6103,
        "2021": 5862,
        "2022": 5778,
        "2023": 6078,
        "2024": 6455,
        "2025": 7652
      },
      "lncpp": {
        "2015": 420,
        "2016": 832,
        "2017": 26,
        "2018": 488,
        "2019": 637,
        "2020": 682,
        "2021": 676,
        "2022": 270,
        "2023": 547,
        "2024": 793,
        "2025": 1261
      },
      "lntt": {
        "2015": 240,
        "2016": 680,
        "2017": 28,
        "2018": 218,
        "2019": 241,
        "2020": 238,
        "2021": 234,
        "2022": 132,
        "2023": 425,
        "2024": 509,
        "2025": 825
      },
      "cplv": {
        "2015": 45,
        "2016": 67,
        "2017": 0,
        "2018": 89,
        "2019": 85,
        "2020": 74,
        "2021": 59,
        "2022": 64,
        "2023": 74,
        "2024": 54,
        "2025": 67
      },
      "vhtt": {
        "2015": 2150,
        "2016": 3671,
        "2017": 2396,
        "2018": 2661,
        "2019": 2821,
        "2020": 2909,
        "2021": 2995,
        "2022": 2766,
        "2023": 3131,
        "2024": 3510,
        "2025": 4032
      },
      "tnpt": {
        "2015": 2670,
        "2016": 3227,
        "2017": 45,
        "2018": 3053,
        "2019": 2888,
        "2020": 3194,
        "2021": 2867,
        "2022": 3013,
        "2023": 2947,
        "2024": 2946,
        "2025": 3621
      },
      "dtt": {
        "2015": 4120,
        "2016": 6036,
        "2017": 87,
        "2018": 6001,
        "2019": 5693,
        "2020": 5311,
        "2021": 4874,
        "2022": 5541,
        "2023": 5583,
        "2024": 5522,
        "2025": 5646
      }
    }
  }
};

// Hỗ trợ cả môi trường Browser và Node.js
if (typeof window !== 'undefined') {
  window.STOCK_DIRECTORY = STOCK_DIRECTORY;
  window.VIETNAM_STOCK_DIRECTORY = STOCK_DIRECTORY;
  window.PRELOADED_STOCKS = PRELOADED_STOCKS;
  window.PRELOADED_STOCKS_DATABASE = PRELOADED_STOCKS;
  window.classifyEnterprise = classifyEnterprise;
  window.searchStockDirectory = searchStockDirectory;
  window.removeVietnameseAccents = removeVietnameseAccents;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    PRELOADED_STOCKS,
    STOCK_DIRECTORY,
    searchStockDirectory,
    removeVietnameseAccents,
    classifyEnterprise
  };
}

