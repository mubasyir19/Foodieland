interface CategoriesType {
  id: number;
  title: string;
  color: string;
  imageSource: string;
}

export const Categories: CategoriesType[] = [
  {
    id: 1,
    title: "Breakfast",
    color: "breakfast",
    imageSource: "/images/Breakfast.png",
  },
  {
    id: 2,
    title: "Vegan",
    color: "vegan",
    imageSource: "/images/Vegan.png",
  },
  {
    id: 3,
    title: "Meat",
    color: "meat",
    imageSource: "/images/Meat.png",
  },
  {
    id: 4,
    title: "Dessert",
    color: "dessert",
    imageSource: "/images/Dessert.png",
  },
  {
    id: 5,
    title: "Lunch",
    color: "lunch",
    imageSource: "/images/Lunch.png",
  },
  {
    id: 6,
    title: "Chocolate",
    color: "chocolate",
    imageSource: "/images/Chocolate.png",
  },
];
