# BÁO CÁO GIỚI THIỆU WEBSITE TECHZONE

## 1. Giới thiệu đề tài

TECHZONE là website demo thương mại điện tử giới thiệu máy tính, laptop gaming, linh kiện PC và thiết bị gaming. Website được xây dựng bằng HTML, CSS và JavaScript thuần, sử dụng dữ liệu mẫu chạy trên trình duyệt.

Mục tiêu của sản phẩm là tạo giao diện mua sắm trực quan, giúp người dùng khám phá danh mục và sản phẩm, tìm kiếm theo nhu cầu, xem thông tin chi tiết và thử các thao tác mua sắm cơ bản.

> **Phạm vi demo:** Đăng nhập, giỏ hàng, yêu thích, đánh giá và một số trạng thái được mô phỏng/lưu trên trình duyệt. Website chưa kết nối máy chủ, cơ sở dữ liệu, cổng thanh toán, dịch vụ gửi email hoặc xử lý đơn hàng thực tế.

## 2. Cấu trúc dự án

| Tệp/thư mục | Vai trò |
|---|---|
| `index.html` | Cấu trúc trang chủ và các khu vực giao diện; chứa khung giỏ hàng, hộp thoại xem nhanh và so sánh. |
| `login.html` | Giao diện và biểu mẫu đăng nhập demo. |
| `css/style.css` | Kiểu dáng chung cho trang chủ: màu sắc, bố cục, sản phẩm, hiệu ứng và giao diện responsive. |
| `css/login.css` | Kiểu dáng riêng cho trang đăng nhập. |
| `js/script.js` | Dữ liệu mẫu và tương tác của trang chủ: tìm kiếm, lọc, giỏ hàng, yêu thích, xem nhanh, so sánh, đánh giá và nhiều chức năng khác. |
| `image/` | Ảnh minh họa sản phẩm và banner. |
| `server.js` | Máy chủ tĩnh đơn giản để chạy website tại địa chỉ cục bộ khi cần. |

## 3. Công việc của người phụ trách HTML

### 3.1. Nhiệm vụ

Người phụ trách HTML xây dựng bộ khung nội dung, xác định các thành phần và thứ tự xuất hiện trên mỗi trang. HTML không chịu trách nhiệm chính về màu sắc, bố cục trang trí hay xử lý logic tương tác.

Các việc chính:

- Tạo cấu trúc tài liệu HTML5, khai báo ngôn ngữ, tiêu đề trang và thông tin hiển thị trên thiết bị.
- Chia nội dung thành các khu vực có ý nghĩa như `header`, `nav`, `main`, `section`, `article` và `footer`.
- Bổ sung tiêu đề, đoạn văn, liên kết, hình ảnh, nút bấm, ô nhập liệu, biểu mẫu và nội dung sản phẩm.
- Gắn `id`, `class`, thuộc tính `data-*` để CSS định dạng hoặc JavaScript tìm đúng phần tử và xử lý sự kiện.
- Thêm nhãn, mô tả ảnh và thuộc tính hỗ trợ bàn phím/trình đọc màn hình khi phù hợp.
- Kết nối tệp CSS và JavaScript với trang HTML.
- Tạo cấu trúc trang đăng nhập và các khu vực tương tác như giỏ hàng, xem nhanh, so sánh và đánh giá.

### 3.2. Các phần HTML trên trang chủ

1. **Thanh thông báo:** giới thiệu chương trình ưu đãi và liên kết đến khu vực khuyến mãi.
2. **Header:** logo, ô tìm kiếm, nút tài khoản, yêu thích và giỏ hàng.
3. **Menu điều hướng:** danh mục sản phẩm, liên kết đến Laptop, PC Gaming, linh kiện, gear và tin công nghệ.
4. **Banner chính:** tiêu đề, lời giới thiệu, nút kêu gọi khám phá, ảnh sản phẩm và nút chuyển slide.
5. **Danh mục và sản phẩm:** khu vực danh mục, Flash Sale, laptop, PC Gaming, linh kiện, gear và sản phẩm nổi bật.
6. **Tìm kiếm, lọc và sắp xếp:** biểu mẫu tìm kiếm, nút lọc theo nhóm và lựa chọn sắp xếp sản phẩm.
7. **Tin công nghệ và thương hiệu:** bài viết minh họa và danh sách thương hiệu.
8. **Đăng ký nhận tin:** biểu mẫu nhập email.
9. **Footer:** thông tin cửa hàng, liên kết hỗ trợ, chính sách và thông tin liên hệ.
10. **Các thành phần tương tác:** khung giỏ hàng, lớp phủ, hộp thoại xem nhanh, khung so sánh và vùng thông báo.

### 3.3. Trang đăng nhập

`login.html` có logo, tiêu đề, ô email, ô mật khẩu, nút đăng nhập, thông báo giải thích giới hạn của bản demo và liên kết quay lại cửa hàng. Biểu mẫu được trình duyệt kiểm tra các trường bắt buộc; thao tác lưu phiên demo được xử lý bằng JavaScript.

