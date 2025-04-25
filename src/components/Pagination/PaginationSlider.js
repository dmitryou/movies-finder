"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { paginationOneSliderData as movies } from "@/data/pagination";
import MovieCard from "../Card/MovieCard";

export default function PaginationSlider() {
  const swiperOptions = {
    speed: 9000,
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
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
      {...swiperOptions}
      className="swiper movie-card-slider-sm-scroll swiper-slider-smooth-swcroll"
    >
      {movies.map((movie, index) => (
        <SwiperSlide key={index}>
          <MovieCard movie={movie} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
