function slugify(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const names = [
  "Sữa Meiji", "TH True Milk", "Đường cát", "Syrup mía xanh", "Syrup xí muội",
  "Syrup cốt tắc", "Syrup bí đao", "Caramel", "Sữa đặc", "Matcha", "Choco",
  "Bột cà phê", "Cà phê Espresso", "Sữa pha chế", "Trân châu caramel",
  "Trân châu phô mai", "Trân châu trắng", "Trân châu hoàng kim","Mai Mơ", "Mứt đào nhài",
  "Mứt vải hoa hồng", "Mứt mãng cầu", "Trứng gà", "Trà đen", "Trà lài Savo",
  "Trà Olong rang", "Trà Olong lài", "Trà Mẫu đơn", "Hồng trà", "Cold Foam",
  "Kem dẻo buôn mê", "Kem muối", "Xúc xích standard", "Xúc xích phô mai",
  "Lạp xưởng", "Đùi gà", "Cánh gà", "Miếng gà", "Bò lá lốt", "Heo xiên",
  "Gà lá chanh", "Gà nướng muối ớt", "Chả cá", "Chả giò", "Bò viên",
  "Nem nướng", "Bánh xếp", "Há cảo", "Xíu mại", "Nắp cầu", "Nắp ly giấy",
  "Nắp S/M/L", "Ly S", "Ly M", "Ly L", "Ly XL", "Ly giấy",
];

export const mtoItems = names.map((name) => ({
  id: slugify(name),
  name,
  // Đặt ảnh theo tên này, ví dụ: public/images/mtos/meiji.png
  image: `/images/mtos/${slugify(name)}.png`,
}));
