# Hustle Up Study Cafe: ghi chú thiết kế logo

Tóm tắt các quyết định đã chốt, để phiên làm việc sau tiếp tục được ngay.

## Đã chốt

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

**Biểu tượng "Hu"**: hướng 3, đang phát triển (`final/bieu-tuong-Hu.png`)
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

## Việc tiếp theo
1. Dùng plugin **brand-studio** (identity system, brand review) để gom logo, màu, font và quy tắc dùng thành brand guideline.
2. Dùng plugin **brand-md** để tạo `BRAND.md` gửi designer.
3. Tinh chỉnh biểu tượng "Hu" nếu cần, làm bản favicon đơn giản (bỏ má hồng, mắt dày hơn) cho cỡ 16–32 px.
4. Mockup lên ly, túi, bảng hiệu.
5. Nhờ designer vẽ lại thành vector (AI/SVG) trước khi in và đăng ký thương hiệu.

## Ghi chú kỹ thuật
- Các file HTML trong `source/` dựng logo bằng font thật và SVG. Mở trong trình duyệt là xem được.
- Xuất lại ảnh PNG (cần Playwright): `cd branding/hustle-up/source && node scripts/brand.js` (tương tự `hu.js`, `face9.js`).
- `explorations/`: các hướng đã thử và bỏ (pixel 8-bit, Cosy Kiln, Tate, tem gợn sóng, tem tròn...).
- `reference/logo-cu.jpg`: logo hiện tại của quán.
- Không dùng hình từ ảnh tham khảo của bên thứ ba trong bản chốt. Các bản thử dùng nguyên biểu tượng của người khác đã bỏ.
