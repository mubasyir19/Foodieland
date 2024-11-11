import { product } from "@/services/data/product";
import RecipesCard from "../molecules/RecipesCard";

export default function ListRecipes() {
  return (
    <section className="mt-44 px-6 md:px-10 lg:px-20">
      <div className="mx-auto text-center">
        <h2 className="text-4xl font-semibold text-black">
          Simple and tasty recipes
        </h2>
        <p className="mt-6 text-base text-black text-opacity-60">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </p>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-10">
        {product.map((item) => (
          <RecipesCard
            key={item.id}
            imageSource={item.imageSource}
            title={item.title}
            duration={item.duration}
            category={item.category}
          />
        ))}
      </div>
    </section>
  );
}
