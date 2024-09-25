import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import MovieCard from "./MovieCard";

type CarouselProps = {
    data: any
};

const Carousel = ({ data }: CarouselProps) => {

    return (
    <Swiper
        spaceBetween={50}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
         {data.map((item: any) => (
            <SwiperSlide><MovieCard movieData={item}/></SwiperSlide>
        ))} 
      </Swiper>

    );
};

export default Carousel;
