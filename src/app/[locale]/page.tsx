"use client";
import Banner from "@/components/banner/index.component";
import Category from "@/components/categories/index.component";
import Products from "@/components/products/index.component";
import { GetAllCategories } from "@/services/category";
import { CategoryType } from "@/static/interface";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["categoryPages"],
    queryFn: () => GetAllCategories({ isFeatured: true, isActive: true }, 4),
  });

  return (
    <div className=" flex flex-col h-full gap-8 mb-[40px] ">
      <div className=" min-h-full h-full">
        <Banner />
      </div>
      <Category />
      {!isLoading &&
        data.map((item: CategoryType, idx: number) => {
          return <Products key={idx} category={item} />;
        })}
    </div>
  );
}
