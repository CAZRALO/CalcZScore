# 📊 Altman Z-Score Analytics & Multi-Year Financial Diagnostic

Hệ thống phân tích và dự báo nguy cơ kiệt quệ tài chính / phá sản doanh nghiệp ứng dụng mô hình **Altman Z-Score** và **Z'-Score** qua nhiều năm tài chính liên tiếp với dải năm tùy biến linh hoạt, kết hợp biểu đồ cột - đường (Combo Bar & Line Chart) trực quan.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FCAZRALO%2FCalcZScore)

---

## 🌟 Tính Năng Nổi Bật

1. **Tự Động Phân Loại Doanh Nghiệp Vào Mô Hình Z và Z'' (Auto-Classification Engine)**:
   - **Nhận diện học thuật thông minh**: Tự động phân loại bất kỳ doanh nghiệp nào dựa trên lĩnh vực hoạt động (Sản xuất vs Phi sản xuất) và tình trạng niêm yết (HOSE/HNX vs UPCoM/Chưa niêm yết).
   - **Tự động chuyển mô hình**:
     - 🔵 **Mô hình Z (1968)**: Tự động kích hoạt cho **Doanh nghiệp Sản xuất niêm yết trên HOSE/HNX** (Thép, Hóa chất, Xi măng, Dệt may, Chế biến thực phẩm, Dược phẩm...) với đầy đủ 5 biến số $X_1 - X_5$ và Vốn hóa thị trường.
     - 🟣 **Mô hình Z'' (1995/2000)**: Tự động kích hoạt cho **Doanh nghiệp Phi sản xuất** (Bán lẻ, Thương mại, Bất động sản, Xây dựng, Dịch vụ, Công nghệ, Logistics...) **hoặc Sàn UPCoM / Doanh nghiệp chưa niêm yết** (loại bỏ biến số $X_5$ vòng quay tài sản và sử dụng Giá trị sổ sách Vốn chủ sở hữu).
     - 🟠 **Cảnh báo Khối Ngân hàng & Tài chính**: Tự động cảnh báo với nhóm ngân hàng, bảo hiểm, chứng khoán (cấu trúc vốn tiền gửi đặc thù không áp dụng Altman).
   - **Thanh tìm kiếm & Dropdown gắn nhãn màu sắc**: Hiển thị nhãn mô hình đề xuất và ngành nghề trực quan ngay trên từng dòng gợi ý tìm kiếm.
   - **Thẻ giải thích lý do theo thời gian thực (Live Rationale Card)**: Minh bạch cơ sở phân loại học thuật và cho phép chuyển đổi linh hoạt giữa chế độ Tự động và Thủ công.
2. **Liên kết Sàn Chứng Khoán & Tự Động Trích Xuất BCTC (Vercel Serverless API)**:
   - **Thanh tìm kiếm thông minh (Smart Autocomplete)**: Cho phép tìm kiếm bất kỳ doanh nghiệp nào trên 3 sàn **HOSE, HNX, UPCoM** bằng mã chứng khoán (VD: `HPG`, `VNM`, `FPT`, `MWG`...) hoặc tên tiếng Việt có dấu/không dấu (VD: *Hòa Phát, Vinamilk, Thế Giới Di Động, Hóa chất Đức Giang*...).
   - **Serverless Data Engine (`/api/stock`)**: Tự động bóc tách chuẩn xác 9 chỉ tiêu BCTC qua các năm từ cổng thông tin tài chính: Tài sản ngắn hạn, Nợ ngắn hạn, Tổng tài sản, Lợi nhuận chưa phân phối, Tổng nợ phải trả, Vốn chủ sở hữu / Vốn hóa, Doanh thu thuần, LNTT, Chi phí lãi vay.
   - **Tự động đổ số liệu & Chẩn đoán tức thì**: Điền tự động vào bảng ma trận, đồng bộ dải năm và vẽ lại toàn bộ biểu đồ Z-Score / Z''-Score chỉ sau 1 cú click.
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
6. **Nhập Số Liệu Năm Thứ 6 & Đánh Giá Mức Độ Khả Quan Tài Chính**:
   - **Cột riêng Năm thứ 6 (2026 / Kế hoạch)**: Nằm ngay trên bảng ma trận BCTC, cho phép người dùng tự do nhập 9 chỉ tiêu tài chính để kiểm tra tính khả quan của năm thứ 6.
   - **Khối Đánh Giá Chuyên Sâu**: Trả lời trực diện câu hỏi *"Tình hình Năm thứ 6 có khả quan không?"* với các trạng thái rõ ràng:
     - 🟢 **RẤT KHẢ QUAN**: $Z \ge 2.99$ / $Z'' \ge 2.60$ (Sức khỏe tài chính an toàn & vững mạnh).
     - 🟡 **VÙNG XÁM - CẦN THẬN TRỌNG**: $1.81 \le Z < 2.99$ / $1.10 \le Z'' < 2.60$ (Mức độ trung bình, tiềm ẩn rủi ro nếu thị trường đảo chiều).
     - 🔴 **KHÔNG KHẢ QUAN**: $Z < 1.81$ / $Z'' < 1.10$ (Báo động đỏ nguy cơ kiệt quệ tài chính).
   - **So sánh trực tiếp với Năm thứ 5**: Đo lường mức độ biến thiên điểm số Z-Score, tăng hay giảm bao nhiêu điểm.
   - **Bóc tách thành tố**: Phân tích chi tiết thanh khoản ngắn hạn, tích lũy vốn tự có, hiệu quả sinh lời EBIT, đòn bẩy nợ và vòng quay tài sản.
