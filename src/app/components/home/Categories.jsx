import React from "react";
import CategoryCard from "../ui-components/CategoryCard";

const Categories = () => {
  return (
    <section className="mt-32">
      <h2 className="text-3xl text-zinc-800 capitalize font-semibold">
        Curated Picks
      </h2>

      <div className="mt-10 flex flex-col lg:flex-row items-center justify-between gap-4">
        <CategoryCard
          label="Women"
          photo="/assets/cats_2.jpg"
          link="#"
          caption="category"
        />

        <CategoryCard
          label="Men"
          photo="/assets/cats_4.jpg"
          link="#"
          caption="category"
        />

        <CategoryCard
          label="Shoes"
          photo="/assets/cats_1.jpg"
          link="#"
          caption="category"
        />

        <CategoryCard
          label="Accessories"
          photo="/assets/cats_3.jpg"
          link="#"
          caption="category"
        />
      </div>
    </section>
  );
};

export default Categories;
