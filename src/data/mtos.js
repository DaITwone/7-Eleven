
function slugify(value) {
  return value
    // Bỏ tiền tố phân loại khỏi tên file ảnh, giữ nguyên tên hiển thị.
    .replace(/^\s*\[(?:M|NPV)\]?\s*/i, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "d")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const names = [
  "[M] Đường Cát",
  "[M] Gà Xiên Nướng Muối Ớt",
  "[M] Nem Nướng Xiên Que",
  "[M] Xúc Xích Phô Mai",
  "[M] Mì Gói Indomie Đặc Biệt",
  "[NPV] Ly Giấy 7-CAFÉ 14oz",
  "[M] Bò Lá Lốt Mới",
  "[M] Chả Giò 7-Eleven",
  "[M] Lạp Xưởng Đài Loan",
  "[M] Heo Xiên Nướng Mỡ Hành (Mới)",
  "[M] Sleeve Ly 7-Eleven",
  "[M] Gà Xiên Nướng Lá Chanh (Mới)",
  "[NPV] Nắp Ly Cà Phê Lạnh",
  "[M] Bánh Xếp Hàn Quốc",
  "[M] Mì Gói",
  "[M] Trứng Gà Luộc",
  "[M] Xíu Mại Hấp",
  "[M] Há Cảo Tôm Thịt",
  "Ly Nhựa PP 7-Eleven 360ml",
  "[M] Nắp Nhựa Nút Bật UKP",
  "[M] Dao Rọc Miệng Ly",
  "[M] Xốt Gà Rán CJ",
  "[M] Nước Dừa Cocoxim Sen Hộp 330ml",
  "[M] Bột Matcha 100gr",
  "Ly Nhựa 7-Eleven 1L (NEW)",
  "[M] Cold Foam 400gr",
  "[M] Xốt Thái SMC 300g",
  "[M] Bột Pistachio 500g",
  "Ly Nhựa PP 7-Eleven 500ml",
  "[M] Trà Oolong Mẫu Đơn 300g",
  "Ly Nhựa 7-Eleven 700ml (NEW)",
  "[M] Kem Muối 400gram",
  "[M] Trân Châu Hoàng Kim 250gr",
  "[M] Trà Oolong Rang 270gr (NEW)",
  "[M] Tắc Tươi 3SACH",
  "[M] Hồng Trà 300gr",
  "[M] Foam Kem Dẻo Vị Cà Phê 400gr",
  "[M] Bắp Cải - Hẹ (HCM)",
  "[M] Bột Chocolate Túi 1KG",
  "[M] Mứt Mãng Cầu 1L",
  "[M] Trà Oolong Lài 300g",
  "[M] Trà Đen 270gr (NEW)",
  "[M] Bột Cà Phê Cold Brew 500g",
  "[M] Bột Khoai Môn 1KG",
  "Syrup Bí Đao AUMIS 1L",
  "[M] Nước Cốt Dừa Xim Mom Cooks 400ml",
  "Trà Lài Đặc Biệt SAVO",
  "[M] Sữa Nước Pha Chế 1L",
  "[M] Mứt Mơ Vàng 1.2kg",
  "[M] Salted Caramel 2L",
  "[M] Mứt Đào Nhài 1kg",
  "[M] Sữa Đậu Nành",
  "[M] Đào Thái Miếng Wonderful 850g",
  "[M] Mứt Vải Hoa Hồng Andros 1kg",
  "Thạch Trân Châu Trắng 1kg",
  "Thạch Trân Châu Caramel 1kg",
  "Thạch Trân Châu Phô Mai 1kg",
  "[M] Nước Cốt Xí Muội 1L",
  "Nước Cốt Tắc Tươi 1 Lít",
  "[M] Cà Phê Nguyên Chất 1KG",
  "Bột Kem CIEL 1kg",
  "Syrup Mía Xanh 1lit",
  "[M] Sữa Tươi Tiệt Trùng",
  "Sữa Đặc Có Đường",
  "[M] Sữa Thanh Trùng Meiji Cao Cấp 946ml",
];

export const mtoItems = names.map((name) => ({
  id: slugify(name),
  name,
  // Ví dụ: public/images/mtos/duong-cat.png
  image: `/images/mtos/${slugify(name)}.png`,
}));
