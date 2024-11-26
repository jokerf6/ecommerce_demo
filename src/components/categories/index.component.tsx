import Image from "next/image";

export default function Category() {
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
          <div className="border-[2px] border-dashed border-yellow-400 w-[120px] h-[120px] rounded-full flex items-center justify-center">
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
