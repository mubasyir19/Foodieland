import HeroSection from "@/components/organisms/HeroSection";
import Inbox from "@/components/organisms/Inbox";
import InstagramPosts from "@/components/organisms/InstagramPosts";
import ListCategories from "@/components/organisms/ListCategories";
import ListRecipes from "@/components/organisms/ListRecipes";
import RecommendRecipes from "@/components/organisms/RecommendRecipes";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <ListCategories />
      <ListRecipes />
      <InstagramPosts />
      <RecommendRecipes />
      <Inbox />
    </main>
  );
}
