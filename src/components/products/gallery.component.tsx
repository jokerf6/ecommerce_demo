import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Gallery({ images }: { images: string[] }) {
  return (
    <Carousel className="w-full group z-10">
      <CarouselPrevious className=" hidden group-hover:flex   absolute left-[20px] top-1/2 shadow-none border-none  -translate-y-1/2 z-[100]" />

      <CarouselContent>
        {images.map((image: string, index: number) => (
          <CarouselItem
            key={index}
            className="border-none rounded-none shadow-none"
          >
            <div className=" border-none shadow-none rounded-none">
              <Card className=" border-none rounded-none shadow-none">
                <CardContent className=" shadow-none border-none flex aspect-square items-center justify-center p-6">
                  <div className="relative h-full w-full shadow-none">
                    <Image src={image} alt="product" fill />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className="hidden group-hover:flex  absolute right-[20px] shadow-none border-none top-1/2 -translate-y-1/2 z-[100]" />
    </Carousel>
  );
}
