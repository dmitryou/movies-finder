"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import FeatureMovieCard from "@/components/Card/FeatureMovieCard";
import { featureMoviesData as movies } from "@/data/movie";

export default function FeatureMovieOne() {
  const swiperOptions = {
    slidesPerView: "auto",
    spaceBetween: 10,
    speed: 7000,
    loop: true,
    autoplay: {
      delay: 1,
      pauseOnMouseEnter: true,
    },
    modules: [Autoplay],
    breakpoints: {
      0: {
        slidesPerView: "1",
      },
      600: {
        slidesPerView: "2",
      },
      992: {
        slidesPerView: "3",
        spaceBetween: 20,
      },
      1366: {
        slidesPerView: "4",
        spaceBetween: 20,
      },
      1600: {
        slidesPerView: "4",
        spaceBetween: 30,
      },
    },
  };
  return (
    <div className="movie-wrapper-one">
      {movies && movies.length > 0 && (
        <Swiper {...swiperOptions} className="swiper trending-slider-two">
          {/* <!-- Single Small Movie Card --> */}
          {movies.map((movie, index) => (
            <SwiperSlide key={index}>
              <FeatureMovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
