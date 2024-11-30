"use client";
import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "./card.component";
import { PaginationDemo } from "./pagination.component";
import { CategoryType } from "@/static/interface";

export default function Products(props: { category: CategoryType }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(4);
  const products = [
    {
      images: [
        "https://sutrastores.com/cdn/shop/files/315A7333.jpg?v=1731246029&width=600",
      ],
    },
    {
      images: [
        "https://sutrastores.com/cdn/shop/files/315A7333.jpg?v=1731246029&width=600",
      ],
    },
    {
      images: [
        "https://sutrastores.com/cdn/shop/files/315A7333.jpg?v=1731246029&width=600",
      ],
    },
    {
      images: [
        "https://sutrastores.com/cdn/shop/files/315A7333.jpg?v=1731246029&width=600",
      ],
    },
    {
      images: [
        "https://sutrastores.com/cdn/shop/files/315A8389.jpg?v=1731851916&width=600",
      ],
    },
    {
      images: [
        "https://sutrastores.com/cdn/shop/files/315A8389.jpg?v=1731851916&width=600",
      ],
    },
    {
      images: [
        "https://sutrastores.com/cdn/shop/files/315A8389.jpg?v=1731851916&width=600",
      ],
    },
    {
      images: [
        "https://sutrastores.com/cdn/shop/files/315A8389.jpg?v=1731851916&width=600",
      ],
    },
  ];

  useEffect(() => {
    const updateProductsPerPage = () => {
      if (window.innerWidth < 750) {
        setProductsPerPage(1);
      } else if (window.innerWidth < 1000) {
        setProductsPerPage(2);
      } else if (window.innerWidth < 1280) {
        setProductsPerPage(3);
      } else {
        setProductsPerPage(4);
      }
    };

    updateProductsPerPage();
    window.addEventListener("resize", updateProductsPerPage);
    return () => window.removeEventListener("resize", updateProductsPerPage);
  }, []);
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className="  flex flex-col items-center justify-center w-full h-fit object-fill px-main ">
      <h1 className="text-3xl font-light font-cairo">{props.category.name} </h1>
      <div className=" overflow-hidden  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 my-[32px]">
        {Array.from({ length: productsPerPage }).map((_, index) => (
          <ProductCard
            key={index + (currentPage - 1) * productsPerPage}
            product={products[index + (currentPage - 1) * productsPerPage]}
          />
        ))}
      </div>
      <PaginationDemo
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
