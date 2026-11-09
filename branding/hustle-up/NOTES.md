# Hustle Up Study Cafe: ghi chú thiết kế logo

Tóm tắt các quyết định đã chốt, để phiên làm việc sau tiếp tục được ngay.

## Trạng thái (09/11/2026)
**Biểu tượng "Hu": chủ quán chọn phương án A (sticker chồng)**, với hai mắt ∧ có viền cùng màu nền để tách khỏi chữ H. Các phương án khác giữ trong `explorations/hu-5-phuong-an-moi.png`. Đã cập nhật hướng dẫn nhận diện, `final/logo/` và `BRAND.md`. Cả bộ logo chờ chủ quán xác nhận chốt lần cuối.

## Hướng đang dùng
**Biểu tượng "Hu" mới (phương án A)**
- H đứng thẳng; chữ "u" nghiêng −6°, to 1,12 lần, đè lên chân phải của H, có viền sticker cùng màu nền.
- Mắt ∧ và má hồng trên chữ "u"; mắt có viền cùng màu nền dày bằng viền sticker của chữ.
- Bản trên nền: vuông bo góc (bo 26%) hoặc tròn. Bản tối giản (bỏ má hồng, mắt dày hơn) cho cỡ ≤ 40 px.
- Mã dựng: `markHu()` trong `source/scripts/logo-lib.js`.


**Logo chính: phương án 2** (`final/phuong-an-study-cafe.png`, hàng giữa)
- Chữ "Hustle up" dùng font **Grandstander** (weight 900), không có dấu chấm cuối.
- Chữ **H** phóng to 1,2 lần, cao bằng chữ "up".
- Chữ "up" phóng to 1,2 lần, nghiêng -6°, hạ gần ngang hàng với "Hustle". Chữ "u" và "p" tách nhau như các chữ trong "Hustle".
- Chữ "u" của "up" là **gương mặt**: hai mắt **∧** (chữ V úp ngược, nét bo tròn, là hai mũi tên đi lên) và hai chấm **má hồng** trên thân chữ "u".
- **"study cafe"** viết thẳng, font **Fredoka** 600, chữ thường, giãn chữ 0,14em, canh trái theo chữ H, nằm **phía trên** "Hustle".
- Quanh mỗi chữ có viền cùng màu nền (khe hở kiểu sticker).

**Bộ logo** (`final/bo-logo-ngang-doc-bieu-tuong.png`)
- Logo ngang (logo chính).
- Logo dọc: study cafe / Hustle / up, căn giữa, "up" to làm điểm nhấn.
- Biểu tượng gương mặt chữ "u" trong hình tròn, và "up" trong ô vuông bo góc.

**Biểu tượng "Hu" bản cũ, đã bỏ** (chủ quán chưa ưng): hướng 3 (`final/bieu-tuong-Hu.png`)
- Chữ H và chữ "u" của Grandstander dính liền: nét phải của H là nét trái của "u".
- Mắt ∧ và má hồng đặt trên chữ "u". Có bản tròn đỏ, tròn kem, vuông bo góc, và bản thử cỡ nhỏ.
- Chữ "u" để thẳng (không nghiêng) để nét chung với H khít.

## Màu
| Tên | Mã |
|---|---|
| Đỏ Hustle (màu chính) | `#C4261D` |
| Vàng bơ (nền) | `#FAF4D3` |
| Kem | `#FBF5E8` |
| Má hồng trên nền sáng | `#F08A7E` |
| Má hồng trên nền đỏ | `#F6B3A3` |
| Nâu đậm (phụ) | `#3A1F1A` |

## Font
- Grandstander (Google Fonts, OFL), chữ chính.
- Fredoka (Google Fonts, OFL), chữ "study cafe".
- File font nằm trong `source/fonts/`.

## Đã làm (09/11/2026)
- **Hướng dẫn nhận diện** (brand-studio): `final/huong-dan-nhan-dien.png` và `.pdf`. 7 mục: ý tưởng, bộ logo, khoảng trống & cỡ tối thiểu, phiên bản màu, màu (kèm độ tương phản), font, không được làm.
- **PNG từng logo** nền trong suốt, x3: `final/logo/` (ngang, dọc, Hu, Hu tròn/vuông/tối giản, gương mặt u). Viền sticker mang màu nền dự kiến, nên bản đỏ đặt trên vàng bơ, bản kem đặt trên đỏ.
- **`BRAND.md`** (brand-md, spec 0.3.0): chiến lược, giọng văn, màu, font, logo, quy tắc. Tên mục giữ tiếng Anh, nội dung tiếng Việt.
- Phát hiện: **Fredoka không có dấu tiếng Việt** → chỉ dùng cho "study cafe". Đề xuất **Nunito** (OFL, đủ dấu) cho chữ thân bài; file trong `source/fonts/`.

## Còn chờ chủ quán duyệt
- Các mục ghi "đề xuất" trong `BRAND.md` và trang hướng dẫn: định vị, tagline "Học chăm, ngồi vui", giọng văn, font Nunito, bản một màu (nâu, đen), "Hu" tối giản, cỡ tối thiểu.
- Tuyên bố công khai (giờ mở cửa, ổ cắm, wifi, "trân châu nấu mỗi sáng").

## Việc tiếp theo
1. Chủ quán duyệt các mục "đề xuất" ở trên.
2. Mockup lên ly, túi, bảng hiệu (có thể làm `DESIGN.md` cho menu / bảng hiệu).
3. Nhờ designer vẽ lại thành vector (AI/SVG) trước khi in và đăng ký thương hiệu; chốt mã CMYK/Pantone khi in thử.

## Ghi chú kỹ thuật
- Các file HTML trong `source/` dựng logo bằng font thật và SVG. Mở trong trình duyệt là xem được.
- Xuất lại ảnh PNG (cần Playwright): `cd branding/hustle-up/source && node scripts/brand.js` (tương tự `hu.js`, `face9.js`).
- 5 phương án "Hu" mới: `node scripts/hu-options.js` (`hu-options.html`).
- Hướng dẫn nhận diện: `node scripts/guideline.js`; PNG từng logo: `node scripts/export.js`. Cả hai dùng chung `scripts/logo-lib.js`.
- `explorations/`: các hướng đã thử và bỏ (pixel 8-bit, Cosy Kiln, Tate, tem gợn sóng, tem tròn...).
- `reference/logo-cu.jpg`: logo hiện tại của quán.
- Không dùng hình từ ảnh tham khảo của bên thứ ba trong bản chốt. Các bản thử dùng nguyên biểu tượng của người khác đã bỏ.