### 3.4. Câu trình bày mẫu cho người làm HTML

> “Em phụ trách cấu trúc HTML của website. Em chia trang chủ thành các khu vực như header, menu, banner, danh mục, các nhóm sản phẩm, tin công nghệ và footer. Em cũng tạo các biểu mẫu, nút và khung giao diện cho giỏ hàng, xem nhanh và so sánh sản phẩm. Các thẻ HTML cung cấp nội dung và cấu trúc; CSS sẽ trình bày giao diện, còn JavaScript xử lý tương tác.”

## 4. Công việc của người phụ trách CSS

### 4.1. Nhiệm vụ

Người phụ trách CSS biến cấu trúc HTML thành giao diện hoàn chỉnh, dễ nhìn và phù hợp với nhiều kích thước màn hình.

Các việc chính:

- Thiết lập màu sắc, font chữ, khoảng cách, kích thước và các quy tắc giao diện chung.
- Tạo bố cục header, menu, banner, danh mục, lưới sản phẩm, footer, giỏ hàng và hộp thoại.
- Sử dụng Grid và Flexbox để sắp xếp nội dung.
- Tạo trạng thái hover, focus, hiệu ứng chuyển động và phản hồi trực quan cho nút bấm/thẻ sản phẩm.
- Thiết kế responsive để giao diện điều chỉnh trên máy tính, máy tính bảng và điện thoại.
- Hỗ trợ người dùng giảm chuyển động thông qua `prefers-reduced-motion`.
- Tạo giao diện riêng cho trang đăng nhập.

### 4.2. Phạm vi CSS trong dự án

- `css/style.css`: giao diện chung theo phong cách công nghệ/gaming; quản lý các biến màu và font; định dạng banner, thẻ sản phẩm, thanh tìm kiếm, giỏ hàng, cửa sổ xem nhanh, so sánh, thông báo và các khu vực khác.
- `css/login.css`: bố cục trang đăng nhập, phần giới thiệu bên cạnh, biểu mẫu và cách hiển thị trên màn hình nhỏ.
- Giao diện có các breakpoint responsive tại khoảng 1050px, 780px và 480px trong stylesheet chung; trang đăng nhập có quy tắc responsive riêng.

### 4.3. Câu trình bày mẫu cho người làm CSS

> “Em phụ trách CSS để định dạng giao diện TECHZONE. Em xây dựng hệ thống màu và font, bố trí các khu vực bằng Grid và Flexbox, thiết kế thẻ sản phẩm, banner, menu, giỏ hàng và hộp thoại. Em cũng bổ sung hiệu ứng tương tác và responsive để trang dễ sử dụng trên máy tính lẫn điện thoại.”

## 5. Công việc của người phụ trách JavaScript

### 5.1. Nhiệm vụ

JavaScript xử lý hành vi của trang: nhận thao tác của người dùng, cập nhật dữ liệu và làm mới phần giao diện cần thiết. Trong dự án này, dữ liệu là dữ liệu mẫu và các thao tác mua sắm được chạy phía trình duyệt.

### 5.2. Mô tả từng chức năng

