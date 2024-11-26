import Gallery from "./gallery.component";

export default function ProductCard({
  product,
}: {
  product: { images: string[] };
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-md  w-[300px] h-fit shadow-md cursor-pointer">
      <Gallery images={product.images} />
      <h1 className=" text-sm text-[#ABABAB] ">Hoodies</h1>
      <h1 className=" text-[#7A7A7A]">Knitwear Pullover ZAK140</h1>
      <div className=" flex gap-2 mb-[25px]">
        <span className=" text-primary text-center">100 SAR</span>

        <span className=" text-[#7A7A7A] line-through text-center">
          120 SAR
        </span>
      </div>
    </div>
  );
}
