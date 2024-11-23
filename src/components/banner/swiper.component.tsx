"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper core styles
import "swiper/css/pagination"; // Optional: Add pagination styles
import "swiper/css/navigation"; // Optional: Add navigation styles

// Optional modules
import { Navigation, Pagination } from 'swiper/modules';
const SwiperCarousel = () => {
  const slides = [
    {
      image:`/images/en/banner.png`,
  
    },
    {
      image:`/images/en/banner.png`,

    },
  ];

  return (
    <Swiper
      modules={[Pagination, Navigation]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }} 
      loop={true} 
      className="rounded-lg h-full"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className={`p-8 rounded-lg h-full shadow-lg flex flex-col items-center justify-center bg-cover`}
  style={{backgroundImage:`url(${slide.image})`}}
>
            
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCarousel;
