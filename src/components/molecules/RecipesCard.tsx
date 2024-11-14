import Image from "next/image";
import React from "react";
import Tag from "../atoms/Tag";

interface RecipesCardProps {
  imageSource: string;
  title: string;
  duration: number;
  category: string;
}

export default function RecipesCard({
  imageSource,
  title,
  duration,
  category,
}: RecipesCardProps) {
  return (
    <div className="card-recipes h-full w-full rounded-[30px] bg-gradient-to-t from-light-blue to-transparent px-4 pb-8 pt-4 md:w-fit">
      <div className="relative">
        <Image
          src={`${imageSource}`}
          height={250}
          width={368}
          alt="cheeseburger"
          className="mx-auto h-36 w-full rounded-3xl object-cover lg:h-60"
        />
      </div>
      <div className="mt-6">
        <h3 className="text-sm font-semibold lg:text-lg xl:text-xl">{title}</h3>
        <div className="mt-6 flex gap-x-6">
          <Tag type="duration" text={`${duration} Minutes`} />
          <Tag type="category" text={category} />
        </div>
      </div>
    </div>
  );
}
