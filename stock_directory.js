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
  }).slice(0, 8); // Lấy tối đa 8 kết quả phù hợp nhất
}

// Hỗ trợ cả môi trường Browser và Node.js

const PRELOADED_STOCKS = {
  "HPG": {
    "success": true,
    "symbol": "HPG",
    "companyName": "Công ty Cổ phần Tập đoàn Hòa Phát",
    "exchange": "HOSE",
    "isUnlisted": false,
    "currentPrice": 21300,
    "years": [
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2021": 94155,
        "2022": 80515,
        "2023": 82716,
        "2024": 86674,
        "2025": 103659
      },
      "nnh": {
        "2021": 73459,
        "2022": 62385,
        "2023": 71513,
        "2024": 75225,
        "2025": 94186
      },
      "tts": {
        "2021": 178236,
        "2022": 170336,
        "2023": 187783,
        "2024": 224490,
        "2025": 257899
      },
      "lncpp": {
        "2021": 41763,
        "2022": 33834,
        "2023": 40593,
        "2024": 49599,
        "2025": 51038
      },
      "lntt": {
        "2021": 37057,
        "2022": 9923,
        "2023": 7793,
        "2024": 13694,
        "2025": 18041
      },
      "cplv": {
        "2021": 2526,
        "2022": 3084,
        "2023": 3585,
        "2024": 2287,
        "2025": 3115
      },
      "vhtt": {
        "2021": 90781,
        "2022": 96113,
        "2023": 102836,
        "2024": 114647,
        "2025": 131220
      },
      "tnpt": {
        "2021": 87456,
        "2022": 74223,
        "2023": 84946,
        "2024": 109842,
        "2025": 126679
      },
      "dtt": {
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
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2021": 36110,
        "2022": 31560,
        "2023": 35936,
        "2024": 37554,
        "2025": 36261
      },
      "nnh": {
        "2021": 17068,
        "2022": 15308,
        "2023": 17139,
        "2024": 18460,
        "2025": 18520
      },
      "tts": {
        "2021": 53332,
        "2022": 48483,
        "2023": 52673,
        "2024": 55049,
        "2025": 53312
      },
      "lncpp": {
        "2021": 7594,
        "2022": 3353,
        "2023": 3926,
        "2024": 3471,
        "2025": 0
      },
      "lntt": {
        "2021": 12922,
        "2022": 10496,
        "2023": 10968,
        "2024": 11600,
        "2025": 11650
      },
      "cplv": {
        "2021": 89,
        "2022": 166,
        "2023": 354,
        "2024": 279,
        "2025": 326
      },
      "vhtt": {
        "2021": 35850,
        "2022": 32817,
        "2023": 35026,
        "2024": 36174,
        "2025": 30685
      },
      "tnpt": {
        "2021": 17482,
        "2022": 15666,
        "2023": 17648,
        "2024": 18875,
        "2025": 18829
      },
      "dtt": {
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
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2021": 35118,
        "2022": 30938,
        "2023": 36706,
        "2024": 45536,
        "2025": 58137
      },
      "nnh": {
        "2021": 29761,
        "2022": 24521,
        "2023": 29652,
        "2024": 34836,
        "2025": 41525
      },
      "tts": {
        "2021": 53698,
        "2022": 51650,
        "2023": 60283,
        "2024": 72000,
        "2025": 88142
      },
      "lncpp": {
        "2021": 7000,
        "2022": 7712,
        "2023": 8674,
        "2024": 11031,
        "2025": 14302
      },
      "lntt": {
        "2021": 6337,
        "2022": 7662,
        "2023": 9203,
        "2024": 11070,
        "2025": 13044
      },
      "cplv": {
        "2021": 484,
        "2022": 646,
        "2023": 833,
        "2024": 552,
        "2025": 810
      },
      "vhtt": {
        "2021": 21418,
        "2022": 25356,
        "2023": 29933,
        "2024": 35728,
        "2025": 43748
      },
      "tnpt": {
        "2021": 32280,
        "2022": 26294,
        "2023": 30350,
        "2024": 36272,
        "2025": 44394
      },
      "dtt": {
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
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2021": 51955,
        "2022": 44578,
        "2023": 51950,
        "2024": 65836,
        "2025": 77202
      },
      "nnh": {
        "2021": 42593,
        "2022": 26000,
        "2023": 30765,
        "2024": 42316,
        "2025": 50770
      },
      "tts": {
        "2021": 62971,
        "2022": 55834,
        "2023": 60111,
        "2024": 70438,
        "2025": 83946
      },
      "lncpp": {
        "2021": 12675,
        "2022": 8724,
        "2023": 8160,
        "2024": 12582,
        "2025": 18068
      },
      "lntt": {
        "2021": 6472,
        "2022": 6056,
        "2023": 690,
        "2024": 4826,
        "2025": 8633
      },
      "cplv": {
        "2021": -674,
        "2022": 1362,
        "2023": 1448,
        "2024": 1137,
        "2025": 1471
      },
      "vhtt": {
        "2021": 20378,
        "2022": 23933,
        "2023": 23360,
        "2024": 28122,
        "2025": 33176
      },
      "tnpt": {
        "2021": 42593,
        "2022": 31902,
        "2023": 36752,
        "2024": 42316,
        "2025": 50770
      },
      "dtt": {
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
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2021": 5997,
        "2022": 10985,
        "2023": 12467,
        "2024": 12701,
        "2025": 16127
      },
      "nnh": {
        "2021": 2188,
        "2022": 2571,
        "2023": 3493,
        "2024": 2053,
        "2025": 4103
      },
      "tts": {
        "2021": 8520,
        "2022": 13405,
        "2023": 15536,
        "2024": 15821,
        "2025": 19538
      },
      "lncpp": {
        "2021": 2947,
        "2022": 5084,
        "2023": 5989,
        "2024": 7205,
        "2025": 8490
      },
      "lntt": {
        "2021": 2637,
        "2022": 6376,
        "2023": 3485,
        "2024": 3400,
        "2025": 3567
      },
      "cplv": {
        "2021": 14,
        "2022": 18,
        "2023": 32,
        "2024": 22,
        "2025": 41
      },
      "vhtt": {
        "2021": 6332,
        "2022": 10834,
        "2023": 12027,
        "2024": 13701,
        "2025": 15371
      },
      "tnpt": {
        "2021": 2188,
        "2022": 2572,
        "2023": 3509,
        "2024": 2120,
        "2025": 4167
      },
      "dtt": {
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
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2021": 43630,
        "2022": 47675,
        "2023": 43763,
        "2024": 53570,
        "2025": 36234
      },
      "nnh": {
        "2021": 34548,
        "2022": 65321,
        "2023": 50423,
        "2024": 58712,
        "2025": 40257
      },
      "tts": {
        "2021": 126093,
        "2022": 141343,
        "2023": 147383,
        "2024": 147585,
        "2025": 128963
      },
      "lncpp": {
        "2021": 18796,
        "2022": 11382,
        "2023": 11798,
        "2024": 9327,
        "2025": 14356
      },
      "lntt": {
        "2021": 11489,
        "2022": 5147,
        "2023": 2563,
        "2024": 6025,
        "2025": 7888
      },
      "cplv": {
        "2021": 4669,
        "2022": 4848,
        "2023": 6946,
        "2024": 6405,
        "2025": 5418
      },
      "vhtt": {
        "2021": 42337,
        "2022": 36637,
        "2023": 38237,
        "2024": 40752,
        "2025": 45079
      },
      "tnpt": {
        "2021": 83757,
        "2022": 104706,
        "2023": 109146,
        "2024": 106832,
        "2025": 83885
      },
      "dtt": {
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
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2021": 94437,
        "2022": 196535,
        "2023": 242341,
        "2024": 285479,
        "2025": 496890
      },
      "nnh": {
        "2021": 75401,
        "2022": 187762,
        "2023": 211073,
        "2024": 278532,
        "2025": 343090
      },
      "tts": {
        "2021": 230516,
        "2022": 361813,
        "2023": 444631,
        "2024": 564209,
        "2025": 787857
      },
      "lncpp": {
        "2021": 79413,
        "2022": 99934,
        "2023": 133392,
        "2024": 167206,
        "2025": 202644
      },
      "lntt": {
        "2021": 48183,
        "2022": 38643,
        "2023": 43310,
        "2024": 40848,
        "2025": 52810
      },
      "cplv": {
        "2021": 2348,
        "2022": 2076,
        "2023": 3053,
        "2024": 7589,
        "2025": 11214
      },
      "vhtt": {
        "2021": 131407,
        "2022": 148522,
        "2023": 182636,
        "2024": 220744,
        "2025": 249217
      },
      "tnpt": {
        "2021": 99109,
        "2022": 213291,
        "2023": 261994,
        "2024": 343465,
        "2025": 538641
      },
      "dtt": {
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
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2021": 9292,
        "2022": 11966,
        "2023": 12958,
        "2024": 15693,
        "2025": 18614
      },
      "nnh": {
        "2021": 4563,
        "2022": 4883,
        "2023": 4612,
        "2024": 5942,
        "2025": 6874
      },
      "tts": {
        "2021": 10619,
        "2022": 13337,
        "2023": 14428,
        "2024": 17208,
        "2025": 20164
      },
      "lncpp": {
        "2021": 1950,
        "2022": 2522,
        "2023": 2740,
        "2024": 3301,
        "2025": 4411
      },
      "lntt": {
        "2021": 1279,
        "2022": 2312,
        "2023": 2489,
        "2024": 2651,
        "2025": 3548
      },
      "cplv": {
        "2021": 104,
        "2022": 94,
        "2023": 119,
        "2024": 47,
        "2025": 119
      },
      "vhtt": {
        "2021": 6013,
        "2022": 8444,
        "2023": 9806,
        "2024": 11255,
        "2025": 13275
      },
      "tnpt": {
        "2021": 4606,
        "2022": 4893,
        "2023": 4621,
        "2024": 5952,
        "2025": 6889
      },
      "dtt": {
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
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2021": 5637,
        "2022": 7065,
        "2023": 7101,
        "2024": 7838,
        "2025": 9450
      },
      "nnh": {
        "2021": 5172,
        "2022": 7213,
        "2023": 7142,
        "2024": 6421,
        "2025": 6646
      },
      "tts": {
        "2021": 10863,
        "2022": 12974,
        "2023": 13012,
        "2024": 14122,
        "2025": 15977
      },
      "lncpp": {
        "2021": 595,
        "2022": 8,
        "2023": 28,
        "2024": 772,
        "2025": 1510
      },
      "lntt": {
        "2021": 980,
        "2022": 79,
        "2023": 98,
        "2024": 854,
        "2025": 1623
      },
      "cplv": {
        "2021": 182,
        "2022": 180,
        "2023": 262,
        "2024": 264,
        "2025": 261
      },
      "vhtt": {
        "2021": 4686,
        "2022": 4641,
        "2023": 4666,
        "2024": 6766,
        "2025": 8069
      },
      "tnpt": {
        "2021": 6177,
        "2022": 8333,
        "2023": 8345,
        "2024": 7355,
        "2025": 7908
      },
      "dtt": {
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
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2021": 21296,
        "2022": 19324,
        "2023": 0,
        "2024": 17689,
        "2025": 23627
      },
      "nnh": {
        "2021": 15470,
        "2022": 12763,
        "2023": 0,
        "2024": 12912,
        "2025": 16137
      },
      "tts": {
        "2021": 30969,
        "2022": 31999,
        "2023": 0,
        "2024": 29441,
        "2025": 31269
      },
      "lncpp": {
        "2021": 1838,
        "2022": 1683,
        "2023": 0,
        "2024": 1869,
        "2025": 4495
      },
      "lntt": {
        "2021": 719,
        "2022": 985,
        "2023": 0,
        "2024": 1373,
        "2025": 4878
      },
      "cplv": {
        "2021": 506,
        "2022": 757,
        "2023": 0,
        "2024": 434,
        "2025": 376
      },
      "vhtt": {
        "2021": 7628,
        "2022": 9931,
        "2023": 0,
        "2024": 11116,
        "2025": 12482
      },
      "tnpt": {
        "2021": 23342,
        "2022": 22069,
        "2023": 0,
        "2024": 18325,
        "2025": 18787
      },
      "dtt": {
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
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2021": 13400,
        "2022": 10129,
        "2023": 10707,
        "2024": 12879,
        "2025": 15089
      },
      "nnh": {
        "2021": 13624,
        "2022": 10302,
        "2023": 10904,
        "2024": 12463,
        "2025": 14211
      },
      "tts": {
        "2021": 27395,
        "2022": 23239,
        "2023": 23346,
        "2024": 25116,
        "2025": 28076
      },
      "lncpp": {
        "2021": 3533,
        "2022": 2563,
        "2023": 1853,
        "2024": 2020,
        "2025": 2486
      },
      "lntt": {
        "2021": 1032,
        "2022": -723,
        "2023": -252,
        "2024": 357,
        "2025": 660
      },
      "cplv": {
        "2021": 252,
        "2022": 341,
        "2023": 354,
        "2024": 304,
        "2025": 336
      },
      "vhtt": {
        "2021": 10869,
        "2022": 9892,
        "2023": 9279,
        "2024": 9381,
        "2025": 10328
      },
      "tnpt": {
        "2021": 16526,
        "2022": 13348,
        "2023": 14067,
        "2024": 15735,
        "2025": 17748
      },
      "dtt": {
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
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2021": 29071,
        "2022": 34453,
        "2023": 37540,
        "2024": 48681,
        "2025": 58016
      },
      "nnh": {
        "2021": 16603,
        "2022": 16586,
        "2023": 18103,
        "2024": 22599,
        "2025": 32499
      },
      "tts": {
        "2021": 52851,
        "2022": 50303,
        "2023": 52464,
        "2024": 63439,
        "2025": 81511
      },
      "lncpp": {
        "2021": -4680,
        "2022": -3970,
        "2023": -3377,
        "2024": 2284,
        "2025": 9130
      },
      "lntt": {
        "2021": 880,
        "2022": 3014,
        "2023": 3879,
        "2024": 10667,
        "2025": 15176
      },
      "cplv": {
        "2021": 536,
        "2022": 486,
        "2023": 375,
        "2024": 315,
        "2025": 332
      },
      "vhtt": {
        "2021": 28634,
        "2022": 29108,
        "2023": 30517,
        "2024": 35832,
        "2025": 42838
      },
      "tnpt": {
        "2021": 24217,
        "2022": 21195,
        "2023": 21947,
        "2024": 27607,
        "2025": 38672
      },
      "dtt": {
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
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2021": 13672,
        "2022": 10099,
        "2023": 11508,
        "2024": 15257,
        "2025": 16934
      },
      "nnh": {
        "2021": 13968,
        "2022": 10427,
        "2023": 11028,
        "2024": 13000,
        "2025": 14681
      },
      "tts": {
        "2021": 21049,
        "2022": 18426,
        "2023": 20141,
        "2024": 23768,
        "2025": 26105
      },
      "lncpp": {
        "2021": 1822,
        "2022": 2840,
        "2023": 2066,
        "2024": 3190,
        "2025": 2872
      },
      "lntt": {
        "2021": 2395,
        "2022": 2818,
        "2023": 3042,
        "2024": 3588,
        "2025": 4364
      },
      "cplv": {
        "2021": 221,
        "2022": 335,
        "2023": 445,
        "2024": 296,
        "2025": 347
      },
      "vhtt": {
        "2021": 6289,
        "2022": 7920,
        "2023": 9074,
        "2024": 10646,
        "2025": 11231
      },
      "tnpt": {
        "2021": 14760,
        "2022": 10506,
        "2023": 11067,
        "2024": 13122,
        "2025": 14874
      },
      "dtt": {
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
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2021": 5323,
        "2022": 6090,
        "2023": 8093,
        "2024": 10011,
        "2025": 10881
      },
      "nnh": {
        "2021": 2710,
        "2022": 2750,
        "2023": 3281,
        "2024": 3627,
        "2025": 3544
      },
      "tts": {
        "2021": 9876,
        "2022": 10266,
        "2023": 12053,
        "2024": 13808,
        "2025": 14350
      },
      "lncpp": {
        "2021": 3368,
        "2022": 3701,
        "2023": 4778,
        "2024": 5851,
        "2025": 6424
      },
      "lntt": {
        "2021": 1439,
        "2022": 1505,
        "2023": 2447,
        "2024": 2645,
        "2025": 2212
      },
      "cplv": {
        "2021": 66,
        "2022": 83,
        "2023": 136,
        "2024": 94,
        "2025": 107
      },
      "vhtt": {
        "2021": 7095,
        "2022": 7465,
        "2023": 8581,
        "2024": 10002,
        "2025": 10646
      },
      "tnpt": {
        "2021": 2781,
        "2022": 2802,
        "2023": 3472,
        "2024": 3807,
        "2025": 3704
      },
      "dtt": {
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
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2021": 2849,
        "2022": 3039,
        "2023": 2659,
        "2024": 2474,
        "2025": 3121
      },
      "nnh": {
        "2021": 4828,
        "2022": 7328,
        "2023": 9609,
        "2024": 14304,
        "2025": 16543
      },
      "tts": {
        "2021": 14017,
        "2022": 12670,
        "2023": 14096,
        "2024": 16695,
        "2025": 19678
      },
      "lncpp": {
        "2021": -3426,
        "2022": -7003,
        "2023": -8102,
        "2024": -9384,
        "2025": -10371
      },
      "lntt": {
        "2021": -1299,
        "2022": -3566,
        "2023": -1110,
        "2024": -1282,
        "2025": -980
      },
      "cplv": {
        "2021": 304,
        "2022": 308,
        "2023": 325,
        "2024": 313,
        "2025": 415
      },
      "vhtt": {
        "2021": 5997,
        "2022": 3034,
        "2023": 2256,
        "2024": 1636,
        "2025": 1045
      },
      "tnpt": {
        "2021": 8020,
        "2022": 9635,
        "2023": 11840,
        "2024": 15060,
        "2025": 18633
      },
      "dtt": {
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
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2021": 4342,
        "2022": 3975,
        "2023": 4751,
        "2024": 1753,
        "2025": 2203
      },
      "nnh": {
        "2021": 2523,
        "2022": 3098,
        "2023": 3461,
        "2024": 3245,
        "2025": 5242
      },
      "tts": {
        "2021": 11871,
        "2022": 13346,
        "2023": 12733,
        "2024": 11229,
        "2025": 11368
      },
      "lncpp": {
        "2021": 132,
        "2022": -13,
        "2023": -399,
        "2024": -1042,
        "2025": -479
      },
      "lntt": {
        "2021": 1699,
        "2022": -236,
        "2023": -542,
        "2024": 23,
        "2025": 624
      },
      "cplv": {
        "2021": 465,
        "2022": 396,
        "2023": 508,
        "2024": 376,
        "2025": 0
      },
      "vhtt": {
        "2021": 5751,
        "2022": 5624,
        "2023": 5084,
        "2024": 4469,
        "2025": 5201
      },
      "tnpt": {
        "2021": 6120,
        "2022": 7723,
        "2023": 7649,
        "2024": 6759,
        "2025": 6167
      },
      "dtt": {
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
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2021": 14877,
        "2022": 13604,
        "2023": 0,
        "2024": 13735,
        "2025": 0
      },
      "nnh": {
        "2021": 11644,
        "2022": 12641,
        "2023": 13703,
        "2024": 12411,
        "2025": 0
      },
      "tts": {
        "2021": 16577,
        "2022": 15594,
        "2023": 0,
        "2024": 15412,
        "2025": 0
      },
      "lncpp": {
        "2021": 793,
        "2022": -2101,
        "2023": -3240,
        "2024": -2299,
        "2025": 0
      },
      "lntt": {
        "2021": 149,
        "2022": -2334,
        "2023": -1080,
        "2024": 1009,
        "2025": 0
      },
      "cplv": {
        "2021": 299,
        "2022": 520,
        "2023": 557,
        "2024": 404,
        "2025": 0
      },
      "vhtt": {
        "2021": 4057,
        "2022": 1219,
        "2023": 93,
        "2024": 1748,
        "2025": 0
      },
      "tnpt": {
        "2021": 12520,
        "2022": 14376,
        "2023": 15156,
        "2024": 13664,
        "2025": 0
      },
      "dtt": {
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
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2021": 3905,
        "2022": 4273,
        "2023": 5530,
        "2024": 5344,
        "2025": 0
      },
      "nnh": {
        "2021": 3488,
        "2022": 2822,
        "2023": 2895,
        "2024": 2951,
        "2025": 0
      },
      "tts": {
        "2021": 7810,
        "2022": 8271,
        "2023": 9605,
        "2024": 9409,
        "2025": 0
      },
      "lncpp": {
        "2021": 64,
        "2022": 213,
        "2023": 139,
        "2024": 317,
        "2025": 0
      },
      "lntt": {
        "2021": 87,
        "2022": 186,
        "2023": 161,
        "2024": 215,
        "2025": 0
      },
      "cplv": {
        "2021": 236,
        "2022": 207,
        "2023": 203,
        "2024": 172,
        "2025": 0
      },
      "vhtt": {
        "2021": 1281,
        "2022": 2493,
        "2023": 3743,
        "2024": 3920,
        "2025": 0
      },
      "tnpt": {
        "2021": 6529,
        "2022": 5778,
        "2023": 5863,
        "2024": 5489,
        "2025": 0
      },
      "dtt": {
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
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2021": 44544,
        "2022": 58471,
        "2023": 68681,
        "2024": 71516,
        "2025": 70241
      },
      "nnh": {
        "2021": 26940,
        "2022": 26015,
        "2023": 28442,
        "2024": 31984,
        "2025": 23774
      },
      "tts": {
        "2021": 66796,
        "2022": 78488,
        "2023": 86595,
        "2024": 88387,
        "2025": 85143
      },
      "lncpp": {
        "2021": 6562,
        "2022": 14652,
        "2023": 16340,
        "2024": 11826,
        "2025": 7414
      },
      "lntt": {
        "2021": 6941,
        "2022": 15586,
        "2023": 9639,
        "2024": 736,
        "2025": 6005
      },
      "cplv": {
        "2021": 407,
        "2022": 253,
        "2023": 288,
        "2024": 261,
        "2025": 274
      },
      "vhtt": {
        "2021": 37564,
        "2022": 51190,
        "2023": 57269,
        "2024": 55538,
        "2025": 60513
      },
      "tnpt": {
        "2021": 29232,
        "2022": 27298,
        "2023": 29326,
        "2024": 32849,
        "2025": 24630
      },
      "dtt": {
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
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2021": 21550,
        "2022": 23233,
        "2023": 32977,
        "2024": 35543,
        "2025": 38938
      },
      "nnh": {
        "2021": 15725,
        "2022": 17215,
        "2023": 27144,
        "2024": 29953,
        "2025": 33687
      },
      "tts": {
        "2021": 27198,
        "2022": 28810,
        "2023": 38839,
        "2024": 41734,
        "2025": 45610
      },
      "lncpp": {
        "2021": -402,
        "2022": -186,
        "2023": -6,
        "2024": 70,
        "2025": 129
      },
      "lntt": {
        "2021": 928,
        "2022": 912,
        "2023": 798,
        "2024": 633,
        "2025": 654
      },
      "cplv": {
        "2021": 145,
        "2022": 180,
        "2023": 261,
        "2024": 188,
        "2025": 339
      },
      "vhtt": {
        "2021": 11185,
        "2022": 11327,
        "2023": 11393,
        "2024": 11448,
        "2025": 11555
      },
      "tnpt": {
        "2021": 16012,
        "2022": 17483,
        "2023": 27446,
        "2024": 30286,
        "2025": 34055
      },
      "dtt": {
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
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2021": 1878,
        "2022": 1695,
        "2023": 1162,
        "2024": 1634,
        "2025": 2049
      },
      "nnh": {
        "2021": 692,
        "2022": 564,
        "2023": 415,
        "2024": 767,
        "2025": 892
      },
      "tts": {
        "2021": 5438,
        "2022": 5396,
        "2023": 5367,
        "2024": 5757,
        "2025": 6098
      },
      "lncpp": {
        "2021": 210,
        "2022": 284,
        "2023": 365,
        "2024": 179,
        "2025": 493
      },
      "lntt": {
        "2021": 974,
        "2022": 241,
        "2023": 363,
        "2024": 225,
        "2025": 429
      },
      "cplv": {
        "2021": 5,
        "2022": 13,
        "2023": 5,
        "2024": 1,
        "2025": 36
      },
      "vhtt": {
        "2021": 2563,
        "2022": 2687,
        "2023": 2844,
        "2024": 2877,
        "2025": 3214
      },
      "tnpt": {
        "2021": 2874,
        "2022": 2709,
        "2023": 2523,
        "2024": 2881,
        "2025": 2884
      },
      "dtt": {
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
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2021": 37568,
        "2022": 18195,
        "2023": 42680,
        "2024": 40695,
        "2025": 26970
      },
      "nnh": {
        "2021": 3688,
        "2022": 2166,
        "2023": 6722,
        "2024": 7634,
        "2025": 12336
      },
      "tts": {
        "2021": 54979,
        "2022": 27445,
        "2023": 67348,
        "2024": 77282,
        "2025": 91910
      },
      "lncpp": {
        "2021": 9793,
        "2022": 11707,
        "2023": 22542,
        "2024": 32166,
        "2025": 17767
      },
      "lntt": {
        "2021": 990,
        "2022": 7851,
        "2023": 10492,
        "2024": 14465,
        "2025": 15409
      },
      "cplv": {
        "2021": 89,
        "2022": 14,
        "2023": 67,
        "2024": 61,
        "2025": 60
      },
      "vhtt": {
        "2021": 37653,
        "2022": 25223,
        "2023": 50414,
        "2024": 60041,
        "2025": 69902
      },
      "tnpt": {
        "2021": 17327,
        "2022": 2222,
        "2023": 16934,
        "2024": 17241,
        "2025": 22007
      },
      "dtt": {
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
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2021": 7179,
        "2022": 7561,
        "2023": 6890,
        "2024": 6176,
        "2025": 7566
      },
      "nnh": {
        "2021": 3947,
        "2022": 4547,
        "2023": 4351,
        "2024": 4260,
        "2025": 5372
      },
      "tts": {
        "2021": 9559,
        "2022": 10638,
        "2023": 10209,
        "2024": 9537,
        "2025": 11205
      },
      "lncpp": {
        "2021": 812,
        "2022": 1009,
        "2023": 776,
        "2024": 184,
        "2025": 727
      },
      "lntt": {
        "2021": 775,
        "2022": 940,
        "2023": -96,
        "2024": -130,
        "2025": 584
      },
      "cplv": {
        "2021": 53,
        "2022": 85,
        "2023": 141,
        "2024": 143,
        "2025": 147
      },
      "vhtt": {
        "2021": 5492,
        "2022": 5785,
        "2023": 5625,
        "2024": 4913,
        "2025": 5361
      },
      "tnpt": {
        "2021": 4067,
        "2022": 4853,
        "2023": 4751,
        "2024": 4624,
        "2025": 5844
      },
      "dtt": {
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
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2021": 9546,
        "2022": 9556,
        "2023": 9012,
        "2024": 9552,
        "2025": 10763
      },
      "nnh": {
        "2021": 6989,
        "2022": 7078,
        "2023": 6894,
        "2024": 7067,
        "2025": 8043
      },
      "tts": {
        "2021": 20346,
        "2022": 20034,
        "2023": 19076,
        "2024": 19266,
        "2025": 20555
      },
      "lncpp": {
        "2021": 1420,
        "2022": 1221,
        "2023": 875,
        "2024": 931,
        "2025": 1427
      },
      "lntt": {
        "2021": 1456,
        "2022": 1212,
        "2023": 539,
        "2024": 835,
        "2025": 1480
      },
      "cplv": {
        "2021": 238,
        "2022": 306,
        "2023": 348,
        "2024": 340,
        "2025": 318
      },
      "vhtt": {
        "2021": 9233,
        "2022": 9430,
        "2023": 9142,
        "2024": 9276,
        "2025": 10006
      },
      "tnpt": {
        "2021": 11113,
        "2022": 10604,
        "2023": 9934,
        "2024": 9990,
        "2025": 10549
      },
      "dtt": {
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
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2021": 3768,
        "2022": 3767,
        "2023": 4080,
        "2024": 4363,
        "2025": 4710
      },
      "nnh": {
        "2021": 2816,
        "2022": 2946,
        "2023": 2886,
        "2024": 2914,
        "2025": 3589
      },
      "tts": {
        "2021": 5862,
        "2022": 5778,
        "2023": 6078,
        "2024": 6455,
        "2025": 7652
      },
      "lncpp": {
        "2021": 676,
        "2022": 270,
        "2023": 547,
        "2024": 793,
        "2025": 1261
      },
      "lntt": {
        "2021": 234,
        "2022": 132,
        "2023": 425,
        "2024": 509,
        "2025": 825
      },
      "cplv": {
        "2021": 59,
        "2022": 64,
        "2023": 74,
        "2024": 54,
        "2025": 67
      },
      "vhtt": {
        "2021": 2995,
        "2022": 2766,
        "2023": 3131,
        "2024": 3510,
        "2025": 4032
      },
      "tnpt": {
        "2021": 2867,
        "2022": 3013,
        "2023": 2947,
        "2024": 2946,
        "2025": 3621
      },
      "dtt": {
        "2021": 4874,
        "2022": 5541,
        "2023": 5583,
        "2024": 5522,
        "2025": 5646
      }
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PRELOADED_STOCKS, STOCK_DIRECTORY, searchStockDirectory, removeVietnameseAccents };
}
