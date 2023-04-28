import React from "react";

const categories = [
  { name: "Shoes", productCount: 24 },
  { name: "Jeans", productCount: 15 },
  { name: "Accessories", productCount: 30 },
  { name: "Jackets", productCount: 8 },
];

const CategoryFilter = () => {
  return (
    <div className="mt-3">
      {categories.map(category => (
        <div className="flex items-center justify-between mb-2">
          <div class="flex items-center">
            <label for={category.name} className="flex items-center gap-1">
              <input
                type="checkbox"
                name={category.name}
                id={category.name}
                className="checkbox checkbox-sm"
              />
              {category.name}
            </label>
          </div>
          <div className="w-6 h-6 text-xs font-medium flex items-center justify-center text-zinc-700 bg-zinc-100 border-zinc-200 border-2 rounded-lg">
            {category.productCount}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;
