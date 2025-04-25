"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { paginationOneSliderReverseData as movies } from "@/data/pagination";
import MovieCard from "../Card/MovieCard";

export default function PaginationSliderReverse() {
  const swiperReverseOptions = {
    speed: 9000,
    slidesPerView: "auto",
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
      reverseDirection: true,
    },
    modules: [Autoplay],
    breakpoints: {
      0: {
        slidesPerView: "1.2",
      },
      576: {
        slidesPerView: "1.8",
      },
      992: {
        slidesPerView: "2.5",
        spaceBetween: 20,
      },
      1366: {
        slidesPerView: "3.5",
        spaceBetween: 30,
      },
      1600: {
        slidesPerView: "3.9",
        spaceBetween: 30,
      },
    },
  };
  return (
    <Swiper
      {...swiperReverseOptions}
      className="swiper movie-card-slider-sm-reverse swiper-slider-smooth-swcroll mt-30"
    >
      {movies.map((movie, index) => (
        <SwiperSlide key={index}>
          <MovieCard movie={movie} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
