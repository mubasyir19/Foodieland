import { Categories } from "@/services/data/categories";
import Link from "next/link";
import CategoryCard from "../molecules/CategoryCard";

export default function ListCategories() {
  return (
    <section className="mt-40 px-20">
      <div className="flex justify-between">
        <h2 className="my-auto text-3xl font-semibold text-black">
          Categories
        </h2>
        <Link
          href="#"
          className="my-auto rounded-2xl bg-light-blue px-6 py-4 text-sm font-semibold text-black"
        >
          View All Categories
        </Link>
      </div>
      <div className="mx-auto mt-32 grid w-11/12 grid-cols-6">
        {Categories.map((item) => (
          <CategoryCard
            key={item.id}
            title={item.title}
            color={item.color}
            imageSource={item.imageSource}
          />
        ))}
      </div>
    </section>
  );
}
