import Image from "next/image";

interface CategoryCardType {
  imageSource: string;
  title: string;
  color: string;
}

const colorClasses: { [key: string]: string } = {
  breakfast: "from-breakfast",
  vegan: "from-vegan",
  meat: "from-meat",
  dessert: "from-dessert",
  lunch: "from-lunch",
  chocolate: "from-chocolate",
};

export default function CategoryCard({
  imageSource,
  title,
  color,
}: CategoryCardType) {
  return (
    <div
      className={`card relative h-28 w-36 rounded-[30px] bg-gradient-to-t p-7 ${
        colorClasses[color] || "from-transparent"
      }`}
    >
      <p className="absolute bottom-7 left-1/2 -translate-x-1/2 transform text-base font-semibold">
        {title}
      </p>
      <Image
        src={imageSource}
        height={100}
        width={100}
        alt="categories"
        className="absolute -top-1/2 left-1/2 mx-auto h-20 w-20 -translate-x-1/2 transform"
      />
    </div>
  );
}
