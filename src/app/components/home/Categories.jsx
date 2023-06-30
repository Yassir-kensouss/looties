import React from "react";
import CategoryCard from "../ui-components/CategoryCard";
import { useQuery } from "react-query";
import { fetchCategories } from "@/services/categories";
import CategoriesSkeleton from "../ui-components/skeletons/Categories";

const Categories = () => {
  const { isLoading, data } = useQuery("fetch-categories-home", async () => {
    const response = await fetchCategories();
    const data = await response.data.categories;
    return data;
  });

  return (
    <section className="mt-32">
      <h2 className="text-3xl text-zinc-800 capitalize font-semibold">
        Curated Picks
      </h2>

      {isLoading ? (
        <CategoriesSkeleton className="mt-10" />
      ) : (
        <div className="mt-10 flex flex-col lg:flex-row items-center justify-between gap-4">
          {data.map(category => (
            <CategoryCard
              key={category._id}
              label={category.name}
              photo={category.image}
              link="#"
              caption="category"
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Categories;