| STT | Chức năng | Mô tả hoạt động |
|---:|---|---|
| 1 | Hiển thị sản phẩm | Dữ liệu sản phẩm mẫu gồm tên, mã, nhóm, giá, giá cũ, thông số, đánh giá, tồn kho và ảnh. JavaScript dùng dữ liệu này để tạo các thẻ sản phẩm trên trang. |
| 2 | Tìm kiếm | Tìm theo thông tin sản phẩm như tên, mã và thông số; danh sách sản phẩm nổi bật được cập nhật theo từ khóa. Có thể dùng `Ctrl + K` để đưa con trỏ vào ô tìm kiếm. |
| 3 | Lọc danh mục | Các nút lọc cho phép xem tất cả sản phẩm hoặc lọc theo Laptop, PC Gaming, linh kiện và gear. |
| 4 | Sắp xếp | Cho phép sắp xếp sản phẩm nổi bật theo giá tăng dần, giảm dần hoặc mức giảm giá; một số khu vực Laptop/PC có nút đổi thứ tự giá. |
| 5 | Chuyển banner | Hai nút mũi tên chuyển slide trước/sau; banner cũng tự chuyển theo thời gian. Tự động chuyển động được hạn chế nếu thiết bị bật tùy chọn giảm chuyển động. |
| 6 | Menu danh mục và menu điện thoại | Nút danh mục mở/đóng menu; nút menu điện thoại mở/đóng điều hướng trên màn hình nhỏ. Chọn liên kết sẽ đưa người dùng đến khu vực tương ứng. |
| 7 | Xem nhanh sản phẩm | Mở hộp thoại gồm ảnh, mã, thông số, mô tả, giá và đánh giá của sản phẩm; từ đó có thể chọn mua hoặc đưa sản phẩm vào danh sách so sánh. |
| 8 | Giỏ hàng | Thêm sản phẩm, tăng/giảm số lượng, xóa sản phẩm; cập nhật số lượng hiển thị, tạm tính và tổng tiền. |
| 9 | Danh sách yêu thích | Thêm/bỏ yêu thích một sản phẩm; nút yêu thích trên đầu trang lọc để xem các sản phẩm đã lưu. |
| 10 | So sánh sản phẩm | Chọn tối đa hai sản phẩm và mở bảng so sánh các thông tin như nhóm, cấu hình, giá, mức tiết kiệm và đánh giá. |
| 11 | Đánh giá sản phẩm | Trong cửa sổ xem nhanh, người dùng nhập tên hiển thị tùy chọn, chọn số sao và viết nhận xét. Đánh giá demo được lưu trên trình duyệt. |
| 12 | Đăng nhập demo | Nếu người dùng chưa đăng nhập, một số thao tác giỏ hàng/yêu thích yêu cầu mở trang đăng nhập. Sau khi đăng nhập demo, trang có thể tiếp tục thao tác vừa chọn. Phiên chỉ lưu trong trình duyệt, không xác thực với máy chủ. |
| 13 | Lưu trạng thái | Giỏ hàng, yêu thích, bộ lọc, từ khóa, cách sắp xếp và một số dữ liệu demo được lưu bằng `localStorage` để khôi phục khi tải lại trang. |
| 14 | Đăng ký nhận tin | Biểu mẫu kiểm tra email ở mức trình duyệt rồi hiển thị thông báo cảm ơn. Chưa gửi email đến dịch vụ thực tế. |
| 15 | Đặt hàng | Nút đặt hàng yêu cầu trạng thái đăng nhập demo; sau đó hiển thị thông báo rằng tính năng đặt hàng chưa được kết nối. Website chưa tạo đơn và chưa xử lý thanh toán. |
| 16 | Thông báo và đóng giao diện | Hiển thị thông báo sau một số thao tác; hỗ trợ đóng menu, giỏ hàng hoặc hộp thoại bằng nút đóng, nhấn ngoài vùng nội dung hoặc dùng Escape tùy thành phần. |

### 5.3. Câu trình bày mẫu cho người làm JavaScript

> “Em phụ trách JavaScript và dữ liệu mẫu của website. JavaScript render sản phẩm lên trang, xử lý tìm kiếm, lọc, sắp xếp, chuyển banner, giỏ hàng, yêu thích, xem nhanh, so sánh và đánh giá. Một số trạng thái được lưu trong localStorage để giữ lại sau khi tải lại trang. Vì đây là bản demo frontend nên đăng nhập, nhận tin và đặt hàng chưa kết nối với máy chủ hay dịch vụ thực tế.”

## 6. Trình tự demo các chức năng

Để bài trình bày không quá dài, có thể demo theo thứ tự sau:

1. **Giới thiệu trang chủ:** chỉ vào logo, thanh thông báo, header và banner.
2. **Điều hướng:** mở menu danh mục, chọn một nhóm để cuộn đến khu vực đó.
3. **Tìm kiếm/lọc:** nhập từ khóa, thử chọn một bộ lọc và thay đổi cách sắp xếp.
4. **Xem sản phẩm:** mở xem nhanh, chỉ vào cấu hình, giá và đánh giá.
5. **Thử tương tác mua sắm:** thêm sản phẩm vào giỏ, điều chỉnh số lượng, mở danh sách yêu thích hoặc so sánh hai sản phẩm.
6. **Giới thiệu trang đăng nhập:** trình bày đây là mô phỏng, không nhập thông tin cá nhân thật khi thuyết trình.
7. **Nêu giới hạn demo:** đặt hàng, thanh toán và gửi email chưa hoạt động với dịch vụ thực tế.
8. **Kết luận vai trò công nghệ:** HTML tạo cấu trúc, CSS tạo giao diện, JavaScript xử lý tương tác.

## 7. Lời dẫn tổng kết

> “Tóm lại, HTML xây dựng cấu trúc và nội dung của các trang; CSS tạo bố cục, màu sắc và khả năng hiển thị responsive; JavaScript xử lý dữ liệu và tương tác của người dùng. TECHZONE hiện là bản demo frontend giúp minh họa trải nghiệm mua sắm sản phẩm công nghệ. Các chức năng cần máy chủ như xác thực tài khoản, đặt hàng, thanh toán và gửi email chưa được tích hợp.”

## 8. Lưu ý khi báo cáo

- Nên dùng từ **“mô phỏng”**, **“demo”** hoặc **“chạy trên trình duyệt”** với đăng nhập, đánh giá, nhận tin và đặt hàng.
- Không giới thiệu đăng nhập là xác thực tài khoản thật hoặc đặt hàng là giao dịch thật.
- Chỉ demo các chức năng đang hoạt động trên trang; một số đường dẫn bài viết/chính sách hiện là liên kết minh họa.
- Nếu dùng thao tác đăng nhập demo, không nhập mật khẩu thật hoặc thông tin cá nhân nhạy cảm.
