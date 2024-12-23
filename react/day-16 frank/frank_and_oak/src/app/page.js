import Image from "next/image";
import Header from "./Comman/Header";
import Banner from "./homeComponents/Banner";
import FeaturedCategories from "./homeComponents/FeaturedCategories";

export default function Home() {
  return (
   <>
    <Header/>
    <Banner/>
    <FeaturedCategories/>
   </>
  );
}
