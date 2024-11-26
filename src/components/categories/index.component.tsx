"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Category() {
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const circles = document.querySelectorAll(".category-circle");
    console.log(circles);
    const handleMouseEnter = (circle: Element) => {
      console.log("mouse enter");
      gsap.to(circle, {
        rotation: 360,
        duration: 1,
        ease: "power1.inOut",
      });
    };

    const handleMouseLeave = (circle: Element) => {
      gsap.to(circle, { rotation: 0, duration: 1, ease: "power1.inOut" });
    };

    circles.forEach((circle) => {
      circle.addEventListener("mouseenter", () => handleMouseEnter(circle));
      circle.addEventListener("mouseleave", () => handleMouseLeave(circle));
    });

    return () => {
      circles.forEach((circle) => {
        circle.removeEventListener("mouseenter", () =>
          handleMouseEnter(circle)
        );
        circle.removeEventListener("mouseleave", () =>
          handleMouseLeave(circle)
        );
      });
    };
  }, []);
  const categories = [
    { name: "أطقم", image: "/images/category.png" },
    { name: "بيجامة & ملابس داخلية", image: "/images/category.png" },
    { name: "تونيك", image: "/images/category.png" },
    { name: "فساتين", image: "/images/category.png" },
    { name: "قمصان & بلوزة", image: "/images/category.png" },
    { name: "جينز", image: "/images/category.png" },
    { name: "سويتشرت & بناطيل رياضية", image: "/images/category.png" },
    { name: "بلوفرات & كارديجان", image: "/images/category.png" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-6 px-4">
      {categories.map((category, index) => (
        <div
          key={index}
          className="flex flex-col items-center space-y-2 cursor-pointer"
        >
          <div
            ref={circleRef}
            className="category-circle border-[2px] border-dashed border-yellow-400 w-[120px] h-[120px] rounded-full flex items-center justify-center"
          >
            <Image
              alt={category.name}
              src={category.image}
              width={80}
              height={80}
              className="object-cover rounded-full p-2"
            />
          </div>
          <span className="text-center text-sm font-medium">
            {category.name}
          </span>
        </div>
      ))}
    </div>
  );
}
