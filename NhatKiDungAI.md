# NHẬT KÝ ĐỒNG HÀNH CÙNG AI (PROMPT LOG)

**Học phần:** Thiết kế Web – Trường Đại học Lạc Hồng (LHU)  
**Tên nhóm:** Nhóm 9  
**Lớp:** 26CT501  
**Tên dự án:** Website bán máy tính và linh kiện TECHZONE

## 1. Thông tin công cụ AI sử dụng

- **Công cụ AI hỗ trợ chính:** AI assistant sử dụng Copilot SDK trong Visual Studio Code.
- **Công cụ hỗ trợ code (Extension):** AI được sử dụng trực tiếp trong VS Code qua Copilot SDK; không ghi nhận extension hỗ trợ code nào khác. Mô hình AI cụ thể do môi trường cung cấp và nhóm không ghi nhận tên phiên bản.
- **Công cụ tạo hình ảnh/nội dung:** Nhóm không sử dụng công cụ AI tạo hình ảnh. Nội dung và hình ảnh sản phẩm được quản lý trong dự án; AI được dùng để hỗ trợ chỉnh sửa mã và tài liệu.

## 2. Nhật ký quá trình thực hiện (các prompt quan trọng)

| Giai đoạn | Mục tiêu | Nội dung prompt | Kết quả và tùy chỉnh |
|---|---|---|---|
| Khởi tạo | Xác định cấu trúc và nội dung chính cho website bán máy tính, laptop gaming và linh kiện TECHZONE. | “Hãy tạo khung trang chủ TECHZONE bằng HTML5 semantic cho website bán máy tính và linh kiện. Bố trí các phần chính gồm header, banner, danh mục sản phẩm, khu vực sản phẩm nổi bật và footer; dùng HTML, CSS và JavaScript thuần.” | Dự án có trang chính `index.html`, stylesheet `css/style.css` và mã tương tác `js/script.js`. Cấu trúc trang được chia thành các khu vực của website bán máy tính; nhóm có thể tiếp tục hoàn thiện giao diện và chức năng theo từng phần. |
| Giao diện | Thiết kế website bán máy tính, laptop gaming và linh kiện, có thể hiển thị tốt trên nhiều kích thước màn hình. | “Hãy thiết kế giao diện TECHZONE theo phong cách cửa hàng công nghệ hiện đại, dùng HTML và CSS thuần. Tạo header, banner, danh mục, thẻ sản phẩm và bố cục responsive cho máy tính và điện thoại.” | Website có giao diện trang chủ với header, banner, danh mục, các khu vực sản phẩm và thiết kế responsive. Nhóm có thể kiểm tra hiển thị trên các kích thước màn hình và điều chỉnh nội dung, hình ảnh, màu sắc cho phù hợp. |
| Tính năng | Tạo tương tác để người dùng tìm và quản lý sản phẩm. | “Hãy dùng JavaScript thuần để thêm chức năng tìm kiếm, lọc và sắp xếp sản phẩm; xem nhanh sản phẩm; thêm vào giỏ hàng; tăng giảm số lượng; và lưu giỏ hàng cùng danh sách yêu thích bằng `localStorage` để không mất sau khi tải lại trang.” | Website có các chức năng tìm kiếm, lọc, sắp xếp, xem nhanh, giỏ hàng và yêu thích. Trạng thái giỏ hàng, yêu thích và tùy chọn tìm kiếm/lọc được lưu để khôi phục khi tải lại trang; nhóm đã thử thao tác trên trình duyệt để kiểm tra. |
| Gỡ lỗi chạy trang | Khắc phục lỗi VS Code không chạy được cấu hình debug trang TECHZONE. | “Bạn sửa lại giúp tôi lỗi”, kèm ảnh thông báo lỗi `preLaunchTask` khi chạy cấu hình Chrome. | AI kiểm tra `launch.json`, `tasks.json` và `server.js`, xác định cổng 5050 đã được một tiến trình TECHZONE sử dụng. Đã cập nhật xử lý để nhận diện server TECHZONE đang chạy và dùng lại thay vì cố khởi động thêm server. |
| Sửa thông báo lỗi trong VS Code | Không để dòng log khởi động server bị hiển thị nhầm thành lỗi trong tab Problems. | “Vẫn lỗi”, kèm ảnh cho thấy dòng `Starting TECHZONE server...` đang xuất hiện trong Problems. | AI xác định problem matcher trong `tasks.json` khớp mọi dòng đầu ra. Đã chỉnh matcher để không phân loại log thông thường thành lỗi, đồng thời vẫn nhận diện thời điểm task bắt đầu và server sẵn sàng. |
| Lưu trạng thái trang | Giữ dữ liệu mua sắm và tùy chọn khi tải lại trang. | “Bạn hãy tạo thêm cái LocalStronge để khi mình tải lại trang thì nó sẽ ko làm lại từ đầu giúp tôi.” | Đã dùng `localStorage` để lưu và khôi phục giỏ hàng, danh sách yêu thích, từ khóa tìm kiếm, bộ lọc và cách sắp xếp. Đã thử thêm sản phẩm, yêu thích, tìm kiếm, đổi sắp xếp rồi tải lại trang để xác nhận trạng thái được giữ lại. |

## 3. Những bài học kinh nghiệm khi dùng AI

- **Câu lệnh (prompt) hiệu quả nhất mà nhóm đúc kết được:** Nêu rõ mục tiêu, lỗi đang gặp, hành vi mong muốn và cung cấp ảnh hoặc đoạn mã liên quan. Ví dụ: “Hãy lưu giỏ hàng, danh sách yêu thích, bộ lọc, từ khóa tìm kiếm và cách sắp xếp bằng `localStorage`; sau khi tải lại trang, các trạng thái này phải được khôi phục. Hãy kiểm tra luồng thêm/xóa sản phẩm và xác nhận bằng cách thử trên trình duyệt.”
- **Khó khăn khi làm việc với AI:** Mô tả lỗi ban đầu đôi khi chưa đủ để xác định nguyên nhân; một thay đổi xử lý đúng việc khởi động server chưa chắc đã giải quyết được thông báo trong tab Problems. Cần cung cấp ảnh lỗi, tên file cấu hình và kiểm tra tiếp kết quả thực tế. Ngoài ra, nội dung mẫu do AI đề xuất có thể không khớp dự án, nên phải rà soát và chỉnh lại cho đúng TECHZONE.
- **Cách nhóm kiểm tra độ chính xác của code AI:** Đọc diff để đảm bảo chỉ thay đổi phần liên quan; chạy `node --check js/script.js` và `node --check server.js`; kiểm tra task matcher và cấu hình JSON; mở trang trên trình duyệt, thử các thao tác liên quan trước và sau khi tải lại; kiểm tra `git diff --check` để phát hiện lỗi định dạng.
