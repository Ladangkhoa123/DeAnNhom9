# TECHZONE — Website bán máy tính và linh kiện

TECHZONE là giao diện website thương mại điện tử giới thiệu laptop gaming, PC gaming, linh kiện và gaming gear. Dự án được xây dựng bằng HTML, CSS và JavaScript thuần, sử dụng dữ liệu mẫu chạy ngay trên trình duyệt; không cần backend, cài đặt thư viện hay cấu hình cơ sở dữ liệu.

## Chạy dự án

1. Mở thư mục `DeAnNhom9` trong VS Code.
2. Mở `index.html` trực tiếp trong trình duyệt.
3. Hoặc dùng tiện ích Live Server trong VS Code để tự tải lại trang khi chỉnh sửa.

Không cần chạy lệnh cài đặt. Font và ảnh minh họa được tải từ CDN nên cần kết nối Internet để hiển thị đầy đủ. Nếu ảnh sản phẩm không tải được, giao diện sẽ dùng nền và biểu tượng dự phòng.

## Cấu trúc thư mục

```text
DeAnNhom9/
├── index.html       # Cấu trúc và nội dung trang chủ
├── README.md        # Hướng dẫn, tính năng và prompt tham khảo
├── skile.md         # Yêu cầu thiết kế ban đầu
├── css/
│   └── style.css    # Giao diện, hiệu ứng và responsive
└── js/
    └── script.js   # Dữ liệu sản phẩm và tương tác frontend
```

## Các khu vực trên trang

- Thanh thông báo ưu đãi, header tìm kiếm và menu danh mục.
- Hero carousel giới thiệu bộ sưu tập máy tính.
- Danh mục Laptop, PC Gaming, linh kiện và gaming gear.
- Flash Sale có đồng hồ đếm ngược minh họa.
- Các khu vực sản phẩm Laptop Gaming, PC Gaming, linh kiện và gear.
- Bộ lọc, sắp xếp, tin công nghệ, thương hiệu đối tác và đăng ký nhận tin.
- Footer thông tin liên hệ, chính sách và hỗ trợ.

## Tương tác frontend

- Tìm kiếm sản phẩm theo tên, mã sản phẩm và thông số.
- Lọc sản phẩm theo Laptop, PC Gaming, linh kiện hoặc gear.
- Sắp xếp danh sách theo giá tăng/giảm hoặc mức giảm giá.
- Chuyển slide hero bằng nút điều khiển; carousel tự chuyển theo thời gian.
- Mở/đóng mega menu, menu mobile và modal xem nhanh sản phẩm.
- Thêm, xóa, tăng/giảm số lượng sản phẩm trong giỏ; tự cập nhật tổng tiền.
- Bật/tắt yêu thích và xem danh sách sản phẩm đã yêu thích.
- Lưu giỏ hàng, danh sách yêu thích, bộ lọc, từ khóa tìm kiếm và cách sắp xếp vào `localStorage` để khôi phục sau khi tải lại trang.
- Hiển thị thông báo mẫu khi thêm giỏ hàng, yêu thích hoặc gửi email.

> Đây là bản demo giao diện. Đăng nhập, thanh toán, gửi email và đặt hàng chưa kết nối dịch vụ thực tế.

## Công nghệ và tổ chức mã nguồn

- **HTML5:** chia trang thành các khu vực ngữ nghĩa; sản phẩm được render từ dữ liệu JavaScript.
- **CSS3:** thiết kế component theo các nhóm giao diện, sử dụng custom properties trong `:root` để quản lý màu, font và chiều rộng nội dung.
- **JavaScript thuần:** lưu dữ liệu mẫu trong mảng `products`; quản lý giỏ hàng và yêu thích phía trình duyệt; lưu trạng thái mua sắm vào `localStorage`; cập nhật các khu vực giao diện từ sự kiện người dùng.
- **Responsive:** media queries tại các breakpoint `1050px`, `780px` và `480px`.
- **Khả năng truy cập:** nhãn cho nút và ô nhập liệu, thông báo trạng thái, hỗ trợ bàn phím và `prefers-reduced-motion`.

### Một số kỹ thuật CSS đáng chú ý

