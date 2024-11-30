"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import { GetAllBanners } from "@/services/banner";
import { Skeleton } from "../ui/skeleton";
export default function SwiperCarousel() {
  const { data, isLoading } = useQuery({
    queryKey: ["banners"],
    queryFn: GetAllBanners,
  });
  return (
    <>
      {!isLoading && (
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="rounded-lg h-full"
        >
          {data?.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className={`p-8 rounded-lg h-full shadow-lg flex flex-col items-center justify-center bg-cover`}
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {isLoading && <Skeleton className="w-full h-full rounded-lg" />}
    </>
  );
}
