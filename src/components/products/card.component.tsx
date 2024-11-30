import { Button } from "../ui/button";
import Gallery from "./gallery.component";
// import { CiHeart } from "react-icons/ci";
import { IoHeart } from "react-icons/io5";

export default function ProductCard({
  product,
}: {
  product: { images: string[] };
}) {
  return (
    <div className="flex flex-col items-center relative justify-center rounded-md  w-[300px] h-fit shadow-md cursor-pointer">
      <div className="absolute top-10 left-0 z-[20] flex gap-2 flex-col">
        <div className="  flex items-center bg-red-500 w-fit px-2 py-1  text-white">
          15%
        </div>
        <div className=" text-[8px] font-bold text-center  flex items-center bg-black w-fit px-2 py-1  text-white">
          Free <br /> Shipping
        </div>
      </div>
      <div className="absolute top-10 right-0 shadow-md z-[20] bg-white p-1 rounded-md">
        <IoHeart className=" text-red-500   z-[20] text-[26px]" />
      </div>

      <Gallery images={product.images} />
      <h1 className=" text-sm text-[#ABABAB] ">Hoodies</h1>
      <h1 className=" text-[#7A7A7A]">Knitwear Pullover ZAK140</h1>
      <div className=" flex gap-2 mb-[25px]">
        <span className=" text-primary text-center">100 SAR</span>

        <span className=" text-[#7A7A7A] line-through text-center">
          120 SAR
        </span>
      </div>
      <Button>Add to Cart</Button>
    </div>
  );
}
