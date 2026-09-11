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
    "currentPrice": 21850,
    "years": [
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2022": 80515,
        "2023": 82716,
        "2024": 86674,
        "2025": 103659
      },
      "nnh": {
        "2022": 62385,
        "2023": 71513,
        "2024": 75225,
        "2025": 94186
      },
      "tts": {
        "2022": 170336,
        "2023": 187783,
        "2024": 224490,
        "2025": 257899
      },
      "lncpp": {
        "2022": 33834,
        "2023": 40593,
        "2024": 49599,
        "2025": 51038
      },
      "lntt": {
        "2022": 9923,
        "2023": 7793,
        "2024": 13694,
        "2025": 18041
      },
      "cplv": {
        "2022": 3084,
        "2023": 3585,
        "2024": 2287,
        "2025": 3115
      },
      "vhtt": {
        "2022": 96113,
        "2023": 102836,
        "2024": 114647,
        "2025": 131220
      },
      "tnpt": {
        "2022": 74223,
        "2023": 84946,
        "2024": 109842,
        "2025": 126679
      },
      "dtt": {
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
    "currentPrice": 61600,
    "years": [
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2022": 31560,
        "2023": 35936,
        "2024": 37554,
        "2025": 36261
      },
      "nnh": {
        "2022": 15308,
        "2023": 17139,
        "2024": 18460,
        "2025": 18520
      },
      "tts": {
        "2022": 48483,
        "2023": 52673,
        "2024": 55049,
        "2025": 53312
      },
      "lncpp": {
        "2022": 3353,
        "2023": 3926,
        "2024": 3471,
        "2025": 0
      },
      "lntt": {
        "2022": 10496,
        "2023": 10968,
        "2024": 11600,
        "2025": 11650
      },
      "cplv": {
        "2022": 166,
        "2023": 354,
        "2024": 279,
        "2025": 326
      },
      "vhtt": {
        "2022": 32817,
        "2023": 35026,
        "2024": 36174,
        "2025": 30685
      },
      "tnpt": {
        "2022": 15666,
        "2023": 17648,
        "2024": 18875,
        "2025": 18829
      },
      "dtt": {
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
    "currentPrice": 74500,
    "years": [
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2022": 30938,
        "2023": 36706,
        "2024": 45536,
        "2025": 58137
      },
      "nnh": {
        "2022": 24521,
        "2023": 29652,
        "2024": 34836,
        "2025": 41525
      },
      "tts": {
        "2022": 51650,
        "2023": 60283,
        "2024": 72000,
        "2025": 88142
      },
      "lncpp": {
        "2022": 7712,
        "2023": 8674,
        "2024": 11031,
        "2025": 14302
      },
      "lntt": {
        "2022": 7662,
        "2023": 9203,
        "2024": 11070,
        "2025": 13044
      },
      "cplv": {
        "2022": 646,
        "2023": 833,
        "2024": 552,
        "2025": 810
      },
      "vhtt": {
        "2022": 25356,
        "2023": 29933,
        "2024": 35728,
        "2025": 43748
      },
      "tnpt": {
        "2022": 26294,
        "2023": 30350,
        "2024": 36272,
        "2025": 44394
      },
      "dtt": {
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
    "currentPrice": 72900,
    "years": [
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2022": 44578,
        "2023": 51950,
        "2024": 65836,
        "2025": 77202
      },
      "nnh": {
        "2022": 26000,
        "2023": 30765,
        "2024": 42316,
        "2025": 50770
      },
      "tts": {
        "2022": 55834,
        "2023": 60111,
        "2024": 70438,
        "2025": 83946
      },
      "lncpp": {
        "2022": 8724,
        "2023": 8160,
        "2024": 12582,
        "2025": 18068
      },
      "lntt": {
        "2022": 6056,
        "2023": 690,
        "2024": 4826,
        "2025": 8633
      },
      "cplv": {
        "2022": 1362,
        "2023": 1448,
        "2024": 1137,
        "2025": 1471
      },
      "vhtt": {
        "2022": 23933,
        "2023": 23360,
        "2024": 28122,
        "2025": 33176
      },
      "tnpt": {
        "2022": 31902,
        "2023": 36752,
        "2024": 42316,
        "2025": 50770
      },
      "dtt": {
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
    "currentPrice": 47000,
    "years": [
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2022": 10985,
        "2023": 12467,
        "2024": 12701,
        "2025": 16127
      },
      "nnh": {
        "2022": 2571,
        "2023": 3493,
        "2024": 2053,
        "2025": 4103
      },
      "tts": {
        "2022": 13405,
        "2023": 15536,
        "2024": 15821,
        "2025": 19538
      },
      "lncpp": {
        "2022": 5084,
        "2023": 5989,
        "2024": 7205,
        "2025": 8490
      },
      "lntt": {
        "2022": 6376,
        "2023": 3485,
        "2024": 3400,
        "2025": 3567
      },
      "cplv": {
        "2022": 18,
        "2023": 32,
        "2024": 22,
        "2025": 41
      },
      "vhtt": {
        "2022": 10834,
        "2023": 12027,
        "2024": 13701,
        "2025": 15371
      },
      "tnpt": {
        "2022": 2572,
        "2023": 3509,
        "2024": 2120,
        "2025": 4167
      },
      "dtt": {
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
    "currentPrice": 68700,
    "years": [
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2022": 47675,
        "2023": 43763,
        "2024": 53570,
        "2025": 36234
      },
      "nnh": {
        "2022": 65321,
        "2023": 50423,
        "2024": 58712,
        "2025": 40257
      },
      "tts": {
        "2022": 141343,
        "2023": 147383,
        "2024": 147585,
        "2025": 128963
      },
      "lncpp": {
        "2022": 11382,
        "2023": 11798,
        "2024": 9327,
        "2025": 14356
      },
      "lntt": {
        "2022": 5147,
        "2023": 2563,
        "2024": 6025,
        "2025": 7888
      },
      "cplv": {
        "2022": 4848,
        "2023": 6946,
        "2024": 6405,
        "2025": 5418
      },
      "vhtt": {
        "2022": 36637,
        "2023": 38237,
        "2024": 40752,
        "2025": 45079
      },
      "tnpt": {
        "2022": 104706,
        "2023": 109146,
        "2024": 106832,
        "2025": 83885
      },
      "dtt": {
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
    "currentPrice": 73100,
    "years": [
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2022": 196535,
        "2023": 242341,
        "2024": 285479,
        "2025": 496890
      },
      "nnh": {
        "2022": 187762,
        "2023": 211073,
        "2024": 278532,
        "2025": 343090
      },
      "tts": {
        "2022": 361813,
        "2023": 444631,
        "2024": 564209,
        "2025": 787857
      },
      "lncpp": {
        "2022": 99934,
        "2023": 133392,
        "2024": 167206,
        "2025": 202644
      },
      "lntt": {
        "2022": 38643,
        "2023": 43310,
        "2024": 40848,
        "2025": 52810
      },
      "cplv": {
        "2022": 2076,
        "2023": 3053,
        "2024": 7589,
        "2025": 11214
      },
      "vhtt": {
        "2022": 148522,
        "2023": 182636,
        "2024": 220744,
        "2025": 249217
      },
      "tnpt": {
        "2022": 213291,
        "2023": 261994,
        "2024": 343465,
        "2025": 538641
      },
      "dtt": {
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
    "currentPrice": 38200,
    "years": [
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2022": 11966,
        "2023": 12958,
        "2024": 15693,
        "2025": 18614
      },
      "nnh": {
        "2022": 4883,
        "2023": 4612,
        "2024": 5942,
        "2025": 6874
      },
      "tts": {
        "2022": 13337,
        "2023": 14428,
        "2024": 17208,
        "2025": 20164
      },
      "lncpp": {
        "2022": 2522,
        "2023": 2740,
        "2024": 3301,
        "2025": 4411
      },
      "lntt": {
        "2022": 2312,
        "2023": 2489,
        "2024": 2651,
        "2025": 3548
      },
      "cplv": {
        "2022": 94,
        "2023": 119,
        "2024": 47,
        "2025": 119
      },
      "vhtt": {
        "2022": 8444,
        "2023": 9806,
        "2024": 11255,
        "2025": 13275
      },
      "tnpt": {
        "2022": 4893,
        "2023": 4621,
        "2024": 5952,
        "2025": 6889
      },
      "dtt": {
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
    "currentPrice": 16500,
    "years": [
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2022": 7065,
        "2023": 7101,
        "2024": 7838,
        "2025": 9450
      },
      "nnh": {
        "2022": 7213,
        "2023": 7142,
        "2024": 6421,
        "2025": 6646
      },
      "tts": {
        "2022": 12974,
        "2023": 13012,
        "2024": 14122,
        "2025": 15977
      },
      "lncpp": {
        "2022": 8,
        "2023": 28,
        "2024": 772,
        "2025": 1510
      },
      "lntt": {
        "2022": 79,
        "2023": 98,
        "2024": 854,
        "2025": 1623
      },
      "cplv": {
        "2022": 180,
        "2023": 262,
        "2024": 264,
        "2025": 261
      },
      "vhtt": {
        "2022": 4641,
        "2023": 4666,
        "2024": 6766,
        "2025": 8069
      },
      "tnpt": {
        "2022": 8333,
        "2023": 8345,
        "2024": 7355,
        "2025": 7908
      },
      "dtt": {
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
    "currentPrice": 15450,
    "years": [
      2022,
      2023,
      2024,
      2025
    ],
    "unit": "tỷ VNĐ",
    "data": {
      "tsnh": {
        "2022": 19324,
        "2023": 0,
        "2024": 17689,
        "2025": 23627
      },
      "nnh": {
        "2022": 12763,
        "2023": 0,
        "2024": 12912,
        "2025": 16137
      },
      "tts": {
        "2022": 31999,
        "2023": 0,
        "2024": 29441,
        "2025": 31269
      },
      "lncpp": {
        "2022": 1683,
        "2023": 0,
        "2024": 1869,
        "2025": 4495
      },
      "lntt": {
        "2022": 985,
        "2023": 0,
        "2024": 1373,
        "2025": 4878
      },
      "cplv": {
        "2022": 757,
        "2023": 0,
        "2024": 434,
        "2025": 376
      },
      "vhtt": {
        "2022": 9931,
        "2023": 0,
        "2024": 11116,
        "2025": 12482
      },
      "tnpt": {
        "2022": 22069,
        "2023": 0,
        "2024": 18325,
        "2025": 18787
      },
      "dtt": {
        "2022": 8453,
        "2023": 0,
        "2024": 12870,
        "2025": 16071
      }
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PRELOADED_STOCKS,  STOCK_DIRECTORY, searchStockDirectory, removeVietnameseAccents };
}
