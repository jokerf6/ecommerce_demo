import Banner from "@/components/banner/index.component";
import Category from "@/components/categories/index.component";
import Products from "@/components/products/index.component";

export default function Home() {
  return (
    <div className=" flex flex-col h-full gap-8 ">
      <div className=" min-h-full h-full">
        <Banner />
      </div>
      <Category />
      <Products />
    </div>
  );
}