7. **Chẩn đoán & Nhận định Tài chính Tự Động**:
   - Tự động nhận diện rủi ro: Vốn lưu động ròng âm ($X_1 < 0$), gánh nặng đòn bẩy nợ vay quá lớn ($X_4$ thấp), biên EBIT suy thoái ($X_3 < 0$),...
   - Đưa ra nhận xét xu hướng và khuyến nghị quản trị dòng tiền.
8. **Dữ liệu mẫu (Preset Demo)**:
   - Tải nhanh dữ liệu mẫu Doanh nghiệp Sản xuất Tăng trưởng An toàn (Z), Doanh nghiệp Dịch vụ / Bán lẻ (Z''), Doanh nghiệp Vùng xám và Doanh nghiệp Nguy cơ phá sản cao chỉ bằng 1 cú nhấp chuột.

---

## 📐 Công Thức Tính Toán

### 1. Mô hình Z (1968 - Doanh nghiệp sản xuất niêm yết)
$$Z = 1.2 X_1 + 1.4 X_2 + 3.3 X_3 + 0.6 X_4 + 0.999 X_5$$

- $X_1 = \frac{\text{Tài sản ngắn hạn} - \text{Nợ ngắn hạn}}{\text{Tổng tài sản}}$ (Vốn lưu động ròng / TTS)
- $X_2 = \frac{\text{Lợi nhuận chưa phân phối}}{\text{Tổng tài sản}}$ (Lợi nhuận giữ lại / TTS)
- $X_3 = \frac{\text{Lợi nhuận trước thuế} + \text{Chi phí lãi vay}}{\text{Tổng tài sản}}$ (EBIT / TTS)
- $X_4 = \frac{\text{Vốn hóa thị trường}}{\text{Tổng nợ phải trả}}$ (Market Value of Equity / Total Debt)
- $X_5 = \frac{\text{Doanh thu thuần}}{\text{Tổng tài sản}}$ (Vòng quay tài sản)

**Ngưỡng đánh giá**:
- $Z \ge 2.99$: **Vùng an toàn (Safe Zone)** - Tình hình tài chính vững chắc.
- $1.81 \le Z < 2.99$: **Vùng xám (Grey Zone)** - Cần theo dõi thêm, có yếu tố rủi ro.
- $Z < 1.81$: **Vùng nguy hiểm (Distress Zone)** - Nguy cơ kiệt quệ tài chính / vỡ nợ cao.

### 2. Mô hình Z'' (1995/2000 - Phi sản xuất, Dịch vụ, BĐS & Chưa niêm yết / UPCoM)
$$Z'' = 6.56 X_1 + 3.26 X_2 + 6.72 X_3 + 1.05 X_4$$

*(Trong đó $X_4 = \text{Giá trị sổ sách Vốn chủ sở hữu} / \text{Tổng nợ phải trả}$; loại bỏ biến $X_5$ vòng quay doanh thu)*

**Ngưỡng đánh giá**:
- $Z'' \ge 2.60$: **Vùng an toàn (Safe Zone)**
- $1.10 \le Z'' < 2.60$: **Vùng xám (Grey Zone)**
- $Z'' < 1.10$: **Vùng nguy hiểm (Distress Zone)**

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

## 🤖 Module Tự Động Crawl Dữ Liệu BCTC 700 Doanh Nghiệp (HOSE & HNX)

Hệ thống tích hợp sẵn crawler chuyên nghiệp (`crawl_financial_data.py`) phục vụ việc thu thập, chuẩn hóa và tự động điền toàn bộ 9 chỉ tiêu BCTC giai đoạn **2021 – 2025** cho **700 doanh nghiệp** niêm yết (400 mã sàn HOSE + 300 mã sàn HNX) từ danh sách trong sheet `DANH MỤC` của file `dữ_liệu_2 2.xlsx`.

