const createProduct = (id, name, price) => ({
  id,
  name,
  price,
  image: `/images/products/${id}.png`,
});

export const productCatalog = [
  {
    id: "thuc-uong-dac-biet",
    name: "Thức uống đặc biệt",
    badge: "HOT",
    categories: [
      {
        id: "calamansi-series",
        name: "Calamansi Series",
        products: [
          {
            id: "hong-tra-tuoi-tho",
            name: "Hồng Trà Tươi Thơ",
            variants: [
              {
                id: "hong-tra-tuoi-tho-size-l",
                size: "L",
                price: 17000,
                image: "/images/products/hong-tra-tuoi-tho-size-l.png",
              },
              {
                id: "hong-tra-tuoi-tho-size-xl",
                size: "XL",
                price: 23000,
                image: "/images/products/hong-tra-tuoi-tho-size-l.png",
              },
            ],
          },
          {
            id: "tra-tac-nha-bay",
            name: "Trà Tắc Nhà Bảy",
            variants: [
              {
                id: "tra-tac-nha-bay-size-l",
                size: "L",
                price: 17000,
                image: "/images/products/tra-tac-nha-bay-size-l.png",
              },
              {
                id: "tra-tac-nha-bay-size-xl",
                size: "XL",
                price: 23000,
                image: "/images/products/tra-tac-nha-bay-size-l.png",
              },
            ],
          },
        ],
      },
      {
        id: "mua-tra-no-hoa",
        name: "Mùa Trà Nở Hoa",
        products: [
          {
            id: "olong-hong-le-chi",
            name: "Olong Hồng Lê Chi Size L",
            price: 29000,
            image: "/images/products/ol1.png",
          },
          {
            id: "tra-sua-olong-nhai",
            name: "Trà Sữa olong Nhài Hoa Size L",
            price: 29000,
            image: "/images/products/ol2.png",
          },
          {
            id: "olong-mai-mo",
            name: "Olong Mai Mơ Size L",
            price: 29000,
            image: "/images/products/ol3.png",
          },
          {
            id: "olong-xuan-dao",
            name: "Olong Xuân Đào Size L",
            price: 29000,
            image: "/images/products/ol4.png",
          },
        ],
      },
      {
        id: "lemonade-back-to-you",
        name: "Lemonade - Back to You",
        products: [
          {
            id: "lemonade-size-l",
            name: "Lemonade Size L",
            price: 22000,
            image: "/images/products/lemonade-size-l.png",
          },
          {
            id: "espresso-lemonade-size-l",
            name: "Espresso Lemonade Size L",
            price: 32000,
            image: "/images/products/espresso-lemonade-size-l.png",
          },
        ],
      },
      {
        id: "matcha-mania",
        name: "Matcha Mania",
        products: [
          {
            id: "meiji-pinky-strawberry-matcha",
            name: "Meiji Pinky Strawberry Matcha IX",
            variants: [
              {
                id: "meiji-pinky-strawberry-matcha-m",
                size: "M",
                price: 40000,
                image: "/images/products/meiji-pinky-strawberry-matcha-m.png",
              },
              {
                id: "meiji-pinky-strawberry-matcha-l",
                size: "L",
                price: 44000,
                image: "/images/products/meiji-pinky-strawberry-matcha-m.png",
              },
            ],
          },
          {
            id: "meiji-sunny-banana-matcha",
            name: "Meiji Sunny Banana Matcha IX",
            variants: [
              {
                id: "meiji-sunny-banana-matcha-m",
                size: "M",
                price: 40000,
                image: "/images/products/meiji-sunny-banana-matcha-m.png",
              },
              {
                id: "meiji-sunny-banana-matcha-l",
                size: "L",
                price: 44000,
                image: "/images/products/meiji-sunny-banana-matcha-m.png",
              },
            ],
          },
          {
            id: "meiji-browny-choco-matcha",
            name: "Meiji Browny Choco Matcha IX",
            variants: [
              {
                id: "meiji-browny-choco-matcha-m",
                size: "M",
                price: 40000,
                image: "/images/products/meiji-browny-choco-matcha-m.png",
              },
              {
                id: "meiji-browny-choco-matcha-l",
                size: "L",
                price: 44000,
                image: "/images/products/meiji-browny-choco-matcha-m.png",
              },
            ],
          },
          {
            id: "meiji-matcha-latte",
            name: "Meiji Matcha Latte IX",
            variants: [
              {
                id: "meiji-matcha-s",
                size: "S",
                price: null,
                image: "/images/products/meiji-matcha-latte-m.png",
              },
              {
                id: "meiji-matcha-m",
                size: "M",
                price: 40000,
                image: "/images/products/meiji-matcha-latte-m.png",
              },
              {
                id: "meiji-matcha-l",
                size: "L",
                price: 44000,
                image: "/images/products/meiji-matcha-latte-m.png",
              },
            ],
          },
          {
            id: "meiji-ube-matcha",
            name: "Meiji Ube Matcha IX",
            variants: [
              {
                id: "meiji-ube-matcha-s",
                size: "S",
                price: null,
                image: "/images/products/meiji-ube-matcha-m.png",
              },
              {
                id: "meiji-ube-matcha-m",
                size: "M",
                price: 40000,
                image: "/images/products/meiji-ube-matcha-m.png",
              },
              {
                id: "meiji-ube-matcha-l",
                size: "L",
                price: 44000,
                image: "/images/products/meiji-ube-matcha-m.png",
              },
            ],
          },
          {
            id: "meiji-coco-matcha",
            name: "Meiji Coco Matcha IX",
            variants: [
              {
                id: "meiji-coco-matcha-s",
                size: "S",
                price: null,
                image: "/images/products/meiji-coco-matcha-m.png",
              },
              {
                id: "meiji-coco-matcha-m",
                size: "M",
                price: 38000,
                image: "/images/products/meiji-coco-matcha-m.png",
              },
              {
                id: "meiji-coco-matcha-l",
                size: "L",
                price: 42000,
                image: "/images/products/meiji-coco-matcha-m.png",
              },
            ],
          },
          {
            id: "meiji-pistachio-matcha",
            name: "Meiji Pistachio Matcha IX",
            variants: [
              {
                id: "meiji-pistachio-matcha-s",
                size: "S",
                price: null,
                image: "/images/products/meiji-pistachio-matcha-m.png",
              },
              {
                id: "meiji-pistachio-matcha-m",
                size: "M",
                price: 40000,
                image: "/images/products/meiji-pistachio-matcha-m.png",
              },
              {
                id: "meiji-pistachio-matcha-l",
                size: "L",
                price: 44000,
                image: "/images/products/meiji-pistachio-matcha-m.png",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "tra-sua-tra-trai-cay",
    name: "Trà Sữa và Trà Trái Cây",
    categories: [
      {
        id: "tra-sua-7-eleven",
        name: "Trà sữa 7-Eleven",
        products: [
          {
            id: "hong-tra-sua",
            name: "Hồng Trà Sữa",
            variants: [
              {
                id: "hong-tra-sua-l",
                size: "L",
                price: 25000,
                image: "/images/products/hong-tra-sua.png",
              },
              {
                id: "hong-tra-sua-xl",
                size: "XL",
                price: 30000,
                image: "/images/products/hong-tra-sua.png",
              },
            ],
          },
          {
            id: "tra-sua-olong-rang",
            name: "Trà Sữa olong Rang",
            variants: [
              {
                id: "tra-sua-olong-rang-l",
                size: "L",
                price: 25000,
                image: "/images/products/tra-sua-oolong-rang.png",
              },
              {
                id: "tra-sua-olong-rang-xl",
                size: "XL",
                price: 30000,
                image: "/images/products/tra-sua-olong-rang.png",
              },
            ],
          },
        ],
      },
      {
        id: "tra-tac-tra-trai-cay",
        name: "Trà tắc & Trà trái cây",
        products: [
          {
            id: "tra-tac-nha-bay",
            name: "Trà Tắc Nhà Bảy",
            variants: [
              {
                id: "tra-tac-nha-bay-l",
                size: "L",
                price: 17000,
                image: "/images/products/tra-tac-nha-bay.png",
              },
              {
                id: "tra-tac-nha-bay-xl",
                size: "XL",
                price: 23000,
                image: "/images/products/tra-tac-nha-bay.png",
              },
            ],
          },
          {
            id: "sam-bi-dao",
            name: "Sâm Bí Đao",
            variants: [
              {
                id: "sam-bi-dao-l",
                size: "L",
                price: 17000,
                image: "/images/products/sam-bi-dao.png",
              },
              {
                id: "sam-bi-dao-xl",
                size: "XL",
                price: 23000,
                image: "/images/products/sam-bi-dao.png",
              },
            ],
          },
        ],
      },
      {
        id: "ca-phe-viet-nam",
        name: "Cà phê Việt Nam",
        products: [
          {
            id: "cafe-kem-7-eleven",
            name: "Cafe Kem 7-Eleven",
            price: 20000,
            image: "/images/products/cafe-kem-7-eleven.png",
          },
          {
            id: "ca-phe-sua-da",
            name: "Cà Phê Sữa Đá",
            variants: [
              {
                id: "ca-phe-sua-da-s",
                size: "S",
                price: 18000,
                image: "/images/products/ca-phe-sua-da.png",
              },
              {
                id: "ca-phe-sua-da-m",
                size: "M",
                price: 22000,
                image: "/images/products/ca-phe-sua-da.png",
              },
              {
                id: "ca-phe-sua-da-l",
                size: "L",
                price: 27000,
                image: "/images/products/ca-phe-sua-da.png",
              },
            ],
          },
          {
            id: "ca-phe-den-da",
            name: "Cà Phê Đen Đá",
            variants: [
              {
                id: "ca-phe-den-da-s",
                size: "S",
                price: 18000,
                image: "/images/products/ca-phe-den-da.png",
              },
              {
                id: "ca-phe-den-da-m",
                size: "M",
                price: 22000,
                image: "/images/products/ca-phe-den-da.png",
              },
              {
                id: "ca-phe-den-da-l",
                size: "L",
                price: 27000,
                image: "/images/products/ca-phe-den-da.png",
              },
            ],
          },
          {
            id: "ca-phe-sua-tuoi",
            name: "Cà Phê Sữa Tươi",
            price: 27000,
            image: "/images/products/ca-phe-sua-tuoi.png",
          },
          {
            id: "cold-brew-nguyen-ban",
            name: "Cold Brew Nguyên Bản",
            price: 23000,
            image: "/images/products/cold-brew-nguyen-ban.png",
          },
          {
            id: "cold-brew-tac",
            name: "Cold Brew Tắc",
            variants: [
              {
                id: "cold-brew-tac-m",
                size: "M",
                price: 29000,
                image: "/images/products/cold-brew-tac.png",
              },
              {
                id: "cold-brew-tac-l",
                size: "L",
                price: 39000,
                image: "/images/products/cold-brew-tac.png",
              },
            ],
          },
          {
            id: "latte-da",
            name: "Latte Đá",
            price: 27000,
            image: "/images/products/latte-da.png",
          },
          {
            id: "cafe-americano-da",
            name: "Cafe Americano Đá",
            price: 22000,
            image: "/images/products/cafe-americano-da.png",
          },
          {
            id: "addon-ca-phe-them",
            name: "[Add-on] Cà Phê Thêm",
            price: 7000,
            image: "/images/products/addon-ca-phe-them.png",
          },
        ],
      },
      {
        id: "sua-dau-nanh",
        name: "Sữa đậu nành",
        products: [
          {
            id: "sua-dau-nanh",
            name: "Sữa Đậu Nành",
            variants: [
              {
                id: "sua-dau-nanh-l",
                size: "L",
                price: 15000,
                image: "/images/products/sua-dau-nanh.png",
              },
              {
                id: "sua-dau-nanh-xl",
                size: "XL",
                price: 20000,
                image: "/images/products/sua-dau-nanh.png",
              },
            ],
          },
        ],
      },
      {
        id: "topping-an-kem",
        name: "Topping ăn kèm",
        products: [
          {
            id: "addon-tran-chau-trang",
            name: "[Add-on] Trân Châu Trắng",
            price: 9000,
            image: "/images/products/addon-tran-chau-trang.png",
          },
          {
            id: "addon-tran-chau-pho-mai",
            name: "[Add-on] Trân Châu Phô Mai",
            price: 9000,
            image: "/images/products/addon-tran-chau-pho-mai.png",
          },
          {
            id: "addon-tran-chau-caramel",
            name: "[Add-on] Trân Châu Caramel",
            price: 9000,
            image: "/images/products/addon-tran-chau-caramel.png",
          },
          {
            id: "addon-tac-tuoi",
            name: "[Add-on] Tắc Tươi",
            price: 1000,
            image: "/images/products/addon-tac-tuoi.png",
          },
          {
            id: "addon-tran-chau-hoang-kim",
            name: "[Add-on] Trân Châu Hoàng Kim",
            price: 12000,
            image: "/images/products/addon-tran-chau-hoang-kim.png",
          },
        ],
      },
    ],
  },
  {
    id: "mon-ngon-nha-bay",
    name: "Món Ngon Nhà Bảy",
    categories: [
      {
        id: "mon-an-no",
        name: "Món ăn no",
        products: [
          {
            id: "com-ga-cay-xot-mat-ong-pho-mai",
            name: "Cơm Gà Cay Xốt Mật Ong & Phô Mai",
            price: 37000,
            image: "/images/products/com-ga-cay-xot-mat-ong-pho-mai.png",
          },
          {
            id: "mi-tron-xot-thai-xien-que",
            name: "Mì Trộn Xốt Thái Và Xiên Que",
            price: 32000,
            image: "/images/products/mi-tron-xot-thai-xien-que.png",
          },
          {
            id: "mi-tron-indomie-dac-biet-nha-bay",
            name: "Mì Trộn Indomie Đặc Biệt Nhà Bảy Xiên Que",
            price: 33000,
            image: "/images/products/mi-tron-indomie-dac-biet-nha-bay.png",
          },
          {
            id: "com-ga-xao-sa-ot",
            name: "Cơm Gà Xào Sả Ớt",
            price: 35000,
            image: "/images/products/com-ga-xao-sa-ot.png",
          },
          {
            id: "com-chien-ca-man",
            name: "Cơm Chiên Cá Mặn",
            price: 35000,
            image: "/images/products/com-chien-ca-man.png",
          },
          {
            id: "pho-ga-tron-xot-tuong-den",
            name: "Phở Gà Trộn Xốt Tương Đen Nhà Bảy",
            price: 37000,
            image: "/images/products/pho-ga-tron-xot-tuong-den.png",
          },
          {
            id: "lau-thai-chua-cay-hai-san",
            name: "Lẩu Thái Chua Cay Hải Sản Nhà Bảy (Kèm Bún)",
            price: 39000,
            image: "/images/products/lau-thai-chua-cay-hai-san.png",
          },
          {
            id: "combo-xot-tieu-den",
            name: "Cơm bò Xốt Tiêu Đen",
            price: 40000,
            image: "/images/products/combo-xot-tieu-den.png",
          },
          {
            id: "com-chien-duong-chau",
            name: "Cơm Chiên Dương Châu Nhà Bảy",
            price: 37000,
            image: "/images/products/com-chien-duong-chau.png",
          },
          {
            id: "com-ga-cay-xot-mat-ong",
            name: "Cơm Gà Cay Xốt Mật Ong",
            price: 37000,
            image: "/images/products/com-ga-cay-xot-mat-ong.png",
          },
          {
            id: "com-ga-quay-kieu-hong-kong",
            name: "Cơm Gà Quay Kiểu Hong Kong",
            price: 38000,
            image: "/images/products/com-ga-quay-kieu-hong-kong.png",
          },
          {
            id: "com-trang-nha-bay",
            name: "Cơm Trắng Nhà Bảy",
            price: 10000,
            image: "/images/products/com-trang-nha-bay.png",
          },
          {
            id: "com-tron-ngheu-xao-cay-kieu-thai",
            name: "Cơm Trộn Nghêu Xào Cay Kiểu Thái",
            price: 39000,
            image: "/images/products/com-tron-ngheu-xao-cay-kieu-thai.png",
          },
          {
            id: "mi-y-pho-mai-cay-ga-sot-nanban",
            name: "Mì Ý Phô Mai Cay Gà Sốt Nanban",
            price: 37000,
            image: "/images/products/mi-y-pho-mai-cay-ga-sot-nanban.png",
          },
          {
            id: "mi-y-thit-vien-xot-kem-rose",
            name: "Mì Ý Thịt Viên Xốt Kem Rose",
            price: 39000,
            image: "/images/products/mi-y-thit-vien-xot-kem-rose.png",
          },
          {
            id: "mi-y-xot-bo-bam",
            name: "Mì Ý Xốt Bò Bằm",
            price: 37000,
            image: "/images/products/mi-y-xot-bo-bam.png",
          },
          {
            id: "mien-tron-han-quoc",
            name: "Miến Trộn Hàn Quốc",
            price: 40000,
            image: "/images/products/mien-tron-han-quoc.png",
          },
          {
            id: "banh-gao-pho-mai-han-quoc",
            name: "Bánh Gạo Phô Mai Hàn Quốc",
            price: 32000,
            image: "/images/products/banh-gao-pho-mai-han-quoc.png",
          },
          {
            id: "mi-ga-nanban-xot-tuong-toi",
            name: "Mì Gà Nanban Xốt Tương Tỏi",
            price: 37000,
            image: "/images/products/mi-ga-nanban-xot-tuong-toi.png",
          },
          {
            id: "com-ga-xot-cam",
            name: "Cơm Gà Xốt Cam",
            price: 39000,
            image: "/images/products/com-ga-xot-cam.png",
          },
        ],
      },
      {
        id: "mon-chien-nuong",
        name: "Món chiên & nướng",
        products: [
          {
            id: "canh-ga-nuong-tieu",
            name: "Cánh Gà Nướng Tiêu (Hộp 2 Cánh)",
            price: 36000,
            image: "/images/products/canh-ga-nuong-tieu.png",
          },
          {
            id: "corn-dog-xuc-xich-pho-mai",
            name: "Corn Dog Xúc Xích Phô Mai",
            price: 20000,
            image: "/images/products/corn-dog-xuc-xich-pho-mai.png",
          },
          {
            id: "banh-xeo-nhat-ban",
            name: "Bánh Xèo Nhật Bản",
            price: 38000,
            image: "/images/products/banh-xeo-nhat-ban.png",
          },
          {
            id: "takoyaki-nhan-bach-tuoc",
            name: "Takoyaki Nhân Bạch Tuộc",
            price: 31000,
            image: "/images/products/takoyaki-nhan-bach-tuoc.png",
          },
          {
            id: "nem-nuong-xien-que",
            name: "Nem Nướng Xiên Que",
            price: 17000,
            image: "/images/products/nem-nuong-xien-que.png",
          },
          {
            id: "ga-xien-nuong-la-chanh",
            name: "Gà Xiên Nướng Lá Chanh",
            price: 19000,
            image: "/images/products/ga-xien-nuong-la-chanh.png",
          },
          {
            id: "bo-la-lot",
            name: "Bò Lá Lốt",
            price: 19000,
            image: "/images/products/bo-la-lot.png",
          },
          {
            id: "heo-xien-nuong-mo-hanh",
            name: "Heo Xiên Nướng Mỡ Hành",
            price: 19000,
            image: "/images/products/heo-xien-nuong-mo-hanh.png",
          },
          {
            id: "lap-xuong-dai-loan",
            name: "Lạp Xưởng Đài Loan (+ Bột Ớt)",
            price: 18000,
            image: "/images/products/lap-xuong-dai-loan.png",
          },
          {
            id: "xuc-xich-pho-mai",
            name: "Xúc Xích Phô Mai",
            price: 16000,
            image: "/images/products/xuc-xich-pho-mai.png",
          },
          {
            id: "ga-xien-nuong-muoi-ot",
            name: "Gà Xiên Nướng Muối Ớt",
            price: 15000,
            image: "/images/products/ga-xien-nuong-muoi-ot.png",
          },
          {
            id: "cha-ca-han-quoc",
            name: "Chả Cá Hàn Quốc",
            price: 12000,
            image: "/images/products/cha-ca-han-quoc.png",
          },
          {
            id: "xuc-xich-standard",
            name: "Xúc Xích Standard",
            price: 10000,
            image: "/images/products/xuc-xich-standard.png",
          },
          {
            id: "canh-ga-chien-gion",
            name: "Cánh Gà Chiên Giòn",
            price: 32000,
            image: "/images/products/canh-ga-chien-gion.png",
          },
          {
            id: "mieng-ga-chien-gion",
            name: "Miếng Gà Chiên Giòn",
            price: 27000,
            image: "/images/products/mieng-ga-chien-gion.png",
          },
          {
            id: "bo-vien-xien",
            name: "Bò Viên Xiên",
            price: 12000,
            image: "/images/products/bo-vien-xien.png",
          },
          {
            id: "ga-ran-han-quoc-khoai-lang-ngao-duong",
            name: "Gà Rán Hàn Quốc & Khoai Lang Ngào Đường",
            price: 35000,
            image: "/images/products/ga-ran-han-quoc-khoai-lang-ngao-duong.png",
          },
        ],
      },
      {
        id: "mon-hap",
        name: "Món hấp",
        products: [
          {
            id: "khoai-lang-hap-cat-lat",
            name: "Khoai Lang Hấp Cắt Lát",
            price: 24000,
            image: "/images/products/khoai-lang-hap-cat-lat.png",
          },
          {
            id: "banh-gio-thit-heo-trung-cut",
            name: "Bánh Giò Thịt Heo Trứng Cút",
            price: 18000,
            image: "/images/products/banh-gio-thit-heo-trung-cut.png",
          },
          {
            id: "ha-cao-tom-thit-4-vien",
            name: "Há Cảo Tôm Thịt 4 Viên",
            price: 16000,
            image: "/images/products/ha-cao-tom-thit-4-vien.png",
          },
          {
            id: "xiu-mai-hap-4-vien",
            name: "Xíu Mại Hấp 4 Viên",
            price: 16000,
            image: "/images/products/xiu-mai-hap-4-vien.png",
          },
          {
            id: "dimsum-tam-sac",
            name: "Dimsum Tam Sắc",
            price: 35000,
            image: "/images/products/dimsum-tam-sac.png",
          },
          {
            id: "banh-bao-thuong-hai-tam-vi",
            name: "Bánh Bao Thượng Hải Tam Vị",
            price: 40000,
            image: "/images/products/banh-bao-thuong-hai-tam-vi.png",
          },
          {
            id: "banh-bao-trung-cut-trung-muoi",
            name: "Bánh Bao Trứng Cút Trứng Muối",
            price: 25000,
            image: "/images/products/banh-bao-trung-cut-trung-muoi.png",
          },
          {
            id: "banh-bao-thit-heo-trung-cut",
            name: "Bánh Bao Thịt Heo Trứng Cút",
            price: 22000,
            image: "/images/products/banh-bao-thit-heo-trung-cut.png",
          },
          {
            id: "banh-bao-nhan-pho-mai",
            name: "Bánh Bao Nhân Phô Mai",
            price: 25000,
            image: "/images/products/banh-bao-nhan-pho-mai.png",
          },
          {
            id: "banh-bao-cade",
            name: "Bánh Bao Cadé",
            price: 8000,
            image: "/images/products/banh-bao-cade.png",
          },
          {
            id: "dau-hu-xot-ot-rim",
            name: "Đậu Hũ Xốt Ớt Rim",
            price: 19000,
            image: "/images/products/dau-hu-xot-ot-rim.png",
          },
          {
            id: "dau-hu-xot-tuong-sa-cay",
            name: "Đậu Hũ Xốt Tương Sả Chay",
            price: 19000,
            image: "/images/products/dau-hu-xot-tuong-sa-chay.png",
          },
          {
            id: "dimsum-hap-cam",
            name: "Dimsum Thập Cẩm",
            price: 30000,
            image: "/images/products/dimsum-thap-cam.png",
          },
          {
            id: "banh-xep-han-quoc",
            name: "Bánh Xếp Hàn Quốc",
            price: 7000,
            image: "/images/products/banh-xep-han-quoc.png",
          },
          {
            id: "bap-luoc",
            name: "Bắp Mỹ Luộc",
            price: 15000,
            image: "/images/products/bap-luoc.png",
          },
          {
            id: "khoai-lang-hap-chin-tui-240g",
            name: "Khoai Lang Hấp Chín Túi 240g",
            price: 24000,
            image: "/images/products/khoai-lang-hap-chin-tui-240g.png",
          },
          {
            id: "khoai-mi-nuoc-dua-tnt-240g",
            name: "Khoai Mì Nước Dừa TNT 240g",
            price: 24000,
            image: "/images/products/khoai-mi-nuoc-dua-tnt-240g.png",
          },
          {
            id: "addon-trung-ga-luoc",
            name: "[Add-on] Trứng Gà Luộc",
            price: 6000,
            image: "/images/products/addon-trung-ga-luoc.png",
          },
        ],
      },
      {
        id: "com-nam-onigiri",
        name: "Cơm nắm Onigiri",
        products: [
          {
            id: "onigiri-bo-nuong-furikake",
            name: "Cơm Nắm Onigiri Bò Nướng Furikake",
            price: 17000,
            image: "/images/products/onigiri-bo-nuong-furikake.png",
          },
          {
            id: "onigiri-ca-ngu-mayo",
            name: "Cơm Nắm Onigiri Cá Ngừ Mayo",
            price: 17000,
            image: "/images/products/onigiri-ca-ngu-mayo.png",
          },
          {
            id: "onigiri-tom-yum-ga",
            name: "Cơm Nắm Onigiri Tôm Yum Gà",
            price: 17000,
            image: "/images/products/onigiri-tom-yum-ga.png",
          },
          {
            id: "onigiri-ca-hoi-cay",
            name: "Cơm Nắm Onigiri Cá Hồi Cay",
            price: 19000,
            image: "/images/products/onigiri-ca-hoi-cay.png",
          },
          {
            id: "com-tron-onigiri-heo-xao-cay-pho-mai",
            name: "Cơm Trộn Onigiri Rong Biển Heo Xào Cay Phô Mai",
            price: 19000,
            image: "/images/products/com-tron-onigiri-heo-xao-cay-pho-mai.png",
          },
          {
            id: "com-tron-onigiri-ca-ngu-mayo",
            name: "Cơm Trộn Onigiri Rong Biển Cá Ngừ Mayo",
            price: 17000,
            image: "/images/products/com-tron-onigiri-ca-ngu-mayo.png",
          },
          {
            id: "com-tron-onigiri-ca-hoi-nuong",
            name: "Cơm Trộn Onigiri Rong Biển Cá Hồi Nướng",
            price: 19000,
            image: "/images/products/com-tron-onigiri-ca-hoi-nuong.png",
          },
          {
            id: "kimbap-bo-bulgogi-trung",
            name: "Kimbap Bò Bulgogi & Trứng",
            price: 37000,
            image: "/images/products/kimbap-bo-bulgogi-trung.png",
          },
          {
            id: "kimbap-ga-cay-pho-mai-han-quoc",
            name: "Kimbap Gà Cay Phô Mai Hàn Quốc",
            price: 37000,
            image: "/images/products/kimbap-ga-cay-pho-mai-han-quoc.png",
          },
          {
            id: "kimbap-ca-ngu-cay-la-me",
            name: "Kimbap Cá Ngừ Cay & Lá Mè",
            price: 37000,
            image: "/images/products/kimbap-ca-ngu-cay-la-me.png",
          },
          {
            id: "hop-sushi-7-vi",
            name: "Hộp Sushi 7 Vị",
            price: 37000,
            image: "/images/products/hop-sushi-7-vi.png",
          },
          {
            id: "xoi-ga-xe-lap-xuong",
            name: "Xôi Gà Xé & Lạp Xưởng",
            price: 19000,
            image: "/images/products/xoi-ga-xe-lap-xuong.png",
          },
          {
            id: "xoi-ga-nam-dong-co",
            name: "Xôi Gà Nấm Đông Cô",
            price: 25000,
            image: "/images/products/xoi-ga-nam-dong-co.png",
          },
          {
            id: "xoi-ga-ro-ti",
            name: "Xôi Gà Rô Ti",
            price: 20000,
            image: "/images/products/xoi-ga-ro-ti.png",
          },
        ],
      },
      {
        id: "chao-sup",
        name: "Cháo, súp",
        products: [
          {
            id: "chao-ca-hoi",
            name: "Cháo Cá Hồi",
            price: 27000,
            image: "/images/products/chao-ca-hoi.png",
          },
          {
            id: "chao-suon-sun",
            name: "Cháo Sườn Sụn",
            price: 25000,
            image: "/images/products/chao-suon-sun.png",
          },
          {
            id: "chao-thit-bam",
            name: "Cháo Thịt Bằm",
            price: 22000,
            image: "/images/products/chao-thit-bam.png",
          },
          {
            id: "sup-ga-nam-tuyet-rau-cu",
            name: "Súp Gà Nấm Tuyết Rau Củ",
            price: 25000,
            image: "/images/products/sup-ga-nam-tuyet-rau-cu.png",
          },
          {
            id: "sup-thanh-cua-trung-bach-thao",
            name: "Súp Thanh Cua Trứng Bách Thảo",
            price: 27000,
            image: "/images/products/sup-thanh-cua-trung-bach-thao.png",
          },
        ],
      },
      {
        id: "salads",
        name: "Salads",
        products: [
          {
            id: "salad-hon-hop-uc-ga-trung",
            name: "Salad Hỗn Hợp Ức Gà Và Trứng",
            price: 35000,
            image: "/images/products/salad-hon-hop-uc-ga-trung.png",
          },
          {
            id: "salad-hon-hop-sot-me-rang",
            name: "Salad Hỗn Hợp Sốt Mè Rang",
            price: 20000,
            image: "/images/products/salad-hon-hop-sot-me-rang.png",
          },
          {
            id: "salad-thanh-cua-trung-cut",
            name: "Salad Thanh Cua Và Trứng Cút",
            price: 25000,
            image: "/images/products/salad-thanh-cua-trung-cut.png",
          },
        ],
      },
      {
        id: "trang-mieng",
        name: "Tráng miệng",
        products: [
          {
            id: "thach-dua-anh-hong-ly-190g",
            name: "Thạch Dừa Ánh Hồng Ly 190g",
            price: 11000,
            image: "/images/products/thach-dua-anh-hong-ly-190g.png",
          },
          {
            id: "banh-flan-caramen-anh-hong-80g",
            name: "Bánh Flan Caramen Ánh Hồng 80g",
            price: 17000,
            image: "/images/products/banh-flan-caramen-anh-hong-80g.png",
          },
          {
            id: "che-dau-trang-7-eleven",
            name: "Chè Đậu Trắng 7-Eleven",
            price: 12000,
            image: "/images/products/che-dau-trang-7-eleven.png",
          },
          {
            id: "che-bap-7-eleven",
            name: "Chè Bắp 7-Eleven",
            price: 12000,
            image: "/images/products/che-bap-7-eleven.png",
          },
          {
            id: "che-khoai-mon-7-eleven",
            name: "Chè Khoai Môn 7-Eleven",
            price: 12000,
            image: "/images/products/che-khoai-mon-7-eleven.png",
          },
          {
            id: "che-buoi-7-eleven",
            name: "Chè Bưởi 7-Eleven",
            price: 12000,
            image: "/images/products/che-buoi-7-eleven.png",
          },
          {
            id: "che-duong-nhan-3sach-kitchen-300ml",
            name: "Chè Dưỡng Nhan 3Sạch Kitchen 300ml",
            price: 31000,
            image: "/images/products/che-duong-nhan-3sach-kitchen-300ml.png",
          },
          {
            id: "thach-dua-coco-chew-huong-dua-30g",
            name: "Thạch Dừa Coco Chew Hương Dừa 30g",
            price: 6000,
            image: "/images/products/thach-dua-coco-chew-huong-dua-30g.png",
          },
          {
            id: "thach-dua-coco-chew-huong-chanh-day-30g",
            name: "Thạch Dừa Coco Chew Hương Chanh Dây 30g",
            price: 6000,
            image:
              "/images/products/thach-dua-coco-chew-huong-chanh-day-30g.png",
          },
          {
            id: "che-dau-xanh-3sach-kitchen-200g",
            name: "Chè Đậu Xanh 3Sạch Kitchen 200g",
            price: 21000,
            image: "/images/products/che-dau-xanh-3sach-kitchen-200g.png",
          },
          {
            id: "rau-cau-ca-phe-140g",
            name: "Rau Câu Cà Phê 140g",
            price: 15000,
            image: "/images/products/rau-cau-ca-phe-140g.png",
          },
          {
            id: "banh-su-que-sieu-kem-7-eleven",
            name: "Bánh Su Que Siêu Kem 7-Eleven",
            price: 15000,
            image: "/images/products/banh-su-que-sieu-kem-7-eleven.png",
          },
          {
            id: "rau-cau-dua-7-eleven",
            name: "Rau Câu Dừa 7-Eleven",
            price: 15000,
            image: "/images/products/rau-cau-dua-7-eleven.png",
          },
          {
            id: "rau-cau-3-vi-7-eleven",
            name: "Rau Câu 3 Vị 7-Eleven",
            price: 15000,
            image: "/images/products/rau-cau-3-vi-7-eleven.png",
          },
          {
            id: "che-hat-dac-sua-dua-7-eleven",
            name: "Chè Hạt Đác Sữa Dừa 7-Eleven",
            price: 25000,
            image: "/images/products/che-hat-dac-sua-dua-7-eleven.png",
          },
          {
            id: "che-sam-bo-luong-7-eleven",
            name: "Chè Sâm Bổ Lượng 7-Eleven",
            price: 22000,
            image: "/images/products/che-sam-bo-luong-7-eleven.png",
          },
          {
            id: "che-suong-sao-bi-dao-hat-chia",
            name: "Chè Sương Sáo Bí Đao Hạt Chia 7-Eleven",
            price: 20000,
            image: "/images/products/che-suong-sao-bi-dao-hat-chia.png",
          },
          {
            id: "banh-caramen-7-eleven",
            name: "Bánh Caramen 7-Eleven",
            price: 15000,
            image: "/images/products/banh-caramen-7-eleven.png",
          },
          {
            id: "tau-hu-pudding-anh-lun-150ml",
            name: "Tàu Hủ Pudding Anh Lùn 150ml",
            price: 28000,
            image: "/images/products/tau-hu-pudding-anh-lun-150ml.png",
          },
          {
            id: "thach-den-an-lien-thach-an-230g",
            name: "Thạch Đen Ăn Liền Thạch An 230g",
            price: 28000,
            image: "/images/products/thach-den-an-lien-thach-an-230g.png",
          },
          {
            id: "thach-dua-anh-hong-goi-400g",
            name: "Thạch Dừa Ánh Hồng Gói 400g",
            price: 24000,
            image: "/images/products/thach-dua-anh-hong-goi-400g.png",
          },
          {
            id: "thach-dua-anh-hong-vi-dua-luoi-190g",
            name: "Thạch Dừa Ánh Hồng Vị Dưa Lưới Ly 190g",
            price: 10000,
            image: "/images/products/thach-dua-anh-hong-vi-dua-luoi-190g.png",
          },
          {
            id: "thach-dua-anh-hong-vi-dao-190g",
            name: "Thạch Dừa Ánh Hồng Vị Đào Ly 190g",
            price: 10000,
            image: "/images/products/thach-dua-anh-hong-vi-dao-190g.png",
          },
        ],
      },
    ],
  },
  {
    id: "cac-loai-banh",
    name: "Các Loại Bánh",
    categories: [
      {
        id: "banh-mi-que",
        name: "Bánh mì que",
        products: [
          {
            id: "banh-mi-pho-mai-nuong-sa-te",
            name: "Bánh Mì Phô Mai Nướng Sa Tế",
            price: 15000,
            image: "/images/products/banh-mi-pho-mai-nuong-sa-te.png",
          },
          {
            id: "banh-mi-que-nem-nuong-xot-thai",
            name: "BMQ Nem Nướng Xốt Thái",
            price: 15000,
            image: "/images/products/banh-mi-que-nem-nuong-xot-thai.png",
          },
          {
            id: "banh-mi-que-pate-hai-phong",
            name: "Bánh Mì Que Pate Hải Phòng",
            price: 15000,
            image: "/images/products/banh-mi-que-pate-hai-phong.png",
          },
          {
            id: "banh-mi-que-cha-bong-bo-hot-ga",
            name: "Bánh Mì Que Chà Bông Bò Hột Gà",
            price: 15000,
            image: "/images/products/banh-mi-que-cha-bong-bo-hot-ga.png",
          },
          {
            id: "banh-mi-que-ga-xe-phay-pho-mai",
            name: "Bánh Mì Que Gà Xé Phay Phô Mai",
            price: 15000,
            image: "/images/products/banh-mi-que-ga-xe-phay-pho-mai.png",
          },
          {
            id: "banh-mi-que-pate-cha-bong-beo-thom",
            name: "Bánh Mì Que Pate Chà Bông Béo Thơm",
            price: 15000,
            image: "/images/products/banh-mi-que-pate-cha-bong-beo-thom.png",
          },
        ],
      },
      {
        id: "burritos",
        name: "Burritos",
        products: [
          {
            id: "burrito-thit-ap-chao-trung",
            name: "Burrito Thịt Áp Chảo Và Trứng",
            price: 35000,
            image: "/images/products/burrito-thit-ap-chao-trung.png",
          },
          {
            id: "burrito-ga-nuong-xot-pho-mai-cay",
            name: "Burrito Gà Nướng Xốt Phô Mai Cay",
            price: 29000,
            image: "/images/products/burrito-ga-nuong-xot-pho-mai-cay.png",
          },
          {
            id: "burrito-xuc-xich-xot-pho-mai-chay",
            name: "Burrito Xúc Xích Và Xốt Phô Mai Cháy",
            price: 27000,
            image: "/images/products/burrito-xuc-xich-xot-pho-mai-chay.png",
          },
          {
            id: "burrito-bo-pho-mai",
            name: "Burrito Bò Phô Mai",
            price: 29000,
            image: "/images/products/burrito-bo-pho-mai.png",
          },
          {
            id: "burrito-pizza-pho-mai",
            name: "Burrito Pizza Phô Mai",
            price: 29000,
            image: "/images/products/burrito-pizza-pho-mai.png",
          },
        ],
      },
      {
        id: "pizza",
        name: "Pizza",
        products: [
          {
            id: "pizza-xuc-xich-pepperoni-7-eleven",
            name: "Pizza Xúc Xích Pepperoni 7-Eleven",
            price: 45000,
            image: "/images/products/pizza-xuc-xich-pepperoni-7-eleven.png",
          },
          {
            id: "pizza-dh-buldak-ga-nuong-cay-85g",
            name: "Pizza ĐH Buldak Gà Nướng Cay 85g",
            price: 36000,
            image: "/images/products/pizza-dh-buldak-ga-nuong-cay-85g.png",
          },
          {
            id: "pizza-dh-bulgogi-thit-nuong-85g",
            name: "Pizza ĐH Bulgogi Thịt Nướng 85g",
            price: 36000,
            image: "/images/products/pizza-dh-bulgogi-thit-nuong-85g.png",
          },
          {
            id: "pizza-dh-hawaiian-dua-dam-bong-90g",
            name: "Pizza ĐH Hawaiian Dứa Và Dăm Bông 90g",
            price: 36000,
            image: "/images/products/pizza-dh-hawaiian-dua-dam-bong-90g.png",
          },
          {
            id: "pizza-bon-xuc-xich-pepperoni-120g",
            name: "Pizza Bon Xúc Xích Pepperoni 120g",
            price: 52000,
            image: "/images/products/pizza-bon-xuc-xich-pepperoni-120g.png",
          },
          {
            id: "pizza-gap-bon-pho-mai-ca-chua-200g",
            name: "Pizza Gấp Bon Phô Mai Cà Chua 200g",
            price: 67000,
            image: "/images/products/pizza-gap-bon-pho-mai-ca-chua-200g.png",
          },
          {
            id: "pizza-manna-hai-san-y-120g",
            name: "Pizza Manna Hải Sản Ý 120g",
            price: 45000,
            image: "/images/products/pizza-manna-hai-san-y-120g.png",
          },
          {
            id: "pizza-manna-pho-mai-120g",
            name: "Pizza Manna Phô Mai 120g",
            price: 47000,
            image: "/images/products/pizza-manna-pho-mai-120g.png",
          },
          {
            id: "pizza-4ps-4-pho-mai-138g",
            name: "Pizza 4P's 4 Phô Mai 138g",
            price: 93000,
            image: "/images/products/pizza-4ps-4-pho-mai-138g.png",
          },
          {
            id: "pizza-4ps-ga-teriyaki-150g",
            name: "Pizza 4P's Gà Teriyaki 150g",
            price: 97000,
            image: "/images/products/pizza-4ps-ga-teriyaki-150g.png",
          },
          {
            id: "pizza-4ps-margherita-133g",
            name: "Pizza 4P's Margherita 133g",
            price: 93000,
            image: "/images/products/pizza-4ps-margherita-133g.png",
          },
        ],
      },
      {
        id: "toastie-sandwich-nuong",
        name: "Toastie - Sandwich nướng",
        products: [
          {
            id: 1,
            name: "Toastie Thịt Nguội Và Phô Mai",
            price: 29000,
            image: "/images/products/toastie-thit-nguoi-va-pho-mai.png",
          },
          {
            id: 2,
            name: "Toastie Phô Mai Chảy",
            price: 29000,
            image: "/images/products/toastie-pho-mai-chay.png",
          },
          {
            id: 3,
            name: "Toastie Socola Chảy",
            price: 29000,
            image: "/images/products/toastie-socola-chay.png",
          },
          {
            id: 4,
            name: "Toastie Chuối và Nutella",
            price: 29000,
            image: "/images/products/toastie-chuoi-va-nutella.png",
          },
          {
            id: 5,
            name: "Toastie Xúc Xích Chà Bông",
            price: 29000,
            image: "/images/products/toastie-xuc-xich-cha-bong.png",
          },
          {
            id: 6,
            name: "Danish Toastie Real Spam and Cheese",
            price: 35000,
            image: "/images/products/danish-toastie-real-spam-and-cheese.png",
          },
          {
            id: 7,
            name: "Danish Toastie Bơ Đậu Phộng và Mứt Dâu",
            price: 33000,
            image:
              "/images/products/danish-toastie-bo-dau-phong-va-mut-dau.png",
          },
        ],
      },
      {
        id: "sandwiches",
        name: "Sandwiches",
        products: [
          {
            id: "sandwich-ngu-coc-uc-ga-xot-caesar",
            name: "Sandwich Ngũ Cốc Ức Gà Xốt Caesar",
            price: 37000,
            image: "/images/products/sandwich-ngu-coc-uc-ga-xot-caesar.png",
          },
          {
            id: "danish-toastie-bo-dau-phong-mut-dau",
            name: "Danish Toastie Bơ Đậu Phộng Và Mứt Dâu",
            price: 33000,
            image: "/images/products/danish-toastie-bo-dau-phong-mut-dau.png",
          },
          {
            id: "danish-toastie-real-spam-cheese",
            name: "Danish Toastie Real Spam And Cheese",
            price: 35000,
            image: "/images/products/danish-toastie-real-spam-cheese.png",
          },
          {
            id: "toastie-pho-mai-chay",
            name: "Toastie Phô Mai Chảy",
            price: 29000,
            image: "/images/products/toastie-pho-mai-chay.png",
          },
          {
            id: "toastie-chuoi-nutella",
            name: "Toastie Chuối Và Nutella",
            price: 29000,
            image: "/images/products/toastie-chuoi-nutella.png",
          },
          {
            id: "toastie-thit-nguoi-pho-mai",
            name: "Toastie Thịt Nguội Và Phô Mai",
            price: 29000,
            image: "/images/products/toastie-thit-nguoi-pho-mai.png",
          },
          {
            id: "sandwich-trung-mayo-kieu-nhat",
            name: "Sandwich Trứng Và Mayo Kiểu Nhật",
            price: 27000,
            image: "/images/products/sandwich-trung-mayo-kieu-nhat.png",
          },
          {
            id: "sandwich-jam-pho-mai-trung",
            name: "Sandwich Jam Phô Mai Trứng",
            price: 33000,
            image: "/images/products/sandwich-jam-pho-mai-trung.png",
          },
        ],
      },
      {
        id: "burger-hotdog",
        name: "Burger & Hotdog",
        products: [
          {
            id: "banh-mi-muffin-anh-trung-bacon-pho-mai",
            name: "Bánh Mì Muffin Anh Trứng Bacon & Phô Mai",
            price: 45000,
            image:
              "/images/products/banh-mi-muffin-anh-trung-bacon-pho-mai.png",
          },
          {
            id: "banh-muffin-anh-xuc-xich-heo-pho-mai",
            name: "Bánh Muffin Anh Xúc Xích Heo & Phô Mai",
            price: 39000,
            image: "/images/products/banh-muffin-anh-xuc-xich-heo-pho-mai.png",
          },
          {
            id: "hot-dog-bacon-pho-mai",
            name: "Hot Dog Bacon Phô Mai",
            price: 33000,
            image: "/images/products/hot-dog-bacon-pho-mai.png",
          },
          {
            id: "burger-bo-pho-mai-size-lon",
            name: "Burger Bò Phô Mai Size Lớn",
            price: 49000,
            image: "/images/products/burger-bo-pho-mai-size-lon.png",
          },
          {
            id: "burger-ga-xot-kem-gochujang-size-lon",
            name: "Burger Gà Xốt Kem Gochujang Size Lớn",
            price: 49000,
            image: "/images/products/burger-ga-xot-kem-gochujang-size-lon.png",
          },
          {
            id: "banh-sung-trau-thit-nguoi-pho-mai",
            name: "Bánh Sừng Trâu Thịt Nguội Và Phô Mai",
            price: 33000,
            image: "/images/products/banh-sung-trau-thit-nguoi-pho-mai.png",
          },
        ],
      },
      {
        id: "banh-ngot",
        name: "Bánh ngọt",
        products: [
          {
            id: "banh-cromboloni-kem-ca-phe-muoi",
            name: "Bánh Cromboloni Kem Cà Phê Muối",
            price: 29000,
            image: "/images/products/banh-cromboloni-kem-ca-phe-muoi.png",
          },
          {
            id: "banh-cromboloni-kem-hat-de-cuoi",
            name: "Bánh Cromboloni Kem Hạt Dẻ Cười",
            price: 29000,
            image: "/images/products/banh-cromboloni-kem-hat-de-cuoi.png",
          },
          {
            id: "banh-sandwich-lat-6-lat",
            name: "Bánh Sandwich Lạt 6 Lát",
            price: 16000,
            image: "/images/products/banh-sandwich-lat-6-lat.png",
          },
          {
            id: "banh-bong-lan-pho-mai-mr-chefs-105g-t9",
            name: "Bánh Bông Lan Phô Mai Mr Chef's 105g - T9",
            price: 36000,
            image:
              "/images/products/banh-bong-lan-pho-mai-mr-chefs-105g-t9.png",
          },
          {
            id: "banh-pho-mai-vi-dua-luoi-mr-chefs-105g-t9",
            name: "Bánh Phô Mai Vị Dưa Lưới Mr Chef's 105g - T9",
            price: 36000,
            image:
              "/images/products/banh-pho-mai-vi-dua-luoi-mr-chefs-105g-t9.png",
          },
          {
            id: "banh-mi-kem-tuoi-socola-chuoi",
            name: "Bánh Mì Kem Tươi Socola Chuối",
            price: 29000,
            image: "/images/products/banh-mi-kem-tuoi-socola-chuoi.png",
          },
          {
            id: "banh-mi-kem-tuoi-tra-xanh-bong-dem",
            name: "Bánh Mì Kem Tươi Trà Xanh Bóng Đêm",
            price: 29000,
            image: "/images/products/banh-mi-kem-tuoi-tra-xanh-bong-dem.png",
          },
          {
            id: "banh-mi-kem-socola",
            name: "Bánh Mì Kem Socola",
            price: 29000,
            image: "/images/products/banh-mi-kem-socola.png",
          },
          {
            id: "banh-mi-kem-vani",
            name: "Bánh Mì Kem Vani",
            price: 29000,
            image: "/images/products/banh-mi-kem-vani.png",
          },
          {
            id: "banh-sung-trau-pho-mai-7-eleven",
            name: "Bánh Sừng Trâu Phô Mai 7-Eleven",
            price: 25000,
            image: "/images/products/banh-sung-trau-pho-mai-7-eleven.png",
          },
          {
            id: "banh-tieu-la-dua-7-eleven",
            name: "Bánh Tiêu Lá Dứa 7-Eleven 1 Cái",
            price: 12000,
            image: "/images/products/banh-tieu-la-dua-7-eleven.png",
          },
          {
            id: "banh-tieu-7-eleven",
            name: "Bánh Tiêu 7-Eleven 1 Cái",
            price: 12000,
            image: "/images/products/banh-tieu-7-eleven.png",
          },
          {
            id: "banh-mi-socola-chip-7-eleven",
            name: "Bánh Mì Socola Chip 7-Eleven",
            price: 18000,
            image: "/images/products/banh-mi-socola-chip-7-eleven.png",
          },
          {
            id: "banh-sandwich-lat-7-eleven",
            name: "Bánh Sandwich Lạt 7-Eleven",
            price: 14000,
            image: "/images/products/banh-sandwich-lat-7-eleven.png",
          },
          {
            id: "banh-mi-sandwich-lat-hni-275g",
            name: "Bánh Mì Sandwich Lạt HNI 275g",
            price: 22000,
            image: "/images/products/banh-mi-sandwich-lat-hni-275g.png",
          },
          {
            id: "banh-mi-hoa-cuc-otto-300g",
            name: "Bánh Mì Hoa Cúc Otto 300g",
            price: 51000,
            image: "/images/products/banh-mi-hoa-cuc-otto-300g.png",
          },
          {
            id: "banh-paket-bao-ngoc-108g",
            name: "Bánh Paket Bảo Ngọc 108g",
            price: 15000,
            image: "/images/products/banh-paket-bao-ngoc-108g.png",
          },
          {
            id: "banh-sung-huou-bao-ngoc-175g",
            name: "Bánh Sừng Hươu Bảo Ngọc 175g",
            price: 20000,
            image: "/images/products/banh-sung-huou-bao-ngoc-175g.png",
          },
          {
            id: "banh-com-dau-xanh-bao-minh-75g",
            name: "Bánh Cốm Đậu Xanh Bảo Minh 75g",
            price: 12000,
            image: "/images/products/banh-com-dau-xanh-bao-minh-75g.png",
          },
          {
            id: "banh-bong-lan-tuoi-bo-nho",
            name: "Bánh Bông Lan Tươi Bơ Nho",
            price: 11000,
            image: "/images/products/banh-bong-lan-tuoi-bo-nho.png",
          },
          {
            id: "banh-karo-pho-mai-hoang-kim-156g",
            name: "Bánh Karo Phô Mai Hoàng Kim 156g",
            price: 10000,
            image: "/images/products/banh-karo-pho-mai-hoang-kim-156g.png",
          },
          {
            id: "banh-an-sang-milo-150g",
            name: "Bánh Ăn Sáng Milo 150g",
            price: 79000,
            image: "/images/products/banh-an-sang-milo-150g.png",
          },
          {
            id: "ngu-coc-nestle-koko-krunch-bar-25g",
            name: "Ngũ Cốc Nestlé Koko Krunch Bar 25g",
            price: 20000,
            image: "/images/products/ngu-coc-nestle-koko-krunch-bar-25g.png",
          },
          {
            id: "banh-an-sang-koko-krunch-170g",
            name: "Bánh Ăn Sáng Koko Krunch 170g Cereals Granola",
            price: 79000,
            image: "/images/products/banh-an-sang-koko-krunch-170g.png",
          },
          {
            id: "banh-bauli-moonfils-kem-pho-mai-45g",
            name: "Bánh Bauli Moonfils Kem Phô Mai 45g",
            price: 14000,
            image: "/images/products/banh-bauli-moonfils-kem-pho-mai-45g.png",
          },
          {
            id: "banh-bauli-moonfils-dau-45g",
            name: "Bánh Bauli Moonfils Dâu 45g",
            price: 12000,
            image: "/images/products/banh-bauli-moonfils-dau-45g.png",
          },
          {
            id: "banh-bauli-moonfils-vani-45g",
            name: "Bánh Bauli Moonfils Vani 45g",
            price: 12000,
            image: "/images/products/banh-bauli-moonfils-vani-45g.png",
          },
          {
            id: "banh-bauli-moonfils-socola-45g",
            name: "Bánh Bauli Moonfils Socola 45g",
            price: 12000,
            image: "/images/products/banh-bauli-moonfils-socola-45g.png",
          },
          {
            id: "banh-mi-staff-cha-bong-60g",
            name: "Bánh Mì Staff Chà Bông 60g",
            price: 10000,
            image: "/images/products/banh-mi-staff-cha-bong-60g.png",
          },
          {
            id: "banh-kido-pho-mai-castella-40g",
            name: "Bánh Kido Phô Mai Castella 40g",
            price: 18000,
            image: "/images/products/banh-kido-pho-mai-castella-40g.png",
          },
          {
            id: "ngu-coc-nestle-koko-krunch-hop-25g",
            name: "Ngũ Cốc Nestlé Koko Krunch Hộp 25g",
            price: 14000,
            image: "/images/products/ngu-coc-nestle-koko-krunch-hop-25g.png",
          },
          {
            id: "ngu-coc-nestle-milo-hop-25g",
            name: "Ngũ Cốc Nestlé Milo Hộp 25g",
            price: 14000,
            image: "/images/products/ngu-coc-nestle-milo-hop-25g.png",
          },
          {
            id: "banh-bong-lan-pho-mai-mr-chefs-105g",
            name: "Bánh Bông Lan Phô Mai Mr Chef's 105g",
            price: 41000,
            image: "/images/products/banh-bong-lan-pho-mai-mr-chefs-105g.png",
          },
          {
            id: "banh-la-dua-nhan-dau-ngoc-tu-75g",
            name: "Bánh Lá Dứa Nhân Đậu Ngọc Tú 75g",
            price: 12000,
            image: "/images/products/banh-la-dua-nhan-dau-ngoc-tu-75g.png",
          },
          {
            id: "banh-pho-mai-vi-dua-luoi-mr-chefs-105g",
            name: "Bánh Phô Mai Vị Dưa Lưới Mr Chef's 105g",
            price: 41000,
            image:
              "/images/products/banh-pho-mai-vi-dua-luoi-mr-chefs-105g.png",
          },
          {
            id: "banh-la-dua-nhan-chuoi-ngoc-tu-75g",
            name: "Bánh Lá Dứa Nhân Chuối Ngọc Tú 75g",
            price: 12000,
            image: "/images/products/banh-la-dua-nhan-chuoi-ngoc-tu-75g.png",
          },
          {
            id: "banh-dorayaki-kido-nhan-socola-30g",
            name: "Bánh Dorayaki Kido Nhân Socola 30g",
            price: 10000,
            image: "/images/products/banh-dorayaki-kido-nhan-socola-30g.png",
          },
          {
            id: "banh-dorayaki-kido-nhan-cha-bong-30g",
            name: "Bánh Dorayaki Kido Nhân Chà Bông 30g",
            price: 10000,
            image: "/images/products/banh-dorayaki-kido-nhan-cha-bong-30g.png",
          },
          {
            id: "banh-kep-pho-mai-staff-65g",
            name: "Bánh Kẹp Phô Mai Staff 65g",
            price: 15000,
            image: "/images/products/banh-kep-pho-mai-staff-65g.png",
          },
          {
            id: "banh-mi-nuong-tipo-caramel-50g",
            name: "Bánh Mì Nướng Tipo Caramel 50g",
            price: 19000,
            image: "/images/products/banh-mi-nuong-tipo-caramel-50g.png",
          },
          {
            id: "banh-mi-nuong-tipo-bo-toi-50g",
            name: "Bánh Mì Nướng Tipo Bơ Tỏi 50g",
            price: 19000,
            image: "/images/products/banh-mi-nuong-tipo-bo-toi-50g.png",
          },
          {
            id: "banh-sandwich-ca-hoi-mayo-cay-otto-82g",
            name: "Bánh Sandwich Cá Hồi Mayo Cay Otto 82g",
            price: 13000,
            image:
              "/images/products/banh-sandwich-ca-hoi-mayo-cay-otto-82g.png",
          },
          {
            id: "banh-cupcake-topntop-nhan-socola-180g",
            name: "Bánh Cupcake Top'nTop Nhân Socola 180g",
            price: 46000,
            image: "/images/products/banh-cupcake-topntop-nhan-socola-180g.png",
          },
          {
            id: "banh-cupcake-topntop-nhan-kem-dau-180g",
            name: "Bánh Cupcake Top'nTop Nhân Kem Dâu 180g",
            price: 46000,
            image:
              "/images/products/banh-cupcake-topntop-nhan-kem-dau-180g.png",
          },
          {
            id: "banh-cupcake-toppy-oreo-180g",
            name: "Bánh Cupcake Toppy Oreo Nhân Dâu 180g",
            price: 47000,
            image: "/images/products/banh-cupcake-toppy-oreo-180g.png",
          },
          {
            id: "banh-dorayaki-kido-cha-bong-bbq-30g",
            name: "Bánh Dorayaki Kido Nhân Chà Bông BBQ 30g",
            price: 10000,
            image: "/images/products/banh-dorayaki-kido-cha-bong-bbq-30g.png",
          },
          {
            id: "banh-dorayaki-kido-pho-mai-30g",
            name: "Bánh Dorayaki Kido Nhân Phô Mai 30g",
            price: 10000,
            image: "/images/products/banh-dorayaki-kido-pho-mai-30g.png",
          },
          {
            id: "mut-hat-phi-nutella-200g",
            name: "Mứt Hạt Phỉ Nutella 200g",
            price: 104000,
            image: "/images/products/mut-hat-phi-nutella-200g.png",
          },
          {
            id: "banh-mi-sua-hot-ga-otto-90g",
            name: "Bánh Mì Sữa Hột Gà Otto 90g",
            price: 12000,
            image: "/images/products/banh-mi-sua-hot-ga-otto-90g.png",
          },
          {
            id: "banh-mi-bo-sua-otto-90g",
            name: "Bánh Mì Bơ Sữa Otto 90g",
            price: 12000,
            image: "/images/products/banh-mi-bo-sua-otto-90g.png",
          },
          {
            id: "banh-kim-sa-trung-chay-ttm-95g",
            name: "Bánh Kim Sa Trứng Chảy TTM 95g",
            price: 25000,
            image: "/images/products/banh-kim-sa-trung-chay-ttm-95g.png",
          },
          {
            id: "banh-mi-hoa-cuc-otto-80g",
            name: "Bánh Mì Hoa Cúc Otto 80g",
            price: 28000,
            image: "/images/products/banh-mi-hoa-cuc-otto-80g.png",
          },
          {
            id: "banh-mi-socola-otto-90g",
            name: "Bánh Mì Socola Otto 90g",
            price: 12000,
            image: "/images/products/banh-mi-socola-otto-90g.png",
          },
          {
            id: "ngu-coc-nestle-milo-bar-24g",
            name: "Ngũ Cốc Nestlé Milo Bar 24g",
            price: 20000,
            image: "/images/products/ngu-coc-nestle-milo-bar-24g.png",
          },
          {
            id: "ngu-coc-nestle-fitnesse-socola-23-5g",
            name: "Ngũ Cốc Nestlé Fitnesse Socola 23.5g",
            price: 20000,
            image: "/images/products/ngu-coc-nestle-fitnesse-socola-23-5g.png",
          },
          {
            id: "banh-mi-que-cobi-33g",
            name: "Bánh Mì Que Cobi 33g",
            price: 16000,
            image: "/images/products/banh-mi-que-cobi-33g.png",
          },
          {
            id: "banh-cuon-socola-nhan-choco-gulu-100g",
            name: "Bánh Cuộn Socola Nhân Choco Gulu 100g",
            price: 25000,
            image: "/images/products/banh-cuon-socola-nhan-choco-gulu-100g.png",
          },
          {
            id: "thanh-hat-mailey-mat-ong-32g",
            name: "Thanh Hạt Mailey Mật Ong 32g",
            price: 19000,
            image: "/images/products/thanh-hat-mailey-mat-ong-32g.png",
          },
          {
            id: "banh-mi-cua-pho-mai-3sach-kitchen-65g",
            name: "Bánh Mì Cua Phô Mai 3Sạch Kitchen 65g",
            price: 15000,
            image: "/images/products/banh-mi-cua-pho-mai-3sach-kitchen-65g.png",
          },
          {
            id: "banh-mi-ambai-nhan-sua-chua-vi-dao-vang",
            name: "Bánh Mì Ambai Nhân Sữa Chua Vị Đào Vàng",
            price: 22000,
            image:
              "/images/products/banh-mi-ambai-nhan-sua-chua-vi-dao-vang.png",
          },
          {
            id: "ngu-coc-nestle-fitnesse-cappu-23-5g",
            name: "Ngũ Cốc Nestlé Fitnesse Cappu 23.5g",
            price: 20000,
            image: "/images/products/ngu-coc-nestle-fitnesse-cappu-23-5g.png",
          },
          {
            id: "banh-pho-mai-cafe-mr-chefs-105g",
            name: "Bánh Phô Mai Cafe Mr Chef's 105g",
            price: 41000,
            image: "/images/products/banh-pho-mai-cafe-mr-chefs-105g.png",
          },
          {
            id: "banh-da-sua-cuon-kem-matcha-gulu-88g",
            name: "Bánh Da Sữa Cuộn Kem Matcha Gulu 88g",
            price: 25000,
            image: "/images/products/banh-da-sua-cuon-kem-matcha-gulu-88g.png",
          },
          {
            id: "banh-pia-kim-sa-trung-chay-150g",
            name: "Bánh Pía Kim Sa Trứng Chảy Túi 150g",
            price: 37000,
            image: "/images/products/banh-pia-kim-sa-trung-chay-150g.png",
          },
          {
            id: "banh-mi-ambai-sua-trang-90g",
            name: "Bánh Mì Ambai Sữa Trắng 90g",
            price: 25000,
            image: "/images/products/banh-mi-ambai-sua-trang-90g.png",
          },
          {
            id: "banh-mi-mini-ambai-nhan-sua-chua",
            name: "Bánh Mì Mini Ambai Nhân Sữa Chua",
            price: 22000,
            image: "/images/products/banh-mi-mini-ambai-nhan-sua-chua.png",
          },
          {
            id: "banh-mi-staff-hat-nay-mam-chocolate-55g",
            name: "Bánh Mì Staff Hạt Nảy Mầm Chocolate 55g",
            price: 13000,
            image:
              "/images/products/banh-mi-staff-hat-nay-mam-chocolate-55g.png",
          },
          {
            id: "banh-crepe-sua-tuoi-sweethome-90g",
            name: "Bánh Crepe Sữa Tươi SweetHome 90g",
            price: 23000,
            image: "/images/products/banh-crepe-sua-tuoi-sweethome-90g.png",
          },
          {
            id: "banh-sung-trau-socola-7-eleven",
            name: "Bánh Sừng Trâu Socola 7-Eleven",
            price: 25000,
            image: "/images/products/banh-sung-trau-socola-7-eleven.png",
          },
        ],
      },
    ],
  },
  {
    id: "do-dong-lanh",
    name: "Đồ Đông Lạnh",
    categories: [
      {
        id: "kem-cay-kem-hop",
        name: "Kem cây, Kem hộp",
        products: [
          {
            id: 1,
            name: "Kem Cà Phê Muối 7-Eleven 60g",
            price: 39000,
            image: "/images/products/kem-ca-phe-muoi-7-eleven-60g.png",
          },
          {
            id: 2,
            name: "Kem Haagen Dazs Hạt Macadamia 100ml -T9",
            price: 86000,
            image:
              "/images/products/kem-haagen-dazs-hat-macadamia-100ml-t9.png",
          },
          {
            id: 3,
            name: "Kem Haagen Dazs vị dâu tây 100ml -T9",
            price: 86000,
            image: "/images/products/kem-haagen-dazs-vi-dau-tay-100ml-t9.png",
          },
          {
            id: 4,
            name: "Kem Haagen Dazs Bánh Quy & Kem 100ml -T9",
            price: 86000,
            image: "/images/products/kem-haagen-dazs-banh-quy-kem-100ml-t9.png",
          },
          {
            id: 5,
            name: "Kem Haagen Dazs Trà Xanh 100ml -T9",
            price: 86000,
            image: "/images/products/kem-haagen-dazs-tra-xanh-100ml-t9.png",
          },
          {
            id: 6,
            name: "Kem Haagen Dazs Vani 100ml -T9",
            price: 86000,
            image: "/images/products/kem-haagen-dazs-vani-100ml-t9.png",
          },
          {
            id: 7,
            name: "Kem Haagen Dazs Sô Cô La Bỉ 100ml -T9",
            price: 86000,
            image: "/images/products/kem-haagen-dazs-so-co-la-bi-100ml-t9.png",
          },
          {
            id: 8,
            name: "Kem Meiji Vani 200ml -T9",
            price: 53000,
            image: "/images/products/kem-meiji-vani-200ml-t9.png",
          },
          {
            id: 9,
            name: "Kem Celano Socola Hạnh Nhân 125ml -T9",
            price: 27000,
            image: "/images/products/kem-celano-socola-hanh-nhan-125ml-t9.png",
          },
          {
            id: 10,
            name: "Kem Celano Dâu Mứt Dâu 125ml -T9",
            price: 27000,
            image: "/images/products/kem-celano-dau-mut-dau-125ml-t9.png",
          },
          {
            id: 11,
            name: "Kem Celano Sữa Chua Nam Việt Quất 125ml -T9",
            price: 27000,
            image:
              "/images/products/kem-celano-sua-chua-nam-viet-quat-125ml-t9.png",
          },
          {
            id: 12,
            name: "Kem Sô Cô La Chip 7- Eleven 60g",
            price: 39000,
            image: "/images/products/kem-so-co-la-chip-7-eleven-60g.png",
          },
          {
            id: 13,
            name: "Kem Trà Bá Tước 7-Eleven 60g",
            price: 39000,
            image: "/images/products/kem-tra-ba-tuoc-7-eleven-60g.png",
          },
          {
            id: 14,
            name: "Kem Sorbet Thạch Dâu 7-Eleven 60g",
            price: 39000,
            image: "/images/products/kem-sorbet-thach-dau-7-eleven-60g.png",
          },
          {
            id: 15,
            name: "Kem Sorbet Trà Tắc 7-Eleven 60g",
            price: 39000,
            image: "/images/products/kem-sorbet-tra-tac-7-eleven-60g.png",
          },
          {
            id: 16,
            name: "Kem Haagen Dazs Bánh Quy & Kem 100ml",
            price: 96000,
            image: "/images/products/kem-haagen-dazs-banh-quy-kem-100ml.png",
          },
          {
            id: 17,
            name: "Kem Häagen-Dazs Vị Macadamia 473ml",
            price: 319000,
            image: "/images/products/kem-haagen-dazs-vi-macadamia-473ml.png",
          },
          {
            id: 18,
            name: "Kem Häagen-Dazs Vị Vani 473ml",
            price: 319000,
            image: "/images/products/kem-haagen-dazs-vi-vani-473ml.png",
          },
          {
            id: 19,
            name: "Kem Haagen Dazs Trà Xanh 100ml",
            price: 96000,
            image: "/images/products/kem-haagen-dazs-tra-xanh-100ml.png",
          },
          {
            id: 20,
            name: "Kem OREO Hũ 240g Ice Cream",
            price: 119000,
            image: "/images/products/kem-oreo-hu-240g-ice-cream.png",
          },
          {
            id: 21,
            name: "Kem Mini Yukimi Daifuku Ice Cream",
            price: 93000,
            image: "/images/products/kem-mini-yukimi-daifuku-ice-cream.png",
          },
          {
            id: 22,
            name: "Kem Wall's Cheesy Bar 72g",
            price: 38000,
            image: "/images/products/kem-walls-cheesy-bar-72g.png",
          },
          {
            id: 23,
            name: "Kem Melona Melon 80ml Ice Cream",
            price: 31000,
            image: "/images/products/kem-melona-melon-80ml-ice-cream.png",
          },
          {
            id: 24,
            name: "Kem Binggrae Melona Dâu 80ml",
            price: 31000,
            image: "/images/products/kem-binggrae-melona-dau-80ml.png",
          },
          {
            id: 25,
            name: "Kem Bánh Cá 150ml Ice Cream",
            price: 35000,
            image: "/images/products/kem-banh-ca-150ml-ice-cream.png",
          },
          {
            id: 26,
            name: "Kem Binggrae Bánh Cá Socola 150ml",
            price: 35000,
            image: "/images/products/kem-binggrae-banh-ca-socola-150ml.png",
          },
          {
            id: 27,
            name: "Kem Binggrae Bánh Cá Trà Xanh 150ml",
            price: 35000,
            image: "/images/products/kem-binggrae-banh-ca-tra-xanh-150ml.png",
          },
          {
            id: 28,
            name: "Kem Nestle Oreo Sandwich 60g",
            price: 39000,
            image: "/images/products/kem-nestle-oreo-sandwich-60g.png",
          },
          {
            id: 29,
            name: "Kem Coolish Vanilla 140ml Ice Cream",
            price: 35000,
            image: "/images/products/kem-coolish-vanilla-140ml-ice-cream.png",
          },
          {
            id: 30,
            name: "Kem Haagen Dazs Sô Cô La Bỉ 100ml",
            price: 96000,
            image: "/images/products/kem-haagen-dazs-so-co-la-bi-100ml.png",
          },
          {
            id: 31,
            name: "Kem Haagen Dazs Trà Xanh Hạnh Nhân 80ml",
            price: 146000,
            image:
              "/images/products/kem-haagen-dazs-tra-xanh-hanh-nhan-80ml.png",
          },
          {
            id: 32,
            name: "Kem Yukimi Daifuku 94ml Ice Cream",
            price: 35000,
            image: "/images/products/kem-yukimi-daifuku-94ml-ice-cream.png",
          },
          {
            id: 33,
            name: "Kem Lotte I'm Mochi Vị Vanila Hộp 80ml",
            price: 42000,
            image: "/images/products/kem-lotte-im-mochi-vi-vanila-hop-80ml.png",
          },
          {
            id: 34,
            name: "Kem Lotte I'm Mochi Vị Dâu Hộp 80ml",
            price: 42000,
            image: "/images/products/kem-lotte-im-mochi-vi-dau-hop-80ml.png",
          },
          {
            id: 35,
            name: "Kem Pongta Soda 130ml Ice Cream",
            price: 30000,
            image: "/images/products/kem-pongta-soda-130ml-ice-cream.png",
          },
          {
            id: 36,
            name: "Kem Binggrae Pongta Banana 130ml",
            price: 30000,
            image: "/images/products/kem-binggrae-pongta-banana-130ml.png",
          },
          {
            id: 37,
            name: "Kem Cornetto Roy Choco 88g Ice Cream",
            price: 28000,
            image: "/images/products/kem-cornetto-roy-choco-88g-ice-cream.png",
          },
          {
            id: 38,
            name: "Kem Wall's Cornetto Roy Dâu 88g",
            price: 28000,
            image: "/images/products/kem-walls-cornetto-roy-dau-88g.png",
          },
          {
            id: 39,
            name: "Kem Meiji Vani 200ml",
            price: 65000,
            image: "/images/products/kem-meiji-vani-200ml.png",
          },
          {
            id: 40,
            name: "Kem Kitkat Drumstick 110ml",
            price: 37000,
            image: "/images/products/kem-kitkat-drumstick-110ml.png",
          },
          {
            id: 41,
            name: "Kem Nestle Oreo Ốc Quế 70g",
            price: 33000,
            image: "/images/products/kem-nestle-oreo-oc-que-70g.png",
          },
          {
            id: 42,
            name: "Kem Nestlé Oreo 60g",
            price: 34000,
            image: "/images/products/kem-nestle-oreo-60g.png",
          },
          {
            id: 43,
            name: "Kem Kitkat 85ml",
            price: 37000,
            image: "/images/products/kem-kitkat-85ml.png",
          },
          {
            id: 44,
            name: "Kem Binggrae Enchor Bar Socola 70ml",
            price: 30000,
            image: "/images/products/kem-binggrae-enchor-bar-socola-70ml.png",
          },
          {
            id: 45,
            name: "Kem Wall's Topten Chocolate 60g",
            price: 16000,
            image: "/images/products/kem-walls-topten-chocolate-60g.png",
          },
          {
            id: 46,
            name: "Kem Wall's Xoài 65ml",
            price: 16000,
            image: "/images/products/kem-walls-xoai-65ml.png",
          },
          {
            id: 47,
            name: "Kem Milo Magma 55g",
            price: 17000,
            image: "/images/products/kem-milo-magma-55g.png",
          },
          {
            id: 48,
            name: "Kem Milo Socola Lúa Mạch Đậm Vị 50g",
            price: 18000,
            image: "/images/products/kem-milo-socola-lua-mach-dam-vi-50g.png",
          },
          {
            id: 49,
            name: "Kem TH Vải Việt Quất 50g",
            price: 17000,
            image: "/images/products/kem-th-vai-viet-quat-50g.png",
          },
          {
            id: 50,
            name: "Kem TH Caramel Cà Phê Muối 52g",
            price: 22000,
            image: "/images/products/kem-th-caramel-ca-phe-muoi-52g.png",
          },
          {
            id: 51,
            name: "Kem TH TrueI C Vị Dừa Que",
            price: 22000,
            image: "/images/products/kem-th-truei-c-vi-dua-que.png",
          },
          {
            id: 52,
            name: "Kem TH Socola 52g",
            price: 22000,
            image: "/images/products/kem-th-socola-52g.png",
          },
          {
            id: 53,
            name: "Kem TH Dâu Ice Cream",
            price: 22000,
            image: "/images/products/kem-th-dau-ice-cream.png",
          },
          {
            id: 54,
            name: "Sữa Chua Dẻo Merino Phô Mai 40g",
            price: 10000,
            image: "/images/products/sua-chua-deo-merino-pho-mai-40g.png",
          },
          {
            id: 55,
            name: "Kem Vinamilk Dừa Non 400ml",
            price: 65000,
            image: "/images/products/kem-vinamilk-dua-non-400ml.png",
          },
          {
            id: 56,
            name: "Kem TH Vani Xoài 50g",
            price: 17000,
            image: "/images/products/kem-th-vani-xoai-50g.png",
          },
          {
            id: 57,
            name: "Kem Wall's Magnum Almond 65g",
            price: 37000,
            image: "/images/products/kem-walls-magnum-almond-65g.png",
          },
          {
            id: 58,
            name: "Kem Celano Dâu Mứt Dâu 125ml",
            price: 34000,
            image: "/images/products/kem-celano-dau-mut-dau-125ml.png",
          },
          {
            id: 59,
            name: "Kem Wall's Magnum Classic 63g",
            price: 37000,
            image: "/images/products/kem-walls-magnum-classic-63g.png",
          },
          {
            id: 60,
            name: "Kem Andros Thạch Đào 50g",
            price: 23000,
            image: "/images/products/kem-andros-thach-dao-50g.png",
          },
          {
            id: 61,
            name: "Kem Andros Thạch Xoài 50g",
            price: 23000,
            image: "/images/products/kem-andros-thach-xoai-50g.png",
          },
          {
            id: 62,
            name: "Kem Celano Sữa Chua Nam Việt Quất 125ml",
            price: 34000,
            image:
              "/images/products/kem-celano-sua-chua-nam-viet-quat-125ml.png",
          },
          {
            id: 63,
            name: "Kem Celano Pistachio 66g",
            price: 26000,
            image: "/images/products/kem-celano-pistachio-66g.png",
          },
          {
            id: 64,
            name: "Kem Milo Ốc Quế Socola Đậm Vị 64g",
            price: 31000,
            image: "/images/products/kem-milo-oc-que-socola-dam-vi-64g.png",
          },
          {
            id: 65,
            name: "Kem Lotte Coolish Socola 140ml",
            price: 35000,
            image: "/images/products/kem-lotte-coolish-socola-140ml.png",
          },
          {
            id: 66,
            name: "Kem Haagen Dazs Dâu Tây và Kem 80ml",
            price: 146000,
            image: "/images/products/kem-haagen-dazs-dau-tay-va-kem-80ml.png",
          },
          {
            id: 67,
            name: "Kem Lốc Xoáy Socola 175ml",
            price: 39000,
            image: "/images/products/kem-loc-xoay-socola-175ml.png",
          },
          {
            id: 68,
            name: "Kem Lốc Xoáy Dâu & Mâm Xôi 185ml",
            price: 44000,
            image: "/images/products/kem-loc-xoay-dau-mam-xoi-185ml.png",
          },
          {
            id: 69,
            name: "Kem Lotte Bánh Bắp 140ml",
            price: 39000,
            image: "/images/products/kem-lotte-banh-bap-140ml.png",
          },
          {
            id: 70,
            name: "Kem Celano Socola Hạnh Nhân 125ml",
            price: 34000,
            image: "/images/products/kem-celano-socola-hanh-nhan-125ml.png",
          },
          {
            id: 71,
            name: "Kem Lotte Dưa Hấu 85ml",
            price: 24000,
            image: "/images/products/kem-lotte-dua-hau-85ml.png",
          },
          {
            id: 72,
            name: "Kem Haagen Dazs Rum Raisin 473ml",
            price: 319000,
            image: "/images/products/kem-haagen-dazs-rum-raisin-473ml.png",
          },
          {
            id: 73,
            name: "Kem Celano Vani Dâu 66g",
            price: 26000,
            image: "/images/products/kem-celano-vani-dau-66g.png",
          },
          {
            id: 74,
            name: "Kem Haagen Dazs Hạt Dẻ Cười 420ml",
            price: 35000,
            image: "/images/products/kem-haagen-dazs-hat-de-cuoi-420ml.png",
          },
          {
            id: 75,
            name: "Kem Kitkat Pink 64g",
            price: 40000,
            image: "/images/products/kem-kitkat-pink-64g.png",
          },
          {
            id: 76,
            name: "Kem Vinamilk Gelato Matcha 90ml",
            price: 61000,
            image: "/images/products/kem-vinamilk-gelato-matcha-90ml.png",
          },
          {
            id: 77,
            name: "Kem Vinamilk Gelato Dừa 90ml",
            price: 43000,
            image: "/images/products/kem-vinamilk-gelato-dua-90ml.png",
          },
          {
            id: 78,
            name: "Kem Vinamilk Gelato Sữa Chua Xoài  90ml",
            price: 37000,
            image:
              "/images/products/kem-vinamilk-gelato-sua-chua-xoai-90ml.png",
          },
          {
            id: 79,
            name: "Kem Quả Xoài 75g",
            price: 75000,
            image: "/images/products/kem-qua-xoai-75g.png",
          },
          {
            id: 80,
            name: "Kem Quả Đào 75g",
            price: 75000,
            image: "/images/products/kem-qua-dao-75g.png",
          },
          {
            id: 81,
            name: "Kem Celano Phô Mai 55g",
            price: 28000,
            image: "/images/products/kem-celano-pho-mai-55g.png",
          },
          {
            id: 82,
            name: "Kem Celano Luxury Sô Cô La 66g",
            price: 40000,
            image: "/images/products/kem-celano-luxury-so-co-la-66g.png",
          },
          {
            id: 83,
            name: "Kem Quả Chanh 75g",
            price: 75000,
            image: "/images/products/kem-qua-chanh-75g.png",
          },
          {
            id: 84,
            name: "Kem Quả Dứa 75g",
            price: 75000,
            image: "/images/products/kem-qua-dua-75g.png",
          },
          {
            id: 85,
            name: "Kem Quả Nho 75g",
            price: 75000,
            image: "/images/products/kem-qua-nho-75g.png",
          },
        ],
      },
      {
        id: "thuc-pham-che-bien-san",
        name: "Thực phẩm chế biến sẵn",
        products: [
          {
            id: 1,
            name: "Cơm Chiên SG Food Cá Mặn Gà Xé 200g",
            price: 35000,
            image: "/images/products/com-chien-sg-food-ca-man-ga-xe-200g.png",
          },
          {
            id: 2,
            name: "Cơm Chiên Dương Châu SG Food 200g",
            price: 35000,
            image: "/images/products/com-chien-duong-chau-sg-food-200g.png",
          },
          {
            id: 3,
            name: "Bánh Mì Mini 7-Eleven",
            price: 26000,
            image: "/images/products/banh-mi-mini-7-eleven.png",
          },
        ],
      },
      { id: "thuc-pham-da-so-che", name: "Thực phẩm đã sơ chế", products: [] },
    ],
  },
  {
    id: "do-an-vat",
    name: "Đồ Ăn Vặt",
    categories: [
      {
        id: "snacks",
        name: "Snacks",
        products: [
          {
            id: 1,
            name: "Xốt Salsa Tostitos Cay 429g",
            price: 239000,
            image: "/images/products/xot-salsa-tostitos-cay-429g.png",
          },
          {
            id: 2,
            name: "Snack Lorenz Naturals Balsamic 100g -T9",
            price: 69000,
            image:
              "/images/products/snack-lorenz-naturals-balsamic-100g-t9.png",
          },
          {
            id: 3,
            name: "Snack Lorenz Naturals Rosemary 100g -T9",
            price: 69000,
            image:
              "/images/products/snack-lorenz-naturals-rosemary-100g-t9.png",
          },
          {
            id: 4,
            name: "Snack Lorenz Naturals Salted 100g -T9",
            price: 69000,
            image: "/images/products/snack-lorenz-naturals-salted-100g-t9.png",
          },
          {
            id: 5,
            name: "Snack Lay's Stax Original 145g -T9",
            price: 49000,
            image: "/images/products/snack-lays-stax-original-145g-t9.png",
          },
          {
            id: 6,
            name: "Snack Lay's Stax Sườn BBQ 150g -T9",
            price: 49000,
            image: "/images/products/snack-lays-stax-suon-bbq-150g-t9.png",
          },
          {
            id: 7,
            name: "Snack Lay's Stax Sườn BBQ 145g -T9",
            price: 49000,
            image: "/images/products/snack-lays-stax-suon-bbq-145g-t9.png",
          },
          {
            id: 8,
            name: "Snack Lay's Stax Original 150g -T9",
            price: 49000,
            image: "/images/products/snack-lays-stax-original-150g-t9.png",
          },
          {
            id: 9,
            name: "Snack Tos Tos Korean BBQ 145g -T9",
            price: 32000,
            image: "/images/products/snack-tos-tos-korean-bbq-145g-t9.png",
          },
          {
            id: 10,
            name: "Snack Tos Tos Roasted Corn 145g -T9",
            price: 32000,
            image: "/images/products/snack-tos-tos-roasted-corn-145g-t9.png",
          },
          {
            id: 11,
            name: "Snack Tos Tos Nacho Cheese 145g -T9",
            price: 32000,
            image: "/images/products/snack-tos-tos-nacho-cheese-145g-t9.png",
          },
          {
            id: 12,
            name: "Snack Pringles Sour Cream & Onion 42g -T9",
            price: 25000,
            image:
              "/images/products/snack-pringles-sour-cream-onion-42g-t9.png",
          },
          {
            id: 13,
            name: "Snack Pringles Cheese 42g -T9",
            price: 25000,
            image: "/images/products/snack-pringles-cheese-42g-t9.png",
          },
          {
            id: 14,
            name: "Snack Pringles Original 42g -T9",
            price: 25000,
            image: "/images/products/snack-pringles-original-42g-t9.png",
          },
          {
            id: 15,
            name: "Khoai Tây Fresh Cut BòWagyu NướngĐá 108g -T9",
            price: 20000,
            image:
              "/images/products/khoai-tay-fresh-cut-bowagyu-nuongda-108g-t9.png",
          },
          {
            id: 16,
            name: "K.Tây Fresh Cut Vị Gạch Cua Sốt Cay 108g -T9",
            price: 20000,
            image:
              "/images/products/ktay-fresh-cut-vi-gach-cua-sot-cay-108g-t9.png",
          },
          {
            id: 17,
            name: "Bánh Que Dorkbua Vị BBQ 62g/50g -T9",
            price: 18000,
            image: "/images/products/banh-que-dorkbua-vi-bbq-62g50g-t9.png",
          },
          {
            id: 18,
            name: "Bánh Que Dorkbua Bò BítTết 62g/50g -T9",
            price: 18000,
            image: "/images/products/banh-que-dorkbua-bo-bittet-62g50g-t9.png",
          },
          {
            id: 19,
            name: "Snack Khoai Tây Oishi Dưa Leo 65g -T9",
            price: 11000,
            image: "/images/products/snack-khoai-tay-oishi-dua-leo-65g-t9.png",
          },
          {
            id: 20,
            name: "Snack Oishi Cà Chua 68g -T9",
            price: 11000,
            image: "/images/products/snack-oishi-ca-chua-68g-t9.png",
          },
          {
            id: 21,
            name: "Snack Oishi Bắp Phô Mai 68g -T9",
            price: 11000,
            image: "/images/products/snack-oishi-bap-pho-mai-68g-t9.png",
          },
          {
            id: 22,
            name: "Snack Oishi Bắp 4 Lớp Cay 68g -T9",
            price: 11000,
            image: "/images/products/snack-oishi-bap-4-lop-cay-68g-t9.png",
          },
          {
            id: 23,
            name: "Snack Oishi Phô Mai Gói 68g -T9",
            price: 11000,
            image: "/images/products/snack-oishi-pho-mai-goi-68g-t9.png",
          },
          {
            id: 24,
            name: "Snack Tostitos Scoops Original 283.5g",
            price: 204000,
            image: "/images/products/snack-tostitos-scoops-original-2835g.png",
          },
          {
            id: 25,
            name: "Snack Tostitos Original 283.5g",
            price: 204000,
            image: "/images/products/snack-tostitos-original-2835g.png",
          },
          {
            id: 26,
            name: "Snack Tostitos Hint Of Lime 283.5g",
            price: 204000,
            image: "/images/products/snack-tostitos-hint-of-lime-2835g.png",
          },
          {
            id: 27,
            name: "Snack Tostitos Crispy Rounds Original 283.5g",
            price: 204000,
            image:
              "/images/products/snack-tostitos-crispy-rounds-original-2835g.png",
          },
          {
            id: 28,
            name: "Snack Cheetos Flamin' Hot Crunchy 226.8g",
            price: 174000,
            image:
              "/images/products/snack-cheetos-flamin-hot-crunchy-2268g.png",
          },
          {
            id: 29,
            name: "Snack Cheetos Crunchy 226.8g",
            price: 174000,
            image: "/images/products/snack-cheetos-crunchy-2268g.png",
          },
          {
            id: 30,
            name: "Snack Cheetos Cheddar Jalapeno Crunchy 226.8g",
            price: 164000,
            image:
              "/images/products/snack-cheetos-cheddar-jalapeno-crunchy-2268g.png",
          },
          {
            id: 31,
            name: "Snack Cheetos Puffs Cheese 255.1g",
            price: 197000,
            image: "/images/products/snack-cheetos-puffs-cheese-2551g.png",
          },
          {
            id: 32,
            name: "Snack Cheetos Flamin Hot Limon 226.8g",
            price: 164000,
            image: "/images/products/snack-cheetos-flamin-hot-limon-2268g.png",
          },
          {
            id: 33,
            name: "Snack Takis Fuego Rolled Tortilla Chips 57g",
            price: 79000,
            image:
              "/images/products/snack-takis-fuego-rolled-tortilla-chips-57g.png",
          },
          {
            id: 34,
            name: "Snack Doritos Spicy Nacho Tortilla Chips 184g",
            price: 164000,
            image:
              "/images/products/snack-doritos-spicy-nacho-tortilla-chips-184g.png",
          },
          {
            id: 35,
            name: "Snack Doritos Cool Ranch 184g",
            price: 164000,
            image: "/images/products/snack-doritos-cool-ranch-184g.png",
          },
          {
            id: 36,
            name: "Snack Doritos Nacho Cheese Flavored Tortilla Chips 184g",
            price: 164000,
            image:
              "/images/products/snack-doritos-nacho-cheese-flavored-tortilla-chips-184g.png",
          },
          {
            id: 37,
            name: "Snack Doritos Nacho Cheese Flavored Tortilla Chips 312g",
            price: 249000,
            image:
              "/images/products/snack-doritos-nacho-cheese-flavored-tortilla-chips-312g.png",
          },
          {
            id: 38,
            name: "Snack Munchies Cheese Fix 262.2g",
            price: 234000,
            image: "/images/products/snack-munchies-cheese-fix-2622g.png",
          },
          {
            id: 39,
            name: "Snack Tos Tos Nacho Cheese 145g",
            price: 39000,
            image: "/images/products/snack-tos-tos-nacho-cheese-145g.png",
          },
          {
            id: 40,
            name: "Snack Tos Tos Korean BBQ 145g",
            price: 39000,
            image: "/images/products/snack-tos-tos-korean-bbq-145g.png",
          },
          {
            id: 41,
            name: "Snack Tos Tos Roasted Corn 145g",
            price: 39000,
            image: "/images/products/snack-tos-tos-roasted-corn-145g.png",
          },
          {
            id: 42,
            name: "Snack Lorenz Naturals Salted 100g",
            price: 79000,
            image: "/images/products/snack-lorenz-naturals-salted-100g.png",
          },
          {
            id: 43,
            name: "Snack Lorenz Naturals Balsamic 100g",
            price: 79000,
            image: "/images/products/snack-lorenz-naturals-balsamic-100g.png",
          },
          {
            id: 44,
            name: "Snack Lay's Salt & Vinegar 184.2g",
            price: 179000,
            image: "/images/products/snack-lays-salt-vinegar-1842g.png",
          },
          {
            id: 45,
            name: "Snack Lay's Sour & Cream Onion 184.2g",
            price: 179000,
            image: "/images/products/snack-lays-sour-cream-onion-1842g.png",
          },
          {
            id: 46,
            name: "Snack Lay's Honey Barbecue 184.2g",
            price: 173000,
            image: "/images/products/snack-lays-honey-barbecue-1842g.png",
          },
          {
            id: 47,
            name: "Snack Lay's BBQ 184.2g",
            price: 173000,
            image: "/images/products/snack-lays-bbq-1842g.png",
          },
          {
            id: 48,
            name: "Snack Khoai Tây Tyrrells Sea Salt & Cider Vinegar Dấm Muối 40g",
            price: 54000,
            image:
              "/images/products/snack-khoai-tay-tyrrells-sea-salt-cider-vinegar-dam-muoi-40g.png",
          },
          {
            id: 49,
            name: "Snack Khoai Tây Lorenz Pomsticks Salted Muối Gói 70g",
            price: 55000,
            image:
              "/images/products/snack-khoai-tay-lorenz-pomsticks-salted-muoi-goi-70g.png",
          },
          {
            id: 50,
            name: "Snack Macaroni Roni Extra Spicy 140g",
            price: 37000,
            image: "/images/products/snack-macaroni-roni-extra-spicy-140g.png",
          },
          {
            id: 51,
            name: "Snack Macaroni Roni Roasted Corn 140g",
            price: 37000,
            image: "/images/products/snack-macaroni-roni-roasted-corn-140g.png",
          },
          {
            id: 52,
            name: "Khoai Tây Fresh Cut BòWagyu NướngĐá 108g",
            price: 26000,
            image:
              "/images/products/khoai-tay-fresh-cut-bowagyu-nuongda-108g.png",
          },
          {
            id: 53,
            name: "Snack Khoai Tây Gokochi Vị Muối 65g",
            price: 24000,
            image: "/images/products/snack-khoai-tay-gokochi-vi-muoi-65g.png",
          },
          {
            id: 54,
            name: "Snack Pringles Original 102g",
            price: 54000,
            image: "/images/products/snack-pringles-original-102g.png",
          },
          {
            id: 55,
            name: "Snack Pringles Sour Cream & Onion 102g",
            price: 54000,
            image: "/images/products/snack-pringles-sour-cream-onion-102g.png",
          },
          {
            id: 56,
            name: "Khoai Tây Slide Original 150g",
            price: 62000,
            image: "/images/products/khoai-tay-slide-original-150g.png",
          },
          {
            id: 57,
            name: "Khoai Tây Slide Hotspicy 150g",
            price: 62000,
            image: "/images/products/khoai-tay-slide-hotspicy-150g.png",
          },
          {
            id: 58,
            name: "Snack Slide Barbecue 60g",
            price: 36000,
            image: "/images/products/snack-slide-barbecue-60g.png",
          },
          {
            id: 59,
            name: "Snack Lay's Vị Mực Giòn Đài Loan 88g",
            price: 26000,
            image: "/images/products/snack-lays-vi-muc-gion-dai-loan-88g.png",
          },
          {
            id: 60,
            name: "Snack Lay's Tôm Càng Phô Mai 90g",
            price: 26000,
            image: "/images/products/snack-lays-tom-cang-pho-mai-90g.png",
          },
          {
            id: 61,
            name: "Snack Lay's Tự Nhiên 90g",
            price: 26000,
            image: "/images/products/snack-lays-tu-nhien-90g.png",
          },
          {
            id: 62,
            name: "Snack Lay's Wavy Tảo Biển 90g",
            price: 26000,
            image: "/images/products/snack-lays-wavy-tao-bien-90g.png",
          },
          {
            id: 63,
            name: "Snack Lay's Wavy Bò Nướng Texas 90g",
            price: 26000,
            image: "/images/products/snack-lays-wavy-bo-nuong-texas-90g.png",
          },
          {
            id: 64,
            name: "Snack Lay's Vị Phở Bò Hà Nội 88g",
            price: 26000,
            image: "/images/products/snack-lays-vi-pho-bo-ha-noi-88g.png",
          },
          {
            id: 65,
            name: "Snack Lay's Sườn 90g",
            price: 26000,
            image: "/images/products/snack-lays-suon-90g.png",
          },
          {
            id: 66,
            name: "Snack Lay's MAX Bò Wagyu 75g",
            price: 26000,
            image: "/images/products/snack-lays-max-bo-wagyu-75g.png",
          },
          {
            id: 67,
            name: "Snack Lay's Classic 184.2g",
            price: 179000,
            image: "/images/products/snack-lays-classic-1842g.png",
          },
          {
            id: 68,
            name: "Snack Lay's Tảo Biển Nori 150g",
            price: 39000,
            image: "/images/products/snack-lays-tao-bien-nori-150g.png",
          },
          {
            id: 69,
            name: "Snack Swing Bò BítTết 152g/150g",
            price: 39000,
            image: "/images/products/snack-swing-bo-bittet-152g150g.png",
          },
          {
            id: 70,
            name: "Snack Swing Bò BítTết 95g/90g",
            price: 26000,
            image: "/images/products/snack-swing-bo-bittet-95g90g.png",
          },
          {
            id: 71,
            name: "Snack Swing Phô Mai 95g/75g",
            price: 26000,
            image: "/images/products/snack-swing-pho-mai-95g75g.png",
          },
          {
            id: 72,
            name: "Snack O'star Kim Chi 95g/90g",
            price: 26000,
            image: "/images/products/snack-ostar-kim-chi-95g90g.png",
          },
          {
            id: 73,
            name: "Snack Happy Tos Roasted Corn 140g",
            price: 37000,
            image: "/images/products/snack-happy-tos-roasted-corn-140g.png",
          },
          {
            id: 74,
            name: "Snack Happy Tos Hot Chili 140g",
            price: 37000,
            image: "/images/products/snack-happy-tos-hot-chili-140g.png",
          },
          {
            id: 75,
            name: "Snack Karamucho Sốt Cay Hàn Quốc Gói 80g",
            price: 28000,
            image:
              "/images/products/snack-karamucho-sot-cay-han-quoc-goi-80g.png",
          },
          {
            id: 76,
            name: "Snack Karamucho Cay Đặc Biệt 82g",
            price: 28000,
            image: "/images/products/snack-karamucho-cay-dac-biet-82g.png",
          },
          {
            id: 77,
            name: "Snack Bắp Karamucho Phô Mai Cay 60g",
            price: 13000,
            image: "/images/products/snack-bap-karamucho-pho-mai-cay-60g.png",
          },
          {
            id: 78,
            name: "Snack Mực Talethong Truyền Thống 100g",
            price: 35000,
            image: "/images/products/snack-muc-talethong-truyen-thong-100g.png",
          },
          {
            id: 79,
            name: "Snack Da Cá Trứng Muối 50g",
            price: 54000,
            image: "/images/products/snack-da-ca-trung-muoi-50g.png",
          },
          {
            id: 80,
            name: "Snack Ruay Puan Tôm 20g",
            price: 8000,
            image: "/images/products/snack-ruay-puan-tom-20g.png",
          },
          {
            id: 81,
            name: "Snack Poca Mực Lăn Muối Ớt 60g",
            price: 14000,
            image: "/images/products/snack-poca-muc-lan-muoi-ot-60g.png",
          },
          {
            id: 82,
            name: "Snack Poca Tôm Hùm Nướng 60g",
            price: 14000,
            image: "/images/products/snack-poca-tom-hum-nuong-60g.png",
          },
          {
            id: 83,
            name: "Snack Poca Hình Cua Vị Sườn Nướng 60g",
            price: 14000,
            image: "/images/products/snack-poca-hinh-cua-vi-suon-nuong-60g.png",
          },
          {
            id: 84,
            name: "Snack Oishi Bí Đỏ 110g",
            price: 19000,
            image: "/images/products/snack-oishi-bi-do-110g.png",
          },
          {
            id: 85,
            name: "Snack Oishi Mực Nướng Muối Ớt 68g",
            price: 14000,
            image: "/images/products/snack-oishi-muc-nuong-muoi-ot-68g.png",
          },
          {
            id: 86,
            name: "Snack Oishi Tôm Cay Đặc Biệt 68g",
            price: 14000,
            image: "/images/products/snack-oishi-tom-cay-dac-biet-68g.png",
          },
          {
            id: 87,
            name: "Snack Oishi Phô Mai Gói 68g",
            price: 14000,
            image: "/images/products/snack-oishi-pho-mai-goi-68g.png",
          },
          {
            id: 88,
            name: "Snack Oishi Bắp Phô Mai 68g",
            price: 14000,
            image: "/images/products/snack-oishi-bap-pho-mai-68g.png",
          },
          {
            id: 89,
            name: "Snack Oishi Chay Da Heo 68g",
            price: 14000,
            image: "/images/products/snack-oishi-chay-da-heo-68g.png",
          },
          {
            id: 90,
            name: "Snack Oishi Phồng Mực 68g",
            price: 14000,
            image: "/images/products/snack-oishi-phong-muc-68g.png",
          },
          {
            id: 91,
            name: "Snack Oishi Bắp Ngọt 110g",
            price: 19000,
            image: "/images/products/snack-oishi-bap-ngot-110g.png",
          },
          {
            id: 92,
            name: "Snack Kinh Đô Vị Cua 29g",
            price: 10000,
            image: "/images/products/snack-kinh-do-vi-cua-29g.png",
          },
          {
            id: 93,
            name: "Snack Phồng Dế RecRec Vị Mala Gói 40g",
            price: 26000,
            image: "/images/products/snack-phong-de-recrec-vi-mala-goi-40g.png",
          },
          {
            id: 94,
            name: "Snack Phồng Dế RecRec Vị Tom Yum 40g",
            price: 26000,
            image: "/images/products/snack-phong-de-recrec-vi-tom-yum-40g.png",
          },
          {
            id: 95,
            name: "Snack RollnRoll Chả Giò Tôm Cay Nồng 75g",
            price: 43000,
            image:
              "/images/products/snack-rollnroll-cha-gio-tom-cay-nong-75g.png",
          },
          {
            id: 96,
            name: "Snack RollnRoll Chả Giò Tôm Tr.Thống 75g",
            price: 43000,
            image:
              "/images/products/snack-rollnroll-cha-gio-tom-tr-thong-75g.png",
          },
          {
            id: 97,
            name: "Snack Que Cay Tròn Dài Zhimabang 20g",
            price: 11000,
            image: "/images/products/snack-que-cay-tron-dai-zhimabang-20g.png",
          },
          {
            id: 98,
            name: "Cơm Cháy Gạo Food Chà Bông Heo Gói 100g",
            price: 39000,
            image:
              "/images/products/com-chay-gao-food-cha-bong-heo-goi-100g.png",
          },
          {
            id: 99,
            name: "Cơm Cháy Gạo Food Chà Bông Gà Gói 100g",
            price: 39000,
            image:
              "/images/products/com-chay-gao-food-cha-bong-ga-goi-100g.png",
          },
          {
            id: 100,
            name: "Rong Biển O'Food Truyền Thống 6g",
            price: 20000,
            image: "/images/products/rong-bien-ofood-truyen-thong-6g.png",
          },
          {
            id: 101,
            name: "Rong Biển Cháy Tỏi Mailey 50g",
            price: 37000,
            image: "/images/products/rong-bien-chay-toi-mailey-50g.png",
          },
          {
            id: 102,
            name: "Snack Rong Biển Bibigo Phô Mai Bắp 25g",
            price: 27000,
            image:
              "/images/products/snack-rong-bien-bibigo-pho-mai-bap-25g.png",
          },
          {
            id: 103,
            name: "Bánh Que MIX Rong Biển 50g",
            price: 20000,
            image: "/images/products/banh-que-mix-rong-bien-50g.png",
          },
          {
            id: 104,
            name: "Bánh Que MIX Vị Ớt 50g",
            price: 20000,
            image: "/images/products/banh-que-mix-vi-ot-50g.png",
          },
          {
            id: 105,
            name: "Snack Mực Talethong TươngỚt Sriracha100g",
            price: 35000,
            image:
              "/images/products/snack-muc-talethong-tuongot-sriracha100g.png",
          },
          {
            id: 106,
            name: "Snack RollnRoll Chả Giò Trứng Muối 25g",
            price: 19000,
            image:
              "/images/products/snack-rollnroll-cha-gio-trung-muoi-25g.png",
          },
          {
            id: 107,
            name: "Snack Lay's Stax WagyuBeef &Truffle 100g",
            price: 42000,
            image:
              "/images/products/snack-lays-stax-wagyubeef-truffle-100g.png",
          },
          {
            id: 108,
            name: "Snack Masita/Kobuk Vị Bắp Bơ 50g/60g",
            price: 15000,
            image: "/images/products/snack-masitakobuk-vi-bap-bo-50g60g.png",
          },
          {
            id: 109,
            name: "Snack Chả Giò 7-Eleven Phô Mai Cay Và Hành25g",
            price: 15000,
            image:
              "/images/products/snack-cha-gio-7-eleven-pho-mai-cay-va-hanh25g.png",
          },
          {
            id: 110,
            name: "Tempura Đầu Tôm Phi Long Vị Tự Nhiên 25g",
            price: 33000,
            image:
              "/images/products/tempura-dau-tom-phi-long-vi-tu-nhien-25g.png",
          },
          {
            id: 111,
            name: "Bánh Rong Biển Cuộn Mitu Vị Phô Mai 42g",
            price: 19000,
            image:
              "/images/products/banh-rong-bien-cuon-mitu-vi-pho-mai-42g.png",
          },
          {
            id: 112,
            name: "Bánh Rong Biển Cuộn Mitu Trứng Muối 42g",
            price: 19000,
            image:
              "/images/products/banh-rong-bien-cuon-mitu-trung-muoi-42g.png",
          },
          {
            id: 113,
            name: "Bánh Que Dorkbua Thịt Xông Khói 50g",
            price: 22000,
            image: "/images/products/banh-que-dorkbua-thit-xong-khoi-50g.png",
          },
          {
            id: 114,
            name: "Bánh Que Dorkbua Truyền Thống 50g",
            price: 22000,
            image: "/images/products/banh-que-dorkbua-truyen-thong-50g.png",
          },
          {
            id: 115,
            name: "Snack Pringles Sour Cream & Onion 42g",
            price: 30000,
            image: "/images/products/snack-pringles-sour-cream-onion-42g.png",
          },
          {
            id: 116,
            name: "Snack Pringles Cheese 42g",
            price: 30000,
            image: "/images/products/snack-pringles-cheese-42g.png",
          },
          {
            id: 117,
            name: "Snack Doritos Nacho Cheese Tortilla Chips 65g",
            price: 36000,
            image:
              "/images/products/snack-doritos-nacho-cheese-tortilla-chips-65g.png",
          },
          {
            id: 118,
            name: "Doritos Khoai Tây Chiên Taco 65g_N",
            price: 36000,
            image: "/images/products/doritos-khoai-tay-chien-taco-65g_n.png",
          },
          {
            id: 119,
            name: "Rong Biển Trẻ Em O'Food 5g",
            price: 17000,
            image: "/images/products/rong-bien-tre-em-ofood-5g.png",
          },
          {
            id: 120,
            name: "Snack Poca Mũ Pháp Sư Vị Phô Mai 58g",
            price: 14000,
            image: "/images/products/snack-poca-mu-phap-su-vi-pho-mai-58g.png",
          },
          {
            id: 121,
            name: "Snack Rong Biển Wavy Vị Truyền Thống 8g",
            price: 19000,
            image:
              "/images/products/snack-rong-bien-wavy-vi-truyen-thong-8g.png",
          },
          {
            id: 122,
            name: "Snack Da Cá Lucky Star Vị Tiêu Xanh 25g",
            price: 23000,
            image:
              "/images/products/snack-da-ca-lucky-star-vi-tieu-xanh-25g.png",
          },
          {
            id: 123,
            name: "Snack Khoai Tây Jagabee Original 40g",
            price: 37000,
            image: "/images/products/snack-khoai-tay-jagabee-original-40g.png",
          },
          {
            id: 124,
            name: "Snack Oishi Bắp 4 Lớp Phô Mai 68g",
            price: 14000,
            image: "/images/products/snack-oishi-bap-4-lop-pho-mai-68g.png",
          },
          {
            id: 125,
            name: "Snack Rong Biển Bibigo Mực Cay 25g",
            price: 24000,
            image: "/images/products/snack-rong-bien-bibigo-muc-cay-25g.png",
          },
          {
            id: 126,
            name: "Rong Biển Bibigo Muối Hồng 4g",
            price: 13000,
            image: "/images/products/rong-bien-bibigo-muoi-hong-4g.png",
          },
          {
            id: 127,
            name: "Snack Rong Biển Bibigo Cua Muối Ớt 25g",
            price: 27000,
            image:
              "/images/products/snack-rong-bien-bibigo-cua-muoi-ot-25g.png",
          },
          {
            id: 128,
            name: "Snack Khoai Tây Jagabee Seaweed 38g",
            price: 37000,
            image: "/images/products/snack-khoai-tay-jagabee-seaweed-38g.png",
          },
          {
            id: 129,
            name: "Snack Lay's Cheddar & Sour Cream 184.2g",
            price: 173000,
            image: "/images/products/snack-lays-cheddar-sour-cream-1842g.png",
          },
          {
            id: 130,
            name: "Snack Da Cá Phi Long Mù Tạt Phô Mai 20g",
            price: 24000,
            image:
              "/images/products/snack-da-ca-phi-long-mu-tat-pho-mai-20g.png",
          },
          {
            id: 131,
            name: "Snack Da Cá Phi Long Vị Chanh Muối 20g",
            price: 24000,
            image:
              "/images/products/snack-da-ca-phi-long-vi-chanh-muoi-20g.png",
          },
          {
            id: 132,
            name: "Snack Lorenz Brezel Pretzels 90g",
            price: 52000,
            image: "/images/products/snack-lorenz-brezel-pretzels-90g.png",
          },
          {
            id: 133,
            name: "Snack Oishi BoLa Viên Vị Takoyaki 68g",
            price: 14000,
            image: "/images/products/snack-oishi-bola-vien-vi-takoyaki-68g.png",
          },
          {
            id: 134,
            name: "Snack Kettle Sea Salt & Vinegar 141g",
            price: 160000,
            image: "/images/products/snack-kettle-sea-salt-vinegar-141g.png",
          },
          {
            id: 135,
            name: "Snack Potato Chips Kettle Salt & Ground Pepper 141g",
            price: 160000,
            image:
              "/images/products/snack-potato-chips-kettle-salt-ground-pepper-141g.png",
          },
          {
            id: 136,
            name: "Snack Lợi Khuẩn Kefir Kale & Macca 10g",
            price: 30000,
            image: "/images/products/snack-loi-khuan-kefir-kale-macca-10g.png",
          },
          {
            id: 137,
            name: "Xốt Salsa Tostitos Phô Mai 439g",
            price: 239000,
            image: "/images/products/xot-salsa-tostitos-pho-mai-439g.png",
          },
          {
            id: 138,
            name: "Xốt Salsa Tostitos Cà Chua 439g",
            price: 239000,
            image: "/images/products/xot-salsa-tostitos-ca-chua-439g.png",
          },
          {
            id: 139,
            name: "Snack Lợi Khuẩn Kefir Xoài 10g",
            price: 30000,
            image: "/images/products/snack-loi-khuan-kefir-xoai-10g.png",
          },
          {
            id: 140,
            name: "Snack Lợi Khuẩn Kefir Nguyên Bản 10g",
            price: 30000,
            image: "/images/products/snack-loi-khuan-kefir-nguyen-ban-10g.png",
          },
          {
            id: 141,
            name: "Snack Tic Tac Seaweed 80g",
            price: 22000,
            image: "/images/products/snack-tic-tac-seaweed-80g.png",
          },
          {
            id: 142,
            name: "Snack Tic Tac Chicken Onion 80g",
            price: 22000,
            image: "/images/products/snack-tic-tac-chicken-onion-80g.png",
          },
          {
            id: 143,
            name: "Snack Tic Tac Grill Beef 80g",
            price: 22000,
            image: "/images/products/snack-tic-tac-grill-beef-80g.png",
          },
          {
            id: 144,
            name: "Snack Nongshim Hành Tây 50g",
            price: 29000,
            image: "/images/products/snack-nongshim-hanh-tay-50g.png",
          },
          {
            id: 145,
            name: "Snack Nongshim Tôm Cay 75g",
            price: 29000,
            image: "/images/products/snack-nongshim-tom-cay-75g.png",
          },
          {
            id: 146,
            name: "Snack Pringles Original 42g",
            price: 30000,
            image: "/images/products/snack-pringles-original-42g.png",
          },
          {
            id: 147,
            name: "Snack Oishi Bí Đỏ 68g",
            price: 14000,
            image: "/images/products/snack-oishi-bi-do-68g.png",
          },
          {
            id: 148,
            name: "Snack Pringles Nori Seaweed Burst 102g",
            price: 54000,
            image:
              "/images/products/snack-pringles-nori-seaweed-burst-102g.png",
          },
          {
            id: 149,
            name: "Snack Pringles Smokey Grilled Steak 102g",
            price: 54000,
            image:
              "/images/products/snack-pringles-smokey-grilled-steak-102g.png",
          },
          {
            id: 150,
            name: "Snack Lay's Stax Hot Chili Squid 100g",
            price: 42000,
            image: "/images/products/snack-lays-stax-hot-chili-squid-100g.png",
          },
          {
            id: 151,
            name: "Snack O'Star Vị Bơ Mật Ong 78g",
            price: 26000,
            image: "/images/products/snack-ostar-vi-bo-mat-ong-78g.png",
          },
          {
            id: 152,
            name: "Rong Biển Bibigo BBQ 4g",
            price: 13000,
            image: "/images/products/rong-bien-bibigo-bbq-4g.png",
          },
          {
            id: 153,
            name: "Snack Lay's Tôm Càng Phô Mai 150g",
            price: 39000,
            image: "/images/products/snack-lays-tom-cang-pho-mai-150g.png",
          },
          {
            id: 154,
            name: "Snack Poca Tôm Que Vị Tôm Hùm Nướng 60g",
            price: 14000,
            image:
              "/images/products/snack-poca-tom-que-vi-tom-hum-nuong-60g.png",
          },
          {
            id: 155,
            name: "Snack Lorenz Crunchips Cheese Onion 100g",
            price: 58000,
            image:
              "/images/products/snack-lorenz-crunchips-cheese-onion-100g.png",
          },
          {
            id: 156,
            name: "Snack Lorenz Crunchips Paprika 100g",
            price: 58000,
            image: "/images/products/snack-lorenz-crunchips-paprika-100g.png",
          },
          {
            id: 157,
            name: "Snack Slide Cheese 60g",
            price: 36000,
            image: "/images/products/snack-slide-cheese-60g.png",
          },
          {
            id: 158,
            name: "Snack Ruffles Jalapeno Ranch Potato Chips 184g",
            price: 175000,
            image:
              "/images/products/snack-ruffles-jalapeno-ranch-potato-chips-184g.png",
          },
          {
            id: 159,
            name: "Snack Ruffles Flamin Hot Potato Chips 184g",
            price: 175000,
            image:
              "/images/products/snack-ruffles-flamin-hot-potato-chips-184g.png",
          },
          {
            id: 160,
            name: "SnackKhoaiTây GoldenDuck Truffle BòWagyu",
            price: 108000,
            image:
              "/images/products/snackkhoaitay-goldenduck-truffle-bowagyu.png",
          },
          {
            id: 161,
            name: "SnackKhoaiTây GoldenDuck Cheddar",
            price: 108000,
            image: "/images/products/snackkhoaitay-goldenduck-cheddar.png",
          },
          {
            id: 162,
            name: "Snack Ruffles Cheddar Sour Cream Potato Chips 184g",
            price: 175000,
            image:
              "/images/products/snack-ruffles-cheddar-sour-cream-potato-chips-184g.png",
          },
          {
            id: 163,
            name: "Snack Ruffles Original Potato Chips 184g",
            price: 175000,
            image:
              "/images/products/snack-ruffles-original-potato-chips-184g.png",
          },
          {
            id: 164,
            name: "Snack Mực Talaethong Tom Yum 100g",
            price: 34000,
            image: "/images/products/snack-muc-talaethong-tom-yum-100g.png",
          },
          {
            id: 165,
            name: "Snack Kettle Sea Salt 141g",
            price: 164000,
            image: "/images/products/snack-kettle-sea-salt-141g.png",
          },
          {
            id: 166,
            name: "Snack Khoai Tây Gokochi Muối Tiêu Đen 65g",
            price: 24000,
            image:
              "/images/products/snack-khoai-tay-gokochi-muoi-tieu-den-65g.png",
          },
          {
            id: 167,
            name: "Snack Khoai Tây Gokochi Rong Biển 65g",
            price: 24000,
            image: "/images/products/snack-khoai-tay-gokochi-rong-bien-65g.png",
          },
          {
            id: 168,
            name: "Snack Puff Corn Socola 68g Popcorn",
            price: 15000,
            image: "/images/products/snack-puff-corn-socola-68g-popcorn.png",
          },
          {
            id: 169,
            name: "Snack Puff Corn Caramel 68g Popcorn",
            price: 15000,
            image: "/images/products/snack-puff-corn-caramel-68g-popcorn.png",
          },
          {
            id: 170,
            name: "Snack Plaza Del Sol Black Truffle 40g",
            price: 42000,
            image: "/images/products/snack-plaza-del-sol-black-truffle-40g.png",
          },
          {
            id: 171,
            name: "Rong Biển Kimgaedam Truyền Thống 50g",
            price: 12000,
            image: "/images/products/rong-bien-kimgaedam-truyen-thong-50g.png",
          },
          {
            id: 172,
            name: "Bánh Gạo AN BBQ 105.8g",
            price: 30000,
            image: "/images/products/banh-gao-an-bbq-1058g.png",
          },
          {
            id: 173,
            name: "Bánh Gạo An Khoai Tây 104.2g",
            price: 30000,
            image: "/images/products/banh-gao-an-khoai-tay-1042g.png",
          },
          {
            id: 174,
            name: "Snack Lay's Stax Wagyu Beef &Truffle 90g",
            price: 42000,
            image:
              "/images/products/snack-lays-stax-wagyu-beef-truffle-90g.png",
          },
          {
            id: 175,
            name: "Snack Lay's Stax Hot Chili Squid 90g",
            price: 42000,
            image: "/images/products/snack-lays-stax-hot-chili-squid-90g.png",
          },
          {
            id: 176,
            name: "Snack Plaza Del Sol Chili & Lime 115g",
            price: 92000,
            image: "/images/products/snack-plaza-del-sol-chili-lime-115g.png",
          },
          {
            id: 177,
            name: "Snack Oishi Cua Chua Ngọt 68g",
            price: 14000,
            image: "/images/products/snack-oishi-cua-chua-ngot-68g.png",
          },
          {
            id: 178,
            name: "Snack Lay's Stax Cheddar Cheese 40g",
            price: 24000,
            image: "/images/products/snack-lays-stax-cheddar-cheese-40g.png",
          },
          {
            id: 179,
            name: "Snack Lay's Stax Sườn BBQ 145g",
            price: 55000,
            image: "/images/products/snack-lays-stax-suon-bbq-145g.png",
          },
          {
            id: 180,
            name: "Snack Lay's Stax Spicy Lobster 40g",
            price: 24000,
            image: "/images/products/snack-lays-stax-spicy-lobster-40g.png",
          },
          {
            id: 181,
            name: "SnackKhoaiTây GoldenDuck KemSriracha125g",
            price: 108000,
            image:
              "/images/products/snackkhoaitay-goldenduck-kemsriracha125g.png",
          },
          {
            id: 182,
            name: "SnackKhoaiTây GoldenDuck BơRongBiển 125g",
            price: 108000,
            image:
              "/images/products/snackkhoaitay-goldenduck-borongbien-125g.png",
          },
          {
            id: 183,
            name: "Snack Lay’s Vị Sò Điệp Nướng Bơ Tỏi 88g",
            price: 26000,
            image:
              "/images/products/snack-lays-vi-so-diep-nuong-bo-toi-88g.png",
          },
          {
            id: 184,
            name: "Snack O'star Vị PhôMai TrứngMuối 90g/75g",
            price: 26000,
            image:
              "/images/products/snack-ostar-vi-phomai-trungmuoi-90g75g.png",
          },
          {
            id: 185,
            name: "Snack O'star Vị Tự Nhiên 90g",
            price: 26000,
            image: "/images/products/snack-ostar-vi-tu-nhien-90g.png",
          },
          {
            id: 186,
            name: "Snack O'star Vị Xốt Mayo 78g",
            price: 26000,
            image: "/images/products/snack-ostar-vi-xot-mayo-78g.png",
          },
          {
            id: 187,
            name: "Snack O'star Vị Tảo 90g",
            price: 26000,
            image: "/images/products/snack-ostar-vi-tao-90g.png",
          },
          {
            id: 188,
            name: "Snack Lay's Stax Original 145g",
            price: 55000,
            image: "/images/products/snack-lays-stax-original-145g.png",
          },
          {
            id: 189,
            name: "Snack Oishi Đậu Xanh Nước Dừa 65g",
            price: 13000,
            image: "/images/products/snack-oishi-dau-xanh-nuoc-dua-65g.png",
          },
          {
            id: 190,
            name: "Snack Oishi Sponge Crunch Socola 75g",
            price: 13000,
            image: "/images/products/snack-oishi-sponge-crunch-socola-75g.png",
          },
          {
            id: 191,
            name: "Snack Doritos Hàn Quốc Vị Gà Nướng 84g",
            price: 56000,
            image:
              "/images/products/snack-doritos-han-quoc-vi-ga-nuong-84g.png",
          },
          {
            id: 192,
            name: "Snack Doritos Hàn Quốc Vị Phô Mai 84g",
            price: 56000,
            image: "/images/products/snack-doritos-han-quoc-vi-pho-mai-84g.png",
          },
          {
            id: 193,
            name: "Snack Cheetos Hàn Quốc Vị Cay 82g",
            price: 58000,
            image: "/images/products/snack-cheetos-han-quoc-vi-cay-82g.png",
          },
          {
            id: 194,
            name: "Snack Cheetos Hàn Quốc Vị BBQ 82g",
            price: 58000,
            image: "/images/products/snack-cheetos-han-quoc-vi-bbq-82g.png",
          },
          {
            id: 195,
            name: "Snack Karamucho Stick Cay Đặc Biệt 35g",
            price: 14000,
            image:
              "/images/products/snack-karamucho-stick-cay-dac-biet-35g.png",
          },
          {
            id: 196,
            name: "Snack Karamucho Stick Rong Biển Cay 35g",
            price: 14000,
            image:
              "/images/products/snack-karamucho-stick-rong-bien-cay-35g.png",
          },
          {
            id: 197,
            name: "Snack Takis Chile Limón Rolls 92.3g",
            price: 150000,
            image: "/images/products/snack-takis-chile-limon-rolls-923g.png",
          },
          {
            id: 198,
            name: "Snack Takis Blue Heat Rolls 92.3g",
            price: 150000,
            image: "/images/products/snack-takis-blue-heat-rolls-923g.png",
          },
          {
            id: 199,
            name: "Snack Takis Dragon Sweet Chili Rolled 92.3g",
            price: 150000,
            image:
              "/images/products/snack-takis-dragon-sweet-chili-rolled-923g.png",
          },
          {
            id: 200,
            name: "Bánh Gạo Ichi Mini Vị Cay 120g",
            price: 33000,
            image: "/images/products/banh-gao-ichi-mini-vi-cay-120g.png",
          },
          {
            id: 201,
            name: "Snack Pringles Cheesy Cheese 102g",
            price: 54000,
            image: "/images/products/snack-pringles-cheesy-cheese-102g.png",
          },
          {
            id: 202,
            name: "Snack Pringles Hot And Spicy 102g",
            price: 54000,
            image: "/images/products/snack-pringles-hot-and-spicy-102g.png",
          },
          {
            id: 203,
            name: "Snack Crown Caramel Corn Peanut 72g",
            price: 36000,
            image: "/images/products/snack-crown-caramel-corn-peanut-72g.png",
          },
          {
            id: 204,
            name: "Snack Crown Jolly Pong 74g",
            price: 36000,
            image: "/images/products/snack-crown-jolly-pong-74g.png",
          },
          {
            id: 205,
            name: "Snack Khoai Tây Gokochi Súp Consomme 65g",
            price: 24000,
            image:
              "/images/products/snack-khoai-tay-gokochi-sup-consomme-65g.png",
          },
          {
            id: 206,
            name: "Snack Pomsticks Salted 85g",
            price: 56000,
            image: "/images/products/snack-pomsticks-salted-85g.png",
          },
          {
            id: 207,
            name: "Bánh Gạo Ichi Mini Vị Mật Ong 120g",
            price: 33000,
            image: "/images/products/banh-gao-ichi-mini-vi-mat-ong-120g.png",
          },
          {
            id: 208,
            name: "Snack Corn Chip Vị Bắp Nướng Bơ 100g",
            price: 24000,
            image: "/images/products/snack-corn-chip-vi-bap-nuong-bo-100g.png",
          },
          {
            id: 209,
            name: "Snack Poca Mực Cay Đặc Biệt 60g",
            price: 14000,
            image: "/images/products/snack-poca-muc-cay-dac-biet-60g.png",
          },
          {
            id: 210,
            name: "Snack Lorenz Naturals Rosemary 100g",
            price: 79000,
            image: "/images/products/snack-lorenz-naturals-rosemary-100g.png",
          },
          {
            id: 211,
            name: "Snack Oishi Tôm Cay 68g",
            price: 14000,
            image: "/images/products/snack-oishi-tom-cay-68g.png",
          },
          {
            id: 212,
            name: "Snack Karamucho Dày Cay Đặc Biệt 80g",
            price: 28000,
            image: "/images/products/snack-karamucho-day-cay-dac-biet-80g.png",
          },
          {
            id: 213,
            name: "Snack Kettle Honey Dijon 141g",
            price: 160000,
            image: "/images/products/snack-kettle-honey-dijon-141g.png",
          },
        ],
      },
      {
        id: "banh-quy",
        name: "Bánh quy",
        products: [
          {
            id: 1,
            name: "Bánh Crackers Phô Mai Cheez It White Cheddar 127g",
            price: 165000,
            image:
              "/images/products/banh-crackers-pho-mai-cheez-it-white-cheddar-127g.png",
          },
          {
            id: 2,
            name: "Bánh Pep Farm Socola Đen 170g -T9",
            price: 132000,
            image: "/images/products/banh-pep-farm-socola-den-170g-t9.png",
          },
          {
            id: 3,
            name: "Bánh Cá Pepperidge Farm Phô Mai 187g -T9",
            price: 99000,
            image:
              "/images/products/banh-ca-pepperidge-farm-pho-mai-187g-t9.png",
          },
          {
            id: 4,
            name: "Bánh Ritz Cây Phô Mai 118g Biscuit",
            price: 29000,
            image: "/images/products/banh-ritz-cay-pho-mai-118g-biscuit.png",
          },
          {
            id: 5,
            name: "Oreo Bánh Quy Kem Vani 123.5g Cookies",
            price: 22000,
            image: "/images/products/oreo-banh-quy-kem-vani-1235g-cookies.png",
          },
          {
            id: 6,
            name: "Oreo Bánh Quy Kem Socola 123.5g Cookies",
            price: 22000,
            image:
              "/images/products/oreo-banh-quy-kem-socola-1235g-cookies.png",
          },
          {
            id: 7,
            name: "Oreo Bánh Quy Kem Dâu 123.5g Cookies",
            price: 22000,
            image: "/images/products/oreo-banh-quy-kem-dau-1235g-cookies.png",
          },
          {
            id: 8,
            name: "Bánh Quy Cream-O Vanilla 85g",
            price: 12000,
            image: "/images/products/banh-quy-cream-o-vanilla-85g.png",
          },
          {
            id: 9,
            name: "Bánh Quy Cream-O Choco 85g",
            price: 12000,
            image: "/images/products/banh-quy-cream-o-choco-85g.png",
          },
          {
            id: 10,
            name: "Bánh Xốp Phô Mai Nabati 50g Wafer",
            price: 11000,
            image: "/images/products/banh-xop-pho-mai-nabati-50g-wafer.png",
          },
          {
            id: 11,
            name: "Bánh Quy Mặn RITZ 247gr Biscuit",
            price: 74000,
            image: "/images/products/banh-quy-man-ritz-247gr-biscuit.png",
          },
          {
            id: 12,
            name: "Oreo Bánh Socola Pie 180g",
            price: 44000,
            image: "/images/products/oreo-banh-socola-pie-180g.png",
          },
          {
            id: 13,
            name: "Bánh Choco-Pie Hộp 2P",
            price: 14000,
            image: "/images/products/banh-choco-pie-hop-2p.png",
          },
          {
            id: 14,
            name: "Bánh Custas Hộp 12P",
            price: 78000,
            image: "/images/products/banh-custas-hop-12p.png",
          },
          {
            id: 15,
            name: "Bánh Quy Kẹp Phô Mai Pamiriter Gói 218g",
            price: 79000,
            image:
              "/images/products/banh-quy-kep-pho-mai-pamiriter-goi-218g.png",
          },
          {
            id: 16,
            name: "Bánh Quy Kenju Nougat Kem Dẻo Gói 186g",
            price: 55000,
            image:
              "/images/products/banh-quy-kenju-nougat-kem-deo-goi-186g.png",
          },
          {
            id: 17,
            name: "Bánh Quy Trứng Muối 180g Biscuit",
            price: 83000,
            image: "/images/products/banh-quy-trung-muoi-180g-biscuit.png",
          },
          {
            id: 18,
            name: "AFC Dinh Dưỡng Lúa Mì 200g Cracker",
            price: 38000,
            image: "/images/products/afc-dinh-duong-lua-mi-200g-cracker.png",
          },
          {
            id: 19,
            name: "Bánh Cracker AFC Dinh Dưỡng Rau Cải 172g",
            price: 38000,
            image:
              "/images/products/banh-cracker-afc-dinh-duong-rau-cai-172g.png",
          },
          {
            id: 20,
            name: "Bánh Gery Phô Mai 200g New Biscuit",
            price: 46000,
            image: "/images/products/banh-gery-pho-mai-200g-new-biscuit.png",
          },
          {
            id: 21,
            name: "Bánh Plain 104g Crackers",
            price: 59000,
            image: "/images/products/banh-plain-104g-crackers.png",
          },
          {
            id: 22,
            name: "Bánh Quế Cosy Chocolate 117.6g",
            price: 19000,
            image: "/images/products/banh-que-cosy-chocolate-1176g.png",
          },
          {
            id: 23,
            name: "Bánh Quế Nabati Phô Mai 105g",
            price: 19000,
            image: "/images/products/banh-que-nabati-pho-mai-105g.png",
          },
          {
            id: 24,
            name: "Bánh Quy Nabati Nhân Phô Mai 136g",
            price: 19000,
            image: "/images/products/banh-quy-nabati-nhan-pho-mai-136g.png",
          },
          {
            id: 25,
            name: "Bánh Que Pocky Cookies 40g",
            price: 22000,
            image: "/images/products/banh-que-pocky-cookies-40g.png",
          },
          {
            id: 26,
            name: "Bánh Marineboy Vị Tảo 35g",
            price: 19000,
            image: "/images/products/banh-marineboy-vi-tao-35g.png",
          },
          {
            id: 27,
            name: "Bánh Đuôn Sữa Gói 150g",
            price: 22000,
            image: "/images/products/banh-duon-sua-goi-150g.png",
          },
          {
            id: 28,
            name: "Bánh Tai Heo Hoàng Mỹ Gia 150g",
            price: 22000,
            image: "/images/products/banh-tai-heo-hoang-my-gia-150g.png",
          },
          {
            id: 29,
            name: "Bánh Men Hoàng Mỹ Gia 100g",
            price: 17000,
            image: "/images/products/banh-men-hoang-my-gia-100g.png",
          },
          {
            id: 30,
            name: "Bánh Mochi Đậu Đỏ 120g",
            price: 63000,
            image: "/images/products/banh-mochi-dau-do-120g.png",
          },
          {
            id: 31,
            name: "Bánh Mochi Matcha 120g",
            price: 63000,
            image: "/images/products/banh-mochi-matcha-120g.png",
          },
          {
            id: 32,
            name: "Snack Pillows Cookie & Vani 80g/75g",
            price: 13000,
            image: "/images/products/snack-pillows-cookie-vani-80g75g.png",
          },
          {
            id: 33,
            name: "Snack Oishi Pillows Dừa 80g/75g",
            price: 14000,
            image: "/images/products/snack-oishi-pillows-dua-80g75g.png",
          },
          {
            id: 34,
            name: "Snack Oishi Pillows Socola 80g/75g",
            price: 14000,
            image: "/images/products/snack-oishi-pillows-socola-80g75g.png",
          },
          {
            id: 35,
            name: "Bánh Gạo Want Want Rong Biển 160g",
            price: 70000,
            image: "/images/products/banh-gao-want-want-rong-bien-160g.png",
          },
          {
            id: 36,
            name: "Bánh Gạo One One Tảo Biển 104g",
            price: 28000,
            image: "/images/products/banh-gao-one-one-tao-bien-104g.png",
          },
          {
            id: 37,
            name: "Bánh Gạo One One Ngọt 150g",
            price: 28000,
            image: "/images/products/banh-gao-one-one-ngot-150g.png",
          },
          {
            id: 38,
            name: "Bánh Gạo Ichi 100G",
            price: 26000,
            image: "/images/products/banh-gao-ichi-100g.png",
          },
          {
            id: 39,
            name: "Bánh Orion Con Cá Bống Bang 145g",
            price: 40000,
            image: "/images/products/banh-orion-con-ca-bong-bang-145g.png",
          },
          {
            id: 40,
            name: "Bánh Quy Danisa Abbracci 168g",
            price: 43000,
            image: "/images/products/banh-quy-danisa-abbracci-168g.png",
          },
          {
            id: 41,
            name: "Bánh Que Pocky Milk Hokkaido 40g",
            price: 22000,
            image: "/images/products/banh-que-pocky-milk-hokkaido-40g.png",
          },
          {
            id: 42,
            name: "Bánh Quy Cream-O Socola Đào Vải 85g",
            price: 12000,
            image: "/images/products/banh-quy-cream-o-socola-dao-vai-85g.png",
          },
          {
            id: 43,
            name: "Bánh Mochi Royal Bạc Hà Hạt Socola 120g",
            price: 69000,
            image:
              "/images/products/banh-mochi-royal-bac-ha-hat-socola-120g.png",
          },
          {
            id: 44,
            name: "Bánh Yan Yan Cookies & Cream 50g",
            price: 30000,
            image: "/images/products/banh-yan-yan-cookies-cream-50g.png",
          },
          {
            id: 45,
            name: "Bánh Bouchee Lotte Chocolat Matcha169.8g",
            price: 36000,
            image:
              "/images/products/banh-bouchee-lotte-chocolat-matcha1698g.png",
          },
          {
            id: 46,
            name: "Bánh Quế Mini Deka Socola 72g",
            price: 18000,
            image: "/images/products/banh-que-mini-deka-socola-72g.png",
          },
          {
            id: 47,
            name: "Bánh Quế Mini Deka Sầu Riêng 72g",
            price: 18000,
            image: "/images/products/banh-que-mini-deka-sau-rieng-72g.png",
          },
          {
            id: 48,
            name: "Bánh Đậu Xanh Nướng Viet Special 160g",
            price: 29000,
            image: "/images/products/banh-dau-xanh-nuong-viet-special-160g.png",
          },
          {
            id: 49,
            name: "Bánh Dừa Nướng Viet Special 150g",
            price: 34000,
            image: "/images/products/banh-dua-nuong-viet-special-150g.png",
          },
          {
            id: 50,
            name: "Bánh Quy Mềm Country Ma'am Vị Vani 44g",
            price: 16000,
            image: "/images/products/banh-quy-mem-country-maam-vi-vani-44g.png",
          },
          {
            id: 51,
            name: "Phô Mai Tasty và Bánh Quy Dairyworks 50g",
            price: 74000,
            image:
              "/images/products/pho-mai-tasty-va-banh-quy-dairyworks-50g.png",
          },
          {
            id: 52,
            name: "Phô Mai Edam và Bánh Quy Dairyworks 50g",
            price: 74000,
            image:
              "/images/products/pho-mai-edam-va-banh-quy-dairyworks-50g.png",
          },
          {
            id: 53,
            name: "Bánh Quy Mềm Country Ma'am Vị Socola 44g",
            price: 16000,
            image:
              "/images/products/banh-quy-mem-country-maam-vi-socola-44g.png",
          },
          {
            id: 54,
            name: "Bánh Quy Mềm Country Ma'am Vị Dâu 44g",
            price: 16000,
            image: "/images/products/banh-quy-mem-country-maam-vi-dau-44g.png",
          },
          {
            id: 55,
            name: "Bánh Pepperidge Farm Milano Dark Chocolate 170g",
            price: 159000,
            image:
              "/images/products/banh-pepperidge-farm-milano-dark-chocolate-170g.png",
          },
          {
            id: 56,
            name: "Bánh Que Lotte Pepero White 32g",
            price: 30000,
            image: "/images/products/banh-que-lotte-pepero-white-32g.png",
          },
          {
            id: 57,
            name: "Bánh Que Pocky Socola 40g",
            price: 22000,
            image: "/images/products/banh-que-pocky-socola-40g.png",
          },
          {
            id: 58,
            name: "Bánh Pepperidge Goldfish Phô Mai Cheddar 187g",
            price: 119000,
            image:
              "/images/products/banh-pepperidge-goldfish-pho-mai-cheddar-187g.png",
          },
          {
            id: 59,
            name: "Bánh Pepperidge Chessmen 206g",
            price: 159000,
            image: "/images/products/banh-pepperidge-chessmen-206g.png",
          },
          {
            id: 60,
            name: "Bánh Pepperidge Chesapeake Dark Chocolate Pecan 204g",
            price: 159000,
            image:
              "/images/products/banh-pepperidge-chesapeake-dark-chocolate-pecan-204g.png",
          },
          {
            id: 61,
            name: "Bánh Malkist Crackers 105g",
            price: 17000,
            image: "/images/products/banh-malkist-crackers-105g.png",
          },
          {
            id: 62,
            name: "Bánh Toppo Socola 40g",
            price: 22000,
            image: "/images/products/banh-toppo-socola-40g.png",
          },
          {
            id: 63,
            name: "Bánh Quy Oreo Kem Vani 64.4g/61.2g",
            price: 14000,
            image: "/images/products/banh-quy-oreo-kem-vani-644g612g.png",
          },
          {
            id: 64,
            name: "Bánh Quy Phết Cá Ngừ Nautilus Vị Nguyên Bản 117g",
            price: 62000,
            image:
              "/images/products/banh-quy-phet-ca-ngu-nautilus-vi-nguyen-ban-117g.png",
          },
          {
            id: 65,
            name: "Bánh Quy Phết Cá Ngừ Nautilus Vị Nấm Truffle 107g",
            price: 62000,
            image:
              "/images/products/banh-quy-phet-ca-ngu-nautilus-vi-nam-truffle-107g.png",
          },
          {
            id: 66,
            name: "Bánh Quy Phết Cá Ngừ Nautilus Vị Tảo Biển 117g",
            price: 62000,
            image:
              "/images/products/banh-quy-phet-ca-ngu-nautilus-vi-tao-bien-117g.png",
          },
          {
            id: 67,
            name: "Bánh Choco-Pie Hộp 12P",
            price: 75000,
            image: "/images/products/banh-choco-pie-hop-12p.png",
          },
          {
            id: 68,
            name: "Bánh Quy Bơ Pháp LU 180g",
            price: 89000,
            image: "/images/products/banh-quy-bo-phap-lu-180g.png",
          },
          {
            id: 69,
            name: "Bánh Quy Danisa Hộp 200g Cookies",
            price: 79000,
            image: "/images/products/banh-quy-danisa-hop-200g-cookies.png",
          },
          {
            id: 70,
            name: "Bánh Xốp Loacker Socola 54g",
            price: 45000,
            image: "/images/products/banh-xop-loacker-socola-54g.png",
          },
          {
            id: 71,
            name: "Bánh Xốp Loacker Napolitaner 54g",
            price: 45000,
            image: "/images/products/banh-xop-loacker-napolitaner-54g.png",
          },
          {
            id: 72,
            name: "Bánh Xốp Nabati Socola 50g",
            price: 11000,
            image: "/images/products/banh-xop-nabati-socola-50g.png",
          },
          {
            id: 73,
            name: "Bánh Quy Hạnh Nhân Son Guzto Bơ 45g",
            price: 56000,
            image: "/images/products/banh-quy-hanh-nhan-son-guzto-bo-45g.png",
          },
          {
            id: 74,
            name: "Bánh Cheez It White Cheddar 56g",
            price: 83000,
            image: "/images/products/banh-cheez-it-white-cheddar-56g.png",
          },
          {
            id: 75,
            name: "Bánh Quy Lotus Biscoff Caramel Quế 37.5g",
            price: 18000,
            image:
              "/images/products/banh-quy-lotus-biscoff-caramel-que-375g.png",
          },
          {
            id: 76,
            name: "Bánh Quy Mặn Ritz Kẹp Phô Mai 106g",
            price: 45000,
            image: "/images/products/banh-quy-man-ritz-kep-pho-mai-106g.png",
          },
          {
            id: 77,
            name: "Bánh Quy Socola Giòn BOKE 80g",
            price: 44000,
            image: "/images/products/banh-quy-socola-gion-boke-80g.png",
          },
          {
            id: 78,
            name: "Bánh Quy Ginbis Hình Thú Vị Rau Củ 14g",
            price: 10000,
            image:
              "/images/products/banh-quy-ginbis-hinh-thu-vi-rau-cu-14g.png",
          },
          {
            id: 79,
            name: "Bánh Quy Ginbis Hình Thú Vị Bơ 17g",
            price: 10000,
            image: "/images/products/banh-quy-ginbis-hinh-thu-vi-bo-17g.png",
          },
          {
            id: 80,
            name: "Bánh Oreo Mini Choco 58.4g",
            price: 25000,
            image: "/images/products/banh-oreo-mini-choco-584g.png",
          },
          {
            id: 81,
            name: "Bánh Quế Crown White Heim Hazelnut 47g",
            price: 36000,
            image:
              "/images/products/banh-que-crown-white-heim-hazelnut-47g.png",
          },
          {
            id: 82,
            name: "Bánh Quy Oreo Đường Nâu Hotteok 105g",
            price: 24000,
            image: "/images/products/banh-quy-oreo-duong-nau-hotteok-105g.png",
          },
          {
            id: 83,
            name: "Bánh Ginbis Ginza Rusk Socola 50g",
            price: 47000,
            image: "/images/products/banh-ginbis-ginza-rusk-socola-50g.png",
          },
          {
            id: 84,
            name: "Bánh Quy Crown Couque Dasse White 77g",
            price: 36000,
            image: "/images/products/banh-quy-crown-couque-dasse-white-77g.png",
          },
          {
            id: 85,
            name: "Bánh quế Crown Choco Heim Hazelnut 47g",
            price: 36000,
            image:
              "/images/products/banh-que-crown-choco-heim-hazelnut-47g.png",
          },
          {
            id: 86,
            name: "Snack Oishi x Cộng Cà Phê Pillows Cốt Dừa Cà Phê 75g",
            price: 13000,
            image:
              "/images/products/snack-oishi-x-cong-ca-phe-pillows-cot-dua-ca-phe-75g.png",
          },
          {
            id: 87,
            name: "Bánh Que Lotus Friend Vị Tomyum 55g",
            price: 22000,
            image: "/images/products/banh-que-lotus-friend-vi-tomyum-55g.png",
          },
          {
            id: 88,
            name: "Bánh Que Lotus Friend Vị Truyềnthống 55g",
            price: 22000,
            image:
              "/images/products/banh-que-lotus-friend-vi-truyenthong-55g.png",
          },
          {
            id: 89,
            name: "Bánh Hello Panda Socola 40g",
            price: 28000,
            image: "/images/products/banh-hello-panda-socola-40g.png",
          },
        ],
      },
      {
        id: "keo",
        name: "Các loại kẹo",
        products: [
          {
            id: 1,
            name: "Thạch Puri 7Cosia Vị Nho 200g",
            price: 31000,
            image: "/images/products/thach-puri-7cosia-vi-nho-200g.png",
          },
          {
            id: 2,
            name: "Gum Lotte Xylitol Blueberry Mint 130.5g -T9",
            price: 68000,
            image:
              "/images/products/gum-lotte-xylitol-blueberry-mint-1305g-t9.png",
          },
          {
            id: 3,
            name: "Gum Lotte Xylitol Lime Mint 130.5g -T9",
            price: 68000,
            image: "/images/products/gum-lotte-xylitol-lime-mint-1305g-t9.png",
          },
          {
            id: 4,
            name: "Kẹo Dẻo Jajang Playmore 60G -T9",
            price: 41000,
            image: "/images/products/keo-deo-jajang-playmore-60g-t9.png",
          },
          {
            id: 5,
            name: "Kẹo Playmore Black Mint 22g -T9",
            price: 32000,
            image: "/images/products/keo-playmore-black-mint-22g-t9.png",
          },
          {
            id: 6,
            name: "Kẹo Playmore Nho 22g -T9",
            price: 32000,
            image: "/images/products/keo-playmore-nho-22g-t9.png",
          },
          {
            id: 7,
            name: "Kẹo Kopiko Coffee 140g -T9",
            price: 20000,
            image: "/images/products/keo-kopiko-coffee-140g-t9.png",
          },
          {
            id: 8,
            name: "Kẹo Mút Zoom Dứa Đào Kiwi 72g -T9",
            price: 17000,
            image: "/images/products/keo-mut-zoom-dua-dao-kiwi-72g-t9.png",
          },
          {
            id: 9,
            name: "Thạch Puri 7Cosia Trái Cây Tổng Hợp 200g",
            price: 31000,
            image:
              "/images/products/thach-puri-7cosia-trai-cay-tong-hop-200g.png",
          },
          {
            id: 10,
            name: "Kẹo Dẻo Con Mắt Funmore 18g",
            price: 23000,
            image: "/images/products/keo-deo-con-mat-funmore-18g.png",
          },
          {
            id: 11,
            name: "Kẹo Dẻo Haribo Goldbears Sour 80g",
            price: 35000,
            image: "/images/products/keo-deo-haribo-goldbears-sour-80g.png",
          },
          {
            id: 12,
            name: "Kẹo Dẻo Haribo Starmix 80g Gummy Candy",
            price: 35000,
            image:
              "/images/products/keo-deo-haribo-starmix-80g-gummy-candy.png",
          },
          {
            id: 13,
            name: "Kẹo Dẻo Haribo Happy Cola 80g",
            price: 35000,
            image: "/images/products/keo-deo-haribo-happy-cola-80g.png",
          },
          {
            id: 14,
            name: "KD Haribo Happy Grapes 80g Gummy Candy",
            price: 35000,
            image:
              "/images/products/kd-haribo-happy-grapes-80g-gummy-candy.png",
          },
          {
            id: 15,
            name: "Kẹo Dẻo Haribo Goldbears 80g Gummy Candy",
            price: 35000,
            image:
              "/images/products/keo-deo-haribo-goldbears-80g-gummy-candy.png",
          },
          {
            id: 16,
            name: "Kẹo Dẻo Cokoc Trái Cây Nhiệt Đới 60g",
            price: 22000,
            image: "/images/products/keo-deo-cokoc-trai-cay-nhiet-doi-60g.png",
          },
          {
            id: 17,
            name: "Kẹo Dẻo Cokoc Soda Trái Cây 60g",
            price: 22000,
            image: "/images/products/keo-deo-cokoc-soda-trai-cay-60g.png",
          },
          {
            id: 18,
            name: "Kẹo Dẻo Cokoc Đào 75g",
            price: 22000,
            image: "/images/products/keo-deo-cokoc-dao-75g.png",
          },
          {
            id: 19,
            name: "Kẹo Dẻo Chupachup SourBelt Gummy Candy",
            price: 6000,
            image:
              "/images/products/keo-deo-chupachup-sourbelt-gummy-candy.png",
          },
          {
            id: 20,
            name: "Kẹo Playmore Dưa Hấu Hũ 22g N",
            price: 41000,
            image: "/images/products/keo-playmore-dua-hau-hu-22g-n.png",
          },
          {
            id: 21,
            name: "Kẹo Playmore Táo 22g",
            price: 41000,
            image: "/images/products/keo-playmore-tao-22g.png",
          },
          {
            id: 22,
            name: "Kẹo Playmore Nho 22g",
            price: 37000,
            image: "/images/products/keo-playmore-nho-22g.png",
          },
          {
            id: 23,
            name: "Kẹo Playmore Black Mint 22g",
            price: 37000,
            image: "/images/products/keo-playmore-black-mint-22g.png",
          },
          {
            id: 24,
            name: "Kẹo Himalaya Chanh Muối 15g",
            price: 13000,
            image: "/images/products/keo-himalaya-chanh-muoi-15g.png",
          },
          {
            id: 25,
            name: "Kẹo Dynamic Nhân Bạc Hà 120g",
            price: 19000,
            image: "/images/products/keo-dynamic-nhan-bac-ha-120g.png",
          },
          {
            id: 26,
            name: "Kẹo Chanh Muối Vitamin C 120g",
            price: 36000,
            image: "/images/products/keo-chanh-muoi-vitamin-c-120g.png",
          },
          {
            id: 27,
            name: "Kẹo Ricola Chanh Bạc Hà 40g",
            price: 52000,
            image: "/images/products/keo-ricola-chanh-bac-ha-40g.png",
          },
          {
            id: 28,
            name: "Kẹo Cay Con Tàu Spearmint Fisherman's Friend",
            price: 33000,
            image:
              "/images/products/keo-cay-con-tau-spearmint-fishermans-friend.png",
          },
          {
            id: 29,
            name: "Kẹo Cay Con Tàu Quýt Và Menthol 25g",
            price: 33000,
            image: "/images/products/keo-cay-con-tau-quyt-va-menthol-25g.png",
          },
          {
            id: 30,
            name: "Kẹo Cay con Tàu Cam Chanh Fisherman's Friend",
            price: 33000,
            image:
              "/images/products/keo-cay-con-tau-cam-chanh-fishermans-friend.png",
          },
          {
            id: 31,
            name: "Kẹo Ngậm Mentos Peppermint 35g",
            price: 45000,
            image: "/images/products/keo-ngam-mentos-peppermint-35g.png",
          },
          {
            id: 32,
            name: "Gum Số 5 Bạc Hà Không Đường 32g",
            price: 37000,
            image: "/images/products/gum-so-5-bac-ha-khong-duong-32g.png",
          },
          {
            id: 33,
            name: "Gum Lotte Xylitol Lime Mint 130.5g",
            price: 74000,
            image: "/images/products/gum-lotte-xylitol-lime-mint-1305g.png",
          },
          {
            id: 34,
            name: "Gum Lotte Xylitol Blueberry Mint 130.5g",
            price: 74000,
            image:
              "/images/products/gum-lotte-xylitol-blueberry-mint-1305g.png",
          },
          {
            id: 35,
            name: "Gum Lotte Xylitol Lime Mint 58g",
            price: 34000,
            image: "/images/products/gum-lotte-xylitol-lime-mint-58g.png",
          },
          {
            id: 36,
            name: "Gum Cool Air Cube Chanh 40g",
            price: 49000,
            image: "/images/products/gum-cool-air-cube-chanh-40g.png",
          },
          {
            id: 37,
            name: "Gum Trident Vị Dưa Hấu 21.6g",
            price: 23000,
            image: "/images/products/gum-trident-vi-dua-hau-216g.png",
          },
          {
            id: 38,
            name: "Kẹo Bông ChapCorn Vị Hoa Anh Đào 8g",
            price: 29000,
            image: "/images/products/keo-bong-chapcorn-vi-hoa-anh-dao-8g.png",
          },
          {
            id: 39,
            name: "Kẹo Bông Danaland Chanh Chua Dâu Ngọt 8g",
            price: 29000,
            image:
              "/images/products/keo-bong-danaland-chanh-chua-dau-ngot-8g.png",
          },
          {
            id: 40,
            name: "Kẹo Dẻo Hồ Lô Ennjoi Vị Dâu Tây 60g",
            price: 29000,
            image: "/images/products/keo-deo-ho-lo-ennjoi-vi-dau-tay-60g.png",
          },
          {
            id: 41,
            name: "Kẹo Dẻo Hồ Lô Ennjoi Vị Táo Gai 60g",
            price: 29000,
            image: "/images/products/keo-deo-ho-lo-ennjoi-vi-tao-gai-60g.png",
          },
          {
            id: 42,
            name: "Gum Xylitol Trái Cây Hỗn Hợp 55.1g",
            price: 34000,
            image: "/images/products/gum-xylitol-trai-cay-hon-hop-551g.png",
          },
          {
            id: 43,
            name: "Kẹo Dẻo Skittles Sữa Chua Trái Cây 42.5g",
            price: 28000,
            image:
              "/images/products/keo-deo-skittles-sua-chua-trai-cay-425g.png",
          },
          {
            id: 44,
            name: "Kẹo Dẻo Chupa Chups Dâu Vani 30g",
            price: 17000,
            image: "/images/products/keo-deo-chupa-chups-dau-vani-30g.png",
          },
          {
            id: 45,
            name: "Kẹo Cay Con Tàu Bạc Hà 25g",
            price: 33000,
            image: "/images/products/keo-cay-con-tau-bac-ha-25g.png",
          },
          {
            id: 46,
            name: "Kẹo Cay Con Tàu Menthol Khuynh Diệp 25g",
            price: 33000,
            image:
              "/images/products/keo-cay-con-tau-menthol-khuynh-diep-25g.png",
          },
          {
            id: 47,
            name: "Kẹo Cay Con Tàu Táo Quế 25g",
            price: 33000,
            image: "/images/products/keo-cay-con-tau-tao-que-25g.png",
          },
          {
            id: 48,
            name: "Kẹo Dẻo Pati Minions Vị Xoài 80g",
            price: 32000,
            image: "/images/products/keo-deo-pati-minions-vi-xoai-80g.png",
          },
          {
            id: 49,
            name: "Kẹo Dẻo Pati Minions Vị Nho 63g",
            price: 32000,
            image: "/images/products/keo-deo-pati-minions-vi-nho-63g.png",
          },
          {
            id: 50,
            name: "Gum Không Đường Mentos Hương Dưa Hấu 61g",
            price: 38000,
            image:
              "/images/products/gum-khong-duong-mentos-huong-dua-hau-61g.png",
          },
          {
            id: 51,
            name: "Kẹo Ngậm Eikodo Chanh Mật Ong 15g",
            price: 6000,
            image: "/images/products/keo-ngam-eikodo-chanh-mat-ong-15g.png",
          },
          {
            id: 52,
            name: "Kẹo Ngậm Eikodo Chanh Muối 15g",
            price: 6000,
            image: "/images/products/keo-ngam-eikodo-chanh-muoi-15g.png",
          },
          {
            id: 53,
            name: "Kẹo Ngậm Không Đường Halls Bạc Hà 12.6g",
            price: 29000,
            image:
              "/images/products/keo-ngam-khong-duong-halls-bac-ha-126g.png",
          },
          {
            id: 54,
            name: "Kẹo Ngậm Không Đường Halls Chanh 12.6g",
            price: 29000,
            image: "/images/products/keo-ngam-khong-duong-halls-chanh-126g.png",
          },
          {
            id: 55,
            name: "Kẹo Ngậm Halls Không Đường Bạc Hà 15.4g",
            price: 33000,
            image:
              "/images/products/keo-ngam-halls-khong-duong-bac-ha-154g.png",
          },
          {
            id: 56,
            name: "Kẹo Ngậm Halls Không Đường Dưa Hấu 15.4g",
            price: 33000,
            image:
              "/images/products/keo-ngam-halls-khong-duong-dua-hau-154g.png",
          },
          {
            id: 57,
            name: "Kẹo Dẻo Andros Vị Đào 80g",
            price: 39000,
            image: "/images/products/keo-deo-andros-vi-dao-80g.png",
          },
          {
            id: 58,
            name: "Kẹo Dẻo Andros Vị Dâu 80g",
            price: 39000,
            image: "/images/products/keo-deo-andros-vi-dau-80g.png",
          },
          {
            id: 59,
            name: "Kẹo Dẻo Andros Vị Cam 80g",
            price: 39000,
            image: "/images/products/keo-deo-andros-vi-cam-80g.png",
          },
          {
            id: 60,
            name: "Kẹo Nổ Striking Việt Quất 15g",
            price: 26000,
            image: "/images/products/keo-no-striking-viet-quat-15g.png",
          },
          {
            id: 61,
            name: "Kẹo Xốp Marshmallow Minions Xoài 90g",
            price: 46000,
            image: "/images/products/keo-xop-marshmallow-minions-xoai-90g.png",
          },
          {
            id: 62,
            name: "Gum Không Đường Mentos Hương Dâu 61g",
            price: 38000,
            image: "/images/products/gum-khong-duong-mentos-huong-dau-61g.png",
          },
          {
            id: 63,
            name: "Kẹo Dẻo Chupa Chups Sour Belt 1 Mét",
            price: 17000,
            image: "/images/products/keo-deo-chupa-chups-sour-belt-1-met.png",
          },
          {
            id: 64,
            name: "Gum Số 5 Dưa Hấu Không Đường 32g",
            price: 37000,
            image: "/images/products/gum-so-5-dua-hau-khong-duong-32g.png",
          },
          {
            id: 65,
            name: "Kẹo Doublemint Bạc Hà 24g",
            price: 39000,
            image: "/images/products/keo-doublemint-bac-ha-24g.png",
          },
          {
            id: 66,
            name: "Kẹo xốp Haribo Chamallows Choco-soft 62g",
            price: 35000,
            image:
              "/images/products/keo-xop-haribo-chamallows-choco-soft-62g.png",
          },
          {
            id: 67,
            name: "Kẹo xốp Haribo Chamallows Pink&White 70g",
            price: 35000,
            image:
              "/images/products/keo-xop-haribo-chamallows-pinkwhite-70g.png",
          },
          {
            id: 68,
            name: "Kẹo Sữa Milkita Vị Hỗn Hợp 24g",
            price: 17000,
            image: "/images/products/keo-sua-milkita-vi-hon-hop-24g.png",
          },
          {
            id: 69,
            name: "Kẹo Thảo Mộc Funday Vị Cà Phê 50g",
            price: 47000,
            image: "/images/products/keo-thao-moc-funday-vi-ca-phe-50g.png",
          },
          {
            id: 70,
            name: "Gum Lotte Xylitol Fresh Mint 130.5g",
            price: 74000,
            image: "/images/products/gum-lotte-xylitol-fresh-mint-1305g.png",
          },
          {
            id: 71,
            name: "Kẹo Hi-Chew Dâu 57g",
            price: 20000,
            image: "/images/products/keo-hi-chew-dau-57g.png",
          },
          {
            id: 72,
            name: "Kẹo Mút Chupa Chups Hỗn Hợp 9.3g",
            price: 4000,
            image: "/images/products/keo-mut-chupa-chups-hon-hop-93g.png",
          },
          {
            id: 73,
            name: "Kẹo Trái Cây Skittles 45g",
            price: 26000,
            image: "/images/products/keo-trai-cay-skittles-45g.png",
          },
          {
            id: 74,
            name: "Gum Hubba Bubba Truyền Thống 56g",
            price: 66000,
            image: "/images/products/gum-hubba-bubba-truyen-thong-56g.png",
          },
          {
            id: 75,
            name: "Gum Cool Air Bạc Hà 55.4g",
            price: 37000,
            image: "/images/products/gum-cool-air-bac-ha-554g.png",
          },
          {
            id: 76,
            name: "Thạch Dài Pati Minions Vị Trái Cây 136g",
            price: 23000,
            image:
              "/images/products/thach-dai-pati-minions-vi-trai-cay-136g.png",
          },
          {
            id: 77,
            name: "Thạch Pati Minions Hương Xoài 148g",
            price: 23000,
            image: "/images/products/thach-pati-minions-huong-xoai-148g.png",
          },
          {
            id: 78,
            name: "Kẹo Doublemint Không Đường Trái Cây 40g",
            price: 43000,
            image:
              "/images/products/keo-doublemint-khong-duong-trai-cay-40g.png",
          },
          {
            id: 79,
            name: "Kẹo Dẻo Chua Sour Patch 99g",
            price: 88000,
            image: "/images/products/keo-deo-chua-sour-patch-99g.png",
          },
          {
            id: 80,
            name: "Kẹo Dẻo Chua Sour Patch Dưa Hấu 99g",
            price: 88000,
            image: "/images/products/keo-deo-chua-sour-patch-dua-hau-99g.png",
          },
          {
            id: 81,
            name: "Kẹo Dẻo Chua Warheads Wedgies Gói 127g",
            price: 95000,
            image:
              "/images/products/keo-deo-chua-warheads-wedgies-goi-127g.png",
          },
          {
            id: 82,
            name: "Kẹo Dẻo Chua Warheads Vị Kẹo Bông Gói 85g",
            price: 95000,
            image:
              "/images/products/keo-deo-chua-warheads-vi-keo-bong-goi-85g.png",
          },
          {
            id: 83,
            name: "Kẹo Dẻo Chua Warheads Vị Đào Gói 85g",
            price: 95000,
            image: "/images/products/keo-deo-chua-warheads-vi-dao-goi-85g.png",
          },
          {
            id: 84,
            name: "Bột Sủi Sensa Cools 42g",
            price: 36000,
            image: "/images/products/bot-sui-sensa-cools-42g.png",
          },
          {
            id: 85,
            name: "Kẹo Doublemint Không Đường Vị Bạc Hà 40g",
            price: 43000,
            image:
              "/images/products/keo-doublemint-khong-duong-vi-bac-ha-40g.png",
          },
          {
            id: 86,
            name: "Kẹo Xốp Marshmallow Minions Chuối 90g",
            price: 46000,
            image: "/images/products/keo-xop-marshmallow-minions-chuoi-90g.png",
          },
          {
            id: 87,
            name: "Gum Số 5 Dưa Hấu Không Đường 32g",
            price: 370000,
            image: "/images/products/gum-so-5-dua-hau-khong-duong-32g.png",
          },
          {
            id: 88,
            name: "Kẹo C&H All Fruit 200g",
            price: 88000,
            image: "/images/products/keo-ch-all-fruit-200g.png",
          },
        ],
      },
      {
        id: "chocolate",
        name: "Chocolate",
        products: [
          {
            id: 1,
            name: "Socola Kinder Bueno Phủ Socola Trắng 39g -T9",
            price: 27000,
            image:
              "/images/products/socola-kinder-bueno-phu-socola-trang-39g-t9.png",
          },
          {
            id: 2,
            name: "Socola KitKat Chunky Vani Xoài 38g -T9",
            price: 14000,
            image: "/images/products/socola-kitkat-chunky-vani-xoai-38g-t9.png",
          },
          {
            id: 3,
            name: "Bánh Xốp Socola Deka Wafer Roll Bánh Chuối 72g -T9",
            price: 13000,
            image:
              "/images/products/banh-xop-socola-deka-wafer-roll-banh-chuoi-72g-t9.png",
          },
          {
            id: 4,
            name: "Socola Meiji Yan Yan Dâu 50g Biscuit",
            price: 26000,
            image: "/images/products/socola-meiji-yan-yan-dau-50g-biscuit.png",
          },
          {
            id: 5,
            name: "Socola Snickers Hạt Phỉ Dạng Thanh 40g",
            price: 24000,
            image:
              "/images/products/socola-snickers-hat-phi-dang-thanh-40g.png",
          },
          {
            id: 6,
            name: "Socola M&M Crispy Dạng Gói 30g",
            price: 22000,
            image: "/images/products/socola-mm-crispy-dang-goi-30g.png",
          },
          {
            id: 7,
            name: "Socola KitKat Chunky 38g",
            price: 17000,
            image: "/images/products/socola-kitkat-chunky-38g.png",
          },
          {
            id: 8,
            name: "Socola KitKat Thanh 17g",
            price: 12000,
            image: "/images/products/socola-kitkat-thanh-17g.png",
          },
          {
            id: 9,
            name: "Socola Ferrero Rocher 3 viên Chocolate",
            price: 43000,
            image:
              "/images/products/socola-ferrero-rocher-3-vien-chocolate.png",
          },
          {
            id: 10,
            name: "Bánh Quế Socola Deka 280g",
            price: 42000,
            image: "/images/products/banh-que-socola-deka-280g.png",
          },
          {
            id: 11,
            name: "Bánh Que Yan Yan Socola 50g",
            price: 30000,
            image: "/images/products/banh-que-yan-yan-socola-50g.png",
          },
          {
            id: 12,
            name: "Socola Meiji Thanh Đen 50g Chocoolate",
            price: 54000,
            image: "/images/products/socola-meiji-thanh-den-50g-chocoolate.png",
          },
          {
            id: 13,
            name: "Socola Meiji Thanh Sữa 50g Chocolate",
            price: 54000,
            image: "/images/products/socola-meiji-thanh-sua-50g-chocolate.png",
          },
          {
            id: 14,
            name: "Socola Meiji Hạnh Nhân 79g Chocolate",
            price: 84000,
            image: "/images/products/socola-meiji-hanh-nhan-79g-chocolate.png",
          },
          {
            id: 15,
            name: "Socola Ritter Sport Thanh Hạt Dẻ 100g Chocolate",
            price: 79000,
            image:
              "/images/products/socola-ritter-sport-thanh-hat-de-100g-chocolate.png",
          },
          {
            id: 16,
            name: "Socola Hershey's Hạnh Nhân 40g Chocolate",
            price: 31000,
            image:
              "/images/products/socola-hersheys-hanh-nhan-40g-chocolate.png",
          },
          {
            id: 17,
            name: "Socola Sữa Hershey's 40g Chocolate",
            price: 31000,
            image: "/images/products/socola-sua-hersheys-40g-chocolate.png",
          },
          {
            id: 18,
            name: "Socola Hershey Cookies & Creme 40g Chocolate",
            price: 31000,
            image:
              "/images/products/socola-hershey-cookies-creme-40g-chocolate.png",
          },
          {
            id: 19,
            name: "Socola Snickers 51g Chocolate",
            price: 27000,
            image: "/images/products/socola-snickers-51g-chocolate.png",
          },
          {
            id: 20,
            name: "Socola M&M Nhân Đậu Phộng 37g Chocoolate",
            price: 22000,
            image:
              "/images/products/socola-mm-nhan-dau-phong-37g-chocoolate.png",
          },
          {
            id: 21,
            name: "Socola Sữa M&M 37g Chocolate",
            price: 22000,
            image: "/images/products/socola-sua-mm-37g-chocolate.png",
          },
          {
            id: 22,
            name: "Socola Kinder Bueno 43g Chocoolate",
            price: 35000,
            image: "/images/products/socola-kinder-bueno-43g-chocoolate.png",
          },
          {
            id: 23,
            name: "Socola Kinder Joy Cho Bé Trai 20g Chocolate",
            price: 34000,
            image:
              "/images/products/socola-kinder-joy-cho-be-trai-20g-chocolate.png",
          },
          {
            id: 24,
            name: "Socola Kinder Joy Cho Bé Gái 20g Chocolate",
            price: 34000,
            image:
              "/images/products/socola-kinder-joy-cho-be-gai-20g-chocolate.png",
          },
          {
            id: 25,
            name: "Bánh Xốp Loacker Socola Đen 125g Wafer",
            price: 84000,
            image:
              "/images/products/banh-xop-loacker-socola-den-125g-wafer.png",
          },
          {
            id: 26,
            name: "Bánh Xốp Loacker Vani 125g Wafer",
            price: 84000,
            image: "/images/products/banh-xop-loacker-vani-125g-wafer.png",
          },
          {
            id: 27,
            name: "Bánh Xốp Loacker Hạt Dẻ 125g Wafer",
            price: 84000,
            image: "/images/products/banh-xop-loacker-hat-de-125g-wafer.png",
          },
          {
            id: 28,
            name: "Socola KitKat Chunky Bơ Đậu Phộng 42g",
            price: 17000,
            image: "/images/products/socola-kitkat-chunky-bo-dau-phong-42g.png",
          },
          {
            id: 29,
            name: "Socola Meiji Hạnh Nhân Matcha 79g",
            price: 84000,
            image: "/images/products/socola-meiji-hanh-nhan-matcha-79g.png",
          },
          {
            id: 30,
            name: "Socola Schogetten Hạnh Nhân Hạt Phỉ 100g",
            price: 54000,
            image:
              "/images/products/socola-schogetten-hanh-nhan-hat-phi-100g.png",
          },
          {
            id: 31,
            name: "Socola Schogetten Sữa Hạt Phỉ 100g",
            price: 54000,
            image: "/images/products/socola-schogetten-sua-hat-phi-100g.png",
          },
          {
            id: 32,
            name: "Socola Đen Schogetten 100g",
            price: 54000,
            image: "/images/products/socola-den-schogetten-100g.png",
          },
          {
            id: 33,
            name: "Socola Đen Marou Bến Tre 78% 80g",
            price: 139000,
            image: "/images/products/socola-den-marou-ben-tre-78-80g.png",
          },
          {
            id: 34,
            name: "Socola Đen Marou Đắk Lắk 70% 80g",
            price: 139000,
            image: "/images/products/socola-den-marou-dak-lak-70-80g.png",
          },
          {
            id: 35,
            name: "Socola Đen Marou Lâm Đồng 74% 80g",
            price: 139000,
            image: "/images/products/socola-den-marou-lam-dong-74-80g.png",
          },
          {
            id: 36,
            name: "Socola Ritter Sport Đậu Phộng 100g",
            price: 79000,
            image: "/images/products/socola-ritter-sport-dau-phong-100g.png",
          },
          {
            id: 37,
            name: "Bánh Brownie Socola Real Nature 40g",
            price: 20000,
            image: "/images/products/banh-brownie-socola-real-nature-40g.png",
          },
          {
            id: 38,
            name: "Bánh Brownie Socola Trà Xanh Real Nature 40g",
            price: 20000,
            image:
              "/images/products/banh-brownie-socola-tra-xanh-real-nature-40g.png",
          },
          {
            id: 39,
            name: "Socola Ritter Hạnh Nhân Muối Mật Ong 100g",
            price: 79000,
            image:
              "/images/products/socola-ritter-hanh-nhan-muoi-mat-ong-100g.png",
          },
          {
            id: 40,
            name: "Socola Ritter Bánh Quy Bơ 100g",
            price: 79000,
            image: "/images/products/socola-ritter-banh-quy-bo-100g.png",
          },
          {
            id: 41,
            name: "Socola Đen Ritter Hạnh Nhân 100g",
            price: 79000,
            image: "/images/products/socola-den-ritter-hanh-nhan-100g.png",
          },
          {
            id: 42,
            name: "Socola Đen Ritter Sport Hạt Phỉ 100g",
            price: 79000,
            image: "/images/products/socola-den-ritter-sport-hat-phi-100g.png",
          },
          {
            id: 43,
            name: "Socola Sữa Ritter Sport Hạt Phỉ 100g",
            price: 79000,
            image: "/images/products/socola-sua-ritter-sport-hat-phi-100g.png",
          },
          {
            id: 44,
            name: "Socola Sữa Ritter Sport Bắp Nướng 100g",
            price: 79000,
            image:
              "/images/products/socola-sua-ritter-sport-bap-nuong-100g.png",
          },
          {
            id: 45,
            name: "Socola Đen Ritter Sport 50% 100g",
            price: 79000,
            image: "/images/products/socola-den-ritter-sport-50-100g.png",
          },
          {
            id: 46,
            name: "Socola Ritter Sport Bạc Hà 100g",
            price: 79000,
            image: "/images/products/socola-ritter-sport-bac-ha-100g.png",
          },
          {
            id: 47,
            name: "Socola Sữa Ritter Sport Kẹo Hạnh Nhân 100g",
            price: 79000,
            image:
              "/images/products/socola-sua-ritter-sport-keo-hanh-nhan-100g.png",
          },
          {
            id: 48,
            name: "Socola Trắng Ritter Sport Hạt Phỉ 100g",
            price: 79000,
            image:
              "/images/products/socola-trang-ritter-sport-hat-phi-100g.png",
          },
          {
            id: 49,
            name: "Socola Marou Sữa 48% Ca Cao 24g",
            price: 38000,
            image: "/images/products/socola-marou-sua-48-ca-cao-24g.png",
          },
          {
            id: 50,
            name: "Socola Marou Cà Phê Sữa 24g",
            price: 38000,
            image: "/images/products/socola-marou-ca-phe-sua-24g.png",
          },
          {
            id: 51,
            name: "Socola Marou Dừa Bến Tre 55% Ca Cao 24g",
            price: 38000,
            image:
              "/images/products/socola-marou-dua-ben-tre-55-ca-cao-24g.png",
          },
          {
            id: 52,
            name: "Socola Marou Đen 65% Ca Cao 24g",
            price: 38000,
            image: "/images/products/socola-marou-den-65-ca-cao-24g.png",
          },
          {
            id: 53,
            name: "Socola Thanh Bỏng Gạo Marou 40g",
            price: 40000,
            image: "/images/products/socola-thanh-bong-gao-marou-40g.png",
          },
          {
            id: 54,
            name: "Socola Đen Marou Hạt Điều Bơ Trái Nâu 40g",
            price: 40000,
            image:
              "/images/products/socola-den-marou-hat-dieu-bo-trai-nau-40g.png",
          },
          {
            id: 55,
            name: "Bánh Quy Marou Hạt Điều Kẹp Socola 55g",
            price: 46000,
            image:
              "/images/products/banh-quy-marou-hat-dieu-kep-socola-55g.png",
          },
          {
            id: 56,
            name: "Socola Ritter Sport Thanh Sữa Hạnh Nhân 100g",
            price: 79000,
            image:
              "/images/products/socola-ritter-sport-thanh-sua-hanh-nhan-100g.png",
          },
          {
            id: 57,
            name: "Socola Ritter Đen Hạt Phỉ 100g",
            price: 79000,
            image: "/images/products/socola-ritter-den-hat-phi-100g.png",
          },
          {
            id: 58,
            name: "Socola Kinder Country 23.5g",
            price: 20000,
            image: "/images/products/socola-kinder-country-235g.png",
          },
          {
            id: 59,
            name: "Socola Kinder Khối 50g Chocolate",
            price: 26000,
            image: "/images/products/socola-kinder-khoi-50g-chocolate.png",
          },
          {
            id: 60,
            name: "Socola Ferrero Rocher Hộp 5 viên",
            price: 89000,
            image: "/images/products/socola-ferrero-rocher-hop-5-vien.png",
          },
          {
            id: 61,
            name: "Socola M&M Kẹo Đậu Phộng 100g Chocoolate",
            price: 63000,
            image:
              "/images/products/socola-mm-keo-dau-phong-100g-chocoolate.png",
          },
          {
            id: 62,
            name: "Socola M&M Sữa Gói 100g Chocolate",
            price: 63000,
            image: "/images/products/socola-mm-sua-goi-100g-chocolate.png",
          },
          {
            id: 63,
            name: "Socola Snickers Mini Gói 150g",
            price: 79000,
            image: "/images/products/socola-snickers-mini-goi-150g.png",
          },
          {
            id: 64,
            name: "Socola Meiji Macadamia Hộp 64g",
            price: 84000,
            image: "/images/products/socola-meiji-macadamia-hop-64g.png",
          },
          {
            id: 65,
            name: "Socola KitKat 2F Gói 6 Thanh 102g",
            price: 66000,
            image: "/images/products/socola-kitkat-2f-goi-6-thanh-102g.png",
          },
          {
            id: 66,
            name: "Socola Beryl's Hạt Dẻ 100g",
            price: 80000,
            image: "/images/products/socola-beryls-hat-de-100g.png",
          },
          {
            id: 67,
            name: "Socola Beryl's Hạnh Nhân 100g",
            price: 80000,
            image: "/images/products/socola-beryls-hanh-nhan-100g.png",
          },
          {
            id: 68,
            name: "Socola Beryl's Đắng Hạnh Nhân 100g",
            price: 80000,
            image: "/images/products/socola-beryls-dang-hanh-nhan-100g.png",
          },
          {
            id: 69,
            name: "Bánh Ngũ Cốc Socola Milo Gói 70g",
            price: 27000,
            image: "/images/products/banh-ngu-coc-socola-milo-goi-70g.png",
          },
          {
            id: 70,
            name: "Socola Hershey Nugget Cookies Creme 28g",
            price: 24000,
            image:
              "/images/products/socola-hershey-nugget-cookies-creme-28g.png",
          },
          {
            id: 71,
            name: "Socola Hershey Nugget Sữa Hạnh Nhân 28g",
            price: 24000,
            image:
              "/images/products/socola-hershey-nugget-sua-hanh-nhan-28g.png",
          },
          {
            id: 72,
            name: "Socola Hershey Nugget Socola Đen Hạnh Nhân 28g",
            price: 24000,
            image:
              "/images/products/socola-hershey-nugget-socola-den-hanh-nhan-28g.png",
          },
          {
            id: 73,
            name: "Socola Hershey Kisses Hạnh Nhân 36g",
            price: 31000,
            image: "/images/products/socola-hershey-kisses-hanh-nhan-36g.png",
          },
          {
            id: 74,
            name: "Socola Hershey Kisses Socola Sữa 36g",
            price: 31000,
            image: "/images/products/socola-hershey-kisses-socola-sua-36g.png",
          },
          {
            id: 75,
            name: "Socola Hershey Kisses Socola Đen 36g",
            price: 31000,
            image: "/images/products/socola-hershey-kisses-socola-den-36g.png",
          },
          {
            id: 76,
            name: "Socola Hershey Kisses Cookies N Creme 36g",
            price: 31000,
            image:
              "/images/products/socola-hershey-kisses-cookies-n-creme-36g.png",
          },
          {
            id: 77,
            name: "Socola Đen Hershey's 40g",
            price: 31000,
            image: "/images/products/socola-den-hersheys-40g.png",
          },
          {
            id: 78,
            name: "Bánh Mochi Socola Royal 120g",
            price: 69000,
            image: "/images/products/banh-mochi-socola-royal-120g.png",
          },
          {
            id: 79,
            name: "Kẹo Socola Bọc Dâu Tây Sấy 60g",
            price: 54000,
            image: "/images/products/keo-socola-boc-dau-tay-say-60g.png",
          },
          {
            id: 80,
            name: "Socola Đen Alluvia 70% 30g",
            price: 33000,
            image: "/images/products/socola-den-alluvia-70-30g.png",
          },
          {
            id: 81,
            name: "Socola Đen Alluvia Quế 30g",
            price: 33000,
            image: "/images/products/socola-den-alluvia-que-30g.png",
          },
          {
            id: 82,
            name: "Socola Đen Alluvia Cà Phê 30g",
            price: 33000,
            image: "/images/products/socola-den-alluvia-ca-phe-30g.png",
          },
          {
            id: 83,
            name: "Socola Đen Alluvia Ớt Cay 30g",
            price: 33000,
            image: "/images/products/socola-den-alluvia-ot-cay-30g.png",
          },
          {
            id: 84,
            name: "Socola Đen Alluvia Cam 30g",
            price: 33000,
            image: "/images/products/socola-den-alluvia-cam-30g.png",
          },
          {
            id: 85,
            name: "Socola Đen Alluvia Gừng 30g",
            price: 33000,
            image: "/images/products/socola-den-alluvia-gung-30g.png",
          },
          {
            id: 86,
            name: "Socola Ritter Sport Sữa Dừa 100g",
            price: 79000,
            image: "/images/products/socola-ritter-sport-sua-dua-100g.png",
          },
          {
            id: 87,
            name: "Socola Ritter Sport Hạnh Nhân Nguyên Hạt 100g",
            price: 79000,
            image:
              "/images/products/socola-ritter-sport-hanh-nhan-nguyen-hat-100g.png",
          },
          {
            id: 88,
            name: "Socola M&M's Brownie Socola 34g",
            price: 22000,
            image: "/images/products/socola-mms-brownie-socola-34g.png",
          },
          {
            id: 89,
            name: "Socola Beryl's Tiramisu Sữa Hạnh Nhân 65g",
            price: 68000,
            image:
              "/images/products/socola-beryls-tiramisu-sua-hanh-nhan-65g.png",
          },
          {
            id: 90,
            name: "Socola Beryl's Tiramisu Đắng Hạnh Nhân 65g",
            price: 68000,
            image:
              "/images/products/socola-beryls-tiramisu-dang-hanh-nhan-65g.png",
          },
          {
            id: 91,
            name: "Socola Beryl's Tiramisu Trắng Hạnh Nhân 65g",
            price: 68000,
            image:
              "/images/products/socola-beryls-tiramisu-trang-hanh-nhan-65g.png",
          },
          {
            id: 92,
            name: "Socola Ritter Sport Cacao Đậm Đà 74% 100g",
            price: 93000,
            image:
              "/images/products/socola-ritter-sport-cacao-dam-da-74-100g.png",
          },
          {
            id: 93,
            name: "Socola Ritter Sport Ca Cao Đậm Vị 81% 100g",
            price: 93000,
            image:
              "/images/products/socola-ritter-sport-ca-cao-dam-vi-81-100g.png",
          },
          {
            id: 94,
            name: "Socola Ritter Sport Ca Cao Thượng Hạng 61% 100g",
            price: 93000,
            image:
              "/images/products/socola-ritter-sport-ca-cao-thuong-hang-61-100g.png",
          },
          {
            id: 95,
            name: "Socola Ritter Sport Ca Cao Dịu Nhẹ 55% 100g",
            price: 93000,
            image:
              "/images/products/socola-ritter-sport-ca-cao-diu-nhe-55-100g.png",
          },
          {
            id: 96,
            name: "Socola Đen Marou Bà Rịa 76% 80g",
            price: 139000,
            image: "/images/products/socola-den-marou-ba-ria-76-80g.png",
          },
          {
            id: 97,
            name: "Socola Đen Marou Đồng Nai 72% 80g",
            price: 139000,
            image: "/images/products/socola-den-marou-dong-nai-72-80g.png",
          },
          {
            id: 98,
            name: "Socola Đen Marou Tiền Giang 70% 80g",
            price: 139000,
            image: "/images/products/socola-den-marou-tien-giang-70-80g.png",
          },
          {
            id: 99,
            name: "Socola Beryl's Hạt Dẻ 60g",
            price: 63000,
            image: "/images/products/socola-beryls-hat-de-60g.png",
          },
          {
            id: 100,
            name: "Socola Beryl's Hạnh Nhân 60g",
            price: 63000,
            image: "/images/products/socola-beryls-hanh-nhan-60g.png",
          },
          {
            id: 101,
            name: "Socola Beryl's Đắng Hạnh Nhân 60g",
            price: 63000,
            image: "/images/products/socola-beryls-dang-hanh-nhan-60g.png",
          },
          {
            id: 102,
            name: "Socola Beryl's Nho Khô 60g",
            price: 63000,
            image: "/images/products/socola-beryls-nho-kho-60g.png",
          },
          {
            id: 103,
            name: "Socola KitKat 4F Gói 35g",
            price: 20000,
            image: "/images/products/socola-kitkat-4f-goi-35g.png",
          },
          {
            id: 104,
            name: "Socola Thanh Bỏng Gạo Lúa Mạch Marou 40g",
            price: 40000,
            image:
              "/images/products/socola-thanh-bong-gao-lua-mach-marou-40g.png",
          },
          {
            id: 105,
            name: "Socola Marou Ớt Cay Tắc Cay 80g",
            price: 150000,
            image: "/images/products/socola-marou-ot-cay-tac-cay-80g.png",
          },
          {
            id: 106,
            name: "Socola Beryl's Dragees Hỗn Hợp 280g",
            price: 199000,
            image: "/images/products/socola-beryls-dragees-hon-hop-280g.png",
          },
          {
            id: 107,
            name: "Socola Beryl's Dragees Đắng Hạnh Nhân 280g",
            price: 199000,
            image:
              "/images/products/socola-beryls-dragees-dang-hanh-nhan-280g.png",
          },
          {
            id: 108,
            name: "Socola Beryl's Dragees Sữa Hạnh Nhân 280g",
            price: 199000,
            image:
              "/images/products/socola-beryls-dragees-sua-hanh-nhan-280g.png",
          },
          {
            id: 109,
            name: "Socola Dừa Deka Crepes Choco Coconut 40g",
            price: 17000,
            image:
              "/images/products/socola-dua-deka-crepes-choco-coconut-40g.png",
          },
          {
            id: 110,
            name: "Socola Ritter Sport Nhân Hạt Phỉ Bọc Hạnh Nhân 100g",
            price: 79000,
            image:
              "/images/products/socola-ritter-sport-nhan-hat-phi-boc-hanh-nhan-100g.png",
          },
          {
            id: 111,
            name: "Socola Beryl's Tiramisu Sữa Hạnh Nhân 100g",
            price: 80000,
            image:
              "/images/products/socola-beryls-tiramisu-sua-hanh-nhan-100g.png",
          },
          {
            id: 112,
            name: "Socola Beryl's Tiramisu Đắng Hạnh Nhân 100g",
            price: 80000,
            image:
              "/images/products/socola-beryls-tiramisu-dang-hanh-nhan-100g.png",
          },
          {
            id: 113,
            name: "Socola Đen Ritter Sport Hạnh Nhân Muối Mật Ong 100g",
            price: 79000,
            image:
              "/images/products/socola-den-ritter-sport-hanh-nhan-muoi-mat-ong-100g.png",
          },
          {
            id: 114,
            name: "Socola Đen Baron Cacao Nibs Gói 100g",
            price: 43000,
            image: "/images/products/socola-den-baron-cacao-nibs-goi-100g.png",
          },
          {
            id: 115,
            name: "Socola Đen Baron 70% Gói 100g",
            price: 43000,
            image: "/images/products/socola-den-baron-70-goi-100g.png",
          },
          {
            id: 116,
            name: "Socola Đen Baron Hương Cam Gói 100g",
            price: 43000,
            image: "/images/products/socola-den-baron-huong-cam-goi-100g.png",
          },
          {
            id: 117,
            name: "Socola Đen Baron Muối Biển Gói 100g",
            price: 43000,
            image: "/images/products/socola-den-baron-muoi-bien-goi-100g.png",
          },
        ],
      },
      {
        id: "thit-kho",
        name: "Thịt khô",
        products: [
          {
            id: 1,
            name: "Cá Chỉ Vàng An Phát Rim Mè Hũ 100g",
            price: 49000,
            image: "/images/products/ca-chi-vang-an-phat-rim-me-hu-100g.png",
          },
          {
            id: 2,
            name: "Cá Chỉ Vàng An Phát Lá Chanh Hũ 100g",
            price: 49000,
            image: "/images/products/ca-chi-vang-an-phat-la-chanh-hu-100g.png",
          },
          {
            id: 3,
            name: "Mực Tẩm Bento Cực Cay 18g",
            price: 32000,
            image: "/images/products/muc-tam-bento-cuc-cay-18g.png",
          },
          {
            id: 4,
            name: "Khô Mực Xé Sợi Pichi 50g",
            price: 55000,
            image: "/images/products/kho-muc-xe-soi-pichi-50g.png",
          },
          {
            id: 5,
            name: "Mực Tẩm Bento Xốt Gochujang 18g",
            price: 32000,
            image: "/images/products/muc-tam-bento-xot-gochujang-18g.png",
          },
          {
            id: 6,
            name: "Khô Bò Posi Cay 40g Jerky",
            price: 45000,
            image: "/images/products/kho-bo-posi-cay-40g-jerky.png",
          },
          {
            id: 7,
            name: "Khô Bò Pichi Vị Cay Truyền Thống 50g Jerky",
            price: 92000,
            image:
              "/images/products/kho-bo-pichi-vi-cay-truyen-thong-50g-jerky.png",
          },
          {
            id: 8,
            name: "Bò Nướng Miếng Ohayo Vị Tiêu Xanh 25g",
            price: 30000,
            image: "/images/products/bo-nuong-mieng-ohayo-vi-tieu-xanh-25g.png",
          },
          {
            id: 9,
            name: "Khô Gà Xé Pichi Vị Lá Chanh 50g Jerky",
            price: 30000,
            image: "/images/products/kho-ga-xe-pichi-vi-la-chanh-50g-jerky.png",
          },
          {
            id: 10,
            name: "Khô Gà Posi Bơ Tỏi 40g Jerky",
            price: 30000,
            image: "/images/products/kho-ga-posi-bo-toi-40g-jerky.png",
          },
          {
            id: 11,
            name: "Khô Heo Posi Cháy Tỏi 50g",
            price: 39000,
            image: "/images/products/kho-heo-posi-chay-toi-50g.png",
          },
          {
            id: 12,
            name: "Khô Trâu Quang Hiển Vị Sả 20g Jerky",
            price: 28000,
            image: "/images/products/kho-trau-quang-hien-vi-sa-20g-jerky.png",
          },
          {
            id: 13,
            name: "Da Heo Lucky Star Mắm Hành 25g",
            price: 23000,
            image: "/images/products/da-heo-lucky-star-mam-hanh-25g.png",
          },
          {
            id: 14,
            name: "Da Heo Lắc Sốt ABI 70g",
            price: 48000,
            image: "/images/products/da-heo-lac-sot-abi-70g.png",
          },
          {
            id: 15,
            name: "Mực Tẩm Bento Thái 18g",
            price: 32000,
            image: "/images/products/muc-tam-bento-thai-18g.png",
          },
          {
            id: 16,
            name: "Lá Sách Bò Chay Weilong Chua Cay 50g",
            price: 28000,
            image: "/images/products/la-sach-bo-chay-weilong-chua-cay-50g.png",
          },
          {
            id: 17,
            name: "Tai Heo Cay 30g",
            price: 19000,
            image: "/images/products/tai-heo-cay-30g.png",
          },
          {
            id: 18,
            name: "Chân Gà Rút Xương Ohayo CayTê 60g",
            price: 34000,
            image: "/images/products/chan-ga-rut-xuong-ohayo-cayte-60g.png",
          },
          {
            id: 19,
            name: "Cánh Vịt Timi Food Tê Cay 38g",
            price: 15000,
            image: "/images/products/canh-vit-timi-food-te-cay-38g.png",
          },
          {
            id: 20,
            name: "Chân Gà Rút Xương Cung Đình Heyyo26g",
            price: 16000,
            image: "/images/products/chan-ga-rut-xuong-cung-dinh-heyyo26g.png",
          },
          {
            id: 21,
            name: "Chân Gà Ớt Xanh Heyyo 80g",
            price: 29000,
            image: "/images/products/chan-ga-ot-xanh-heyyo-80g.png",
          },
          {
            id: 22,
            name: "Chân Vịt Timi Food Tê Cay 38g",
            price: 15000,
            image: "/images/products/chan-vit-timi-food-te-cay-38g.png",
          },
          {
            id: 23,
            name: "Chân Gà Bách Thảo Heyyo 70g",
            price: 20000,
            image: "/images/products/chan-ga-bach-thao-heyyo-70g.png",
          },
          {
            id: 24,
            name: "Chân Gà Ớt Xanh Heyyo 40g",
            price: 16000,
            image: "/images/products/chan-ga-ot-xanh-heyyo-40g.png",
          },
          {
            id: 25,
            name: "Thanh Cua Chiên Giòn Phi Long 30g",
            price: 29000,
            image: "/images/products/thanh-cua-chien-gion-phi-long-30g.png",
          },
          {
            id: 26,
            name: "Tempura Đầu Tôm Phi Long Vị Cay 25g",
            price: 29000,
            image: "/images/products/tempura-dau-tom-phi-long-vi-cay-25g.png",
          },
          {
            id: 27,
            name: "Tóp Mỡ Cuộn Cháy Tỏi Dosi 30g",
            price: 28000,
            image: "/images/products/top-mo-cuon-chay-toi-dosi-30g.png",
          },
          {
            id: 28,
            name: "Chân Gà Rút Xương Ohayo Dưa Muối Cay 75g",
            price: 34000,
            image:
              "/images/products/chan-ga-rut-xuong-ohayo-dua-muoi-cay-75g.png",
          },
          {
            id: 29,
            name: "Mực Tẩm Bento Cay Ngọt 18g",
            price: 32000,
            image: "/images/products/muc-tam-bento-cay-ngot-18g.png",
          },
          {
            id: 30,
            name: "Mực Tẩm Bento Cay 18g",
            price: 32000,
            image: "/images/products/muc-tam-bento-cay-18g.png",
          },
          {
            id: 31,
            name: "Khô Bò Jack Link's Vị Tự Nhiên 25g Jerky",
            price: 74000,
            image:
              "/images/products/kho-bo-jack-links-vi-tu-nhien-25g-jerky.png",
          },
          {
            id: 32,
            name: "Cá Bò Nướng Đồng Xu Seafood 30g",
            price: 44000,
            image: "/images/products/ca-bo-nuong-dong-xu-seafood-30g.png",
          },
          {
            id: 33,
            name: "Tai Heo Chay Ohayo Vị Cay 18g",
            price: 11000,
            image: "/images/products/tai-heo-chay-ohayo-vi-cay-18g.png",
          },
          {
            id: 34,
            name: "Tai Heo Chay Ohayo Vị Chanh Vàng 18g",
            price: 11000,
            image: "/images/products/tai-heo-chay-ohayo-vi-chanh-vang-18g.png",
          },
          {
            id: 35,
            name: "Sách Bò Chay Ohayo Vị Cay 18g",
            price: 11000,
            image: "/images/products/sach-bo-chay-ohayo-vi-cay-18g.png",
          },
          {
            id: 36,
            name: "Tôm Chay Oki Oki Vị Tỏi 20g",
            price: 8000,
            image: "/images/products/tom-chay-oki-oki-vi-toi-20g.png",
          },
          {
            id: 37,
            name: "Mực Chay Oki Oki Xốt Chua Ngọt 18g",
            price: 8000,
            image: "/images/products/muc-chay-oki-oki-xot-chua-ngot-18g.png",
          },
          {
            id: 38,
            name: "Khô Bò Jack Link's Vị Cay Ngọt 25g Jerky",
            price: 74000,
            image:
              "/images/products/kho-bo-jack-links-vi-cay-ngot-25g-jerky.png",
          },
          {
            id: 39,
            name: "Ghẹ Sữa Rim Viet Essence 35g",
            price: 49000,
            image: "/images/products/ghe-sua-rim-viet-essence-35g.png",
          },
          {
            id: 40,
            name: "Khô Bò Jack Link's Vị Tiêu 25g Jerky",
            price: 74000,
            image: "/images/products/kho-bo-jack-links-vi-tieu-25g-jerky.png",
          },
          {
            id: 41,
            name: "Khô Bò Jack Link's Vị Teriyaki 25g Jerky",
            price: 74000,
            image:
              "/images/products/kho-bo-jack-links-vi-teriyaki-25g-jerky.png",
          },
          {
            id: 42,
            name: "Cá Mai Tê Tái Lá Chanh Viet Essence 35g",
            price: 49000,
            image:
              "/images/products/ca-mai-te-tai-la-chanh-viet-essence-35g.png",
          },
          {
            id: 43,
            name: "Khô Bò Quang Hiển Vị Nguyên Bản 20g Jerky",
            price: 26000,
            image:
              "/images/products/kho-bo-quang-hien-vi-nguyen-ban-20g-jerky.png",
          },
          {
            id: 44,
            name: "Cá Đù Giòn Rôm Rốp Viet Essence 35g",
            price: 49000,
            image: "/images/products/ca-du-gion-rom-rop-viet-essence-35g.png",
          },
          {
            id: 45,
            name: "Mực Tẩm Bento Cay Dịu 18g",
            price: 32000,
            image: "/images/products/muc-tam-bento-cay-diu-18g.png",
          },
          {
            id: 46,
            name: "Khô Bò Xông Khói TAM FOOD Vị Cay 40g Jerky",
            price: 65000,
            image:
              "/images/products/kho-bo-xong-khoi-tam-food-vi-cay-40g-jerky.png",
          },
          {
            id: 47,
            name: "Khô Trâu Quang Hiển Vị Tiêu 20g Jerky",
            price: 28000,
            image: "/images/products/kho-trau-quang-hien-vi-tieu-20g-jerky.png",
          },
          {
            id: 48,
            name: "Mực Nướng Cán Hải Nam 60g",
            price: 119000,
            image: "/images/products/muc-nuong-can-hai-nam-60g.png",
          },
          {
            id: 49,
            name: "Đậu Hủ Cá Yohot Sốt Thảo Mộc 25g",
            price: 9000,
            image: "/images/products/dau-hu-ca-yohot-sot-thao-moc-25g.png",
          },
          {
            id: 50,
            name: "Thanh Surimi Xé Yohot Vị Cay 14g",
            price: 9000,
            image: "/images/products/thanh-surimi-xe-yohot-vi-cay-14g.png",
          },
          {
            id: 51,
            name: "Khô Gà Chà Chà Sấy Lá Chanh 100g Jerky",
            price: 65000,
            image:
              "/images/products/kho-ga-cha-cha-say-la-chanh-100g-jerky.png",
          },
          {
            id: 52,
            name: "Khô Bò TAM FOOD Vị Tiêu Xanh 40g Jerky",
            price: 65000,
            image:
              "/images/products/kho-bo-tam-food-vi-tieu-xanh-40g-jerky.png",
          },
          {
            id: 53,
            name: "Lá Sách Bò Chay Weilong Cay Tứ Xuyên 50g",
            price: 28000,
            image:
              "/images/products/la-sach-bo-chay-weilong-cay-tu-xuyen-50g.png",
          },
          {
            id: 54,
            name: "Khô Gà Lá Chanh G-kitchen 22g",
            price: 15000,
            image: "/images/products/kho-ga-la-chanh-g-kitchen-22g.png",
          },
          {
            id: 55,
            name: "Thanh Heo Nướng G-kitchen Cay Mala 30g",
            price: 34000,
            image:
              "/images/products/thanh-heo-nuong-g-kitchen-cay-mala-30g.png",
          },
          {
            id: 56,
            name: "Khô Heo Cháy Tỏi Kobee 50g",
            price: 30000,
            image: "/images/products/kho-heo-chay-toi-kobee-50g.png",
          },
          {
            id: 57,
            name: "Thanh Cua Reecen Vị Cay 28g",
            price: 13000,
            image: "/images/products/thanh-cua-reecen-vi-cay-28g.png",
          },
          {
            id: 58,
            name: "Snack Konjac Ủa Mực Hả Mala Cay Nhẹ 17g",
            price: 9000,
            image:
              "/images/products/snack-konjac-ua-muc-ha-mala-cay-nhe-17g.png",
          },
          {
            id: 59,
            name: "Snack Konjac Ủa Mực Hả Mala Cay Nồng 17g",
            price: 9000,
            image:
              "/images/products/snack-konjac-ua-muc-ha-mala-cay-nong-17g.png",
          },
          {
            id: 60,
            name: "Lá Sách Bò Chay WeilongCayTứXuyên50g/80g",
            price: 28000,
            image:
              "/images/products/la-sach-bo-chay-weilongcaytuxuyen50g80g.png",
          },
          {
            id: 61,
            name: "Chân Gà Chef Biggy Vị BBQ 30g",
            price: 14000,
            image: "/images/products/chan-ga-chef-biggy-vi-bbq-30g.png",
          },
          {
            id: 62,
            name: "Khô Bò Dosi Vị Cay Tứ Xuyên Gói 25g",
            price: 45000,
            image: "/images/products/kho-bo-dosi-vi-cay-tu-xuyen-goi-25g.png",
          },
        ],
      },
      {
        id: "hat-trai-cay-say",
        name: "Các loại hạt và Trái cây sấy",
        products: [
          {
            id: 1,
            name: "Hạt Hỗn Hợp Tong Garden 40g Nuts",
            price: 15000,
            image: "/images/products/hat-hon-hop-tong-garden-40g-nuts.png",
          },
          {
            id: 2,
            name: "Hạt Điều Tong Garden Vị Nấm Truffle 80g -T9",
            price: 88000,
            image:
              "/images/products/hat-dieu-tong-garden-vi-nam-truffle-80g-t9.png",
          },
          {
            id: 3,
            name: "Trái Cây Cuộn Tư Bông 150g -T9",
            price: 81000,
            image: "/images/products/trai-cay-cuon-tu-bong-150g-t9.png",
          },
          {
            id: 4,
            name: "Mãng Cầu Cuộn Tư Bông 120g -T9",
            price: 81000,
            image: "/images/products/mang-cau-cuon-tu-bong-120g-t9.png",
          },
          {
            id: 5,
            name: "Xoài Cuộn Tư Bông 120g -T9",
            price: 81000,
            image: "/images/products/xoai-cuon-tu-bong-120g-t9.png",
          },
          {
            id: 6,
            name: "Khóm Cuộn Tư Bông 120g -T9",
            price: 71000,
            image: "/images/products/khom-cuon-tu-bong-120g-t9.png",
          },
          {
            id: 7,
            name: "Gum Lotte Xylitol Fresh Mint 130.5g -T9",
            price: 68000,
            image: "/images/products/gum-lotte-xylitol-fresh-mint-1305g-t9.png",
          },
          {
            id: 8,
            name: "Hạt Dẻ Rang Tách Vỏ Tong Garden 120g -T9",
            price: 45000,
            image:
              "/images/products/hat-de-rang-tach-vo-tong-garden-120g-t9.png",
          },
          {
            id: 9,
            name: "Hạnh Nhân Tom's Mật Ong 40g -T9",
            price: 44000,
            image: "/images/products/hanh-nhan-toms-mat-ong-40g-t9.png",
          },
          {
            id: 10,
            name: "Hỗn Hợp Hạt TongGarden Vị Wasabi 75g -T9",
            price: 43000,
            image:
              "/images/products/hon-hop-hat-tonggarden-vi-wasabi-75g-t9.png",
          },
          {
            id: 11,
            name: "Hỗn Hợp Hạt TongGarden Trứng Muối 75g -T9",
            price: 43000,
            image:
              "/images/products/hon-hop-hat-tonggarden-trung-muoi-75g-t9.png",
          },
          {
            id: 12,
            name: "ĐậuPhộng Và BánhGạo Nhật Tong Garden 60g -T9",
            price: 43000,
            image:
              "/images/products/dauphong-va-banhgao-nhat-tong-garden-60g-t9.png",
          },
          {
            id: 13,
            name: "Hạt Hạnh Nhân TongGarden Rang Muối 35g -T9",
            price: 39000,
            image:
              "/images/products/hat-hanh-nhan-tonggarden-rang-muoi-35g-t9.png",
          },
          {
            id: 14,
            name: "Hạt Điều Muối Tong Garden 40g Nuts",
            price: 37000,
            image: "/images/products/hat-dieu-muoi-tong-garden-40g-nuts.png",
          },
          {
            id: 15,
            name: "Đậu Hà Lan Wasabi TongGarden 45g",
            price: 15000,
            image: "/images/products/dau-ha-lan-wasabi-tonggarden-45g.png",
          },
          {
            id: 16,
            name: "Đậu Hà Lan Bao Mực TongGarden 45g",
            price: 15000,
            image: "/images/products/dau-ha-lan-bao-muc-tonggarden-45g.png",
          },
          {
            id: 17,
            name: "Đậu Phộng Muối Tong Garden 38g Nuts",
            price: 15000,
            image: "/images/products/dau-phong-muoi-tong-garden-38g-nuts.png",
          },
          {
            id: 18,
            name: "Hỗn Hợp Hạt TongGarden Trứng Muối 75g",
            price: 47000,
            image: "/images/products/hon-hop-hat-tonggarden-trung-muoi-75g.png",
          },
          {
            id: 19,
            name: "Hỗn Hợp Hạt TongGarden Vị Wasabi 75g",
            price: 47000,
            image: "/images/products/hon-hop-hat-tonggarden-vi-wasabi-75g.png",
          },
          {
            id: 20,
            name: "ĐậuPhộng Và BánhGạo Nhật Tong Garden 60g",
            price: 47000,
            image:
              "/images/products/dauphong-va-banhgao-nhat-tong-garden-60g.png",
          },
          {
            id: 21,
            name: "Hạt Điều Tong Garden Vị Nấm Truffle 80g",
            price: 98000,
            image:
              "/images/products/hat-dieu-tong-garden-vi-nam-truffle-80g.png",
          },
          {
            id: 22,
            name: "Hạt Dẻ Muối Tong Garden 30g Nuts",
            price: 38000,
            image: "/images/products/hat-de-muoi-tong-garden-30g-nuts.png",
          },
          {
            id: 23,
            name: "Hạt Dẻ Rang Tách Vỏ Tong Garden 120g Nuts",
            price: 55000,
            image:
              "/images/products/hat-de-rang-tach-vo-tong-garden-120g-nuts.png",
          },
          {
            id: 24,
            name: "Hạt Điều Muối Tuấn Đạt 150g Nuts",
            price: 93000,
            image: "/images/products/hat-dieu-muoi-tuan-dat-150g-nuts.png",
          },
          {
            id: 25,
            name: "Hạt Hướng Dương Chacheer Nguyên Vị 130g Nuts",
            price: 34000,
            image:
              "/images/products/hat-huong-duong-chacheer-nguyen-vi-130g-nuts.png",
          },
          {
            id: 26,
            name: "Hạt Hướng Dương Vị Dừa 130g",
            price: 34000,
            image: "/images/products/hat-huong-duong-vi-dua-130g.png",
          },
          {
            id: 27,
            name: "Hạt Hướng Dương Chacheer Ngũ Vị Hương 130g Nuts",
            price: 34000,
            image:
              "/images/products/hat-huong-duong-chacheer-ngu-vi-huong-130g-nuts.png",
          },
          {
            id: 28,
            name: "Đậu Phộng Da Cá Tân Tân 265g Nuts",
            price: 57000,
            image: "/images/products/dau-phong-da-ca-tan-tan-265g-nuts.png",
          },
          {
            id: 29,
            name: "Đậu Phộng Tỏi Ớt Tân Tân 260g Nuts",
            price: 82000,
            image: "/images/products/dau-phong-toi-ot-tan-tan-260g-nuts.png",
          },
          {
            id: 30,
            name: "Đậu Phộng Muối Có Vỏ Tân Tân 350g Nuts",
            price: 74000,
            image:
              "/images/products/dau-phong-muoi-co-vo-tan-tan-350g-nuts.png",
          },
          {
            id: 31,
            name: "Đậu Phộng Oishi Mực Cay 80g Nuts",
            price: 13000,
            image: "/images/products/dau-phong-oishi-muc-cay-80g-nuts.png",
          },
          {
            id: 32,
            name: "Đậu Phộng Oishi Cốt Dừa 80g Nuts",
            price: 13000,
            image: "/images/products/dau-phong-oishi-cot-dua-80g-nuts.png",
          },
          {
            id: 33,
            name: "Mít Sấy Vinamit 100g",
            price: 54000,
            image: "/images/products/mit-say-vinamit-100g.png",
          },
          {
            id: 34,
            name: "Gừng Nướng Mật Ong Nam Xanh 80g",
            price: 86000,
            image: "/images/products/gung-nuong-mat-ong-nam-xanh-80g.png",
          },
          {
            id: 35,
            name: "Chuối Sấy Vinamit 100g",
            price: 29000,
            image: "/images/products/chuoi-say-vinamit-100g.png",
          },
          {
            id: 36,
            name: "Xoài Dẻo Vinamit 100g",
            price: 69000,
            image: "/images/products/xoai-deo-vinamit-100g.png",
          },
          {
            id: 37,
            name: "Xoài Sấy Tong Garden Vị Muối Ớt Gói 30g",
            price: 32000,
            image:
              "/images/products/xoai-say-tong-garden-vi-muoi-ot-goi-30g.png",
          },
          {
            id: 38,
            name: "Ổi Sấy Dẻo Tong Garden Vị Muối Ớt Gói35g",
            price: 32000,
            image:
              "/images/products/oi-say-deo-tong-garden-vi-muoi-ot-goi35g.png",
          },
          {
            id: 39,
            name: "Trái Cây Sấy Vinamit 100g",
            price: 43000,
            image: "/images/products/trai-cay-say-vinamit-100g.png",
          },
          {
            id: 40,
            name: "Đậu Phộng Poca Rắc Rắc Mực Cay 70g Nuts",
            price: 13000,
            image:
              "/images/products/dau-phong-poca-rac-rac-muc-cay-70g-nuts.png",
          },
          {
            id: 41,
            name: "Khoai Lang Tím Only NATURE 100g",
            price: 55000,
            image: "/images/products/khoai-lang-tim-only-nature-100g.png",
          },
          {
            id: 42,
            name: "Dừa Sấy Giòn Only NATURE 100g",
            price: 62000,
            image: "/images/products/dua-say-gion-only-nature-100g.png",
          },
          {
            id: 43,
            name: "Hạt Hướng Dương Chacheer Nấm Truffle 100g Nuts",
            price: 34000,
            image:
              "/images/products/hat-huong-duong-chacheer-nam-truffle-100g-nuts.png",
          },
          {
            id: 44,
            name: "Oliu Xanh Tách Hạt Frutto D'lTalia 30g",
            price: 39000,
            image: "/images/products/oliu-xanh-tach-hat-frutto-dltalia-30g.png",
          },
          {
            id: 45,
            name: "Oliu Tách Hạt Hỗn Hợp Frutto D'lTalia30g",
            price: 39000,
            image:
              "/images/products/oliu-tach-hat-hon-hop-frutto-dltalia30g.png",
          },
          {
            id: 46,
            name: "Chanh Dây Sấy Dẻo Monsieur Luxe 40g",
            price: 25000,
            image: "/images/products/chanh-day-say-deo-monsieur-luxe-40g.png",
          },
          {
            id: 47,
            name: "Hạnh Nhân Phô Mai Monsieur Luxe 30g",
            price: 29000,
            image: "/images/products/hanh-nhan-pho-mai-monsieur-luxe-30g.png",
          },
          {
            id: 48,
            name: "Thanh Hạt Mailey Trái Cây 32g Protein Bar",
            price: 19000,
            image:
              "/images/products/thanh-hat-mailey-trai-cay-32g-protein-bar.png",
          },
          {
            id: 49,
            name: "Kẹo Sữa Milkita Vị Hỗn Hợp 24g",
            price: 17000,
            image: "/images/products/keo-sua-milkita-vi-hon-hop-24g.png",
          },
          {
            id: 50,
            name: "Kẹo xốp Haribo Chamallows Pink&White 70g",
            price: 35000,
            image:
              "/images/products/keo-xop-haribo-chamallows-pinkwhite-70g.png",
          },
          {
            id: 51,
            name: "Kẹo xốp Haribo Chamallows Choco-soft 62g",
            price: 35000,
            image:
              "/images/products/keo-xop-haribo-chamallows-choco-soft-62g.png",
          },
          {
            id: 52,
            name: "Hạnh Nhân Tom's Mật Ong 40g",
            price: 51000,
            image: "/images/products/hanh-nhan-toms-mat-ong-40g.png",
          },
          {
            id: 53,
            name: "Hạnh Nhân Blue Diamond Muối 30g",
            price: 38000,
            image: "/images/products/hanh-nhan-blue-diamond-muoi-30g.png",
          },
          {
            id: 54,
            name: "Hỗn Hợp Hạt TCây TongGarden Vị Berry 28g",
            price: 31000,
            image:
              "/images/products/hon-hop-hat-tcay-tonggarden-vi-berry-28g.png",
          },
          {
            id: 55,
            name: "Kẹo Hi-Chew Dâu 57g",
            price: 20000,
            image: "/images/products/keo-hi-chew-dau-57g.png",
          },
          {
            id: 56,
            name: "Gum Lotte Xylitol Fresh Mint 130.5g",
            price: 74000,
            image: "/images/products/gum-lotte-xylitol-fresh-mint-1305g.png",
          },
          {
            id: 57,
            name: "Đậu Và Hạt Tổng Hợp Chacheer 26g Nuts",
            price: 8000,
            image: "/images/products/dau-va-hat-tong-hop-chacheer-26g-nuts.png",
          },
          {
            id: 58,
            name: "Hạt Dẻ Tuấn Đạt Hộp 110g Nuts",
            price: 85000,
            image: "/images/products/hat-de-tuan-dat-hop-110g-nuts.png",
          },
          {
            id: 59,
            name: "Trái Cây Cuộn Tư Bông 150g",
            price: 88000,
            image: "/images/products/trai-cay-cuon-tu-bong-150g.png",
          },
          {
            id: 60,
            name: "Mãng Cầu Cuộn Tư Bông 120g",
            price: 88000,
            image: "/images/products/mang-cau-cuon-tu-bong-120g.png",
          },
          {
            id: 61,
            name: "Xoài Cuộn Tư Bông 120g",
            price: 88000,
            image: "/images/products/xoai-cuon-tu-bong-120g.png",
          },
          {
            id: 62,
            name: "Khóm Cuộn Tư Bông 120g",
            price: 78000,
            image: "/images/products/khom-cuon-tu-bong-120g.png",
          },
          {
            id: 63,
            name: "Me Cuộn Tư Bông 120g",
            price: 58000,
            image: "/images/products/me-cuon-tu-bong-120g.png",
          },
          {
            id: 64,
            name: "Xoài Sấy Dẻo Tuấn Đạt 100g",
            price: 53000,
            image: "/images/products/xoai-say-deo-tuan-dat-100g.png",
          },
          {
            id: 65,
            name: "Đậu Và Trái Cây Tổng Hợp Chacheer 26g",
            price: 8000,
            image: "/images/products/dau-va-trai-cay-tong-hop-chacheer-26g.png",
          },
          {
            id: 66,
            name: "Nấm Sấy Mềm Ichoose Cay Ngọt 25g",
            price: 35000,
            image: "/images/products/nam-say-mem-ichoose-cay-ngot-25g.png",
          },
          {
            id: 67,
            name: "Xoài Sấy Dẻo Tuấn Đạt Hoa Hồng 195g",
            price: 90000,
            image: "/images/products/xoai-say-deo-tuan-dat-hoa-hong-195g.png",
          },
          {
            id: 68,
            name: "Hạt Hướng Dương Chacheer Sữa Muối 100g",
            price: 34000,
            image:
              "/images/products/hat-huong-duong-chacheer-sua-muoi-100g.png",
          },
          {
            id: 69,
            name: "Đậu Phộng Pinattsu Vị Hải Sản 80g/75g",
            price: 13000,
            image: "/images/products/dau-phong-pinattsu-vi-hai-san-80g75g.png",
          },
          {
            id: 70,
            name: "Đào Vàng Sấy Dẻo 45g",
            price: 18000,
            image: "/images/products/dao-vang-say-deo-45g.png",
          },
          {
            id: 71,
            name: "Hạt Hạnh Nhân TongGarden Rang Muối 35g",
            price: 43000,
            image:
              "/images/products/hat-hanh-nhan-tonggarden-rang-muoi-35g.png",
          },
          {
            id: 72,
            name: "Nấm Sấy Mềm Ichoose Sriracha Tỏi Rang25g",
            price: 35000,
            image:
              "/images/products/nam-say-mem-ichoose-sriracha-toi-rang25g.png",
          },
          {
            id: 73,
            name: "Nấm Sấy Mềm Ichoose Thịt Hun Khói 25g",
            price: 35000,
            image: "/images/products/nam-say-mem-ichoose-thit-hun-khoi-25g.png",
          },
          {
            id: 74,
            name: "Hạt Hướng Dương Logeco Bạch Tuyết 130g",
            price: 34000,
            image:
              "/images/products/hat-huong-duong-logeco-bach-tuyet-130g.png",
          },
        ],
      },
      {
        id: "banh-trang-tron",
        name: "Bánh tráng trộn",
        products: [
          {
            id: 1,
            name: "Bánh Tráng Khô Gà Cô 3 140g",
            price: 42000,
            image: "/images/products/banh-trang-kho-ga-co-3-140g.png",
          },
          {
            id: 2,
            name: "Bánh Tráng Trộn Mamasia Tôm Sate Hộp120g",
            price: 31000,
            image:
              "/images/products/banh-trang-tron-mamasia-tom-sate-hop120g.png",
          },
          {
            id: 3,
            name: "Bánh tráng ớt TN 100g",
            price: 12000,
            image: "/images/products/banh-trang-ot-tn-100g.png",
          },
          {
            id: 4,
            name: "Bánh Tráng Phô Mai ABI 80g",
            price: 38000,
            image: "/images/products/banh-trang-pho-mai-abi-80g.png",
          },
          {
            id: 5,
            name: "Bánh Tráng Bơ ABI Gói 100g",
            price: 42000,
            image: "/images/products/banh-trang-bo-abi-goi-100g.png",
          },
          {
            id: 6,
            name: "Bánh Tráng Sate Cay ABI 80g",
            price: 28000,
            image: "/images/products/banh-trang-sate-cay-abi-80g.png",
          },
          {
            id: 7,
            name: "Bánh Tráng Fadely Tỏi Siêu Cay 50g",
            price: 20000,
            image: "/images/products/banh-trang-fadely-toi-sieu-cay-50g.png",
          },
          {
            id: 8,
            name: "Bánh Tráng Fadely Rong Biển Cháy Tỏi 50g",
            price: 20000,
            image:
              "/images/products/banh-trang-fadely-rong-bien-chay-toi-50g.png",
          },
          {
            id: 9,
            name: "Bánh Tráng Fadely Chấm Xốt Sa Tế Cay 72g",
            price: 20000,
            image:
              "/images/products/banh-trang-fadely-cham-xot-sa-te-cay-72g.png",
          },
          {
            id: 10,
            name: "Bánh Tráng VỊ Mắm Ruốc 65g",
            price: 23000,
            image: "/images/products/banh-trang-vi-mam-ruoc-65g.png",
          },
          {
            id: 11,
            name: "Bánh Tráng VỊ Khô Bò 55g",
            price: 30000,
            image: "/images/products/banh-trang-vi-kho-bo-55g.png",
          },
          {
            id: 12,
            name: "Snack Chả Giò 7-Eleven Phô Mai Cay Và Hành25g",
            price: 15000,
            image:
              "/images/products/snack-cha-gio-7-eleven-pho-mai-cay-va-hanh25g.png",
          },
          {
            id: 13,
            name: "Bánh Tráng Trộn 7-Eleven Sa Tế Tỏi 50g",
            price: 20000,
            image:
              "/images/products/banh-trang-tron-7-eleven-sa-te-toi-50g.png",
          },
          {
            id: 14,
            name: "Bánh Tráng Trộn 7-Eleven Muối Tỏi 50g",
            price: 20000,
            image: "/images/products/banh-trang-tron-7-eleven-muoi-toi-50g.png",
          },
          {
            id: 15,
            name: "Bánh Tráng Trộn 7-Eleven Tôm Hành 50g",
            price: 20000,
            image: "/images/products/banh-trang-tron-7-eleven-tom-hanh-50g.png",
          },
        ],
      },
    ],
  },
  {
    id: "rau-cu-trai-cay-tuoi",
    name: "Rau Củ & Trái Cây Tươi",
    categories: [
      {
        id: "trai-cay-tuoi",
        name: "Trái cây tươi",
        products: [
          {
            id: 1,
            name: "Dừa Tươi Túi 3 trái Coco Meko",
            price: 73000,
            image: "/images/products/dua-tuoi-tui-3-trai-coco-meko.png",
          },
          {
            id: 2,
            name: "Dừa Xiêm Tiện Lợi Coco Meko 1 Trái",
            price: 31000,
            image: "/images/products/dua-xiem-tien-loi-coco-meko-1-trai.png",
          },
          {
            id: 3,
            name: "Nước Dừa tiện lợi CDK size L coconut",
            price: 31000,
            image: "/images/products/nuoc-dua-tien-loi-cdk-size-l-coconut.png",
          },
          {
            id: 4,
            name: "Nước Dừa Xiêm Tiện Lợi TrueCoCo coconut",
            price: 31000,
            image:
              "/images/products/nuoc-dua-xiem-tien-loi-truecoco-coconut.png",
          },
          {
            id: 5,
            name: "Dừa Tươi Túi 3 trái CDK",
            price: 73000,
            image: "/images/products/dua-tuoi-tui-3-trai-cdk.png",
          },
          {
            id: 6,
            name: "Cam Navel Trái 250g",
            price: 44000,
            image: "/images/products/cam-navel-trai-250g.png",
          },
          {
            id: 7,
            name: "Bưởi Da Xanh Tách Múi 7-Eleven",
            price: 39000,
            image: "/images/products/buoi-da-xanh-tach-mui-7-eleven.png",
          },
          {
            id: 8,
            name: "Mít Tươi Cắt Sẵn 7-Eleven",
            price: 32000,
            image: "/images/products/mit-tuoi-cat-san-7-eleven.png",
          },
          {
            id: 9,
            name: "Xoài Tươi Cắt Sẵn 7-Eleven",
            price: 24000,
            image: "/images/products/xoai-tuoi-cat-san-7-eleven.png",
          },
          {
            id: 10,
            name: "Đu Đủ Cắt Sẵn 7-Eleven",
            price: 24000,
            image: "/images/products/du-du-cat-san-7-eleven.png",
          },
          {
            id: 11,
            name: "Khóm Cắt Sẵn 7-Eleven",
            price: 24000,
            image: "/images/products/khom-cat-san-7-eleven.png",
          },
          {
            id: 12,
            name: "Ổi Ruột Trắng Cắt Sẵn 7-Eleven",
            price: 21000,
            image: "/images/products/oi-ruot-trang-cat-san-7-eleven.png",
          },
          {
            id: 13,
            name: "Táo Gala Mỹ Apple",
            price: 22000,
            image: "/images/products/tao-gala-my-apple.png",
          },
          {
            id: 14,
            name: "Trái Cây Tony Fruit Táo-Nho-Dưa Lưới 250g",
            price: 51000,
            image:
              "/images/products/trai-cay-tony-fruit-tao-nho-dua-luoi-250g.png",
          },
          {
            id: 15,
            name: "Trái Cây Tony Fruit Dưa Lưới- NhoXanh 250g",
            price: 51000,
            image:
              "/images/products/trai-cay-tony-fruit-dua-luoi-nhoxanh-250g.png",
          },
          {
            id: 16,
            name: "Trái Cây Tony Fruit Táo-Nho 250g",
            price: 51000,
            image: "/images/products/trai-cay-tony-fruit-tao-nho-250g.png",
          },
          {
            id: 17,
            name: "Táo Rockit NewZealand Ống 4 Trái",
            price: 162000,
            image: "/images/products/tao-rockit-newzealand-ong-4-trai.png",
          },
          {
            id: 18,
            name: "Nho Xanh Không Hạt H&H 500g",
            price: 22000,
            image: "/images/products/nho-xanh-khong-hat-hh-500g.png",
          },
          {
            id: 19,
            name: "Bưởi Hỗn Hợp TNT 350g",
            price: 59000,
            image: "/images/products/buoi-hon-hop-tnt-350g.png",
          },
          {
            id: 20,
            name: "Dưa Lưới TNT 350g",
            price: 59000,
            image: "/images/products/dua-luoi-tnt-350g.png",
          },
          {
            id: 21,
            name: "Lê Hàn Quốc H&H 1 trái",
            price: 79000,
            image: "/images/products/le-han-quoc-hh-1-trai.png",
          },
          {
            id: 22,
            name: "Nho Mix Xanh Đen Không Hạt Hộp 250g",
            price: 120000,
            image: "/images/products/nho-mix-xanh-den-khong-hat-hop-250g.png",
          },
          {
            id: 23,
            name: "Trái Cây Hỗn Hợp Bưởi Ổi Xoài TNT 350g",
            price: 44000,
            image:
              "/images/products/trai-cay-hon-hop-buoi-oi-xoai-tnt-350g.png",
          },
          {
            id: 24,
            name: "Trái Cây Tony Fruit Dưa Lưới-Táo 250g",
            price: 51000,
            image: "/images/products/trai-cay-tony-fruit-dua-luoi-tao-250g.png",
          },
          {
            id: 25,
            name: "Dưa Vàng Hàn Quốc 1 Trái",
            price: 88000,
            image: "/images/products/dua-vang-han-quoc-1-trai.png",
          },
          {
            id: 26,
            name: "Táo Juliet Organic Tony Túi 1Kg",
            price: 159000,
            image: "/images/products/tao-juliet-organic-tony-tui-1kg.png",
          },
          {
            id: 27,
            name: "Dâu Tây Hàn Quốc H&H 250g",
            price: 180000,
            image: "/images/products/dau-tay-han-quoc-hh-250g.png",
          },
          {
            id: 28,
            name: "Nho Hand&Hand Mix Hộp 250g",
            price: 101000,
            image: "/images/products/nho-handhand-mix-hop-250g.png",
          },
          {
            id: 29,
            name: "Táo Xanh Hand&Hand 1 Trái",
            price: 31000,
            image: "/images/products/tao-xanh-handhand-1-trai.png",
          },
          {
            id: 30,
            name: "Táo Gala Hand&Hand Hộp 500g",
            price: 60000,
            image: "/images/products/tao-gala-handhand-hop-500g.png",
          },
          {
            id: 31,
            name: "Quýt Hand&Hand 1 Trái",
            price: 29000,
            image: "/images/products/quyt-handhand-1-trai.png",
          },
          {
            id: 32,
            name: "Táo Envy Hand&Hand 1 Trái",
            price: 40000,
            image: "/images/products/tao-envy-handhand-1-trai.png",
          },
          {
            id: 33,
            name: "Táo Ambrosia Hand&Hand 1 Trái",
            price: 31000,
            image: "/images/products/tao-ambrosia-handhand-1-trai.png",
          },
          {
            id: 34,
            name: "Chuối Bolaven 1 Trái",
            price: 10000,
            image: "/images/products/chuoi-bolaven-1-trai.png",
          },
          {
            id: 35,
            name: "Chanh Không Hạt 4 Trái",
            price: 12000,
            image: "/images/products/chanh-khong-hat-4-trai.png",
          },
          {
            id: 36,
            name: "Táo Rockit New Zealand Ống 2 Trái",
            price: 89000,
            image: "/images/products/tao-rockit-new-zealand-ong-2-trai.png",
          },
          {
            id: 37,
            name: "Nho Mix Đen Đỏ Hộp 250g",
            price: 106000,
            image: "/images/products/nho-mix-den-do-hop-250g.png",
          },
          {
            id: 38,
            name: "Đào Dẹt Hộp 1 Trái",
            price: 42000,
            image: "/images/products/dao-det-hop-1-trai.png",
          },
          {
            id: 39,
            name: "Cherry Hộp 200g",
            price: 195000,
            image: "/images/products/cherry-hop-200g.png",
          },
        ],
      },
      {
        id: "rau-la-cu-nam",
        name: "Rau lá, củ, nấm",
        products: [
          {
            id: 1,
            name: "Rong Nho Tasami Xốt Mè Rang 35g",
            price: 120000,
            image: "/images/products/rong-nho-tasami-xot-me-rang-35g.png",
          },
          {
            id: 2,
            name: "Kim Chi CJ Cải Thảo Cắt Lát 500g",
            price: 57000,
            image: "/images/products/kim-chi-cj-cai-thao-cat-lat-500g.png",
          },
          {
            id: 3,
            name: "Kim Chi CJ Cải Thảo Cắt Lát 100g",
            price: 16000,
            image: "/images/products/kim-chi-cj-cai-thao-cat-lat-100g.png",
          },
          {
            id: 4,
            name: "Kim Chi CJ Cải Thảo Cắt Lát Ít Cay 100g",
            price: 16000,
            image:
              "/images/products/kim-chi-cj-cai-thao-cat-lat-it-cay-100g.png",
          },
          {
            id: 5,
            name: "Dưa Chuột Muối Chua Cay Ohayo 20g",
            price: 11000,
            image: "/images/products/dua-chuot-muoi-chua-cay-ohayo-20g.png",
          },
        ],
      },
    ],
  },
  {
    id: "san-pham-tu-sua",
    name: "Sản Phẩm Từ Sữa",
    categories: [
      {
        id: "sua-tiet-trung",
        name: "Sữa tiệt trùng",
        products: [
          {
            id: 1,
            name: "Sữa Yến Mạch Oatside Nguyên Vị 180ml Oat Milk",
            price: 15000,
            image: "/images/products/sua-yen-mach-oatside-nguyen-vi-180ml.png",
          },
          {
            id: 10,
            name: "Sữa Nước Ensure Vani 237ml",
            price: 61000,
            image: "/images/products/sua-nuoc-ensure-vani-237ml.png",
          },
          {
            id: 11,
            name: "Milo Sữa Lúa Mạch 180ml",
            price: 12000,
            image: "/images/products/milo-sua-lua-mach-180ml.png",
          },
          {
            id: 12,
            name: "Sữa Lúa Mạch Milo Ít Đường 180ml",
            price: 12000,
            image: "/images/products/sua-lua-mach-milo-it-duong-180ml.png",
          },
          {
            id: 13,
            name: "Sữa Tươi Tiệt Trùng TH Nguyên Chất 1L",
            price: 52000,
            image: "/images/products/sua-tuoi-tiet-trung-th-nguyen-chat-1l.png",
          },
          {
            id: 14,
            name: "Sữa TH True Milk Ít Đường 1L",
            price: 52000,
            image: "/images/products/sua-th-true-milk-it-duong-1l.png",
          },
          {
            id: 15,
            name: "Sữa Vinamilk Không Đường 1L Milk",
            price: 54000,
            image: "/images/products/sua-vinamilk-khong-duong-1l.png",
          },
          {
            id: 16,
            name: "Sữa Vinamilk Có Đường 1L Milk",
            price: 54000,
            image: "/images/products/sua-vinamilk-co-duong-1l.png",
          },
          {
            id: 17,
            name: "Lốc 6 Sữa Binggrae Chuối 200ml",
            price: 132000,
            image: "/images/products/loc-6-sua-binggrae-chuoi-200ml.png",
          },
          {
            id: 18,
            name: "Lốc 6 Sữa Binggrae Dưa Lưới 200ml",
            price: 132000,
            image: "/images/products/loc-6-sua-binggrae-dua-luoi-200ml.png",
          },
          {
            id: 19,
            name: "Lốc 4 STTT Vinamilk Không Đường Hộp 180ml",
            price: 52000,
            image: "/images/products/loc-4-sttt-vinamilk-khong-duong-180ml.png",
          },
          {
            id: 20,
            name: "Lốc 4 STTT Vinamilk Có Đường Hộp 180ml",
            price: 52000,
            image: "/images/products/loc-4-sttt-vinamilk-co-duong-180ml.png",
          },
          {
            id: 21,
            name: "Lốc 4 STTT Vinamilk Socola Hộp 180ml",
            price: 52000,
            image: "/images/products/loc-4-sttt-vinamilk-socola-180ml.png",
          },
          {
            id: 22,
            name: "STTT Vinamilk Không Đường Hộp 180ml",
            price: 13000,
            image: "/images/products/sttt-vinamilk-khong-duong-180ml.png",
          },
          {
            id: 23,
            name: "STTT Vinamilk Có Đường Hộp 180ml",
            price: 13000,
            image: "/images/products/sttt-vinamilk-co-duong-180ml.png",
          },
          {
            id: 24,
            name: "STTT Vinamilk Socola Hộp 180ml",
            price: 13000,
            image: "/images/products/sttt-vinamilk-socola-180ml.png",
          },
          {
            id: 25,
            name: "Sữa Vinamilk Super Nut Hộp 180ml",
            price: 17000,
            image: "/images/products/sua-vinamilk-super-nut-180ml.png",
          },
          {
            id: 26,
            name: "Sữa Đậu Nành Vinamilk Hạnh Nhân 180ml Almond Soy Milk",
            price: 12000,
            image: "/images/products/sua-dau-nanh-vinamilk-hanh-nhan-180ml.png",
          },
          {
            id: 27,
            name: "Sữa TH True Milk Nguyên Chất 180ml",
            price: 14000,
            image: "/images/products/sua-th-true-milk-nguyen-chat-180ml.png",
          },
          {
            id: 28,
            name: "Sữa TH True Milk Ít Đường 180ml",
            price: 14000,
            image: "/images/products/sua-th-true-milk-it-duong-180ml.png",
          },
          {
            id: 29,
            name: "Sữa TH True Milk Có Đường 180ml",
            price: 14000,
            image: "/images/products/sua-th-true-milk-co-duong-180ml.png",
          },
          {
            id: 30,
            name: "Sữa Yến Mạch TH 180ml Oat Milk",
            price: 16000,
            image: "/images/products/sua-yen-mach-th-180ml.png",
          },
          {
            id: 31,
            name: "Sữa Binggrae Khoai Môn 200ml",
            price: 22000,
            image: "/images/products/sua-binggrae-khoai-mon-200ml.png",
          },
          {
            id: 32,
            name: "Sữa Binggrae Chuối 200ml",
            price: 22000,
            image: "/images/products/sua-binggrae-chuoi-200ml.png",
          },
          {
            id: 33,
            name: "Sữa Binggrae Dưa Lưới 200ml",
            price: 22000,
            image: "/images/products/sua-binggrae-dua-luoi-200ml.png",
          },
          {
            id: 34,
            name: "Sữa Binggrae Dâu Ít Đường 200ml",
            price: 22000,
            image: "/images/products/sua-binggrae-dau-it-duong-200ml.png",
          },
          {
            id: 35,
            name: "Sữa Vinamilk Không Đường Túi 220ml Milk",
            price: 13000,
            image: "/images/products/sua-vinamilk-khong-duong-tui-220ml.png",
          },
          {
            id: 36,
            name: "Sữa Vinamilk Có Đường Bịch 220ml Milk",
            price: 13000,
            image: "/images/products/sua-vinamilk-co-duong-bich-220ml.png",
          },
          {
            id: 37,
            name: "Sữa Đậu Nành Vinamilk Đậu Đỏ 180ml",
            price: 12000,
            image: "/images/products/sua-dau-nanh-vinamilk-dau-do-180ml.png",
          },
          {
            id: 38,
            name: "Sữa Lúa Mạch Milo A2 180ml",
            price: 12000,
            image: "/images/products/sua-lua-mach-milo-a2-180ml.png",
          },
          {
            id: 39,
            name: "Sữa Tươi Tiệt Trùng CGHL Ít Đường 180ml",
            price: 13000,
            image:
              "/images/products/sua-tuoi-tiet-trung-cghl-it-duong-180ml.png",
          },
          {
            id: 40,
            name: "Sữa Tươi Tiệt Trùng TH Chuối 180ml",
            price: 14000,
            image: "/images/products/sua-tuoi-tiet-trung-th-chuoi-180ml.png",
          },
          {
            id: 41,
            name: "Sữa Yến Mạch Oatside Đậm Đà 180ml Oat Milk",
            price: 15000,
            image: "/images/products/sua-yen-mach-oatside-dam-da-180ml.png",
          },
          {
            id: 42,
            name: "Sữa Yến Mạch Oatside Vị Socola 180ml Oat Milk",
            price: 15000,
            image: "/images/products/sua-yen-mach-oatside-vi-socola-180ml.png",
          },
          {
            id: 43,
            name: "Sữa Nước Ensure Gold 237ml",
            price: 88000,
            image: "/images/products/sua-nuoc-ensure-gold-237ml.png",
          },
          {
            id: 44,
            name: "Sữa Đậu Nành Fami Hộp 200ml",
            price: 8000,
            image: "/images/products/sua-dau-nanh-fami-200ml.png",
          },
          {
            id: 45,
            name: "Sữa Tươi Tách Béo Vinamilk DưaLưới 180ml",
            price: 14000,
            image:
              "/images/products/sua-tuoi-tach-beo-vinamilk-dua-luoi-180ml.png",
          },
          {
            id: 46,
            name: "Sữa Gấu Nestle Lon 140ml",
            price: 17000,
            image: "/images/products/sua-gau-nestle-lon-140ml.png",
          },
          {
            id: 47,
            name: "Sữa Tươi Tiệt Trùng Vinamilk Bắp180ml",
            price: 14000,
            image:
              "/images/products/sua-tuoi-tiet-trung-vinamilk-bap-180ml.png",
          },
          {
            id: 48,
            name: "Sữa Lúa Mạch Ovaltine Vị Sô Cô La 180ml",
            price: 13000,
            image:
              "/images/products/sua-lua-mach-ovaltine-vi-so-co-la-180ml.png",
          },
          {
            id: 49,
            name: "STTT Vinamilk Giảm Béo Chuối 180ml",
            price: 13000,
            image: "/images/products/sttt-vinamilk-giam-beo-chuoi-180ml.png",
          },
          {
            id: 50,
            name: "Sữa Yến Mạch Oatbedient Socola 175g Oat Milk",
            price: 153000,
            image: "/images/products/sua-yen-mach-oatbedient-socola-175g.png",
          },
          {
            id: 51,
            name: "Sữa Yến Mạch Oatbedient Nguyên Bản 140g Oat Milk",
            price: 153000,
            image:
              "/images/products/sua-yen-mach-oatbedient-nguyen-ban-140g.png",
          },
          {
            id: 52,
            name: "Thức Uống SCL Hershey's BánhQuy Kem235ml",
            price: 37000,
            image:
              "/images/products/thuc-uong-scl-hersheys-banh-quy-kem-235ml.png",
          },
          {
            id: 53,
            name: "Thức Uống Sô Cô La Hershey's 235ml",
            price: 37000,
            image: "/images/products/thuc-uong-so-co-la-hersheys-235ml.png",
          },
          {
            id: 54,
            name: "Sữa Tiệt Trùng Anlene KhôngLactose 180ml",
            price: 25000,
            image:
              "/images/products/sua-tiet-trung-anlene-khong-lactose-180ml.png",
          },
          {
            id: 55,
            name: "STTT Anlene KhôngLactose Hạnh Nhân180ml",
            price: 25000,
            image:
              "/images/products/sttt-anlene-khong-lactose-hanh-nhan-180ml.png",
          },
          {
            id: 56,
            name: "Sữa Lúa Mạch Nestle Milo Pro 220ml",
            price: 21000,
            image: "/images/products/sua-lua-mach-nestle-milo-pro-220ml.png",
          },
          {
            id: 57,
            name: "Sữa Lúa Mạch Nestle Milo Cà Phê 220ml",
            price: 21000,
            image: "/images/products/sua-lua-mach-nestle-milo-ca-phe-220ml.png",
          },
          {
            id: 58,
            name: "Sữa Cao Đạm Ít Béo VNM Green Farm 250ml",
            price: 36000,
            image:
              "/images/products/sua-cao-dam-it-beo-vnm-green-farm-250ml.png",
          },
          {
            id: 59,
            name: "Sữa Bắp Non LOF Canxi hộp 180ml",
            price: 12000,
            image: "/images/products/sua-bap-non-lof-canxi-180ml.png",
          },
          {
            id: 60,
            name: "Sữa Metis Lúa Mạch Thạch 180ml",
            price: 13000,
            image: "/images/products/sua-metis-lua-mach-thach-180ml.png",
          },
          {
            id: 61,
            name: "Sữa Trái Cây Metis Hương Nho 180ml",
            price: 11000,
            image: "/images/products/sua-trai-cay-metis-huong-nho-180ml.png",
          },
          {
            id: 62,
            name: "Sữa Tươi Công Thức Varna Life Cao Đạm Chai 200ml",
            price: 59000,
            image:
              "/images/products/sua-tuoi-cong-thuc-varna-life-cao-dam-200ml.png",
          },
        ],
      },
      {
        id: "sua-thanh-trung",
        name: "Sữa thanh trùng",
        products: [
          {
            id: 1,
            name: "Đà Lạt Milk Sữa Thanh Trùng 950ml",
            price: 55000,
            image: "/images/products/da-lat-milk-sua-thanh-trung-950ml.png",
          },
          {
            id: 2,
            name: "Sữa Đậu Nành Ichiban Chai 350ml -T9",
            price: 23000,
            image: "/images/products/sua-dau-nanh-ichiban-chai-350ml-t9.png",
          },
          {
            id: 3,
            name: "Sữa Đậu Nành Ichiban ĐậuĐỏ ĐậuXanh 350ml -T9",
            price: 21000,
            image:
              "/images/products/sua-dau-nanh-ichiban-daudo-dauxanh-350ml-t9.png",
          },
          {
            id: 4,
            name: "Sữa Thanh Trùng DalatMilk 450ml",
            price: 29000,
            image: "/images/products/sua-thanh-trung-dalatmilk-450ml.png",
          },
          {
            id: 5,
            name: "Sữa Bắp Thanh Trùng Ladallas Chai 300ml",
            price: 18000,
            image:
              "/images/products/sua-bap-thanh-trung-ladallas-chai-300ml.png",
          },
          {
            id: 6,
            name: "Sữa Đậu Nành Ichiban Chai 350ml",
            price: 26000,
            image: "/images/products/sua-dau-nanh-ichiban-chai-350ml.png",
          },
          {
            id: 7,
            name: "Sữa Thanh Trùng Meiji Chuối 200ml",
            price: 25000,
            image: "/images/products/sua-thanh-trung-meiji-chuoi-200ml.png",
          },
          {
            id: 8,
            name: "Sữa Thanh Trùng Meiji Dưa Lưới 200ml",
            price: 25000,
            image: "/images/products/sua-thanh-trung-meiji-dua-luoi-200ml.png",
          },
          {
            id: 9,
            name: "Sữa Thanh Trùng Meiji Không Lactoza200ml",
            price: 35000,
            image:
              "/images/products/sua-thanh-trung-meiji-khong-lactoza-200ml.png",
          },
          {
            id: 10,
            name: "Sữa Thanh Trùng Dalat Milk Ít Đường180ml",
            price: 17000,
            image:
              "/images/products/sua-thanh-trung-dalat-milk-it-duong-180ml.png",
          },
          {
            id: 11,
            name: "Sữa hanh Trùng Nguyên Chất Mộc Châu 450ml",
            price: 45000,
            image:
              "/images/products/sua-thanh-trung-nguyen-chat-moc-chau-450ml.png",
          },
          {
            id: 12,
            name: "Sữa Thanh Trùng Lothamilk Có Đường 473ml",
            price: 34000,
            image:
              "/images/products/sua-thanh-trung-lothamilk-co-duong-473ml.png",
          },
          {
            id: 13,
            name: "Sữa Thanh Trùng Vinamillk Green Farm Không Đường Hộp 450ml",
            price: 43000,
            image:
              "/images/products/sua-thanh-trung-vinamillk-green-farm-khong-duong-hop-450ml.png",
          },
          {
            id: 14,
            name: "Sữa Thanh Trùng Vinamillk Green Farm Rất Ít Đường Hộp 450ml",
            price: 43000,
            image:
              "/images/products/sua-thanh-trung-vinamillk-green-farm-rat-it-duong-hop-450ml.png",
          },
        ],
      },
      {
        id: "sua-chua",
        name: "Sữa chua",
        products: [
          {
            id: 1,
            name: "Lốc 5 Sữa Uống Lên Men Yakult Ít Đường 65ml",
            price: 31000,
            image:
              "/images/products/loc-5-sua-uong-len-men-yakult-it-duong-65ml.png",
          },
          {
            id: 2,
            name: "Sữa Chua Chobani Flip Brownie Socola140g -T9",
            price: 71000,
            image:
              "/images/products/sua-chua-chobani-flip-brownie-socola140g-t9.png",
          },
          {
            id: 3,
            name: "Sữa Chua Hy Lạp Chobani Tự Nhiên 160g -T9",
            price: 63000,
            image:
              "/images/products/sua-chua-hy-lap-chobani-tu-nhien-160g-t9.png",
          },
          {
            id: 4,
            name: "Sữa Chua Hy Lạp Chobani 0% Vị Dâu 160g -T9",
            price: 63000,
            image:
              "/images/products/sua-chua-hy-lap-chobani-0-vi-dau-160g-t9.png",
          },
          {
            id: 5,
            name: "Sữa Chua Hy Lạp Chobani Việt Quất 160g -T9",
            price: 63000,
            image:
              "/images/products/sua-chua-hy-lap-chobani-viet-quat-160g-t9.png",
          },
          {
            id: 6,
            name: "Sữa Chua Hy Lạp Chobani Chanh Vàng 160g -T9",
            price: 63000,
            image:
              "/images/products/sua-chua-hy-lap-chobani-chanh-vang-160g-t9.png",
          },
          {
            id: 7,
            name: "Sữa Uống Lên Men Betagen Dâu 300ml -T9",
            price: 23000,
            image: "/images/products/sua-uong-len-men-betagen-dau-300ml-t9.png",
          },
          {
            id: 8,
            name: "Sữa Uống Lên Men Betagen Cam 300ml -T9",
            price: 23000,
            image: "/images/products/sua-uong-len-men-betagen-cam-300ml-t9.png",
          },
          {
            id: 9,
            name: "Sữa Uống Lên Men Betagen Dứa 300ml -T9",
            price: 23000,
            image: "/images/products/sua-uong-len-men-betagen-dua-300ml-t9.png",
          },
          {
            id: 10,
            name: "Sữa Uống Lên Men Betagen Ít Đường 300ml -T9",
            price: 23000,
            image:
              "/images/products/sua-uong-len-men-betagen-it-duong-300ml-t9.png",
          },
          {
            id: 11,
            name: "Sữa Chua Ăn TH Nếp Cẩm 110g -T9",
            price: 12000,
            image: "/images/products/sua-chua-an-th-nep-cam-110g-t9.png",
          },
          {
            id: 12,
            name: "Lốc 4 Sữa Chua Vinamilk Thạch Dừa Lá Dứa 100g",
            price: 48000,
            image:
              "/images/products/loc-4-sua-chua-vinamilk-thach-dua-la-dua-100g.png",
          },
          {
            id: 13,
            name: "Lốc 4 Sữa Chua Không Đường Vinamilk 100g",
            price: 44000,
            image:
              "/images/products/loc-4-sua-chua-khong-duong-vinamilk-100g.png",
          },
          {
            id: 14,
            name: "Lốc 4 Sữa Chua Nha Đam Vinamilk 100g",
            price: 48000,
            image: "/images/products/loc-4-sua-chua-nha-dam-vinamilk-100g.png",
          },
          {
            id: 15,
            name: "Lốc 4 Sữa Chua Có Đường Vinamilk 100g",
            price: 44000,
            image: "/images/products/loc-4-sua-chua-co-duong-vinamilk-100g.png",
          },
          {
            id: 16,
            name: "Lốc 5 Sữa Uống Lên Men Yakult Chai 65ml",
            price: 31000,
            image:
              "/images/products/loc-5-sua-uong-len-men-yakult-chai-65ml.png",
          },
          {
            id: 17,
            name: "Sữa Chua Nếp Cẩm Sài Gòn Lốc 4 hộp Yogurt",
            price: 60000,
            image:
              "/images/products/sua-chua-nep-cam-sai-gon-loc-4-hop-yogurt.png",
          },
          {
            id: 18,
            name: "Lốc 4 Sữa Chua Uống Probi Có Đường 130ml",
            price: 52000,
            image:
              "/images/products/loc-4-sua-chua-uong-probi-co-duong-130ml.png",
          },
          {
            id: 19,
            name: "Sữa Chua Uống TH Có Đường 85ml",
            price: 10000,
            image: "/images/products/sua-chua-uong-th-co-duong-85ml.png",
          },
          {
            id: 20,
            name: "Betagen Tự Nhiên Sữa Chua Uống 140ml Yogurt",
            price: 13000,
            image:
              "/images/products/betagen-tu-nhien-sua-chua-uong-140ml-yogurt.png",
          },
          {
            id: 21,
            name: "Betagen Cam Sữa Chua Uống 140ml Yogurt",
            price: 13000,
            image:
              "/images/products/betagen-cam-sua-chua-uong-140ml-yogurt.png",
          },
          {
            id: 22,
            name: "Betagen Không Béo Sữa Chua Uống 300ml Yogurt",
            price: 25000,
            image:
              "/images/products/betagen-khong-beo-sua-chua-uong-300ml-yogurt.png",
          },
          {
            id: 23,
            name: "Betagen Cam Sữa Chua Uống 300ml Yogurt",
            price: 25000,
            image:
              "/images/products/betagen-cam-sua-chua-uong-300ml-yogurt.png",
          },
          {
            id: 24,
            name: "Betagen Tự Nhiên Sữa Chua Uống 400ml Yogurt",
            price: 32000,
            image:
              "/images/products/betagen-tu-nhien-sua-chua-uong-400ml-yogurt.png",
          },
          {
            id: 25,
            name: "Sữa Chua Nếp Cẩm TH true YOGURT",
            price: 16000,
            image: "/images/products/sua-chua-nep-cam-th-true-yogurt.png",
          },
          {
            id: 26,
            name: "Vinamilk Sữa Chua Không Đường 100g Yougurt",
            price: 11000,
            image:
              "/images/products/vinamilk-sua-chua-khong-duong-100g-yougurt.png",
          },
          {
            id: 27,
            name: "Sữa Chua Có Đường Vinamilk 100g Yogurt",
            price: 11000,
            image:
              "/images/products/sua-chua-co-duong-vinamilk-100g-yogurt.png",
          },
          {
            id: 28,
            name: "Vinamilk Sữa Chua Nha Đam 100g Yogurt",
            price: 12000,
            image: "/images/products/vinamilk-sua-chua-nha-dam-100g-yogurt.png",
          },
          {
            id: 29,
            name: "TH Sữa Chua Có Đường 100g",
            price: 12000,
            image: "/images/products/th-sua-chua-co-duong-100g.png",
          },
          {
            id: 30,
            name: "Sữa Chua TH Táo Sơ Ri Yogurt",
            price: 13000,
            image: "/images/products/sua-chua-th-tao-so-ri-yogurt.png",
          },
          {
            id: 31,
            name: "TH Sữa Chua Việt Quất 100g",
            price: 13000,
            image: "/images/products/th-sua-chua-viet-quat-100g.png",
          },
          {
            id: 32,
            name: "Yomost Sữa Chua Uống Lựu 170ml",
            price: 11000,
            image: "/images/products/yomost-sua-chua-uong-luu-170ml.png",
          },
          {
            id: 33,
            name: "Yomost Sữa Chua Uống Bạc Hà Việt Quất 170ml",
            price: 11000,
            image:
              "/images/products/yomost-sua-chua-uong-bac-ha-viet-quat-170ml.png",
          },
          {
            id: 34,
            name: "Yomost Sữa Chua Uống Cam 170ml",
            price: 11000,
            image: "/images/products/yomost-sua-chua-uong-cam-170ml.png",
          },
          {
            id: 35,
            name: "Sữa Chua Uống Dalat Milk Có Đường 200ml",
            price: 20000,
            image:
              "/images/products/sua-chua-uong-dalat-milk-co-duong-200ml.png",
          },
          {
            id: 36,
            name: "Sữa Chua Uống Yomost Thạch Trái Cây180ml",
            price: 13000,
            image:
              "/images/products/sua-chua-uong-yomost-thach-trai-cay180ml.png",
          },
          {
            id: 37,
            name: "Sữa Chua Ăn TH Cốm Nếp Giòn 110g",
            price: 19000,
            image: "/images/products/sua-chua-an-th-com-nep-gion-110g.png",
          },
          {
            id: 38,
            name: "Sữa Chua Ăn VNM Việt Quất Ít Đường 1 hũ 100g",
            price: 12000,
            image:
              "/images/products/sua-chua-an-vnm-viet-quat-it-duong-1-hu-100g.png",
          },
          {
            id: 39,
            name: "Sữa Chua Ăn Vinamilk Lựu Đỏ Ít Đường100g",
            price: 12000,
            image:
              "/images/products/sua-chua-an-vinamilk-luu-do-it-duong100g.png",
          },
          {
            id: 40,
            name: "Sữa Chua Uống Green Farm Ít Đường 200ml",
            price: 26000,
            image:
              "/images/products/sua-chua-uong-green-farm-it-duong-200ml.png",
          },
          {
            id: 41,
            name: "Sữa Chua Uống TH Ít Đường 85ml",
            price: 10000,
            image: "/images/products/sua-chua-uong-th-it-duong-85ml.png",
          },
          {
            id: 42,
            name: "Sữa Chua Uống Probi Ít Đường 400ml",
            price: 39000,
            image: "/images/products/sua-chua-uong-probi-it-duong-400ml.png",
          },
          {
            id: 43,
            name: "Sữa Chua Uống Morinaga Ít ĐườngDâu 190ml",
            price: 17000,
            image:
              "/images/products/sua-chua-uong-morinaga-it-duongdau-190ml.png",
          },
          {
            id: 44,
            name: "Sữa Chua Uống Morinaga Ít Đường 190ml",
            price: 17000,
            image: "/images/products/sua-chua-uong-morinaga-it-duong-190ml.png",
          },
          {
            id: 45,
            name: "Sữa Chua Uống Probi Ít Đường Đào 130ml",
            price: 13000,
            image:
              "/images/products/sua-chua-uong-probi-it-duong-dao-130ml.png",
          },
          {
            id: 46,
            name: "Sữa Uống Lên Men Betagen Dứa 300ml",
            price: 25000,
            image: "/images/products/sua-uong-len-men-betagen-dua-300ml.png",
          },
          {
            id: 47,
            name: "Sữa Uống Lên Men Betagen Dâu 300ml",
            price: 25000,
            image: "/images/products/sua-uong-len-men-betagen-dau-300ml.png",
          },
          {
            id: 48,
            name: "Sữa Chua Ăn Green Farm Ít Đường 100g",
            price: 11000,
            image: "/images/products/sua-chua-an-green-farm-it-duong-100g.png",
          },
          {
            id: 49,
            name: "Sữa Chua Uống Probi Ít Đường 130ml",
            price: 13000,
            image: "/images/products/sua-chua-uong-probi-it-duong-130ml.png",
          },
          {
            id: 50,
            name: "Sữa Chua Ăn Green Farm Mật Ong Ngũ Cốc 123g",
            price: 39000,
            image:
              "/images/products/sua-chua-an-green-farm-mat-ong-ngu-coc-123g.png",
          },
          {
            id: 51,
            name: "Sữa Chua Uống Green Farm Cam Hoa Bưởi 200ml",
            price: 33000,
            image:
              "/images/products/sua-chua-uong-green-farm-cam-hoa-buoi-200ml.png",
          },
          {
            id: 52,
            name: "Sữa Chua Ăn Green Farm Cà Phê Ủ Lạnh 121g",
            price: 39000,
            image:
              "/images/products/sua-chua-an-green-farm-ca-phe-u-lanh-121g.png",
          },
          {
            id: 53,
            name: "Sữa Chua Meiji Quả Mọng 135g",
            price: 28000,
            image: "/images/products/sua-chua-meiji-qua-mong-135g.png",
          },
          {
            id: 54,
            name: "Sữa Chua Meiji Thạch Dừa Vị Đào 135g",
            price: 28000,
            image: "/images/products/sua-chua-meiji-thach-dua-vi-dao-135g.png",
          },
          {
            id: 55,
            name: "Sữa Chua Meiji Thạch Dừa Vị Nho 135g",
            price: 28000,
            image: "/images/products/sua-chua-meiji-thach-dua-vi-nho-135g.png",
          },
          {
            id: 56,
            name: "Sữa Chua Ăn Vinamilk Trái Cây 100g",
            price: 12000,
            image: "/images/products/sua-chua-an-vinamilk-trai-cay-100g.png",
          },
          {
            id: 57,
            name: "Sữa Chua Hy Lạp Chobani 0% Vị Dâu 160g Greek Yogurt",
            price: 75000,
            image:
              "/images/products/sua-chua-hy-lap-chobani-0-vi-dau-160g-greek-yogurt.png",
          },
          {
            id: 58,
            name: "Sữa Chua Hy Lạp Chobani Tự Nhiên 160g Greek Yogurt",
            price: 75000,
            image:
              "/images/products/sua-chua-hy-lap-chobani-tu-nhien-160g-greek-yogurt.png",
          },
          {
            id: 59,
            name: "Sữa Chua Hy Lạp Chobani Flip Brownie Socola 140g Greek Yogurt",
            price: 83000,
            image:
              "/images/products/sua-chua-hy-lap-chobani-flip-brownie-socola-140g-greek-yogurt.png",
          },
          {
            id: 60,
            name: "Lốc 5 Sữa Uống Lên Men Yakult Đào 65ml",
            price: 31000,
            image:
              "/images/products/loc-5-sua-uong-len-men-yakult-dao-65ml.png",
          },
          {
            id: 61,
            name: "Sữa Chua Uống Meiji Paigen 150ml",
            price: 20000,
            image: "/images/products/sua-chua-uong-meiji-paigen-150ml.png",
          },
          {
            id: 62,
            name: "Sữa Chua Cimory Thạch Dừa Dâu Xoài 120g",
            price: 24000,
            image:
              "/images/products/sua-chua-cimory-thach-dua-dau-xoai-120g.png",
          },
          {
            id: 63,
            name: "Sữa Chua Cimory Thạch Dừa Việt Quất 120g",
            price: 24000,
            image:
              "/images/products/sua-chua-cimory-thach-dua-viet-quat-120g.png",
          },
          {
            id: 64,
            name: "Sữa Chua Cimory Thạch Dừa Dâu Vải 120g",
            price: 24000,
            image:
              "/images/products/sua-chua-cimory-thach-dua-dau-vai-120g.png",
          },
          {
            id: 65,
            name: "Sữa Chua Farmers Union Honey 90g",
            price: 33000,
            image: "/images/products/sua-chua-farmers-union-honey-90g.png",
          },
          {
            id: 66,
            name: "Sữa Chua Farmers Union Vani 90g",
            price: 33000,
            image: "/images/products/sua-chua-farmers-union-vani-90g.png",
          },
          {
            id: 67,
            name: "Sữa Chua Hy Lạp Chobani Việt Quất 160g",
            price: 75000,
            image:
              "/images/products/sua-chua-hy-lap-chobani-viet-quat-160g.png",
          },
          {
            id: 68,
            name: "Sữa Chua Hy Lạp Chobani Chanh Vàng 160g",
            price: 75000,
            image:
              "/images/products/sua-chua-hy-lap-chobani-chanh-vang-160g.png",
          },
          {
            id: 69,
            name: "Sữa Chua Ăn TH Kem Ngậy 100g",
            price: 14000,
            image: "/images/products/sua-chua-an-th-kem-ngay-100g.png",
          },
          {
            id: 70,
            name: "Sữa Chua Ăn Vinamilk Cao Đạm Kiểu Hy Lạp Hộp 100g",
            price: 22000,
            image:
              "/images/products/sua-chua-an-vinamilk-cao-dam-kieu-hy-lap-hop-100g.png",
          },
          {
            id: 71,
            name: "Sữa Chua Uống Meiji Bulgaria Ít Béo Chai 150ml",
            price: 29000,
            image:
              "/images/products/sua-chua-uong-meiji-bulgaria-it-beo-chai-150ml.png",
          },
          {
            id: 72,
            name: "Sữa Chua Uống Meiji Bulgaria Vị Quả Mọng Chai 150ml",
            price: 29000,
            image:
              "/images/products/sua-chua-uong-meiji-bulgaria-vi-qua-mong-chai-150ml.png",
          },
        ],
      },
      {
        id: "bo",
        name: "Bơ các loại",
        products: [
          {
            id: 1,
            name: "Bơ Lạt TH 10g x 10",
            price: 42000,
            image: "/images/products/bo-lat-th-10g-x-10.png",
          },
          {
            id: 2,
            name: "Bơ Đậu Phộng Hạt 170g Peanut Butter",
            price: 47000,
            image: "/images/products/bo-dau-phong-hat-170g-peanut-butter.png",
          },
          {
            id: 3,
            name: "Bơ Đậu Phộng Mịn 170g Peanut Butter",
            price: 47000,
            image: "/images/products/bo-dau-phong-min-170g-peanut-butter.png",
          },
          {
            id: 4,
            name: "Bơ Lạt TH 200g",
            price: 78000,
            image: "/images/products/bo-lat-th-200g.png",
          },
          {
            id: 5,
            name: "Mứt Hạt Phỉ Nutella 200g Chocolate Hazelnut Spread",
            price: 104000,
            image:
              "/images/products/mut-hat-phi-nutella-200g-chocolate-hazelnut-spread.png",
          },
          {
            id: 6,
            name: "Bơ Tường An 80g",
            price: 14000,
            image: "/images/products/bo-tuong-an-80g.png",
          },
          {
            id: 7,
            name: "Mứt Bonne Maman Mơ 30g Apricot Jam",
            price: 24000,
            image: "/images/products/mut-bonne-maman-mo-30g-apricot-jam.png",
          },
          {
            id: 8,
            name: "Whipping Cream Anchor 200ml",
            price: 91000,
            image: "/images/products/whipping-cream-anchor-200ml.png",
          },
        ],
      },
      {
        id: "pho-mai",
        name: "Phô mai",
        products: [
          {
            id: 1,
            name: "TH Phô Mai Que Mozzarella Gói x 4 que",
            price: 55000,
            image: "/images/products/th-pho-mai-que-mozzarella-goi-x-4-que.png",
          },
          {
            id: 2,
            name: "Phô Mai Meiji Hokkaido Camebert 90g -T9",
            price: 165000,
            image:
              "/images/products/pho-mai-meiji-hokkaido-camebert-90g-t9.png",
          },
          {
            id: 3,
            name: "Phô Mai Meiji HokkaidoTokachi Cheddar90g -T9",
            price: 113000,
            image:
              "/images/products/pho-mai-meiji-hokkaidotokachi-cheddar90g-t9.png",
          },
          {
            id: 4,
            name: "Phô Mai QBB Các Loại Hạt Dinh Dưỡng 90g -T9",
            price: 84000,
            image:
              "/images/products/pho-mai-qbb-cac-loai-hat-dinh-duong-90g-t9.png",
          },
          {
            id: 5,
            name: "Phô Mai QBB Vị Vanilla 90g -T9",
            price: 84000,
            image: "/images/products/pho-mai-qbb-vi-vanilla-90g-t9.png",
          },
          {
            id: 6,
            name: "Phô Mai Lát Cheddar Anchor 200g",
            price: 85000,
            image: "/images/products/pho-mai-lat-cheddar-anchor-200g.png",
          },
          {
            id: 7,
            name: "Phô Mai Hun Khói Solse 100g",
            price: 79000,
            image: "/images/products/pho-mai-hun-khoi-solse-100g.png",
          },
          {
            id: 8,
            name: "Phô Mai Con Bò Cười 8 miếng",
            price: 48000,
            image: "/images/products/pho-mai-con-bo-cuoi-8-mieng.png",
          },
          {
            id: 9,
            name: "Phô Mai Con Bò Cười Light 8 Miếng",
            price: 49000,
            image: "/images/products/pho-mai-con-bo-cuoi-light-8-mieng.png",
          },
          {
            id: 10,
            name: "QBB Phô Mai Nhật Hạt Dinh Dưỡng 90g",
            price: 99000,
            image: "/images/products/qbb-pho-mai-nhat-hat-dinh-duong-90g.png",
          },
          {
            id: 11,
            name: "QBB Phô Mai Nhật Vị Vanilla 90g",
            price: 99000,
            image: "/images/products/qbb-pho-mai-nhat-vi-vanilla-90g.png",
          },
          {
            id: 12,
            name: "Phô Mai Belcube Vị Sữa 78g",
            price: 65000,
            image: "/images/products/pho-mai-belcube-vi-sua-78g.png",
          },
          {
            id: 13,
            name: "Phô Mai Kem Anchor 140g",
            price: 84000,
            image: "/images/products/pho-mai-kem-anchor-140g.png",
          },
          {
            id: 14,
            name: "Phô Mai Que Mozzarella Cheese One 20g",
            price: 18000,
            image: "/images/products/pho-mai-que-mozzarella-cheese-one-20g.png",
          },
          {
            id: 15,
            name: "Phô Mai Que Cheddar Emborg 21g",
            price: 18000,
            image: "/images/products/pho-mai-que-cheddar-emborg-21g.png",
          },
          {
            id: 16,
            name: "Phô Mai Que Mozzarella Heritage 28g",
            price: 23000,
            image: "/images/products/pho-mai-que-mozzarella-heritage-28g.png",
          },
          {
            id: 17,
            name: "Phô Mai Kiri Tart Mâm Xôi 5Viên 26g",
            price: 29000,
            image: "/images/products/pho-mai-kiri-tart-mam-xoi-5vien-26g.png",
          },
          {
            id: 18,
            name: "Phô Mai Kiri Đào Hoa Nhài 5Viên 26g",
            price: 29000,
            image: "/images/products/pho-mai-kiri-dao-hoa-nhai-5vien-26g.png",
          },
          {
            id: 19,
            name: "Cream Cheese Phô Mai Kem Pauly 28g",
            price: 16000,
            image: "/images/products/cream-cheese-pho-mai-kem-pauly-28g.png",
          },
          {
            id: 20,
            name: "Phô Mai Meiji Hokkaido Tokachi Cheddar 90g",
            price: 128000,
            image:
              "/images/products/pho-mai-meiji-hokkaido-tokachi-cheddar-90g.png",
          },
          {
            id: 21,
            name: "Phô Mai Lát Emborg 100g",
            price: 42000,
            image: "/images/products/pho-mai-lat-emborg-100g.png",
          },
          {
            id: 22,
            name: "Phô Mai Meiji Hokkaido Camebert 90g",
            price: 190000,
            image: "/images/products/pho-mai-meiji-hokkaido-camebert-90g.png",
          },
          {
            id: 23,
            name: "Phô Mai Xong Khói Grand'Or 200g",
            price: 145000,
            image: "/images/products/pho-mai-xong-khoi-grandor-200g.png",
          },
        ],
      },
      {
        id: "sua-dac",
        name: "Sữa đặc",
        products: [
          {
            id: 1,
            name: "Sữa Đặc Ông Thọ Tuýp 165g",
            price: 30000,
            image: "/images/products/sua-dac-ong-tho-tuyp-165g.png",
          },
          {
            id: 2,
            name: "Sữa Đặc Ngôi Sao Phương Nam Xanh Giấy 380g",
            price: 31000,
            image:
              "/images/products/sua-dac-ngoi-sao-phuong-nam-xanh-giay-380g.png",
          },
          {
            id: 3,
            name: "Sữa Đặc Có Đường Ông Thọ Đỏ Vi 40g",
            price: 8000,
            image: "/images/products/sua-dac-co-duong-ong-tho-do-vi-40g.png",
          },
        ],
      },
    ],
  },
  {
    id: "do-uong-dong-chai",
    name: "Đồ Uống Đóng Chai",
    categories: [
      { id: "nuoc-ngot-co-gas", name: "Nước ngọt có gas", products: [] },
      { id: "tra-dong-chai", name: "Trà đóng chai", products: [] },
      {
        id: "nuoc-suoi-nuoc-khoang",
        name: "Nước suối, nước khoáng",
        products: [],
      },
      { id: "nuoc-trai-cay", name: "Nước trái cây", products: [] },
      { id: "ca-phe-uong-lien", name: "Cà phê uống liền", products: [] },
      { id: "do-uong-tang-luc", name: "Đồ uống tăng lực", products: [] },
      { id: "bot-goi-tra-ca-phe", name: "Bột gói trà, Cà phê", products: [] },
    ],
  },
  {
    id: "do-uong-co-con",
    name: "Đồ Uống Có Cồn",
    categories: [
      {
        id: "giao-bia-24-7",
        name: "Giao bia 24/7",
        products: [
          {
            id: 79,
            name: "Bia Craft Gà Blonde Lon 330ml",
            price: 63000,
            image: "/images/products/bia-craft-ga-blonde-lon-330ml.png",
          },
          {
            id: 80,
            name: "Bia Craft Gà Dark Lon 330ml",
            price: 63000,
            image: "/images/products/bia-craft-ga-dark-lon-330ml.png",
          },
          {
            id: 81,
            name: "Bia Craft East West Rosé Lon 330ml",
            price: 59000,
            image: "/images/products/bia-craft-east-west-rose-lon-330ml.png",
          },
          {
            id: 82,
            name: "Bia Craft East West Pale Ale Lon 330ml",
            price: 59000,
            image:
              "/images/products/bia-craft-east-west-pale-ale-lon-330ml.png",
          },
          {
            id: 83,
            name: "Bia Craft Mixtape Ole Lon 330ml",
            price: 89000,
            image: "/images/products/bia-craft-mixtape-ole-lon-330ml.png",
          },
          {
            id: 84,
            name: "Bia Craft Mixtape Peaches And Cream Lon 330ml",
            price: 89000,
            image:
              "/images/products/bia-craft-mixtape-peaches-and-cream-lon-330ml.png",
          },
          {
            id: 85,
            name: "Bia Craft H.O.D Kurtz's Insane IPA Lon 330ml",
            price: 69000,
            image:
              "/images/products/bia-craft-hod-kurtzs-insane-ipa-lon-330ml.png",
          },
          {
            id: 86,
            name: "Bia Craft H.O.D Dream Alone Pale Ale Lon 330ml",
            price: 69000,
            image:
              "/images/products/bia-craft-hod-dream-alone-pale-ale-lon-330ml.png",
          },
          {
            id: 87,
            name: "Bia Craft H.O.D All Malt Craft Lager Lon 330ml",
            price: 59000,
            image:
              "/images/products/bia-craft-hod-all-malt-craft-lager-lon-330ml.png",
          },
          {
            id: 88,
            name: "Bia Craft East West Summer Lon 330ml",
            price: 59000,
            image: "/images/products/bia-craft-east-west-summer-lon-330ml.png",
          },
          {
            id: 89,
            name: "Bia Craft Belgo Session IPA Chai 330ml",
            price: 65000,
            image:
              "/images/products/bia-craft-belgo-session-ipa-chai-330ml.png",
          },
          {
            id: 90,
            name: "Bia Craft Belgo Artisan Pilsner Chai 330ml",
            price: 65000,
            image:
              "/images/products/bia-craft-belgo-artisan-pilsner-chai-330ml.png",
          },
          {
            id: 91,
            name: "Thùng 24 Bia Tiger Lon Cao 330ml",
            price: 529000,
            image: "/images/products/thung-24-bia-tiger-lon-cao-330ml.png",
          },
          {
            id: 92,
            name: "Thùng 24 Bia Tiger Crystal Lon 330ml",
            price: 529000,
            image: "/images/products/thung-24-bia-tiger-crystal-lon-330ml.png",
          },
          {
            id: 93,
            name: "Thùng 24 Bia Heineken Lon Cao 330ml",
            price: 622000,
            image: "/images/products/thung-24-bia-heineken-lon-cao-330ml.png",
          },
          {
            id: 94,
            name: "Thùng 24 Bia Heineken Bạc Lon Cao 330ml",
            price: 645000,
            image:
              "/images/products/thung-24-bia-heineken-bac-lon-cao-330ml.png",
          },
          {
            id: 95,
            name: "Bia Sài Gòn 333 Lon 330ml",
            price: 391000,
            image: "/images/products/bia-sai-gon-333-lon-330ml-thung.png",
          },
          {
            id: 96,
            name: "Thùng 24 Bia Sài Gòn Chill Lon 330ml",
            price: 506000,
            image: "/images/products/thung-24-bia-sai-gon-chill-lon-330ml.png",
          },

          {
            id: 97,
            name: "Thùng 24 Bia Budweiser Lon 330ml",
            price: 622000,
            image: "/images/products/thung-24-bia-budweiser-lon-330ml.png",
          },
          {
            id: 98,
            name: "Thùng 12 Bia Budweiser Lon 500ml",
            price: 444000,
            image: "/images/products/thung-12-bia-budweiser-lon-500ml.png",
          },
          {
            id: 99,
            name: "Lốc 6 Bia Sapporo Bạc Lon 330ml",
            price: 156000,
            image: "/images/products/loc-6-bia-sapporo-bac-lon-330ml.png",
          },
          {
            id: 100,
            name: "Lốc 6 Bia Sài Gòn 333 Lon 330ml",
            price: 102000,
            image: "/images/products/loc-6-bia-sai-gon-333-lon-330ml.png",
          },
          {
            id: 101,
            name: "Lốc 6 Bia Sài Gòn Chill Lon 330ml",
            price: 132000,
            image: "/images/products/loc-6-bia-sai-gon-chill-lon-330ml.png",
          },
          {
            id: 102,
            name: "Lốc 6 Bia Sài Gòn Lager Lon 330ml",
            price: 96000,
            image: "/images/products/loc-6-bia-sai-gon-lager-lon-330ml.png",
          },
          {
            id: 103,
            name: "Bia Tiger Soju Mận Lon 330ml",
            price: 28000,
            image: "/images/products/bia-tiger-soju-man-lon-330ml.png",
          },

          {
            id: 104,
            name: "Bia Tiger Crystal Lon 330ml",
            price: 23000,
            image: "/images/products/bia-tiger-crystal-lon-330ml.png",
          },
          {
            id: 105,
            name: "Bia Sài Gòn Xanh Special Lon 330ml",
            price: 20000,
            image: "/images/products/bia-sai-gon-xanh-special-lon-330ml.png",
          },
          {
            id: 106,
            name: "Bia Heineken Lon Cao 330ml",
            price: 27000,
            image: "/images/products/bia-heineken-lon-cao-330ml.png",
          },
          {
            id: 107,
            name: "Bia Heineken Bạc Lon Cao 330ml",
            price: 28000,
            image: "/images/products/bia-heineken-bac-lon-cao-330ml.png",
          },
          {
            id: 108,
            name: "Bia Budweiser Lon 500ml",
            price: 37000,
            image: "/images/products/bia-budweiser-lon-500ml.png",
          },
          {
            id: 109,
            name: "Bia Budweiser Lon 330ml",
            price: 27000,
            image: "/images/products/bia-budweiser-lon-330ml.png",
          },
          {
            id: 110,
            name: "Bia Blanc Lon 330ml",
            price: 24000,
            image: "/images/products/bia-blanc-lon-330ml.png",
          },

          {
            id: 111,
            name: "Bia Edelweiss Lon 330ml",
            price: 28000,
            image: "/images/products/bia-edelweiss-lon-330ml.png",
          },
          {
            id: 112,
            name: "Bia Hoegaarden Đào Lon 500ml",
            price: 49000,
            image: "/images/products/bia-hoegaarden-dao-lon-500ml.png",
          },
          {
            id: 113,
            name: "Bia Larue Special Lon 330ml",
            price: 17000,
            image: "/images/products/bia-larue-special-lon-330ml.png",
          },
          {
            id: 114,
            name: "Bia Larue Xanh Lon 330ml",
            price: 17000,
            image: "/images/products/bia-larue-xanh-lon-330ml.png",
          },
          {
            id: 115,
            name: "Bia Huda Lon 330ml",
            price: 17000,
            image: "/images/products/bia-huda-lon-330ml.png",
          },
          {
            id: 116,
            name: "Nước Giải Bia Condition 75ml",
            price: 59000,
            image: "/images/products/nuoc-giai-bia-condition-75ml.png",
          },
          {
            id: 117,
            name: "Bia Tiger Lon Cao 330ml",
            price: 23000,
            image: "/images/products/bia-tiger-lon-cao-330ml.png",
          },

          {
            id: 118,
            name: "Bia Corona Extra Chai 300ml",
            price: 38000,
            image: "/images/products/bia-corona-extra-chai-300ml.png",
          },
          {
            id: 119,
            name: "Đá Viên Cao Cấp Vivo Glacio 6.5cm",
            price: 20000,
            image: "/images/products/da-vien-cao-cap-vivo-glacio-6-5cm.png",
          },
          {
            id: 120,
            name: "Bia Sapporo Premium Beer 100 Lon 330ml",
            price: 28000,
            image:
              "/images/products/bia-sapporo-premium-beer-100-lon-330ml.png",
          },
          {
            id: 121,
            name: "Bia Asahi Super Dry Lon 330ml",
            price: 35000,
            image: "/images/products/bia-asahi-super-dry-lon-330ml.png",
          },
          {
            id: 122,
            name: "Bia Sapporo Lon 650ml",
            price: 92000,
            image: "/images/products/bia-sapporo-lon-650ml.png",
          },
          {
            id: 123,
            name: "Bia Craft Nội Hạnh Kim Lon 330ml",
            price: 59000,
            image: "/images/products/bia-craft-noi-hanh-kim-lon-330ml.png",
          },
          {
            id: 124,
            name: "Bia Craft Giả Nội Hạnh Mộc Lon 330ml",
            price: 59000,
            image: "/images/products/bia-craft-gia-noi-hanh-moc-lon-330ml.png",
          },

          {
            id: 125,
            name: "Bia Sài Gòn 333 Pilsner Ex Smooth 330ml",
            price: 19000,
            image:
              "/images/products/bia-sai-gon-333-pilsner-ex-smooth-330ml.png",
          },
          {
            id: 126,
            name: "Bia Sài Gòn 333 Lon 330ml",
            price: 17000,
            image: "/images/products/bia-sai-gon-333-lon-330ml.png",
          },
          {
            id: 127,
            name: "Bia Hà Nội Nhãn Vàng 330ml",
            price: 17000,
            image: "/images/products/bia-ha-noi-nhan-vang-330ml.png",
          },
          {
            id: 128,
            name: "Bia Hà Nội Nhãn Xanh 330ml",
            price: 16000,
            image: "/images/products/bia-ha-noi-nhan-xanh-330ml.png",
          },
          {
            id: 129,
            name: "Bia Sapporo Bạc Lon 330ml",
            price: 26000,
            image: "/images/products/bia-sapporo-bac-lon-330ml.png",
          },
          {
            id: 130,
            name: "Thùng 24 Bia Sài Gòn Lager Lon 330ml",
            price: 384000,
            image: "/images/products/thung-24-bia-sai-gon-lager-lon-330ml.png",
          },
          {
            id: 131,
            name: "Bia Lạc Việt 330ml",
            price: 16000,
            image: "/images/products/bia-lac-viet-330ml.png",
          },

          {
            id: 132,
            name: "Thức Uống Đại Mạch Heineken 0.0 250ml",
            price: 18000,
            image: "/images/products/thuc-uong-dai-mach-heineken-0-0-250ml.png",
          },
          {
            id: 133,
            name: "Bia Tsingtao 1903 Lon 330ml",
            price: 36000,
            image: "/images/products/bia-tsingtao-1903-lon-330ml.png",
          },
          {
            id: 134,
            name: "Bia Heineken Bạc Coolpack Lon 250ml",
            price: 23000,
            image: "/images/products/bia-heineken-bac-coolpack-lon-250ml.png",
          },
          {
            id: 135,
            name: "Thùng 24 Bia Heineken Bạc Coolpack Lon 250ml",
            price: 552000,
            image:
              "/images/products/thung-24-bia-heineken-bac-coolpack-lon-250ml.png",
          },
          {
            id: 136,
            name: "Bia Tiger Coolpack Lon 250ml",
            price: 18000,
            image: "/images/products/bia-tiger-coolpack-lon-250ml.png",
          },
          {
            id: 137,
            name: "Bia Hơi Hà Nội 500ml",
            price: 25000,
            image: "/images/products/bia-hoi-ha-noi-500ml.png",
          },
          {
            id: 138,
            name: "Bia Sài Gòn Chill Lon 330ml",
            price: 22000,
            image: "/images/products/bia-sai-gon-chill-lon-330ml.png",
          },

          {
            id: 139,
            name: "Bia Tiger Crystal Coolpack Lon 250ml",
            price: 19000,
            image: "/images/products/bia-tiger-crystal-coolpack-lon-250ml.png",
          },
          {
            id: 140,
            name: "Bia Carlsberg Danish Pilsner Lon 330ml",
            price: 26000,
            image:
              "/images/products/bia-carlsberg-danish-pilsner-lon-330ml.png",
          },
          {
            id: 141,
            name: "Bia Sài Gòn Lager Lon 330ml",
            price: 16000,
            image: "/images/products/bia-sai-gon-lager-lon-330ml.png",
          },
          {
            id: 142,
            name: "Bia Sài Gòn Export Premium Lon Cao 330ml",
            price: 17000,
            image:
              "/images/products/bia-sai-gon-export-premium-lon-cao-330ml.png",
          },
          {
            id: 143,
            name: "Bia Hoegaarden Rosée Lon 250ml",
            price: 22000,
            image: "/images/products/bia-hoegaarden-rosee-lon-250ml.png",
          },
          {
            id: 144,
            name: "Bia Budweiser Không Độ Lon 330ml",
            price: 26000,
            image: "/images/products/bia-budweiser-khong-do-lon-330ml.png",
          },
          {
            id: 145,
            name: "Bia Hoegaarden White Lon 250ml",
            price: 22000,
            image: "/images/products/bia-hoegaarden-white-lon-250ml.png",
          },

          {
            id: 146,
            name: "Bia Craft Pasteur Street Wheat Chanh Dây 330ml",
            price: 69000,
            image:
              "/images/products/bia-craft-pasteur-street-wheat-chanh-day-330ml.png",
          },
          {
            id: 147,
            name: "Bia Craft Gà Ô Long Lon 330ml",
            price: 63000,
            image: "/images/products/bia-craft-ga-o-long-lon-330ml.png",
          },
          {
            id: 148,
            name: "Bia Craft Gà IPA Lon Cao 330ml",
            price: 63000,
            image: "/images/products/bia-craft-ga-ipa-lon-cao-330ml.png",
          },
          {
            id: 149,
            name: "Bia Sài Gòn Chill Lon 250ml",
            price: 18000,
            image: "/images/products/bia-sai-gon-chill-lon-250ml.png",
          },
          {
            id: 150,
            name: "Bia Craft Pasteur Street Jasmine IPA 330ml",
            price: 69000,
            image:
              "/images/products/bia-craft-pasteur-street-jasmine-ipa-330ml.png",
          },
          {
            id: 151,
            name: "Bia Blanc 1664 Lon 250ml",
            price: 18000,
            image: "/images/products/bia-blanc-1664-lon-250ml.png",
          },
          {
            id: 152,
            name: "Bia Craft Guinness Draught Lon 440ml",
            price: 143000,
            image: "/images/products/bia-craft-guinness-draught-lon-440ml.png",
          },

          {
            id: 153,
            name: "Bia Orion Lon 350ml",
            price: 68000,
            image: "/images/products/bia-orion-lon-350ml.png",
          },
          {
            id: 154,
            name: "Bia Heineken Silver Chai Nhôm 330ml",
            price: 59000,
            image: "/images/products/bia-heineken-silver-chai-nhom-330ml.png",
          },
          {
            id: 155,
            name: "Bia Sapporo Premium Bạc Lon 500ml",
            price: 40000,
            image: "/images/products/bia-sapporo-premium-bac-lon-500ml.png",
          },
          {
            id: 156,
            name: "Bia Red Horse Lon 500ml",
            price: 35000,
            image: "/images/products/bia-red-horse-lon-500ml.png",
          },
          {
            id: 157,
            name: "Bia Mixtape Partes Lon 330ml",
            price: 64000,
            image: "/images/products/bia-mixtape-partes-lon-330ml.png",
          },
          {
            id: 158,
            name: "Bia Việt Lon 330ml",
            price: 17000,
            image: "/images/products/bia-viet-lon-330ml.png",
          },
          {
            id: 159,
            name: "Bia Budweiser Lon 250ml",
            price: 21000,
            image: "/images/products/bia-budweiser-lon-250ml.png",
          },

          {
            id: 160,
            name: "Bia Craft Gà Pale Lon 330ml",
            price: 63000,
            image: "/images/products/bia-craft-ga-pale-lon-330ml.png",
          },
          {
            id: 161,
            name: "Bia Gấu Lager Lon Cao 500ml",
            price: 72000,
            image: "/images/products/bia-gau-lager-lon-cao-500ml.png",
          },
          {
            id: 162,
            name: "Bia Gấu Trắng Lon Cao 500ml",
            price: 72000,
            image: "/images/products/bia-gau-trang-lon-cao-500ml.png",
          },
          {
            id: 163,
            name: "Nước Giải Rượu Alcofree 50ml",
            price: 58000,
            image: "/images/products/nuoc-giai-ruou-alcofree-50ml.png",
          },
          {
            id: 164,
            name: "Bia Craft Ibiero Hanoi Autumn Chai 330ml",
            price: 65000,
            image:
              "/images/products/bia-craft-ibiero-hanoi-autumn-chai-330ml.png",
          },
          {
            id: 165,
            name: "Bia Craft Ibiero Double IPA Chai 330ml",
            price: 65000,
            image:
              "/images/products/bia-craft-ibiero-double-ipa-chai-330ml.png",
          },
          {
            id: 166,
            name: "Bia Craft Heart Of Darkness The River IPA Lon 330ml",
            price: 79000,
            image:
              "/images/products/bia-craft-heart-of-darkness-the-river-ipa-lon-330ml.png",
          },
          {
            id: 167,
            name: "Bia Craft Mixtape California Sun Lon 330ml",
            price: 69000,
            image:
              "/images/products/bia-craft-mixtape-california-sun-lon-330ml.png",
          },
          {
            id: 168,
            name: "Bia Chimay Nhãn Đỏ Chai 330ml",
            price: 129000,
            image: "/images/products/bia-chimay-nhan-do-chai-330ml.png",
          },
        ],
      },
      {
        id: "bia-craft",
        name: "Bia Craft",
        products: [
          {
            id: 169,
            name: "Bia Craft H.O.D Dream Alone Pale Ale Lon 330ml",
            price: 69000,
            image:
              "/images/products/bia-craft-hod-dream-alone-pale-ale-lon-330ml.png",
          },
          {
            id: 170,
            name: "Bia Craft H.O.D All Malt Craft Lager Lon 330ml",
            price: 59000,
            image:
              "/images/products/bia-craft-hod-all-malt-craft-lager-lon-330ml.png",
          },
          {
            id: 171,
            name: "Bia Craft H.O.D Kurtz's Insane IPA Lon 330ml",
            price: 69000,
            image:
              "/images/products/bia-craft-hod-kurtzs-insane-ipa-lon-330ml.png",
          },
          {
            id: 172,
            name: "Bia Craft Heart Of Darkness The River IPA Lon 330ml",
            price: 79000,
            image:
              "/images/products/bia-craft-heart-of-darkness-the-river-ipa-lon-330ml.png",
          },
          {
            id: 173,
            name: "Bia Craft Mixtape Peaches And Cream Lon 330ml",
            price: 89000,
            image:
              "/images/products/bia-craft-mixtape-peaches-and-cream-lon-330ml.png",
          },
          {
            id: 174,
            name: "Bia Craft Mixtape California Sun Lon 330ml",
            price: 69000,
            image:
              "/images/products/bia-craft-mixtape-california-sun-lon-330ml.png",
          },
          {
            id: 175,
            name: "Bia Craft East West Summer Lon 330ml",
            price: 59000,
            image: "/images/products/bia-craft-east-west-summer-lon-330ml.png",
          },
          {
            id: 176,
            name: "Bia Craft East West Rosé Lon 330ml",
            price: 59000,
            image: "/images/products/bia-craft-east-west-rose-lon-330ml.png",
          },
          {
            id: 177,
            name: "Bia Craft East West Pilsner Lon 330ml",
            price: 59000,
            image: "/images/products/bia-craft-east-west-pilsner-lon-330ml.png",
          },
          {
            id: 178,
            name: "Bia Craft East West Pale Ale Lon 330ml",
            price: 59000,
            image:
              "/images/products/bia-craft-east-west-pale-ale-lon-330ml.png",
          },
          {
            id: 179,
            name: "Bia Craft East West Good Times Lager Lon 330ml",
            price: 62000,
            image:
              "/images/products/bia-craft-east-west-good-times-lager-lon-330ml.png",
          },
          {
            id: 180,
            name: "Bia Craft 7Bridge Sơn Trà Light Haze IPA 330ml",
            price: 65000,
            image:
              "/images/products/bia-craft-7bridge-son-tra-light-haze-ipa-330ml.png",
          },
          {
            id: 181,
            name: "Bia Craft 7Bridge Dragon Session IPA Lon 330ml",
            price: 65000,
            image:
              "/images/products/bia-craft-7bridge-dragon-session-ipa-lon-330ml.png",
          },
          {
            id: 182,
            name: "Bia Craft 7Bridge Beach Blonde Ale Lon 330ml",
            price: 65000,
            image:
              "/images/products/bia-craft-7bridge-beach-blonde-ale-lon-330ml.png",
          },
          {
            id: 183,
            name: "Bia Craft 7Bridge Sunset Fruit Wheat 330ml",
            price: 65000,
            image:
              "/images/products/bia-craft-7bridge-sunset-fruit-wheat-330ml.png",
          },
          {
            id: 184,
            name: "Bia Craft Gà IPA Lon Cao 330ml",
            price: 63000,
            image: "/images/products/bia-craft-ga-ipa-lon-cao-330ml.png",
          },
          {
            id: 185,
            name: "Bia Craft Gà Ô Long Lon 330ml",
            price: 63000,
            image: "/images/products/bia-craft-ga-o-long-lon-330ml.png",
          },
          {
            id: 186,
            name: "Bia Craft Ngũ Hành Kim Lon 330ml",
            price: 59000,
            image: "/images/products/bia-craft-ngu-hanh-kim-lon-330ml.png",
          },
          {
            id: 187,
            name: "Bia Craft Ngũ Hành Hành - Mộc Lon 330ml",
            price: 59000,
            image: "/images/products/bia-craft-ngu-hanh-moc-lon-330ml.png",
          },
          {
            id: 188,
            name: "Bia Craft Ngũ Hành Thủy Lon 330ml",
            price: 69000,
            image: "/images/products/bia-craft-ngu-hanh-thuy-lon-330ml.png",
          },
          {
            id: 189,
            name: "Bia Craft Ngũ Hành Hỏa Lon 330ml",
            price: 69000,
            image: "/images/products/bia-craft-ngu-hanh-hoa-lon-330ml.png",
          },
          {
            id: 190,
            name: "Bia Craft Ngũ Hành Thổ Lon 330ml",
            price: 69000,
            image: "/images/products/bia-craft-ngu-hanh-tho-lon-330ml.png",
          },
          {
            id: 191,
            name: "Bia Craft Guinness Draught Lon 440ml",
            price: 143000,
            image: "/images/products/bia-craft-guinness-draught-lon-440ml.png",
          },
          {
            id: 192,
            name: "Bia Craft Ibiero Double IPA Chai 330ml",
            price: 65000,
            image:
              "/images/products/bia-craft-ibiero-double-ipa-chai-330ml.png",
          },
          {
            id: 193,
            name: "Bia Craft Ibiero Hanoi Autumn Chai 330ml",
            price: 65000,
            image:
              "/images/products/bia-craft-ibiero-hanoi-autumn-chai-330ml.png",
          },
        ],
      },
      { id: "soju", name: "Soju", products: [] },
      { id: "ruou-vang", name: "Rượu vang", products: [] },
      { id: "ruou", name: "Rượu", products: [] },
      { id: "do-uong-con-khac", name: "Đồ uống cồn khác", products: [] },
    ],
  },
  {
    id: "thit-nguoi-thit-so-che",
    name: "Thịt Nguội, Thịt Sơ Chế",
    categories: [
      {
        id: "cha-lua-thit-nguoi",
        name: "Chả lụa, thịt nguội",
        products: [
          {
            id: 1,
            name: "Chân Gà Rút Xương Ohayo Cay Tê 60g",
            price: 34000,
            image: "/images/products/chan-ga-rut-xuong-ohayo-cay-te-60g.png",
          },
          {
            id: 2,
            name: "Chả Lụa Ớt Xiêm G 200g",
            price: 52000,
            image: "/images/products/cha-lua-ot-xiem-g-200g.png",
          },
          {
            id: 3,
            name: "Tai Heo Sốt Thái Ngọc Thơm 150g",
            price: 30000,
            image: "/images/products/tai-heo-sot-thai-ngoc-thom-150g.png",
          },
          {
            id: 4,
            name: "Chân Gà Rút Xương Cung Đình Heyyo 26g",
            price: 16000,
            image: "/images/products/chan-ga-rut-xuong-cung-dinh-heyyo-26g.png",
          },
          {
            id: 5,
            name: "Chân Gà Bách Thảo Heyyo 40g",
            price: 16000,
            image: "/images/products/chan-ga-bach-thao-heyyo-40g.png",
          },
          {
            id: 6,
            name: "Chân Gà Ớt Xanh Heyyo 80g",
            price: 29000,
            image: "/images/products/chan-ga-ot-xanh-heyyo-80g.png",
          },
          {
            id: 7,
            name: "Cánh Vịt Timi Food Tê Cay 39g",
            price: 15000,
            image: "/images/products/canh-vit-timi-food-te-cay-39g.png",
          },
          {
            id: 8,
            name: "Trứng Vịt Kho VTD 1 Trứng",
            price: 8000,
            image: "/images/products/trung-vit-kho-vtd-1-trung.png",
          },
          {
            id: 9,
            name: "Trứng Gà Tiềm Vị Cay VTD 80g",
            price: 14000,
            image: "/images/products/trung-ga-tiem-vi-cay-vtd-80g.png",
          },
          {
            id: 10,
            name: "Trứng Gà Tiềm VTD 1 Trứng",
            price: 8000,
            image: "/images/products/trung-ga-tiem-vtd-1-trung.png",
          },
          {
            id: 11,
            name: "Vissan Xúc Xích Heo Túi 4 Cây 70g",
            price: 48000,
            image: "/images/products/vissan-xuc-xich-heo-tui-4-cay-70g.png",
          },
          {
            id: 12,
            name: "Vissan Xúc Xích Bò Túi 4 Cây 70g",
            price: 48000,
            image: "/images/products/vissan-xuc-xich-bo-tui-4-cay-70g.png",
          },
          {
            id: 13,
            name: "Hot Dog Xông Khói Ăn Liền 1 Cây x 28g",
            price: 12000,
            image: "/images/products/hot-dog-xong-khoi-an-lien-1-cay-28g.png",
          },
          {
            id: 14,
            name: "Hot Dog Cay Mala 1 Cây x 28g",
            price: 12000,
            image: "/images/products/hot-dog-cay-mala-1-cay-28g.png",
          },
          {
            id: 15,
            name: "Hot Dog Bắp 1 Cây x 28g",
            price: 12000,
            image: "/images/products/hot-dog-bap-1-cay-28g.png",
          },
          {
            id: 16,
            name: "Chả Bò Kiểu Huế Hoa Doanh 60g",
            price: 19000,
            image: "/images/products/cha-bo-kieu-hue-hoa-doanh-60g.png",
          },
          {
            id: 17,
            name: "Chả Lụa Que Ớt Xiêm G 500g",
            price: 306000,
            image: "/images/products/cha-lua-que-ot-xiem-g-500g.png",
          },
          {
            id: 18,
            name: "Chả Lụa Que Bí G 50g",
            price: 270000,
            image: "/images/products/cha-lua-que-bi-g-50g.png",
          },
          {
            id: 19,
            name: "Chả Lụa Que Ớt Xiêm G 50g",
            price: 18000,
            image: "/images/products/cha-lua-que-ot-xiem-g-50g.png",
          },
          {
            id: 20,
            name: "Chả Lụa Que Bí G 50g",
            price: 16000,
            image: "/images/products/cha-lua-que-bi-g-50g.png",
          },
          {
            id: 21,
            name: "Chả Lụa Ớt Xiêm G 200g",
            price: 65000,
            image: "/images/products/cha-lua-ot-xiem-g-200g-2.png",
          },
          {
            id: 22,
            name: "Xúc Xích HCT Ú Nu Sườn Nướng BBQ 85g",
            price: 16000,
            image: "/images/products/xuc-xich-hct-u-nu-suon-nuong-bbq-85g.png",
          },
          {
            id: 23,
            name: "Xúc Xích HCT Ú Nụ Vị Tomyum 85g",
            price: 16000,
            image: "/images/products/xuc-xich-hct-u-nu-vi-tomyum-85g.png",
          },
          {
            id: 24,
            name: "Que Chả Cá Xiêm Xanh Hoa Doanh 60g",
            price: 16000,
            image: "/images/products/que-cha-ca-xiem-xanh-hoa-doanh-60g.png",
          },
          {
            id: 25,
            name: "Thanh Cá Vị Cua Nissui 30g",
            price: 14000,
            image: "/images/products/thanh-ca-vi-cua-nissui-30g.png",
          },
          {
            id: 26,
            name: "Thanh Cá Vị Cua Phô Mai 30g",
            price: 16000,
            image: "/images/products/thanh-ca-vi-cua-pho-mai-30g.png",
          },
          {
            id: 27,
            name: "Thanh Cá Vị Cua Cay Mala Nissui 30g",
            price: 16000,
            image: "/images/products/thanh-ca-vi-cua-cay-mala-nissui-30g.png",
          },
          {
            id: 28,
            name: "Giò Lụa Vissan 250g",
            price: 69000,
            image: "/images/products/gio-lua-vissan-250g.png",
          },
          {
            id: 29,
            name: "Nem Chua Vissan 100g",
            price: 26000,
            image: "/images/products/nem-chua-vissan-100g.png",
          },
          {
            id: 30,
            name: "Xúc Xích Lucky Vissan 250g Sausages",
            price: 54000,
            image: "/images/products/xuc-xich-lucky-vissan-250g-sausages.png",
          },
          {
            id: 31,
            name: "Xúc Xích Đức NH Xkhói 200 Sausages",
            price: 62000,
            image: "/images/products/xuc-xich-duc-nh-xkhoi-200-sausages.png",
          },
          {
            id: 32,
            name: "Xúc Xích Arabiki SS 200g Sausages",
            price: 72000,
            image: "/images/products/xuc-xich-arabiki-ss-200g-sausages.png",
          },
          {
            id: 33,
            name: "Xúc Xích Tỏi Xông Khói NH Food 100g",
            price: 31000,
            image: "/images/products/xuc-xich-toi-xong-khoi-nh-food-100g.png",
          },
          {
            id: 34,
            name: "Xúc Xích Ponnie Phô Mai Heo 45g",
            price: 14000,
            image: "/images/products/xuc-xich-ponnie-pho-mai-heo-45g.png",
          },
          {
            id: 35,
            name: "Xúc Xích Khô Salami Baton Nippon 40g",
            price: 34000,
            image: "/images/products/xuc-xich-kho-salami-baton-nippon-40g.png",
          },
          {
            id: 36,
            name: "Trứng Cút Phá Lấu V.Food 50g",
            price: 14000,
            image: "/images/products/trung-cut-pha-lau-vfood-50g.png",
          },
          {
            id: 37,
            name: "Bò Viên Hoa Doanh 125g",
            price: 22000,
            image: "/images/products/bo-vien-hoa-doanh-125g.png",
          },
          {
            id: 38,
            name: "Cá Viên Hoa Doanh 125g",
            price: 20000,
            image: "/images/products/ca-vien-hoa-doanh-125g.png",
          },
          {
            id: 39,
            name: "Gà Muối Ngọc Thơm 500g",
            price: 159000,
            image: "/images/products/ga-muoi-ngoc-thom-500g.png",
          },
          {
            id: 40,
            name: "Chân Giò Heo Muối Cắt Lát Ngọc Thơm 100g",
            price: 41000,
            image:
              "/images/products/chan-gio-heo-muoi-cat-lat-ngoc-thom-100g.png",
          },
          {
            id: 41,
            name: "Xúc Xích Chay Shimo BBQ 20g",
            price: 11000,
            image: "/images/products/xuc-xich-chay-shimo-bbq-20g.png",
          },
          {
            id: 42,
            name: "Jambon Xông Khói Shinshu 100g",
            price: 39000,
            image: "/images/products/jambon-xong-khoi-shinshu-100g.png",
          },
          {
            id: 43,
            name: "Surimi Vị Sò Điệp Nissui 30g",
            price: 17000,
            image: "/images/products/surimi-vi-so-diep-nissui-30g.png",
          },
          {
            id: 44,
            name: "Chả Lụa Que Vị Mala G 50g",
            price: 19000,
            image: "/images/products/cha-lua-que-vi-mala-g-50g.png",
          },
          {
            id: 45,
            name: "Chân Gà Rút Xương Aji Cay Tê 30g",
            price: 16000,
            image: "/images/products/chan-ga-rut-xuong-aji-cay-te-30g.png",
          },
          {
            id: 46,
            name: "Thanh Cua Reecon Vị Thịt Nướng 15g",
            price: 8000,
            image: "/images/products/thanh-cua-reecon-vi-thit-nuong-15g.png",
          },
          {
            id: 47,
            name: "Nem Chua Que Bí Ớt Xiêm Xanh G 45g",
            price: 20000,
            image: "/images/products/nem-chua-que-bi-ot-xiem-xanh-g-45g.png",
          },
          {
            id: 48,
            name: "Xúc Xích Schau Essen 200g",
            price: 62000,
            image: "/images/products/xuc-xich-schau-essen-200g.png",
          },
          {
            id: 49,
            name: "Jambon Heo Iberico Ướp Muối Cebo 30g",
            price: 89000,
            image: "/images/products/jambon-heo-iberico-uop-muoi-cebo-30g.png",
          },
          {
            id: 50,
            name: "Jambon Heo Serrano Ướp Muối 30g",
            price: 63000,
            image: "/images/products/jambon-heo-serrano-uop-muoi-30g.png",
          },
          {
            id: 51,
            name: "Xúc Xích Heo Iberico Muối Chorizo 30g",
            price: 59000,
            image: "/images/products/xuc-xich-heo-iberico-muoi-chorizo-30g.png",
          },
          {
            id: 52,
            name: "Xúc Xích Heo Iberico Muối Salchichon 30g",
            price: 59000,
            image:
              "/images/products/xuc-xich-heo-iberico-muoi-salchichon-30g.png",
          },
          {
            id: 53,
            name: "Xúc Xích S2 Suuto Sườn Hầm Bắp 85g",
            price: 17000,
            image: "/images/products/xuc-xich-s2-suuto-suon-ham-bap-85g.png",
          },
          {
            id: 54,
            name: "Xúc Xích S2 Suuto Vị Mala 85g",
            price: 17000,
            image: "/images/products/xuc-xich-s2-suuto-vi-mala-85g.png",
          },
          {
            id: 55,
            name: "Xúc Xích Vissan Heo 35g",
            price: 8000,
            image: "/images/products/xuc-xich-vissan-heo-35g.png",
          },
          {
            id: 56,
            name: "Xúc Xích Ponnie Phô Mai Cá 45g",
            price: 14000,
            image: "/images/products/xuc-xich-ponnie-pho-mai-ca-45g.png",
          },
          {
            id: 57,
            name: "Xúc Xích Vissan Bò 35g",
            price: 8000,
            image: "/images/products/xuc-xich-vissan-bo-35g.png",
          },
          {
            id: 58,
            name: "Tai Heo Sốt Thái Ngọc Thơm 150g",
            price: 33000,
            image: "/images/products/tai-heo-sot-thai-ngoc-thom-150g-2.png",
          },
          {
            id: 59,
            name: "Chân Gà Sốt Thái Ngọc Thơm 250g",
            price: 61000,
            image: "/images/products/chan-ga-sot-thai-ngoc-thom-250g.png",
          },
          {
            id: 60,
            name: "Xúc Xích Khô Salami 45g",
            price: 35000,
            image: "/images/products/xuc-xich-kho-salami-45g.png",
          },
          {
            id: 61,
            name: "Ức Gà Hương Thảo Green 100g",
            price: 43000,
            image: "/images/products/uc-ga-huong-thao-green-100g.png",
          },
          {
            id: 62,
            name: "Ức Gà Vị Sả Ớt G 100g",
            price: 43000,
            image: "/images/products/uc-ga-vi-sa-ot-g-100g.png",
          },
          {
            id: 63,
            name: "Ức Gà Xông Khói Daesang 100g",
            price: 43000,
            image: "/images/products/uc-ga-xong-khoi-daesang-100g.png",
          },
          {
            id: 64,
            name: "Xúc Xích Khô Elconchel Chorizo 55g",
            price: 108000,
            image: "/images/products/xuc-xich-kho-elconchel-chorizo-55g.png",
          },
          {
            id: 65,
            name: "Xúc Xích Khô Elconchel Fuet 55g",
            price: 108000,
            image: "/images/products/xuc-xich-kho-elconchel-fuet-55g.png",
          },
          {
            id: 66,
            name: "Xúc Xích Ponnie Heo 120g",
            price: 24000,
            image: "/images/products/xuc-xich-ponnie-heo-120g.png",
          },
          {
            id: 67,
            name: "Xúc Xích Ponnie Heo Cay 120g",
            price: 24000,
            image: "/images/products/xuc-xich-ponnie-heo-cay-120g.png",
          },
          {
            id: 68,
            name: "Xúc Xích Khô Elconchel Mini Chorizo 55g",
            price: 108000,
            image:
              "/images/products/xuc-xich-kho-elconchel-mini-chorizo-55g.png",
          },
          {
            id: 69,
            name: "Xúc Xích Khô Elconchel Mini Fuet 55g",
            price: 108000,
            image: "/images/products/xuc-xich-kho-elconchel-mini-fuet-55g.png",
          },
          {
            id: 70,
            name: "Xúc Xích Khô Elconchel Vị Truffle 55g",
            price: 143000,
            image: "/images/products/xuc-xich-kho-elconchel-vi-truffle-55g.png",
          },
          {
            id: 71,
            name: "Xúc Xích Sun Gà Cay 30g",
            price: 11000,
            image: "/images/products/xuc-xich-sun-ga-cay-30g.png",
          },
          {
            id: 72,
            name: "Xúc Xích Sốt Bò Nướng Cay 30g",
            price: 11000,
            image: "/images/products/xuc-xich-sot-bo-nuong-cay-30g.png",
          },
          {
            id: 73,
            name: "Xúc Xích Daesang Phô Mai 70g",
            price: 21000,
            image: "/images/products/xuc-xich-daesang-pho-mai-70g.png",
          },
          {
            id: 74,
            name: "Xúc Xích Ponnie Heo 70g",
            price: 13000,
            image: "/images/products/xuc-xich-ponnie-heo-70g.png",
          },
          {
            id: 75,
            name: "Xúc Xích Daesang Romas 70g",
            price: 21000,
            image: "/images/products/xuc-xich-daesang-romas-70g.png",
          },
          {
            id: 76,
            name: "Thanh Cá Vị Cua Tom Yum Nissui 30g",
            price: 17000,
            image: "/images/products/thanh-ca-vi-cua-tom-yum-nissui-30g.png",
          },
          {
            id: 77,
            name: "Xúc Xích Ponnie Phô Mai Cay 58g",
            price: 14000,
            image: "/images/products/xuc-xich-ponnie-pho-mai-cay-58g.png",
          },
          {
            id: 78,
            name: "Surimi Càng Cua Hoàng Đế Samho 70g",
            price: 19000,
            image: "/images/products/surimi-cang-cua-hoang-de-samho-70g.png",
          },
        ],
      },
      {
        id: "cold-cuts",
        name: "Cold Cuts",
        products: [
          {
            id: "jambon-heo-iberico-uop-muoi-cebo-30g",
            name: "Jambon Heo Iberico Ướp Muối Cebo 30g",
            price: 89000,
            image: "/images/products/jambon-heo-iberico-uop-muoi-cebo-30g.png",
          },
          {
            id: "jambon-heo-serrano-uop-muoi-30g",
            name: "Jambon Heo Serrano Ướp Muối 30g",
            price: 63000,
            image: "/images/products/jambon-heo-serrano-uop-muoi-30g.png",
          },
          {
            id: "xuc-xich-heo-iberico-muoi-chorizo-30g",
            name: "Xúc Xích Heo Iberico Muối Chorizo 30g",
            price: 59000,
            image: "/images/products/xuc-xich-heo-iberico-muoi-chorizo-30g.png",
          },
          {
            id: "xuc-xich-heo-iberico-muoi-salchichon-30g",
            name: "Xúc Xích Heo Iberico Muối Salchichon 30g",
            price: 59000,
            image:
              "/images/products/xuc-xich-heo-iberico-muoi-salchichon-30g.png",
          },
          {
            id: "oliu-xanh-tach-hat-frutto-ditalia-30g",
            name: "Oliu Xanh Tách Hạt Frutto D'Italia 30g",
            price: 39000,
            image: "/images/products/oliu-xanh-tach-hat-frutto-ditalia-30g.png",
          },
          {
            id: "oliu-tach-hat-hon-hop-frutto-ditalia-30g",
            name: "Oliu Tách Hạt Hỗn Hợp Frutto D'Italia 30g",
            price: 39000,
            image:
              "/images/products/oliu-tach-hat-hon-hop-frutto-ditalia-30g.png",
          },
          {
            id: "pho-mai-que-cheddar-emborg-21g",
            name: "Phô Mai Que Cheddar Emborg 21g",
            price: 18000,
            image: "/images/products/pho-mai-que-cheddar-emborg-21g.png",
          },
          {
            id: "pho-mai-kem-anchor-140g",
            name: "Phô Mai Kem Anchor 140g",
            price: 84000,
            image: "/images/products/pho-mai-kem-anchor-140g.png",
          },
          {
            id: "pho-mai-lat-cheddar-anchor-200g",
            name: "Phô Mai Lát Cheddar Anchor 200g",
            price: 85000,
            image: "/images/products/pho-mai-lat-cheddar-anchor-200g.png",
          },
          {
            id: "xuc-xich-kho-elconchel-mini-chorizo-55g",
            name: "Xúc Xích Khô Elconchel Mini Chorizo 55g",
            price: 108000,
            image:
              "/images/products/xuc-xich-kho-elconchel-mini-chorizo-55g.png",
          },
          {
            id: "xuc-xich-kho-elconchel-mini-fuet-55g",
            name: "Xúc Xích Khô Elconchel Mini Fuet 55g",
            price: 108000,
            image: "/images/products/xuc-xich-kho-elconchel-mini-fuet-55g.png",
          },
        ],
      },
    ],
  },
  {
    id: "do-kho-ngu-coc",
    name: "Đồ Khô Ngũ Cốc",
    categories: [
      {
        id: "mi-an-lien",
        name: "Mì ăn liền",
        products: [
          createProduct(
            "mi-omachi-hai-san-chua-cay-ly-66g",
            "Mì Omachi Hải Sản Chua Cay Ly 66g",
            17000,
          ),
          createProduct(
            "mi-omachi-xot-bo-ham-ly-69g",
            "Mì Omachi Xốt Bò Hầm Ly 69g",
            17000,
          ),
          createProduct(
            "chao-tuoi-cay-thi-ca-hoi-rong-bien-240g",
            "Cháo Tươi Cây Thị Cá Hồi Rong Biển 240g",
            34000,
          ),
          createProduct(
            "mi-shin-kimchi-goi-120g",
            "Mì Shin Kimchi Gói 120g",
            34000,
          ),
          createProduct(
            "mi-neoguri-hai-san-cay-goi-120g",
            "Mì Neoguri Hải Sản Cay Gói 120g",
            33000,
          ),
          createProduct(
            "mi-tron-nongshim-tuong-den-goi-140g",
            "Mì Trộn Nongshim Tương Đen Gói 140g",
            40000,
          ),
          createProduct(
            "banh-gao-topokki-pho-mai-120g",
            "Bánh Gạo Topokki Phô Mai 120g",
            51000,
          ),
          createProduct(
            "mi-samyang-tuong-den-cay-goi-140g",
            "Mì Samyang Tương Đen Cay Gói 140g",
            42000,
          ),
          createProduct(
            "banh-gao-topokki-cay-140g",
            "Bánh Gạo Topokki Cay 140g",
            51000,
          ),
          createProduct(
            "mi-otoki-jin-khong-cay-to-110g",
            "Mì Otoki Jin Không Cay Tô 110g",
            24000,
          ),
          createProduct(
            "mi-otoki-tuong-den-to-115g",
            "Mì Otoki Tương Đen Tô 115g",
            28000,
          ),
          createProduct(
            "mi-shin-ramyun-spicy-queen-ly-68g",
            "Mì Shin Ramyun Spicy Queen Ly 68g",
            38000,
          ),
          createProduct(
            "mi-siukay-ga-xot-pho-mai-to-97g",
            "Mì Siukay Gà Xốt Phô Mai Tô 97g",
            22000,
          ),
          createProduct(
            "mi-ramyun-kimchi-ly-75g",
            "Mì Ramyun Kimchi Ly 75g",
            34000,
          ),
          createProduct(
            "mi-samyang-ga-cay-ly-70g",
            "Mì Samyang Gà Cay Ly 70g",
            40000,
          ),
          createProduct(
            "mi-ly-samyang-ga-cay-pho-mai",
            "Mì Ly Samyang Gà Cay Phô Mai",
            44000,
          ),
          createProduct(
            "mi-tron-abc-ga-cay-pho-mai-ly-80g",
            "Mì Trộn ABC Gà Cay Phô Mai Ly 80g",
            20000,
          ),
          createProduct(
            "pho-bo-mplus-vi-nam-to-70g",
            "Phở Bò Mplus Vị Nam Tô 70g",
            66000,
          ),
          createProduct(
            "mi-xao-kho-goreng-dac-biet-85g",
            "Mì Xào Khô Goreng Đặc Biệt 85g",
            8000,
          ),
          createProduct(
            "mi-cung-dinh-kool-bbq-to-99g",
            "Mì Cung Đình Kool BBQ Tô 99g",
            20000,
          ),
          createProduct(
            "mi-cung-dinh-tom-chua-cay-to-85g",
            "Mì Cung Đình Tôm Chua Cay Tô 85g",
            18000,
          ),
          createProduct(
            "mi-otoki-jin-ramen-cay-to-110g",
            "Mì Otoki Jin Ramen Cay Tô 110g",
            23000,
          ),
          createProduct(
            "mi-kho-samyang-ga-cay-carbonara-goi-130g",
            "Mì Khô Samyang Gà Cay Carbonara Gói 130g",
            46000,
          ),
          createProduct(
            "mi-siukay-huong-vi-bo-127g",
            "Mì Siukay Hương Vị Bò 127g",
            18000,
          ),
          createProduct(
            "mi-siukay-ga-cay-pho-mai-129g",
            "Mì Siukay Gà Cay Phô Mai 129g",
            18000,
          ),
          createProduct(
            "mi-tron-omachi-spaghetti-to-105g",
            "Mì Trộn Omachi Spaghetti Tô 105g",
            26000,
          ),
          createProduct("mi-yeul-cay-to-105g", "Mì Yeul Cay Tô 105g", 23000),
          createProduct(
            "mi-xao-kho-goreng-suon-80g",
            "Mì Xào Khô Goreng Sườn 80g",
            8000,
          ),
          createProduct(
            "mi-kho-ga-cay-samyang-rose-to-105g",
            "Mì Khô Gà Cay Samyang Rose Tô 105g",
            65000,
          ),
          createProduct(
            "mi-kho-ga-cay-samyang-to-105g",
            "Mì Khô Gà Cay Samyang Tô 105g",
            63000,
          ),
          createProduct(
            "mi-tron-shin-ramyun-tomyum-to-103g",
            "Mì Trộn Shin Ramyun Tomyum Tô 103g",
            47000,
          ),
          createProduct(
            "pho-ga-thit-that-vifon-90g",
            "Phở Gà Thịt Thật Vifon 90g",
            21000,
          ),
          createProduct(
            "lau-tu-soi-haidilao-bo-mem-ca-chua-365g",
            "Lẩu Tự Sôi Haidilao Vị Bò Mềm Cà Chua 365g",
            164000,
          ),
          createProduct(
            "lau-tu-soi-haidilao-ca-chua-thit-chien-275g",
            "Lẩu Tự Sôi Haidilao Vị Cà Chua Thịt Chiên 275g",
            102000,
          ),
          createProduct(
            "mi-omachi-tron-cua-xot-ot-to-96g",
            "Mì Omachi Trộn Cua Xốt Ớt Tô 96g",
            26000,
          ),
          createProduct(
            "hu-tieu-vifon-suon-heo-thit-that-to-90g",
            "Hủ Tiếu Vifon Sườn Heo Thịt Thật Tô 90g",
            25000,
          ),
          createProduct(
            "hu-tieu-nam-vang-vifon-thit-that-to-90g",
            "Hủ Tiếu Nam Vang Vifon Thịt Thật Tô 90g",
            25000,
          ),
          createProduct(
            "chao-tuoi-cay-thi-luon-dau-xanh-240g",
            "Cháo Tươi Cây Thị Lươn Đậu Xanh 240g",
            34000,
          ),
          createProduct(
            "mi-vifon-bo-cay-thit-that-to-90g",
            "Mì Vifon Bò Cay Thịt Thật Tô 90g",
            23000,
          ),
          createProduct(
            "mi-shin-ramyun-ramen-to-114g",
            "Mì Shin Ramyun Ramen Tô 114g",
            48000,
          ),
          createProduct(
            "mi-omachi-xot-tom-pho-mai-to-105g",
            "Mì Omachi Xốt Tôm Phô Mai Tô 105g",
            26000,
          ),
          createProduct(
            "mi-tron-sedaap-vi-mi-xao-90g",
            "Mì Trộn Sedaap Vị Mì Xào 90g",
            8000,
          ),
          createProduct(
            "mi-tron-sedaap-ga-cay-pho-mai-86g",
            "Mì Trộn Sedaap Vị Gà Cay Phô Mai 86g",
            13000,
          ),
          createProduct(
            "mi-tron-omachi-lau-cam-tay-tomyum-ly-78g",
            "Mì Trộn Omachi Lẩu Cầm Tay Tomyum Ly 78g",
            18000,
          ),
          createProduct(
            "mi-tron-sedaap-ga-cay-han-quoc-87g",
            "Mì Trộn Sedaap Vị Gà Cay Hàn Quốc 87g",
            13000,
          ),
          createProduct(
            "pho-bo-chinsu-to-134g",
            "Phở Bò Chinsu Tô 134g",
            42000,
          ),
          createProduct(
            "mi-la-bo-de-chay-to-80g",
            "Mì Lá Bồ Đề Chay Tô 80g",
            17000,
          ),
          createProduct(
            "mi-ta-hai-tom-binh-tay-to-80g",
            "Mì Ta Hai Tôm Bình Tây Tô 80g",
            17000,
          ),
          createProduct(
            "mien-cua-binh-tay-to-55g",
            "Miến Cua Bình Tây Tô 55g",
            19000,
          ),
          createProduct(
            "mi-modern-xtreme-bo-kay-khoi-lua-66g",
            "Mì Modern Xtreme Vị Bò Kay Khói Lửa 66g",
            11000,
          ),
          createProduct(
            "mi-modern-xtreme-kimchi-bung-kay-66g",
            "Mì Modern Xtreme Vị Kimchi Bùng Kay 66g",
            13000,
          ),
          createProduct(
            "mi-omachi-quan-xa-chau-bo-ham-dai-loan-93g",
            "Mì Omachi Quán Xá Châu Á Bò Hầm Đài Loan 93g",
            37000,
          ),
          createProduct(
            "mi-omachi-quan-xa-chau-trung-thit-ca-chua",
            "Mì Omachi Quán Xá Châu Á Trứng Thịt Cà Chua",
            37000,
          ),
          createProduct(
            "mi-omachi-quan-xa-chau-tomyum-bangkok-96g",
            "Mì Omachi Quán Xá Châu Á Tomyum Bangkok 96g",
            37000,
          ),
          createProduct(
            "mi-omachi-quan-xa-chau-miso-hai-san-nhat-ban-93g",
            "Mì Omachi Quán Xá Châu Á Miso Hải Sản Nhật Bản 93g",
            37000,
          ),
          createProduct(
            "mi-modern-vi-ga-ot-hiem-ly-63g",
            "Mì Modern Vị Gà Ớt Hiểm Ly 63g",
            12000,
          ),
          createProduct(
            "mi-kho-ga-cay-carbo-ly-80g",
            "Mì Khô Gà Cay Carbo Ly 80g",
            43000,
          ),
          createProduct(
            "mi-handy-hao-hao-chay-lau-nam-ly-66g",
            "Mì Handy Hảo Hảo Chay Lẩu Nấm Ly 66g",
            14000,
          ),
          createProduct(
            "mi-tron-ta-hai-tom-binh-tay-to-100g",
            "Mì Trộn Ta Hai Tôm Bình Tây Tô 100g",
            20000,
          ),
          createProduct(
            "mi-xao-kho-goreng-cay-nong-79g",
            "Mì Xào Khô Goreng Cay Nóng 79g",
            8000,
          ),
          createProduct(
            "mi-xao-hao-hao-hai-san-75g",
            "Mì Xào Hảo Hảo Hải Sản 75g",
            6000,
          ),
          createProduct("pho-vifon-bo-goi-65g", "Phở Vifon Bò Gói 65g", 14000),
          createProduct(
            "mien-phu-huong-suon-heo-58g",
            "Miến Phú Hương Sườn Heo 58g",
            18000,
          ),
          createProduct(
            "mien-long-trieu-cua-vifon-goi-68g",
            "Miến Long Triều Cua Vifon Gói 68g",
            26000,
          ),
          createProduct(
            "sup-cay-thi-nui-thit-bam-bi-do-260g",
            "Súp Cây Thị Nui Thịt Bằm Bí Đỏ 260g",
            30000,
          ),
          createProduct(
            "chao-sg-food-to-yen-ca-hoi-240g",
            "Cháo SG Food Tổ Yến Cá Hồi 240g",
            41000,
          ),
          createProduct(
            "canh-asuzac-rong-bien-dau-hu-4g",
            "Canh Asuzac Rong Biển Đậu Hũ 4g",
            6000,
          ),
          createProduct(
            "vien-canh-isoup-canh-chua-chay",
            "Viên Canh ISoup Canh Chua Chay 5g",
            15000,
          ),
          createProduct(
            "mi-shin-xao-kho-pho-mai-goi-136g",
            "Mì Shin Xào Khô Phô Mai Gói 136g",
            39000,
          ),
          createProduct(
            "vien-canh-isoup-rau-ngot-thit-bam",
            "Viên Canh ISoup Rau Ngót Thịt Bằm 9g",
            15000,
          ),
          createProduct(
            "mi-omachi-lau-tom-cang-to-92g",
            "Mì Omachi Lẩu Tôm Càng Tô 92g",
            22000,
          ),
          createProduct(
            "mi-omachi-lau-tom-cang-80g",
            "Mì Omachi Lẩu Tôm Càng 80g",
            13000,
          ),
          createProduct(
            "mi-omachi-xot-bo-ham-to-93g",
            "Mì Omachi Xốt Bò Hầm Tô 93g",
            22000,
          ),
          createProduct(
            "mi-omachi-suon-ham-ngu-qua-80g",
            "Mì Omachi Sườn Hầm Ngũ Quả 80g",
            13000,
          ),
          createProduct(
            "mi-mama-tom-xot-kem-tomyum-55g",
            "Mì Mama Tôm Xốt Kem Tomyum 55g",
            13000,
          ),
          createProduct(
            "mi-tron-mama-trung-muoi-85g",
            "Mì Trộn Mama Vị Trứng Muối 85g",
            24000,
          ),
          createProduct(
            "mi-omachi-lau-cam-tay-tomyum-ly-71g",
            "Mì Omachi Lẩu Cầm Tay Tomyum Ly 71g",
            18000,
          ),
          createProduct(
            "mi-omachi-lau-cam-tay-tom-hum-ly-81g",
            "Mì Omachi Lẩu Cầm Tay Tôm Hùm Ly 81g",
            18000,
          ),
          createProduct(
            "mi-xao-kho-shin-ramyun-toomba-137g",
            "Mì Xào Khô Shin Ramyun Toomba 137g",
            41000,
          ),
          createProduct(
            "mi-tron-omachi-thit-xien-nuong-to-104g",
            "Mì Trộn Omachi Thịt Xiên Nướng Tô 104g",
            26000,
          ),
          createProduct(
            "mi-omachi-lau-cam-tay-tomyum-ly-68g",
            "Mì Omachi Lẩu Cầm Tay Tomyum Ly 68g",
            18000,
          ),
          createProduct(
            "mi-ly-nongshim-shin-68g",
            "Mì Ly Nongshim Shin 68g",
            35000,
          ),
          createProduct(
            "mi-ly-modern-lau-thai",
            "Mì Ly Modern Lẩu Thái",
            12000,
          ),
          createProduct(
            "mi-ly-handy-hao-hao-tom",
            "Mì Ly Handy Hảo Hảo Tôm",
            14000,
          ),
          createProduct(
            "mi-ly-handy-hao-hao-tomyum-67g",
            "Mì Ly Handy Hảo Hảo Tomyum 67g",
            14000,
          ),
          createProduct(
            "mi-ly-cung-dinh-tom-chua-cay-71g",
            "Mì Ly Cung Đình Tôm Chua Cay 71g",
            12000,
          ),
          createProduct(
            "mi-otoki-jin-khong-cay-ly-65g",
            "Mì Otoki Jin Không Cay Ly 65g",
            16000,
          ),
          createProduct(
            "mi-xao-tao-quan-thit-khay-85g",
            "Mì Xào Táo Quân Thịt Khay 85g",
            18000,
          ),
          createProduct(
            "com-trang-an-lien-ottogi-210g",
            "Cơm Trắng Ăn Liền Ottogi 210g",
            40000,
          ),
          createProduct(
            "mi-hao-hao-tom-chua-cay",
            "Mì Hảo Hảo Tôm Chua Cay",
            6000,
          ),
          createProduct(
            "mi-hao-hao-lau-kim-chi-75g",
            "Mì Hảo Hảo Lẩu Kim Chi 75g",
            6000,
          ),
          createProduct(
            "mi-the-gioi-mi-lau-thai-80g",
            "Mì Thế Giới Mì Lẩu Thái 80g",
            12000,
          ),
          createProduct(
            "mi-otoki-bo-ham-goi-120g",
            "Mì Otoki Bò Hầm Gói 120g",
            16000,
          ),
          createProduct(
            "mi-ottogi-tuong-den-135g",
            "Mì Ottogi Tương Đen 135g",
            28000,
          ),
          createProduct("mi-shin-ramyun-120g", "Mì Shin Ramyun 120g", 35000),
          createProduct(
            "mi-siukay-hai-san-128g",
            "Mì Siukay Vị Hải Sản 128g",
            18000,
          ),
          createProduct(
            "mi-kho-ga-cay-pho-mai-samyang",
            "Mì Khô Gà Cay Phô Mai Samyang",
            44000,
          ),
          createProduct(
            "mi-kho-samyang-ga-cay-goi-140g",
            "Mì Khô Samyang Gà Cay Gói 140g",
            42000,
          ),
          createProduct("mi-de-nhat-thit-bam", "Mì Đệ Nhất Thịt Bằm", 12000),
          createProduct("mi-udon-surishuki-75g", "Mì Udon SuriSuki 75g", 13000),
          createProduct(
            "mi-xao-hao-hao-chua-ngot-75g",
            "Mì Xào Hảo Hảo Chua Ngọt 75g",
            6000,
          ),
          createProduct("mi-hao-hao-chay-74g", "Mì Hảo Hảo Chay 74g", 6000),
          createProduct(
            "mien-haidilao-vi-chua-cay-ly-127g",
            "Miến Haidilao Vị Chua Cay Ly 127g",
            35000,
          ),
          createProduct(
            "mi-tron-handy-hao-hao-to",
            "Mì Trộn Handy Hảo Hảo Tô",
            22000,
          ),
          createProduct(
            "thung-30-goi-mi-hao-hao-tom",
            "Thùng 30 Gói Mì Hảo Hảo Tôm",
            172000,
          ),
          createProduct(
            "thung-30-goi-mi-the-gioi-mi-lau-thai",
            "Thùng 30 Gói Mì Thế Giới Mì Lẩu Thái",
            360000,
          ),
          createProduct(
            "mi-ly-mama-tom-tomyum-60g",
            "Mì Ly Mama Tôm Tomyum 60g",
            24000,
          ),
          createProduct(
            "thung-24-mi-siukay-hai-san",
            "Thùng 24 Mì Siukay Vị Hải Sản",
            432000,
          ),
          createProduct(
            "thung-30-goi-mi-de-nhat-thit-bam",
            "Thùng 30 Gói Mì Đệ Nhất Thịt Bằm",
            360000,
          ),
          createProduct(
            "mi-nongshim-ga-cay-to-100g",
            "Mì Nongshim Vị Gà Cay Tô 100g",
            40000,
          ),
          createProduct(
            "mi-yukgaejang-vi-cay-to-100g",
            "Mì Yukgaejang Vị Cay Tô 100g",
            40000,
          ),
          createProduct(
            "mi-nho-mai-mai-lau-thai-tom-to-84g",
            "Mì Nhớ Mãi Mãi Lẩu Thái Tôm Tô 84g",
            18000,
          ),
          createProduct(
            "mi-siukay-hai-san-to-96g",
            "Mì Siukay Hải Sản Tô 96g",
            21000,
          ),
          createProduct("chao-asuzac-thit-36g", "Cháo Asuzac Thịt 36g", 19000),
          createProduct("pho-bo-vifon-to-120g", "Phở Bò Vifon Tô 120g", 37000),
          createProduct(
            "mi-kho-kool-spaghetti-bo",
            "Mì Khô Kool Spaghetti Bò",
            20000,
          ),

          // Các sản phẩm T9 bán lẻ
          createProduct(
            "mi-ly-samyang-ga-cay-pho-mai-t9",
            "Mì Ly Samyang Gà Cay Phô Mai - T9",
            39000,
          ),
          createProduct(
            "mi-samyang-tuong-den-cay-goi-140g-t9",
            "Mì Samyang Tương Đen Cay Gói 140g - T9",
            36000,
          ),
          createProduct(
            "mi-samyang-ga-cay-ly-70g-t9",
            "Mì Samyang Gà Cay Ly 70g - T9",
            35000,
          ),
          createProduct(
            "com-trang-ottogi-210g-t9",
            "Cơm Trắng Ottogi 210g - T9",
            35000,
          ),
          createProduct(
            "my-shin-ramyun-spicy-queen-ly-68g-t9",
            "Mì Shin Ramyun Spicy Queen Ly 68g - T9",
            34000,
          ),
          createProduct(
            "mi-ramyun-kimchi-ly-75g-t9",
            "Mì Ramyun Kimchi Ly 75g - T9",
            31000,
          ),
          createProduct(
            "mi-neoguri-hai-san-cay-goi-120g-t9",
            "Mì Neoguri Hải Sản Cay Gói 120g - T9",
            28000,
          ),
          createProduct(
            "mi-omachi-tron-cua-xot-ot-to-96g-t9",
            "Mì Omachi Trộn Cua Xốt Ớt Tô 96g - T9",
            22000,
          ),
        ],
      },
    ],
  },
  {
    id: "cham-soc-ca-nhan",
    name: "Chăm Sóc Cá Nhân",
    categories: [
      { id: "bang-ve-sinh", name: "Băng vệ sinh", products: [] },
      { id: "bao-cao-su-gel", name: "Bao cao su & Gel bôi trơn", products: [] },
      { id: "cham-soc-rang-mieng", name: "Chăm sóc răng miệng", products: [] },
      { id: "sua-rua-mat", name: "Sữa rửa mặt", products: [] },
      { id: "dau-goi", name: "Dầu gội", products: [] },
      { id: "sua-tam", name: "Sữa tắm", products: [] },
      { id: "sua-duong-the", name: "Sữa dưỡng thể", products: [] },
      { id: "tay-te-bao-chet", name: "Tẩy tế bào chết", products: [] },
      { id: "lan-xit-khu-mui", name: "Lăn và xịt khử mùi", products: [] },
      { id: "kem-chong-nang", name: "Kem chống nắng", products: [] },
      { id: "dung-cu-lam-dep", name: "Dụng cụ làm đẹp", products: [] },
      { id: "dung-cu-trang-diem", name: "Dụng cụ trang điểm", products: [] },
      {
        id: "cham-soc-ca-nhan",
        name: "Dụng cụ tắm và vệ sinh cá nhân",
        products: [],
      },
    ],
  },
  {
    id: "cham-soc-nha-cua",
    name: "Chăm Sóc Nhà Cửa",
    categories: [
      { id: "dung-cu-giat-ui", name: "Dụng cụ giặt ủi", products: [] },
      { id: "khan-giay", name: "Khăn giấy các loại", products: [] },
      { id: "do-dung-nha-tam", name: "Đồ dùng nhà tắm", products: [] },
      { id: "rua-chen", name: "Rửa chén", products: [] },
      { id: "ao-mua", name: "Áo mưa", products: [] },
      { id: "diet-con-trung", name: "Diệt côn trùng", products: [] },
    ],
  },
  {
    id: "bep-phong-an",
    name: "Bếp Và Phòng Ăn",
    categories: [
      { id: "dung-cu-nha-bep", name: "Dụng cụ nhà bếp", products: [] },
    ],
  },
  {
    id: "phu-kien-dien-tu",
    name: "Phụ Kiện Điện Tử",
    categories: [
      { id: "pin-sac-du-phong", name: "Pin & Sạc dự phòng", products: [] },
    ],
  },
  {
    id: "van-phong-pham",
    name: "Văn Phòng Phẩm",
    categories: [
      { id: "vo-tap-viet", name: "Vở & Tập viết", products: [] },
      { id: "qua-tang-doc-quyen", name: "Quà tặng độc quyền", products: [] },
    ],
  },
];

export const formatPrice = (price) =>
  price == null ? "" :
  new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(
    price,
  );
