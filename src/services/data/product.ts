interface productType {
  id: number;
  imageSource: string;
  title: string;
  duration: number;
  category: string;
}

export const product: productType[] = [
  {
    id: 1,
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    imageSource: "/images/Cheeseburger.png",
    duration: 30,
    category: "Chicken",
  },
  {
    id: 2,
    title: "Fresh Lime Roasted Salmon with Ginger Sauce",
    imageSource: "/images/Salmon.png",
    duration: 30,
    category: "Fish",
  },
  {
    id: 3,
    title: "Strawberry Oatmeal Pancake with Honey Syrup",
    imageSource: "/images/Pancake.png",
    duration: 30,
    category: "Breakfast",
  },
  {
    id: 4,
    title: "Fresh and Healthy Mixed Mayonnaise Salad",
    imageSource: "/images/Salad.png",
    duration: 30,
    category: "Healthy",
  },
  {
    id: 5,
    title: "Chicken Meatballs with Cream Cheese",
    imageSource: "/images/Meatballs.png",
    duration: 30,
    category: "Meat",
  },
  {
    id: 6,
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    imageSource: "/images/Cheeseburger.png",
    duration: 30,
    category: "Chicken",
  },
  {
    id: 7,
    title: "Fruity Pancake with Orange & Blueberry",
    imageSource: "/images/FruityPancake.png",
    duration: 30,
    category: "Sweet",
  },
  {
    id: 8,
    title: "The Best Easy One Pot Chicken and Rice",
    imageSource: "/images/PotChicken.png",
    duration: 30,
    category: "Snacks",
  },
  {
    id: 9,
    title: "The Best Easy One Pot Chicken and Rice",
    imageSource: "/images/Pasta.png",
    duration: 30,
    category: "Noodles",
  },
];