### 📌 Các Chỉ Tiêu Được Trích Xuất & Điền Vào Sheet `DỮ LIỆU`:
1. `TSNH`: Tài sản ngắn hạn (Current Assets)
2. `NNH`: Nợ ngắn hạn (Current Liabilities)
3. `TTS`: Tổng tài sản (Total Assets)
4. `LNCPP`: Lợi nhuận sau thuế chưa phân phối (Retained Earnings)
5. `LNTT`: Lợi nhuận kế toán trước thuế (EBIT / Pre-tax Profit)
6. `CPLV`: Chi phí lãi vay (Interest Expense)
7. `VHTT/VCSH`: Vốn chủ sở hữu sổ sách (Book Value of Equity)
8. `TNPT`: Tổng nợ phải trả (Total Liabilities)
9. `DTT`: Doanh thu thuần về bán hàng & cung cấp dịch vụ (Net Sales)
10. `GIÁ`: Giá đóng cửa/tham chiếu thị trường cập nhật thời gian thực từ sàn SSI.

### ⚡ Các Lệnh Thực Thi Tiện Lợi (CLI Commands):
```bash
# 1. Chạy crawl toàn bộ 700 mã và cập nhật trực tiếp vào file Excel gốc:
npm run crawl
# hoặc chạy Python:
python crawl_financial_data.py --all --in-place

# 2. Chỉ crawl các mã chưa có đủ 5 năm số liệu (tiết kiệm thời gian):
npm run crawl:missing
# hoặc:
python crawl_financial_data.py --missing --in-place

# 3. Chạy thử nghiệm nhanh trên 10 mã đầu tiên:
npm run crawl:test
# hoặc:
python crawl_financial_data.py --limit 10

# 4. Tiếp tục quá trình crawl từ checkpoint gần nhất (khi bị ngắt mạng / tạm dừng):
npm run crawl:resume
# hoặc:
python crawl_financial_data.py --resume --all --in-place

# 5. Crawl theo danh sách mã tùy chọn:
python crawl_financial_data.py --symbols HPG,VNM,FPT,MWG,DGC
```

### 🛡️ Tính Năng Nổi Bật Của Bộ Crawler:
- **Đa luồng song song (Multi-threading)**: Tăng tốc độ thu thập gấp 5–8 lần với cơ chế kiểm soát tần suất tránh bị sàn chặn IP.
- **Tự động lưu Checkpoint**: File `crawl_checkpoint.json` được cập nhật liên tục; nếu tạm dừng giữa chừng có thể nối tiếp ngay lập tức với `--resume`.
- **Nhận diện Khối Tài chính**: Tự động phát hiện ngân hàng, chứng khoán, bảo hiểm (ACB, VCB, SSI,...) để đánh dấu cảnh báo theo đúng lý thuyết Edward Altman.
- **Bảo toàn Cấu trúc Excel**: Ghi đè chuẩn xác từng ô theo đúng 5 khối năm (2021..2025) gồm 701 dòng/khối, tự động tính số năm có số liệu trong `DANH MỤC` và ghi nhật ký vào `GHI CHÚ`.
- **Đồng bộ hóa tức thì với Web App**: Tự động tạo cơ sở dữ liệu `crawled_700_database.json` và đồng bộ vào danh bạ `stock_directory.js` để tìm kiếm và phân tích tức thì trên giao diện web.

---

## 📂 Cấu Trúc Thư Mục
```text
CalcZScore/
├── api/
│   └── stock.js               # Vercel Serverless Function trích xuất BCTC từ sàn
├── crawl_financial_data.py    # Module Python crawler tự động 700 công ty HOSE & HNX
├── crawled_700_database.json  # Cơ sở dữ liệu cache BCTC 700 công ty
├── stock_directory.js         # Danh bạ 700 doanh nghiệp niêm yết & cache BCTC
├── dữ_liệu_2 2.xlsx           # File Excel dữ liệu 700 DN (DANH MỤC, DỮ LIỆU, GHI CHÚ)
├── index.html                 # Giao diện chính & bảng tính toán Z-Score
├── calc_zscore.html           # File điều hướng tương thích
├── package.json               # Cấu hình dự án & dependencies (cheerio, crawl scripts)
├── vercel.json                # Cấu hình deployment Vercel
├── .gitignore                 # File bỏ qua cho git
└── README.md                  # Tài liệu hướng dẫn
```

---

## 👤 Tác Giả & Bản Quyền
- Repository: [https://github.com/CAZRALO/CalcZScore](https://github.com/CAZRALO/CalcZScore)
- Giấy phép: MIT
