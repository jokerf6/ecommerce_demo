import React from 'react'
import PromoCards from './promo.component'
import OffersCarousel from './swiper.component'

export default function Banner() {
  return (
    <div className="container mx-auto py-8 px-4 h-full ">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
      <PromoCards />

      <div className="lg:col-span-2">
        <OffersCarousel />
      </div>
    </div>
  </div>
  )
}
