function IngredientRow({ name, quantity }) {
  return (
    <tr className="border-t border-emerald-100 odd:bg-white even:bg-emerald-50/50">
      <th scope="row" className="px-4 py-3 text-left align-top font-medium text-slate-700">
        {name}
      </th>
      <td className="px-4 py-3 align-top font-bold text-brand-green">{quantity}</td>
    </tr>
  );
}

function RecipeCard({ title, children, note }) {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-xs font-black uppercase tracking-wide text-slate-400">
          Coffee Matrix
        </p>
        <h3 className="text-lg font-black uppercase text-brand-green">{title}</h3>
      </div>
      <div className="overflow-hidden rounded-xl border border-emerald-200">
        <table className="w-full table-fixed text-left text-sm leading-6">
          <caption className="sr-only">Định lượng {title}</caption>
          <thead className="bg-brand-green text-white">
            <tr>
              <th scope="col" className="w-2/5 px-4 py-3 font-bold">Nguyên liệu</th>
              <th scope="col" className="px-4 py-3 font-bold">Định lượng</th>
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

export const drinkRecipes = {
  "ca-phe-den-da-s": {
    content: (
      <RecipeCard title="Cà phê đen đá - Size S">
        <IngredientRow name="Đường" quantity="1 pump" />
        <IngredientRow name="Cà phê" quantity="2 shot" />
      </RecipeCard>
    ),
    image: '/training/recipes/ca-phe-den.png',
  },
  "ca-phe-den-da-m": {
    content: (
      <RecipeCard title="Cà phê đen đá - Size M">
        <IngredientRow name="Đường" quantity="1 pump" />
        <IngredientRow name="Cà phê" quantity="3 shot" />
      </RecipeCard>
    ),
    image: '/training/recipes/ca-phe-den.png',
  },
  "ca-phe-den-da-l": {
    content: (
      <RecipeCard title="Cà phê đen đá - Size L">
        <IngredientRow name="Đường" quantity="1 pump" />
        <IngredientRow name="Cà phê" quantity="4 shot" />
      </RecipeCard>
    ),
    image: '/training/recipes/ca-phe-den.png',
  },
  "ca-phe-sua-da-s": {
    content: (
      <RecipeCard title="Cà phê sữa đá - Size S">
        <IngredientRow name="sữa đặc" quantity="2 pump" />
        <IngredientRow name="cà phê" quantity="2 shot" />
      </RecipeCard>
    ),
    image: '/training/recipes/ca-phe-sua.png',
  },
  "ca-phe-sua-da-m": {
    content: (
      <RecipeCard title="Cà phê sữa đá - Size M">
        <IngredientRow name="sữa đặc" quantity="2 pump" />
        <IngredientRow name="cà phê" quantity="3 shot" />
      </RecipeCard>
    ),
    image: '/training/recipes/ca-phe-sua.png',
  },
  "ca-phe-sua-da-l": {
    content: (
      <RecipeCard title="Cà phê sữa đá - Size L">
        <IngredientRow name="sữa đặc" quantity="3 pump" />
        <IngredientRow name="cà phê" quantity="4 shot" />
      </RecipeCard>
    ),
    image: '/training/recipes/ca-phe-sua.png',
  },
  "ca-phe-sua-tuoi": {
    content: (
      <RecipeCard title="Cà phê sữa tươi">
        <IngredientRow name="Sữa tươi" quantity="tới vạch trắng trên chữ “Eleven”" />
        <IngredientRow name="sữa đặc" quantity="1 pump" />
        <IngredientRow name="cà phê" quantity="1 shot" />
      </RecipeCard>
    ),
    image: '/training/recipes/sua-tuoi-ca-phe.png',
  },
  "cafe-kem-7-eleven": {
    content: (
      <RecipeCard title="Cafe Kem 7-Eleven">
        <IngredientRow name="sữa đặc" quantity="1 pump" />
        <IngredientRow name="cà phê" quantity="1 shot" />
      </RecipeCard>
    ),
    image: '/training/recipes/kem-muoi.png',
  },
  "latte-da": {
    content: (
      <RecipeCard title="Latte đá">
        <IngredientRow name="Sữa tươi" quantity="tới vạch trắng trên chữ “Eleven”" />
        <IngredientRow name="cà phê" quantity="1 shot" />
      </RecipeCard>
    ),
    image: '/training/recipes/latte.png',
  },
  "cafe-americano-da": {
    content: (
      <RecipeCard title="Cafe Americano đá">
        <IngredientRow name="nước sôi" quantity="50 ml" />
        <IngredientRow name="cà phê" quantity="2 shot" />
      </RecipeCard>
    ),
    image: '/training/recipes/americano.png',
  },
  "cold-brew-nguyen-ban": {
    content: (
      <RecipeCard title="Cold Brew nguyên bản">
        <IngredientRow name="Cold Brew" quantity="tới vạch trắng trên chữ “Eleven”" />
      </RecipeCard>
    ),
    image: '/training/recipes/cold-brew.png',
  },
  "cold-brew-tac-m": {
    content: (
      <RecipeCard title="Cold Brew tắc - Size M">
        <IngredientRow name="Cold Brew" quantity="tới vạch trắng trên chữ “Eleven”" />
        <IngredientRow name="tắc" quantity="2 pump" />
        <IngredientRow name="đường" quantity="3 pump" />
        <IngredientRow name="tắc" quantity="1 trái" />
      </RecipeCard>
    ),
    image: '/training/recipes/cold-brew-tac.png',
  },
  "cold-brew-tac-l": {
    content: (
      <RecipeCard title="Cold Brew tắc - Size L">
        <IngredientRow name="Cold Brew" quantity="tới vạch trắng trên chữ “Eleven”" />
        <IngredientRow name="tắc" quantity="3 pump" />
        <IngredientRow name="đường" quantity="4 pump" />
        <IngredientRow name="tắc" quantity="1 trái" />
      </RecipeCard>
    ),
    image: '/training/recipes/cold-brew-tac.png',
  },
  "addon-ca-phe-them": {
    content: (
      <RecipeCard
        title="Cà phê thêm"
        note="Đây là sản phẩm add-on, giá 7.000đ."
      >
        <tr><td colSpan={2} className="px-4 py-5 text-slate-500">Chưa có công thức trong Coffee Matrix.</td></tr>
      </RecipeCard>
    ),
    image: '/training/recipes/.png',
  },
  "sam-bi-dao": {
    content: (
      <RecipeCard title="Sâm bí đao">
        <IngredientRow name="Nước" quantity="1000ml" />
        <IngredientRow name="Syrup bí đao" quantity="100ml" />
      </RecipeCard>
    ),
    image: '/training/recipes/sam-bi-dao.png',
  },
};
