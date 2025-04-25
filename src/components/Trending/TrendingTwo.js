"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { trendingMoviesTwoData as movies } from "@/data/movie";
import MovieCardTwo from "../Card/MovieCardTwo";

export default function TrendingTwo() {
  const swiperOptions = {
    speed: 500,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    navigation: {
      prevEl: ".prev-slide2",
      nextEl: ".next-slide2",
    },
    modules: [Navigation, Pagination],
    breakpoints: {
      0: {
        slidesPerView: "1.4",
      },
      576: {
        slidesPerView: "2",
      },
      768: {
        slidesPerView: "2",
      },
      992: {
        slidesPerView: "3.3",
        spaceBetween: 20,
        allowTouchMove: false,
      },
      1366: {
        slidesPerView: "5.3",
        spaceBetween: 20,
        allowTouchMove: false,
      },
    },
  };
  return (
    <>
      <div className="bg-gradient-black pt-80">
        <div className="hl-container d-flex align-items-center justify-content-between">
          <h3 className="d-inline-flex align-item-center section-header style-two mb-0 lh-1">
            <span className="section-title mt-2">Trending Now</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="40"
              viewBox="0 0 21 40"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.88911 14.9994C3.37383 10.5446 0.73813 4.55253 0 0.345635L1.96991 0C2.63631 3.79806 5.05691 9.33313 10.1458 13.4436C12.861 15.6367 16.3628 17.4461 20.8135 18.3595V21.6434C16.3628 22.5568 12.861 24.3662 10.1458 26.5593C5.05691 30.6698 2.63631 36.2048 1.96991 40.0029L0 39.6573C0.73813 35.4504 3.37383 29.4583 8.88911 25.0035C11.5757 22.8334 14.9236 21.0459 19.0292 20.0014C14.9236 18.957 11.5757 17.1695 8.88911 14.9994Z"
                fill="currentColor"
              />
            </svg>
          </h3>
          <div className="slider-btn-wrapper d-flex align-item-center justify-content-center gap-3">
            <button className="slider-btn slider-btn--sm prev-slide2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="18"
                viewBox="0 0 23 18"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.41044 1.56256V0.863892H8.8062V1.56256C8.8062 4.21543 7.33751 6.76691 5.12691 8.27841H22.3364V9.67573H5.12683C7.33747 11.1872 8.8062 13.7387 8.8062 16.3916V17.0902H7.41044V16.3916C7.41044 12.9571 4.36603 9.68764 0.721895 9.67577C0.71526 9.67578 0.70862 9.67579 0.701981 9.67579H0.00409889V9.67573V8.27847V8.27841H0.00468445H0.701981H0.72875C4.36984 8.26246 7.41044 4.99496 7.41044 1.56256Z"
                  fill="white"
                />
              </svg>
            </button>
            <button className="slider-btn next-slide slider-btn--sm next-slide2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="17"
                viewBox="0 0 23 17"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.4455 1.26104V0.562378H14.0498V1.26104C14.0498 3.91391 15.5185 6.46539 17.729 7.97689H0.519531V9.37422H17.7291C15.5185 10.8857 14.0498 13.4372 14.0498 16.0901V16.7887H15.4455V16.0901C15.4455 12.6556 18.4899 9.38613 22.1341 9.37425C22.1407 9.37427 22.1473 9.37428 22.154 9.37428H22.8519V9.37422V7.97695V7.97689H22.8513H22.154H22.1272C18.4861 7.96094 15.4455 4.69344 15.4455 1.26104Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
        {movies && movies.length > 0 && (
          <Swiper
            {...swiperOptions}
            id="trending-now"
            className="swiper newest-release-slider2 movie-card-two-container pt-60 pb-80"
          >
            {movies.map((movie, index) => (
              <SwiperSlide key={index}>
                <MovieCardTwo movie={movie} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </>
  );
}
