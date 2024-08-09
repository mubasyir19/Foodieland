import { product } from "@/services/data/product";
import RecipesCard from "../molecules/RecipesCard";

export default function ListRecipes() {
  return (
    <section className="mt-44 px-32">
      <div className="mx-auto w-1/2 text-center">
        <h2 className="text-4xl font-semibold text-black">
          Simple and tasty recipes
        </h2>
        <p className="mt-6 text-base text-black text-opacity-60">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </p>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-10">
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
