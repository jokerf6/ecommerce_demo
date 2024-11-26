import Banner from "@/components/banner/index.component";
import Category from "@/components/categories/index.component";

export default function Home() {
  return (
    <div className=" flex flex-col h-full ">
      <div className=" min-h-full h-full">
        <Banner />
      </div>
      <Category />
    </div>
  );
}
