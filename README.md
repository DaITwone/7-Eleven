# My Store App

Dashboard vận hành cửa hàng tiện lợi theo phong cách 7-Eleven, được xây bằng React, Vite và Tailwind CSS. Dữ liệu MTO được lưu qua API bằng Prisma và PostgreSQL; các module còn lại chủ yếu dùng dữ liệu tĩnh trong `src/data` và state trong React/localStorage.

## Chức năng chính

- Đào tạo nhân sự: xem danh sách khóa học, mở tài liệu đào tạo và làm bài trắc nghiệm.
- Phân công ca: tạo lịch theo tuần, thêm nhân viên, tô ca trực, khai báo lịch rảnh part-time, đánh dấu ngày nghỉ, tự xếp lịch và in bảng phân ca.
- Tồn kho & HSD: chọn sản phẩm nhóm sữa, nhập số lượng và hạn sử dụng, theo dõi các mặt hàng sắp hết hạn.
- Danh mục sản phẩm: duyệt nhóm hàng, danh mục con, sản phẩm, size/variant và giá bán.

## Công nghệ

- React
- Vite
- Tailwind CSS
- lucide-react
- oxlint
- Prisma và PostgreSQL cho dữ liệu MTO

## Cài đặt và chạy local

```bash
npm install
npm run dev
```

Sau khi chạy `npm run dev`, mở URL mà Vite hiển thị trong terminal, thường là:

```text
http://localhost:5173
```

## Các script

```bash
npm run dev
```

Chạy development server.

```bash
npm run build
```

Build production bằng Vite.

```bash
npm run preview
```

Preview bản production build.

```bash
npm run lint
```

Chạy oxlint cho thư mục `src`.

## Cấu trúc thư mục

```text
src/
  main.jsx
  App.jsx
  index.css
  components/
    EmptyState.jsx
    Layout.jsx
    Sidebar.jsx
    training/
      CourseDetail.jsx
      CourseList.jsx
      MaterialList.jsx
      Quiz.jsx
  data/
    productCatalog.js
    trainingCourses.js
    trainingQuizzes.js
  pages/
    DanhMucSanPham.jsx
    DaoTao.jsx
    PhanCongCa.jsx
    TonKho.jsx
```

## Luồng ứng dụng

`src/main.jsx` render `App` vào DOM. `src/App.jsx` giữ state điều hướng chính bằng `activePage` và `activeProductGroupId`, sau đó render page tương ứng bên trong `Layout`.

Ứng dụng chưa dùng React Router. Việc chuyển trang được xử lý bằng state nội bộ và lưu vào `localStorage`, nên khi refresh browser app sẽ nhớ màn hình đang mở gần nhất.

Các page hiện có:

- `DaoTao`: trang đào tạo nhân sự.
- `PhanCongCa`: trang phân công lịch làm việc.
- `TonKho`: trang theo dõi tồn kho và hạn sử dụng.
- `DanhMucSanPham`: trang danh mục sản phẩm theo nhóm hàng.

## Dữ liệu tĩnh

Các dữ liệu chính nằm trong `src/data`:

- `productCatalog.js`: nhóm sản phẩm, danh mục con, sản phẩm, variant, giá và đường dẫn hình ảnh.
- `trainingCourses.js`: danh sách khóa học, mô tả, icon và tài liệu.
- `trainingQuizzes.js`: câu hỏi trắc nghiệm theo `courseId`.

Một phần dữ liệu riêng của màn hình tồn kho sữa và phân ca hiện đang được khai báo trực tiếp trong component page tương ứng.

## Ghi chú theo module

### Đào tạo nhân sự

`DaoTao.jsx` hiển thị danh sách khóa học từ `trainingCourses`. Khi chọn một khóa học, `CourseDetail` hiển thị tài liệu và nút làm quiz. Quiz lấy câu hỏi bằng `getQuizByCourseId(course.id)`.

### Phân công ca

`PhanCongCa.jsx` là module lớn nhất. File này chứa logic về:

- danh sách nhân viên full-time/part-time;
- các ca mặc định và ca tùy chỉnh;
- yêu cầu số lượng nhân sự theo từng ca;
- lịch rảnh của nhân viên part-time;
- ngày nghỉ;
- thao tác tô/xóa ca trên bảng tuần;
- tự xếp lịch;
- cảnh báo lịch chưa hợp lý;
- layout in ấn.

State hiện nằm trong React state, chưa có database hoặc API lưu lâu dài.

### Tồn kho & HSD

`TonKho.jsx` tập trung vào nhóm ngành sữa. Người dùng chọn sản phẩm, nhập số lượng và hạn sử dụng theo định dạng `dd/mm/yyyy`. Danh sách đã nhập được sắp xếp theo ngày hết hạn và có bộ lọc theo khoảng ngày hoặc theo tháng.

### Danh mục sản phẩm

`DanhMucSanPham.jsx` đọc `productCatalog`, hiển thị nhóm hàng đang chọn từ sidebar, cho phép chọn category con và tìm kiếm sản phẩm trong category đó. Sản phẩm có thể có `variants` để chọn size và giá tương ứng.

## Tài nguyên public

Ứng dụng tham chiếu một số asset trong `public`, ví dụ:

- `/logo.png`
- `/images/products/...`
- `/products/milk/...`
- `/training/...`

Nếu hình ảnh không tồn tại, một số component sẽ hiển thị trạng thái fallback thay vì ảnh thật.

## Dữ liệu MTO và Prisma

MTO lưu số lượng kiểm kê và tồn hệ thống trong PostgreSQL thông qua `api/mto/entries.js`. API kiểm tra phiên bản trước khi thay thế snapshot; nếu một tab/thiết bị khác đã cập nhật trước đó, bản ghi cũ bị từ chối thay vì ghi đè dữ liệu mới. Bản chưa đồng bộ được giữ trong localStorage của trình duyệt.

Đặt `DATABASE_URL` trong môi trường triển khai và chạy `npm run prisma:migrate:deploy` để áp dụng các migration đã commit. Trước khi triển khai migration lên dữ liệu quan trọng, xác nhận bản sao lưu/khả năng khôi phục ở nhà cung cấp PostgreSQL. Ứng dụng không tự tạo hoặc xác minh bản sao lưu database; localStorage chỉ là bản lưu tạm trên từng trình duyệt, không thay thế backup.

## Lưu ý hiện trạng

- Các module ngoài MTO vẫn chủ yếu là prototype frontend; state của chúng chưa được lưu lâu dài trên database.
- Dữ liệu mock được đặt trong code để dễ demo và chỉnh nhanh.
- Một số chuỗi tiếng Việt cần đảm bảo file được lưu bằng UTF-8 để tránh lỗi hiển thị.
- Trước khi dùng production, cần thiết lập backup/restore định kỳ cho PostgreSQL và kiểm tra khôi phục thực tế.
