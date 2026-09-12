function IngredientRow({ name, quantity }) {
  return (
    <tr className="border-t border-emerald-100 odd:bg-white even:bg-emerald-50/50">
      <th
        scope="row"
        className="px-4 py-3 text-left align-top font-medium text-slate-700"
      >
        {name}
      </th>
      <td className="px-4 py-3 align-top font-bold text-brand-green">
        {quantity}
      </td>
    </tr>
  );
}

function RecipeCard({ title, children, note, label = "Coffee Matrix" }) {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-xs font-black uppercase tracking-wide text-slate-400">
          {label}
        </p>
        <h3 className="text-lg font-black uppercase text-brand-green">
          {title}
        </h3>
      </div>
      <div className="overflow-hidden rounded-xl border border-emerald-200">
        <table className="w-full table-fixed text-left text-sm leading-6">
          <caption className="sr-only">Định lượng {title}</caption>
          <thead className="bg-brand-green text-white">
            <tr>
              <th scope="col" className="w-2/5 px-4 py-3 font-bold">
                Nguyên liệu
              </th>
              <th scope="col" className="px-4 py-3 font-bold">
                Định lượng
              </th>
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
      {note && (
        <p className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <strong>Lưu ý:</strong> {note}
        </p>
      )}
    </div>
  );
}

function TeaBaseCard({ title, tea, mix, kumquat = "—", yieldAmount }) {
  return (
    <RecipeCard title={title} label="Công thức cốt trà · 1 mẻ">
      <IngredientRow name="Base trà" quantity={tea} />
      <IngredientRow name="Nước nóng" quantity="700 ml" />
      <IngredientRow name="Thời gian ủ" quantity="11 phút" />
      <IngredientRow name="Nước đá" quantity="1 ca 500 ml" />
      <IngredientRow name="Mứt / Syrup / Đường" quantity={mix} />
      <IngredientRow name="Tắc tươi" quantity={kumquat} />
      <IngredientRow name="Thu được" quantity={yieldAmount} />
    </RecipeCard>
  );
}

// Mỗi công thức có content (JSX) và image (đường dẫn ảnh).
// Món cần làm cốt trà trước: thêm teaBase: { content: <...>, image: "/..." }.
// Đặt teaBase ở khóa product.id để dùng chung cho mọi size, hoặc ở khóa
// variant.id để ghi đè theo size. teaBase: null bỏ phần cốt trà ở size đó.
// Ví dụ cấu trúc (thay bằng công thức và ảnh thực tế):
// "id-mon": { teaBase: { content: <p>Hướng dẫn làm cốt trà</p>, image: "/training/recipes/cot-tra.png" } },
// "id-mon-s": { content: <p>Hướng dẫn pha size S</p>, image: "/training/recipes/mon-s.png" },
function createCalamansiRecipes(productId, productName) {
  return Object.fromEntries(
  [["s", 2], ["m", 2], ["l", 3], ["xl", 4]].flatMap(([size, kumquat]) => {
    const recipe = {
      content: (
        <RecipeCard title={`${productName} - Size ${size.toUpperCase()}`} label="Công thức pha món nước">
          <IngredientRow name="Cốt trà" quantity="Vạch trắng trên Eleven" />
          <IngredientRow name="Syrup mía xanh" quantity="1" />
          <IngredientRow name="Tắc tươi" quantity={`${kumquat} trái`} />
        </RecipeCard>
      ),
    };

    // Hai nhóm trong danh mục hiện dùng hai kiểu ID size khác nhau.
    return [
      [`${productId}-${size}`, recipe],
      [`${productId}-size-${size}`, recipe],
    ];
  }),
);
}

