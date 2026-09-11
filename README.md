# 📊 Altman Z-Score Analytics & Multi-Year Financial Diagnostic

Hệ thống phân tích và dự báo nguy cơ kiệt quệ tài chính / phá sản doanh nghiệp ứng dụng mô hình **Altman Z-Score** và **Z'-Score** qua nhiều năm tài chính liên tiếp với dải năm tùy biến linh hoạt, kết hợp biểu đồ cột - đường (Combo Bar & Line Chart) trực quan.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FCAZRALO%2FCalcZScore)

---

## 🌟 Tính Năng Nổi Bật

1. **Liên kết Sàn Chứng Khoán & Tự Động Trích Xuất BCTC (Vercel Serverless API)**:
   - **Thanh tìm kiếm thông minh (Smart Autocomplete)**: Cho phép tìm kiếm bất kỳ doanh nghiệp nào trên 3 sàn **HOSE, HNX, UPCoM** bằng mã chứng khoán (VD: `HPG`, `VNM`, `FPT`, `MWG`...) hoặc tên tiếng Việt có dấu/không dấu (VD: *Hòa Phát, Vinamilk, Thế Giới Di Động, Hóa chất Đức Giang*...).
   - **Serverless Data Engine (`/api/stock`)**: Tự động bóc tách chuẩn xác 9 chỉ tiêu BCTC qua các năm từ cổng thông tin tài chính: Tài sản ngắn hạn, Nợ ngắn hạn, Tổng tài sản, Lợi nhuận chưa phân phối, Tổng nợ phải trả, Vốn chủ sở hữu / Vốn hóa, Doanh thu thuần, LNTT, Chi phí lãi vay.
   - **Tự động đổ số liệu & Chẩn đoán tức thì**: Điền tự động vào bảng ma trận, đồng bộ dải năm và vẽ lại toàn bộ biểu đồ Z-Score / Z'-Score chỉ sau 1 cú click.
   - **Cảnh báo thông minh**: Tự động nhận diện các doanh nghiệp thuộc khối Ngân hàng / Bảo hiểm / Tài chính đặc thù (vốn không áp dụng mô hình Altman sản xuất thông thường) và đưa ra khuyến nghị phù hợp.
2. **Hỗ trợ 2 mô hình học thuật chuẩn Altman**:
   - **Mô hình Z (1968)**: Dành cho doanh nghiệp sản xuất niêm yết (5 biến số, vốn hóa thị trường).
   - **Mô hình Z' (1983)**: Dành cho doanh nghiệp tính theo giá trị sổ sách vốn chủ sở hữu (5 biến số).
3. **Tùy biến dải năm phân tích linh hoạt (Custom Year Range)**:
   - Cho phép người dùng **tự do nhập Năm đầu và Năm cuối** (ví dụ: 2019 - 2024, 2020 - 2025,...) thay vì bị cố định.
   - Tự động sinh bảng nhập liệu và biểu đồ tương ứng với số năm được chọn.
   - Tự động kiểm tra tính hợp lệ và cập nhật kết quả tức thì theo thời gian thực (Reactive calculation).
   - Lưu trữ dữ liệu cục bộ (`localStorage`) tự động, không bị mất số liệu khi tải lại trang.
4. **Biểu đồ Cột kết hợp Đường (Combo Bar & Line Chart)**:
   - **Dạng cột (Bar)**: Thể hiện điểm số Z-Score từng năm với màu sắc động ứng với từng vùng rủi ro (Xanh lá = An toàn, Vàng cam = Vùng xám cảnh báo, Đỏ = Nguy cơ kiệt quệ tài chính).
   - **Dạng đường (Line)**: Đường xu hướng kết nối điểm Z-Score qua các năm giúp nhận biết ngay doanh nghiệp đang cải thiện hay xấu đi.
   - **Vạch ngưỡng chuẩn (Threshold Lines)**: Đường nét đứt màu đỏ và xanh thể hiện ranh giới các vùng an toàn và nguy cơ.
   - **Biểu đồ bóc tách thành phần**: Phân tích chi tiết mức độ đóng góp của $X_1, X_2, X_3, X_4, X_5$.
5. **Mô Phỏng Giả Định (What-If Scenario Simulation) & Dự Báo Tương Lai**:
   - Cho phép người dùng trực tiếp **kéo trượt điều chỉnh các giả định kinh doanh cốt lõi** cho năm tiếp theo: Biến động Doanh thu thuần, Chi phí lãi vay, Lợi nhuận trước thuế (EBT), Tổng nợ phải trả và Vốn hóa thị trường.
   - **Tích hợp kịch bản Stress-Test 1-Click**:
     - *Cảnh báo suy thoái*: Doanh thu $-20\%$ và Chi phí lãi vay $+30\%$.
     - *Khủng hoảng dòng tiền cực đoan*: Doanh thu $-35\%$, Lãi vay $+50\%$, Nợ $+25\%$.
     - *Kịch bản cơ sở*: Giữ nguyên $0\%$ biến động.
     - *Tăng trưởng bứt phá*: Doanh thu $+25\%$, Lãi vay $-10\%$, LNTT $+35\%$.
   - **Chiếu trực tiếp quỹ đạo lên biểu đồ**: Biểu đồ chính tự động nối thêm cột dự phóng kèm đường xu thế nét đứt, cho thấy tức thì điểm số Z-Score sẽ trượt xuống vùng rủi ro nào.
   - **Bóc tách độ nhạy thành phần ($X_1 - X_5$) & Tư vấn quản trị**: Tự động chỉ ra cấu phần làm xói mòn điểm số mạnh nhất và đề xuất giải pháp cơ cấu nợ, bảo toàn thanh khoản.
