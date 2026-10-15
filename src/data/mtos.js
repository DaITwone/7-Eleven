
function slugify(value) {
  return value
    // Bỏ các tiền tố phân loại như [M], [NPV], [M[
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
  "Đường Cát",
  "Gà Xiên Nướng Muối Ớt",
  "Nem Nướng Xiên Que",
  "Xúc Xích Phô Mai",
  "Mì Gói Indomie Đặc Biệt",
  "Ly Giấy 14oz",
  "Bò Lá Lốt Mới",
  "Chả Giò 7-Eleven",
  "Lạp Xưởng Đài Loan",
  "Heo Xiên Nướng Mỡ Hành",
  "Sleeve Ly 7-Eleven",
  "Gà Xiên Nướng Lá Chanh",
  "Nắp Ly Cà Phê Lạnh",
  "Bánh Xếp Hàn Quốc",
  "Mì Gói",
  "Trứng Gà Luộc",
  "Xíu Mại Hấp",
  "Há Cảo Tôm Thịt",
  "Ly Nhựa PP 7-Eleven 360ml",
  "Nắp Nhựa Nút Bật UKP",
  "Dao Rọc Miệng Ly",
  "Xốt Gà Rán CJ",
  "Nước Dừa Cocoxim Sen Hộp 330ml",
  "Bột Matcha 100gr",
  "Ly Nhựa 7-Eleven 1L",
  "Cold Foam 400gr",
  "Xốt Thái SMC 300g",
  "Bột Pistachio 500g",
  "Ly Nhựa PP 7-Eleven 500ml",
  "Trà Oolong Mẫu Đơn 300g",
  "Ly Nhựa 7-Eleven 700ml ",
  "Kem Muối 400gram",
  "Trân Châu Hoàng Kim 250gr",
  "Trà Oolong Rang 270gr",
  "Tắc Tươi 3SACH",
  "Hồng Trà 300gr",
  "Foam Kem Dẻo Vị Cà Phê 400gr",
  "Bắp Cải - Hẹ (HCM)",
  "Bột Chocolate Túi 1KG",
  "Mứt Mãng Cầu 1L",
  "Trà Oolong Lài 300g",
  "Trà Đen 270gr",
  "Bột Cà Phê Cold Brew 500g",
  "Bột Khoai Môn 1KG",
  "Syrup Bí Đao AUMIS 1L",
  "Nước Cốt Dừa Xim Mom Cooks 400ml",
  "Trà Lài Đặc Biệt SAVO",
  "Sữa Nước Pha Chế 1L",
  "Mứt Mơ Vàng 1.2kg",
  "Salted Caramel 2L",
  "Mứt Đào Nhài 1kg",
  "Sữa Đậu Nành",
  "Đào Thái Miếng Wonderful 850g",
  "Mứt Vải Hoa Hồng Andros 1kg",
  "Thạch Trân Châu Trắng 1kg",
  "Thạch Trân Châu Caramel 1kg",
  "Thạch Trân Châu Phô Mai 1kg",
  "Nước Cốt Xí Muội 1L",
  "Nước Cốt Tắc Tươi 1 Lít",
  "Cà Phê Nguyên Chất 1KG",
  "Bột Kem CIEL 1kg",
  "Syrup Mía Xanh 1lit",
  "Sữa Tươi Tiệt Trùng",
  "Sữa Đặc Có Đường",
  "Sữa Thanh Trùng Meiji Cao Cấp 946ml",
];

export const mtoItems = names.map((name) => ({
  id: slugify(name),
  name,
  // Ví dụ: public/images/mtos/duong-cat.png
  image: `/images/mtos/${slugify(name)}.png`,
}));
