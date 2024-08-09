import { product } from "@/services/data/product";
import React from "react";
import RecipesCard from "../molecules/RecipesCard";

export default function RecommendRecipes() {
  return (
    <section className="mt-40 px-20">
      <div className="flex w-full">
        <h2 className="my-auto w-1/2 text-4xl font-semibold text-black">
          Try this delicious recipe <br /> to make your day
        </h2>
        <p className="my-auto w-1/2 text-black text-opacity-60">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor <br /> incididunt ut labore et dolore magna aliqut enim ad
          minim{" "}
        </p>
      </div>
      <div className="mt-16 grid grid-cols-4 gap-8">
        {product.slice(0, 8).map((item) => (
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