6. **Chẩn đoán & Nhận định Tài chính Tự Động**:
   - Tự động nhận diện rủi ro: Vốn lưu động ròng âm ($X_1 < 0$), gánh nặng đòn bẩy nợ vay quá lớn ($X_4$ thấp), biên EBIT suy thoái ($X_3 < 0$),...
   - Đưa ra nhận xét xu hướng và khuyến nghị quản trị dòng tiền.
7. **Dữ liệu mẫu (Preset Demo)**:
   - Tải nhanh dữ liệu mẫu Doanh nghiệp Tăng trưởng An toàn, Doanh nghiệp Vùng xám và Doanh nghiệp Nguy cơ phá sản cao chỉ bằng 1 cú nhấp chuột.

---

## 📐 Công Thức Tính Toán

### 1. Mô hình Z (1968 - Doanh nghiệp sản xuất niêm yết)
$$Z = 1.2 X_1 + 1.4 X_2 + 3.3 X_3 + 0.6 X_4 + 0.999 X_5$$

- $X_1 = \frac{\text{Tài sản ngắn hạn} - \text{Nợ ngắn hạn}}{\text{Tổng tài sản}}$ (Vốn lưu động ròng / TTS)
- $X_2 = \frac{\text{Lợi nhuận chưa phân phối}}{\text{Tổng tài sản}}$ (Lợi nhuận giữ lại / TTS)
- $X_3 = \frac{\text{Lợi nhuận trước thuế} + \text{Chi phí lãi vay}}{\text{Tổng tài sản}}$ (EBIT / TTS)
- $X_4 = \frac{\text{Vốn hóa thị trường}}{\text{Tổng nợ phải trả}}$
- $X_5 = \frac{\text{Doanh thu thuần}}{\text{Tổng tài sản}}$ (Vòng quay tài sản)

**Ngưỡng đánh giá**:
- $Z \ge 2.99$: **Vùng an toàn (Safe Zone)** - Tình hình tài chính vững chắc.
- $1.81 \le Z < 2.99$: **Vùng xám (Grey Zone)** - Cần theo dõi thêm, có yếu tố rủi ro.
- $Z < 1.81$: **Vùng nguy hiểm (Distress Zone)** - Nguy cơ kiệt quệ tài chính / vỡ nợ cao.

### 2. Mô hình Z' (1983)
$$Z' = 0.717 X_1 + 0.847 X_2 + 3.107 X_3 + 0.420 X_4 + 0.998 X_5$$
*(Trong đó $X_4 = \text{Giá trị sổ sách Vốn chủ sở hữu} / \text{Tổng nợ phải trả}$)*

**Ngưỡng đánh giá**:
- $Z' \ge 2.90$: An toàn
- $1.23 \le Z' < 2.90$: Vùng xám
- $Z' < 1.23$: Nguy hiểm

---

## 🚀 Triển Khai Lên Vercel (Vercel Deployment)

Dự án đã được cấu hình sẵn file `vercel.json` chuẩn tĩnh (Static Site), bạn có thể deploy theo 2 cách cực kỳ đơn giản:

### Cách 1: Deploy qua Vercel Dashboard (Khuyên Dùng)
1. Đăng nhập vào [Vercel](https://vercel.com).
2. Nhấp **Add New...** -> **Project**.
3. Kết nối với tài khoản GitHub và chọn kho lưu trữ `CAZRALO/CalcZScore`.
4. Nhấn **Deploy** (Vercel sẽ tự động phát hiện `index.html` và `vercel.json`).
5. Chỉ sau khoảng 10 giây, ứng dụng sẽ có link truy cập dạng `https://calc-z-score.vercel.app`.

### Cách 2: Deploy qua Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## 🛠️ Công Nghệ Sử Dụng
- **HTML5 & Vanilla JavaScript**: Không cần build step, tốc độ tải tức thì, chạy mượt mà trên mọi thiết bị.
- **Tailwind CSS CDN**: Thiết kế giao diện hiện đại phong cách FinTech Dashboard.
- **Chart.js**: Biểu đồ tương tác thời gian thực (Dual Bar & Line Chart).
- **Lucide Icons**: Bộ biểu tượng giao diện trực quan.

---

## 📂 Cấu Trúc Thư Mục
```text
CalcZScore/
├── api/
│   └── stock.js           # Vercel Serverless Function trích xuất BCTC từ sàn
├── stock_directory.js     # Danh bạ 150+ doanh nghiệp niêm yết & cache BCTC
├── index.html             # Giao diện chính & bảng tính toán Z-Score
├── calc_zscore.html       # File điều hướng tương thích
├── package.json           # Cấu hình dự án & dependencies (cheerio)
├── vercel.json            # Cấu hình deployment Vercel
├── .gitignore             # File bỏ qua cho git
└── README.md              # Tài liệu hướng dẫn
```

---

## 👤 Tác Giả & Bản Quyền
- Repository: [https://github.com/CAZRALO/CalcZScore](https://github.com/CAZRALO/CalcZScore)
- Giấy phép: MIT