- Dùng CSS Grid cho lưới sản phẩm, danh mục, footer; Flexbox cho header, bộ lọc và các hàng điều khiển.
- Dùng `clamp()` để co giãn cỡ chữ theo kích thước màn hình.
- Dùng gradient, pseudo-element và `backdrop-filter` để tạo điểm nhấn ánh sáng và lớp phủ.
- Dùng `object-fit: cover` cho ảnh banner/bài viết và `object-fit: contain` cho ảnh sản phẩm để giữ đúng tỷ lệ.
- Dùng `:hover`, `:focus-within`, `transition` và keyframes cho trạng thái tương tác.
- Dùng `IntersectionObserver` để kích hoạt hiệu ứng xuất hiện khi cuộn; tắt hiệu ứng chuyển động khi người dùng bật tùy chọn giảm chuyển động.
- Cung cấp ảnh dự phòng cho sản phẩm khi ảnh CDN gặp lỗi.

## Prompt tham khảo

Các prompt dưới đây là mẫu có thể dùng để tiếp tục phát triển hoặc yêu cầu AI chỉnh sửa dự án. Hãy nêu rõ phạm vi file và giữ yêu cầu HTML/CSS/JavaScript thuần để tránh phát sinh framework hoặc backend ngoài ý muốn.

### 1. Tạo cấu trúc trang HTML

> Dựa trên yêu cầu trong `skile.md`, hãy xây dựng trang chủ TECHZONE trong `index.html` bằng HTML5 ngữ nghĩa. Trang gồm header tìm kiếm và mega menu, hero carousel, danh mục, Flash Sale, các lưới laptop/PC/linh kiện/gear, tin công nghệ và footer. Dùng các `id` ổn định cho những khu vực sẽ được JavaScript điều khiển. Không thêm framework hoặc backend.

### 2. Thiết kế CSS và responsive

> Hoàn thiện `css/style.css` cho trang TECHZONE theo phong cách gaming cao cấp: nền than, chữ sáng, điểm nhấn đỏ neon và xanh điện. Tạo hệ thống màu bằng CSS custom properties; dùng Grid/Flexbox cho bố cục; thiết kế card sản phẩm đồng đều, hiệu ứng hover nhẹ, ảnh đúng tỷ lệ. Bổ sung responsive cho desktop, tablet và điện thoại, tránh tràn ngang, đồng thời hỗ trợ `prefers-reduced-motion`. Chỉ chỉnh CSS, không đổi cấu trúc HTML hay chức năng JavaScript.

### 3. Tạo dữ liệu và tương tác sản phẩm

> Trong `js/script.js`, dùng dữ liệu sản phẩm mẫu để render các khu vực sản phẩm. Triển khai tìm kiếm, lọc theo danh mục, sắp xếp theo giá, yêu thích, modal xem nhanh và giỏ hàng có số lượng/tổng tiền. Dùng event delegation khi phù hợp, kiểm tra phần tử/sản phẩm trước khi thao tác và không thêm backend, API hay thư viện.

### 4. Kiểm tra giao diện sau khi chỉnh sửa

> Kiểm tra trang TECHZONE ở chiều rộng 360px, 390px, 768px, 1024px và desktop. Xác nhận không có tràn ngang, lỗi JavaScript, ảnh hỏng hoặc nút tương tác không hoạt động. Thử tìm kiếm, lọc, sắp xếp, chuyển slide, yêu thích, modal và giỏ hàng; chỉ sửa lỗi liên quan đến thay đổi hiện tại.

## Tùy chỉnh nhanh

- **Sửa sản phẩm:** chỉnh mảng `products` trong `js/script.js`; cập nhật `category`, tên, giá, thông số và URL ảnh.
- **Sửa màu/font:** chỉnh các biến CSS trong `:root` ở đầu `css/style.css`.
- **Sửa bố cục hoặc nội dung:** chỉnh `index.html`, sau đó cập nhật selector tương ứng trong `js/script.js` nếu phần đó có tương tác.
- **Thay ảnh:** thay URL ảnh trong HTML hoặc dữ liệu sản phẩm; dùng ảnh có quyền sử dụng và kiểm tra phần mô tả `alt`.

## Kiểm tra nhanh

Kiểm tra cú pháp JavaScript bằng Node.js (không thực thi ứng dụng):

```bash
node --check js/script.js
```

Sau đó mở `index.html` trong trình duyệt để kiểm tra hiển thị và các tương tác.