export const drinkRecipes = {
  ...createCalamansiRecipes("tra-tac-nha-bay", "Trà Tắc"),
  ...createCalamansiRecipes("olong-mai-mo", "Oolong Mai Mơ"),
  ...createCalamansiRecipes("olong-xuan-dao", "Oolong Xuân Đào"),
  ...createCalamansiRecipes("olong-hong-le-chi", "Oolong Hồng Lệ Chi"),
  ...createCalamansiRecipes("hong-tra-tuoi-tho", "Hồng Trà Tươi Thơ"),
  "olong-mai-mo": {
    sizes: ["S", "M", "L", "XL"],
    teaBase: {
      content: <TeaBaseCard title="Mẻ Oolong Mai Mơ" tea="3 túi trà Oolong" mix="15 muỗng mứt mơ vàng + 2 muỗng mứt xí muội" yieldAmount="1.109 ml" />,
      image: "/training/recipes/olong-mai-mo-base.png",
    },
  },
  "olong-xuan-dao": {
    sizes: ["S", "M", "L", "XL"],
    teaBase: {
      content: <TeaBaseCard title="Mẻ Oolong Xuân Đào" tea="3 túi trà Oolong" mix="10 muỗng mứt đào nhài" kumquat="5 trái" yieldAmount="987 ml" />,
      image: "/training/recipes/olong-xuan-dao-base.png",
    },
  },
  "olong-hong-le-chi": {
    sizes: ["S", "M", "L", "XL"],
    teaBase: {
      content: <TeaBaseCard title="Mẻ Oolong Hồng Lệ Chi" tea="3 túi trà Oolong" mix="10 muỗng mứt vải" kumquat="5 trái" yieldAmount="987 ml" />,
      image: "/training/recipes/olong-hong-le-chi-base.png",
    },
  },
  // Các món này chưa có trong productCatalog; dùng cùng ID khi thêm món.
  "tra-oi-hong": {
    teaBase: {
      content: <TeaBaseCard title="Mẻ Trà Ổi Hồng" tea="3 túi trà lài 300 g" mix="11 muỗng mứt ổi hồng + 10 pump đường" yieldAmount="1.209 ml" />,
      image: "/training/recipes/tra-oi-hong-base.png",
    },
  },
  "tra-mang-cau": {
    teaBase: {
      content: <TeaBaseCard title="Mẻ Trà Mãng Cầu" tea="3 túi trà lài 300 g" mix="11 muỗng mứt mãng cầu + 10 pump đường" yieldAmount="1.209 ml" />,
      image: "/training/recipes/tra-mang-cau-base.png",
    },
  },
  "tra-tac-tuoi-hong": {
    teaBase: {
      content: <TeaBaseCard title="Mẻ Trà Tắc Tươi Hồng" tea="3 túi trà lài Savo" mix="3 muỗng mứt xí muội + 6 pump nước cốt tắc + 150 g đường cát" yieldAmount="985 ml" />,
      image: "/training/recipes/tra-tac-tuoi-hong-base.png",
    },
  },
  "tra-tac-nha-bay": {
    sizes: ["S", "M", "L", "XL"],
    teaBase: {
      content: <TeaBaseCard title="Mẻ Trà Tắc" tea="3 túi trà lài Savo" mix="6 pump nước cốt tắc + 150 g đường cát" yieldAmount="985 ml" />,
      image: "/training/recipes/tra-tac-base.png",
    },
  },
  "hong-tra-tuoi-tho": {
    sizes: ["S", "M", "L", "XL"],
    teaBase: {
      content: <TeaBaseCard title="Mẻ Hồng Trà Tươi Thơ" tea="4 túi hồng trà 300 g" mix="6 pump nước cốt tắc + 150 g đường cát" yieldAmount="985 ml" />,
      image: "/training/recipes/hong-tra-tuoi-tho-base.png",
    },
  },
  "meiji-ube-matcha-s": {
    content: (
      <RecipeCard title="Meiji Ube Matcha IX - Size S">
        <IngredientRow name="BTP Ube" quantity="Đổ tới ngấn ly thứ hai" />
        <IngredientRow name="Syrup mía xanh" quantity="1 pump (7,5 ml)" />
        <IngredientRow name="Đá" quantity="Đá đầy ly" />
        <IngredientRow
          name="Sữa tươi Meiji"
          quantity="Đong đến vạch trắng trên số 7"
        />
      </RecipeCard>
    ),
    image: "/training/recipes/meiji-ube-matcha.png",
  },
  "meiji-ube-matcha-m": {
    content: (
      <RecipeCard title="Meiji Ube Matcha IX - Size M">
        <IngredientRow name="BTP Ube" quantity="Đổ tới ngấn ly thứ hai" />
        <IngredientRow name="Syrup mía xanh" quantity="1 pump (7,5 ml)" />
        <IngredientRow name="Đá" quantity="Đá đầy ly" />
        <IngredientRow
          name="Sữa tươi Meiji"
          quantity="Đong đến vạch trắng trên số 7"
        />
      </RecipeCard>
    ),
    image: "/training/recipes/meiji-ube-matcha.png",
  },
  "meiji-ube-matcha-l": {
    content: (
      <RecipeCard title="Meiji Ube Matcha IX - Size L">
        <IngredientRow name="BTP Ube" quantity="Đổ tới ngấn ly thứ hai" />
        <IngredientRow name="Syrup mía xanh" quantity="1 pump (7,5 ml)" />
        <IngredientRow name="Đá" quantity="Đá đầy ly" />
        <IngredientRow
          name="Sữa tươi Meiji"
          quantity="Đong đến vạch trắng trên số 7"
        />
      </RecipeCard>
    ),
    image: "/training/recipes/meiji-ube-matcha.png",
  },
  "meiji-pistachio-matcha-s": {
    content: (
      <RecipeCard title="Meiji Pistachio Matcha IX - Size S">
        <IngredientRow name="BTP Pistachio" quantity="Đổ tới ngấn ly thứ hai" />
        <IngredientRow name="Syrup mía xanh" quantity="1 pump (7,5 ml)" />
        <IngredientRow name="Đá" quantity="Đá đầy ly" />
        <IngredientRow
          name="Sữa tươi Meiji"
          quantity="Đong đến vạch trắng trên số 7"
        />
      </RecipeCard>
    ),
    image: "/training/recipes/meiji-pistachio-matcha.png",
  },
  "meiji-pistachio-matcha-m": {
    content: (
      <RecipeCard title="Meiji Pistachio Matcha IX - Size M">
        <IngredientRow name="BTP Pistachio" quantity="Đổ tới ngấn ly thứ hai" />
        <IngredientRow name="Syrup mía xanh" quantity="1 pump (7,5 ml)" />
        <IngredientRow name="Đá" quantity="Đá đầy ly" />
        <IngredientRow
          name="Sữa tươi Meiji"
          quantity="Đong đến vạch trắng trên số 7"
        />
      </RecipeCard>
    ),
    image: "/training/recipes/meiji-pistachio-matcha.png",
  },
  "meiji-pistachio-matcha-l": {
    content: (
      <RecipeCard title="Meiji Pistachio Matcha IX - Size L">
        <IngredientRow name="BTP Pistachio" quantity="Đổ tới ngấn ly thứ hai" />
        <IngredientRow name="Syrup mía xanh" quantity="1 pump (7,5 ml)" />
        <IngredientRow name="Đá" quantity="Đá đầy ly" />
        <IngredientRow
          name="Sữa tươi Meiji"
          quantity="Đong đến vạch trắng trên số 7"
        />
      </RecipeCard>
    ),
    image: "/training/recipes/meiji-pistachio-matcha.png",
  },
  "meiji-coco-matcha-s": {
    content: (
      <RecipeCard title="Meiji Coco Matcha IX - Size S">
        <IngredientRow
          name="Nước dừa sen"
          quantity="Đong đến vạch trắng trên Eleven"
        />
        <IngredientRow name="Syrup mía xanh" quantity="1 pump (7,5 ml)" />
      </RecipeCard>
    ),
    image: "/training/recipes/meiji-coco-matcha.png",
  },
  "meiji-coco-matcha-m": {
    content: (
      <RecipeCard title="Meiji Coco Matcha IX - Size M">
        <IngredientRow
          name="Nước dừa sen"
          quantity="Đong đến vạch trắng trên Eleven"
        />
        <IngredientRow name="Syrup mía xanh" quantity="2 pump (15 ml)" />
      </RecipeCard>
    ),
    image: "/training/recipes/meiji-coco-matcha.png",
  },
  "meiji-coco-matcha-l": {
    content: (
      <RecipeCard title="Meiji Coco Matcha IX - Size L">
        <IngredientRow
          name="Nước dừa sen"
          quantity="Đong đến vạch trắng trên Eleven"
        />
        <IngredientRow name="Syrup mía xanh" quantity="2 pump (15 ml)" />
      </RecipeCard>
    ),
    image: "/training/recipes/meiji-coco-matcha.png",
  },
  "meiji-matcha-s": {
    content: (
      <RecipeCard title="Meiji Matcha Latte IX - Size S">
        <IngredientRow
          name="Sữa tươi Meiji"
          quantity="Đong đến vạch trắng trên Eleven"
        />
        <IngredientRow name="Sữa đặc có đường" quantity="1 pump (15 ml)" />
      </RecipeCard>
    ),
    image: "/training/recipes/meiji-matcha-latte.png",
  },
  "meiji-matcha-m": {
    content: (
      <RecipeCard title="Meiji Matcha Latte IX - Size M">
        <IngredientRow
          name="Sữa tươi Meiji"
          quantity="Đong đến vạch trắng trên Eleven"
        />
        <IngredientRow name="Sữa đặc có đường" quantity="1 pump (15 ml)" />
      </RecipeCard>
    ),
    image: "/training/recipes/meiji-matcha-latte.png",
  },
  "meiji-matcha-l": {
    content: (
      <RecipeCard title="Meiji Matcha Latte IX - Size L">
        <IngredientRow
          name="Sữa tươi Meiji"
          quantity="Đong đến vạch trắng trên Eleven"
        />
        <IngredientRow name="Sữa đặc có đường" quantity="1 pump (15 ml)" />
      </RecipeCard>
    ),
    image: "/training/recipes/meiji-matcha-latte.png",
  },
  "ca-phe-den-da-s": {
    content: (
      <RecipeCard title="Cà phê đen đá - Size S">
        <IngredientRow name="Đường" quantity="1 pump" />
        <IngredientRow name="Cà phê" quantity="2 shot" />
      </RecipeCard>
    ),
    image: "/training/recipes/ca-phe-den.png",
  },
  "ca-phe-den-da-m": {
    content: (
      <RecipeCard title="Cà phê đen đá - Size M">
        <IngredientRow name="Đường" quantity="1 pump" />
        <IngredientRow name="Cà phê" quantity="3 shot" />
      </RecipeCard>
    ),
    image: "/training/recipes/ca-phe-den.png",
  },
  "ca-phe-den-da-l": {
    content: (
      <RecipeCard title="Cà phê đen đá - Size L">
        <IngredientRow name="Đường" quantity="1 pump" />
        <IngredientRow name="Cà phê" quantity="4 shot" />
      </RecipeCard>
    ),
    image: "/training/recipes/ca-phe-den.png",
  },
  "ca-phe-sua-da-s": {
    content: (
      <RecipeCard title="Cà phê sữa đá - Size S">
        <IngredientRow name="Sữa đặc" quantity="2 pump" />
        <IngredientRow name="Cà phê" quantity="2 shot" />
      </RecipeCard>
    ),
    image: "/training/recipes/ca-phe-sua.png",
  },
  "ca-phe-sua-da-m": {
    content: (
      <RecipeCard title="Cà phê sữa đá - Size M">
        <IngredientRow name="Sữa đặc" quantity="2 pump" />
        <IngredientRow name="Cà phê" quantity="3 shot" />
      </RecipeCard>
    ),
    image: "/training/recipes/ca-phe-sua.png",
  },
  "ca-phe-sua-da-l": {
    content: (
      <RecipeCard title="Cà phê sữa đá - Size L">
        <IngredientRow name="Sữa đặc" quantity="3 pump" />
        <IngredientRow name="Cà phê" quantity="4 shot" />
      </RecipeCard>
    ),
    image: "/training/recipes/ca-phe-sua.png",
  },
  "ca-phe-sua-tuoi": {
    content: (
      <RecipeCard title="Cà phê sữa tươi">
        <IngredientRow
          name="Sữa tươi"
          quantity="tới vạch trắng trên chữ “Eleven”"
        />
        <IngredientRow name="sữa đặc" quantity="1 pump" />
        <IngredientRow name="cà phê" quantity="1 shot" />
      </RecipeCard>
    ),
    image: "/training/recipes/sua-tuoi-ca-phe.png",
  },
  "cafe-kem-7-eleven": {
    content: (
      <RecipeCard title="Cafe Kem 7-Eleven">
        <IngredientRow name="sữa đặc" quantity="1 pump" />
        <IngredientRow name="cà phê" quantity="1 shot" />
      </RecipeCard>
    ),
    image: "/training/recipes/kem-muoi.png",
  },
  "latte-da": {
    content: (
      <RecipeCard title="Latte đá">
        <IngredientRow
          name="Sữa tươi"
          quantity="tới vạch trắng trên chữ “Eleven”"
        />
        <IngredientRow name="Cà phê" quantity="1 shot" />
      </RecipeCard>
    ),
    image: "/training/recipes/latte.png",
  },
  "cafe-americano-da": {
    content: (
      <RecipeCard title="Cafe Americano đá">
        <IngredientRow name="Nước sôi" quantity="50 ml" />
        <IngredientRow name="Cà phê" quantity="2 shot" />
      </RecipeCard>
    ),
    image: "/training/recipes/americano.png",
  },
  "cold-brew-nguyen-ban": {
    content: (
      <RecipeCard title="Cold Brew nguyên bản">
        <IngredientRow
          name="Cold Brew"
          quantity="tới vạch trắng trên chữ “Eleven”"
        />
      </RecipeCard>
    ),
    image: "/training/recipes/cold-brew.png",
  },
  "cold-brew-tac-m": {
    content: (
      <RecipeCard title="Cold Brew tắc - Size M">
        <IngredientRow
          name="Cold Brew"
          quantity="tới vạch trắng trên chữ “Eleven”"
        />
        <IngredientRow name="Tắc" quantity="2 pump" />
        <IngredientRow name="Đường" quantity="3 pump" />
        <IngredientRow name="Tắc" quantity="1 trái" />
      </RecipeCard>
    ),
    image: "/training/recipes/cold-brew-tac.png",
  },
  "cold-brew-tac-l": {
    content: (
      <RecipeCard title="Cold Brew tắc - Size L">
        <IngredientRow
          name="Cold Brew"
          quantity="tới vạch trắng trên chữ “Eleven”"
        />
        <IngredientRow name="Tắc" quantity="3 pump" />
        <IngredientRow name="Đường" quantity="4 pump" />
        <IngredientRow name="Tắc" quantity="1 trái" />
      </RecipeCard>
    ),
    image: "/training/recipes/cold-brew-tac.png",
  },
  "addon-ca-phe-them": {
    content: (
      <RecipeCard
        title="Cà phê thêm"
        note="Đây là sản phẩm add-on, giá 7.000đ."
      >
        <tr>
          <td colSpan={2} className="px-4 py-5 text-slate-500">
            Chưa có công thức trong Coffee Matrix.
          </td>
        </tr>
      </RecipeCard>
    ),
    image: "/training/recipes/.png",
  },
  "sam-bi-dao": {
    content: (
      <RecipeCard title="Sâm bí đao">
        <IngredientRow name="Nước" quantity="1000ml" />
        <IngredientRow name="Syrup bí đao" quantity="100ml" />
      </RecipeCard>
    ),
    image: "/training/recipes/sam-bi-dao.png",
  },
  "meiji-sunny-banana-matcha-s": {
    content: (
      <RecipeCard title="Meiji Sunny Banana Matcha IX - Size S">
        <IngredientRow name="BTP Matcha" quantity="2 muỗng (muỗng 20 ml)" />
        <IngredientRow name="Sữa đặc có đường" quantity="1 pump" />
        <IngredientRow name="Đá" quantity="Đá đầy ly" />
        <IngredientRow
          name="Sữa tươi Meiji"
          quantity="Đong đến vạch trắng trên số 7"
        />
        <IngredientRow
          name="Foam chuối"
          quantity="Xịt 2 vòng, cách miệng ly 1 cm"
        />
        <IngredientRow name="Top seal và dao rọc nhựa" quantity="1" />
      </RecipeCard>
    ),
    image: "/training/recipes/meiji-sunny-banana.png",
  },

  "meiji-sunny-banana-matcha-m": {
    content: (
      <RecipeCard title="Meiji Sunny Banana Matcha IX - Size M">
        <IngredientRow name="BTP Matcha" quantity="2 muỗng (muỗng 20 ml)" />
        <IngredientRow name="Sữa đặc có đường" quantity="1 pump" />
        <IngredientRow name="Đá" quantity="Đá đầy ly" />
        <IngredientRow
          name="Sữa tươi Meiji"
          quantity="Đong đến vạch trắng trên số 7"
        />
        <IngredientRow
          name="Foam chuối"
          quantity="Xịt 2 vòng, cách miệng ly 1 cm"
        />
        <IngredientRow name="Top seal và dao rọc nhựa" quantity="1" />
      </RecipeCard>
    ),
    image: "/training/recipes/meiji-sunny-banana.png",
  },

  "meiji-sunny-banana-matcha-l": {
    content: (
      <RecipeCard title="Meiji Sunny Banana Matcha IX - Size L">
        <IngredientRow name="BTP Matcha" quantity="3 muỗng (muỗng 20 ml)" />
        <IngredientRow name="Sữa đặc có đường" quantity="1 pump" />
        <IngredientRow name="Đá" quantity="Đá đầy ly" />
        <IngredientRow
          name="Sữa tươi Meiji"
          quantity="Đong đến vạch trắng trên số 7"
        />
        <IngredientRow
          name="Foam chuối"
          quantity="Xịt 2 vòng, cách miệng ly 1 cm"
        />
        <IngredientRow name="Top seal và dao rọc nhựa" quantity="1" />
      </RecipeCard>
    ),
    image: "/training/recipes/meiji-sunny-banana.png",
  },

  "meiji-pinky-strawberry-matcha-s": {
    content: (
      <RecipeCard title="Meiji Pinky Strawberry Matcha IX - Size S">
        <IngredientRow name="BTP Matcha" quantity="2 muỗng (muỗng 20 ml)" />
        <IngredientRow name="Sữa đặc có đường" quantity="1 pump" />
        <IngredientRow name="Đá" quantity="Đá đầy ly" />
        <IngredientRow
          name="Sữa tươi Meiji"
          quantity="Đong đến vạch trắng trên số 7"
        />
        <IngredientRow
          name="Foam dâu"
          quantity="Xịt 2 vòng, cách miệng ly 1 cm"
        />
        <IngredientRow name="Top seal và dao rọc nhựa" quantity="1 bộ" />
      </RecipeCard>
    ),
    image: "/training/recipes/meiji-pinky-strawberry.png",
  },

  "meiji-pinky-strawberry-matcha-m": {
    content: (
      <RecipeCard title="Meiji Pinky Strawberry Matcha IX - Size M">
        <IngredientRow name="BTP Matcha" quantity="2 muỗng (muỗng 20 ml)" />
        <IngredientRow name="Sữa đặc có đường" quantity="1 pump" />
        <IngredientRow name="Đá" quantity="Đá đầy ly" />
        <IngredientRow
          name="Sữa tươi Meiji"
          quantity="Đong đến vạch trắng trên số 7"
        />
        <IngredientRow
          name="Foam dâu"
          quantity="Xịt 2 vòng, cách miệng ly 1 cm"
        />
        <IngredientRow name="Top seal và dao rọc nhựa" quantity="1" />
      </RecipeCard>
    ),
    image: "/training/recipes/meiji-pinky-strawberry.png",
  },

  "meiji-pinky-strawberry-matcha-l": {
    content: (
      <RecipeCard title="Meiji Pinky Strawberry Matcha IX - Size L">
        <IngredientRow name="BTP Matcha" quantity="3 muỗng (muỗng 20 ml)" />
        <IngredientRow name="Sữa đặc có đường" quantity="1 pump" />
        <IngredientRow name="Đá" quantity="Đá đầy ly" />
        <IngredientRow
          name="Sữa tươi Meiji"
          quantity="Đong đến vạch trắng trên số 7"
        />
        <IngredientRow
          name="Foam dâu"
          quantity="Xịt 2 vòng, cách miệng ly 1 cm"
        />
        <IngredientRow name="Top seal và dao rọc nhựa" quantity="1" />
      </RecipeCard>
    ),
    image: "/training/recipes/meiji-pinky-strawberry.png",
  },

  "meiji-browny-choco-matcha-s": {
    content: (
      <RecipeCard title="Meiji Browny Choco Matcha IX - Size S">
        <IngredientRow name="BTP Matcha" quantity="2 muỗng (muỗng 20 ml)" />
        <IngredientRow name="Sữa đặc có đường" quantity="1 pump" />
        <IngredientRow name="Đá" quantity="Đá đầy ly" />
        <IngredientRow
          name="Sữa tươi Meiji"
          quantity="Đong đến vạch trắng trên số 7"
        />
        <IngredientRow
          name="Foam choco"
          quantity="Xịt 2 vòng, cách miệng ly 1 cm"
        />
        <IngredientRow name="Top seal và dao rọc nhựa" quantity="1" />
      </RecipeCard>
    ),
    image: "/training/recipes/meiji-browny-choco-matcha.png",
  },

  "meiji-browny-choco-matcha-m": {
    content: (
      <RecipeCard title="Meiji Browny Choco Matcha IX - Size M">
        <IngredientRow name="BTP Matcha" quantity="2 muỗng (muỗng 20 ml)" />
        <IngredientRow name="Sữa đặc có đường" quantity="1 pump" />
        <IngredientRow name="Đá" quantity="Đá đầy ly" />
        <IngredientRow
          name="Sữa tươi Meiji"
          quantity="Đong đến vạch trắng trên số 7"
        />
        <IngredientRow
          name="Foam choco"
          quantity="Xịt 2 vòng, cách miệng ly 1 cm"
        />
        <IngredientRow name="Top seal và dao rọc nhựa" quantity="1 bộ" />
      </RecipeCard>
    ),
    image: "/training/recipes/meiji-browny-choco-matcha.png",
  },

  "meiji-browny-choco-matcha-l": {
    content: (
      <RecipeCard title="Meiji Browny Choco Matcha IX - Size L">
        <IngredientRow name="BTP Matcha" quantity="3 muỗng (muỗng 20 ml)" />
        <IngredientRow name="Sữa đặc có đường" quantity="1 pump" />
        <IngredientRow name="Đá" quantity="Đá đầy ly" />
        <IngredientRow
          name="Sữa tươi Meiji"
          quantity="Đong đến vạch trắng trên số 7"
        />
        <IngredientRow
          name="Foam choco"
          quantity="Xịt 2 vòng, cách miệng ly 1 cm"
        />
        <IngredientRow name="Top seal và dao rọc nhựa" quantity="1 bộ" />
      </RecipeCard>
    ),
    image: "/training/recipes/meiji-browny-choco-matcha.png",
  },
};
