"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

import Link from "next/link";
import Image from "next/image";

import { movieSliderTwoData as movies } from "@/data/movie";

export default function MovieSliderTwo() {
  const swiperOptions = {
    speed: 1000,
    slidesPerView: "auto",
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    slideToClickedSlide: true,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      stretch: 10,
      depth: 0,
      modifier: 1,
      slideShadows: false,
    },
    navigation: {
      prevEl: ".prev-slide",
      nextEl: ".next-slide",
    },
    onAutoplayTimeLeft(s, time, progress) {
      const progressCircle = document.querySelector(".linear-circle");
      progressCircle.style.setProperty("--progress", 1 - progress);
    },
    modules: [Autoplay, Navigation, Pagination, EffectCoverflow],
  };
  return (
    <Swiper
      {...swiperOptions}
      className="movie-slider swiper rotate-movie-slider py-80"
    >
      {/* <!-- One --> */}
      {movies.map((movie, index) => (
        <SwiperSlide
          key={index}
          className="rotate-movie-card position-relative swiper-slide"
        >
          <div className="thumb">
            <Image src={movie.image} alt="card-img" />
          </div>
          {/* <!-- Play Button --> */}
          <Link
            href={movie.videoSrc}
            className="video-play-btn popup_video position-absolute"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="43"
              viewBox="0 0 37 43"
              fill="none"
            >
              <path
                d="M35.1842 19.7904C36.467 20.5692 36.467 22.4308 35.1842 23.2096L3.97913 42.1555C2.64629 42.9647 0.941173 42.0052 0.941173 40.4459L0.941175 2.55405C0.941175 0.994777 2.64629 0.0352452 3.97913 0.844472L35.1842 19.7904Z"
                fill="white"
              />
            </svg>
          </Link>
          <div className="content position-absolute start-0 bottom-0 w-100 text-center">
            {movie.certificates ? (
              <ul className="certificates">
                {movie.certificates.map((certificateImage, index) => (
                  <li key={index} className="d-inline-block me-4">
                    <Image src={certificateImage} alt="certificates" />
                  </li>
                ))}
              </ul>
            ) : (
              ""
            )}
            <h2 className="card-title text-uppercase lh-1">
              <Link href={movie.href} className="gradient-link">
                {movie.title}
              </Link>
            </h2>
            <ul className="movie-info-list d-flex align-item-center justify-content-center gap-1 gap-lg-2">
              <li className="movie-info-list--item style-two radius-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M8.00004 12.4493L3.05574 15.2169L4.16001 9.65938L0 5.81235L5.62676 5.14521L8.00004 0L10.3733 5.14521L16 5.81235L11.8401 9.65938L12.9443 15.2169L8.00004 12.4493Z"
                    fill="currentColor"
                  />
                </svg>
                <span>{movie.rating} Reviews</span>
              </li>
              <li className="movie-info-list--item style-two radius-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <path
                    d="M7.5 15C3.35786 15 0 11.6421 0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 11.6421 11.6421 15 7.5 15ZM8.25 7.5V3.75H6.75V9H11.25V7.5H8.25Z"
                    fill="currentColor"
                  />
                </svg>
                <span>{movie.duration}</span>
              </li>
              <li className="movie-info-list--item style-two radius-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                >
                  <path
                    d="M0.8 0H15.2C15.6418 0 16 0.3731 16 0.833333V14.1667C16 14.6269 15.6418 15 15.2 15H0.8C0.358176 15 0 14.6269 0 14.1667V0.833333C0 0.3731 0.358176 0 0.8 0ZM7.6 8.75V7.5H6.8V5H5.6V7.5H4.4V5H3.2V8.75H5.6V10H6.8V8.75H7.6ZM12.8 10L11 7.5L12.8 5H11.4L10 6.875V5H8.8V10H10V8.125L11.4 10H12.8Z"
                    fill="currentColor"
                  />
                </svg>
                <span>{movie.quality} Quality</span>
              </li>
            </ul>
            <p className="card-description">{movie.description}</p>
          </div>
        </SwiperSlide>
      ))}

      {/* <!-- Slider Button Wrapper --> */}
      <div className="slider-btn-wrapper d-flex align-item-center justify-content-center gap-4 mt-5 pt-lg-1">
        <button
          className="slider-btn slider-btn--big prev-slide"
          tabIndex="0"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="29"
            viewBox="0 0 40 29"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.91 1.5125V0.322754H15.2895V1.5125C15.2895 6.03007 12.7856 10.375 9.017 12.9489H38.3558V15.3284H9.01686C12.7856 17.9023 15.2895 22.2472 15.2895 26.7648V27.9545H12.91V26.7648C12.91 20.9162 7.71984 15.3487 1.50732 15.3285C1.496 15.3285 1.48468 15.3285 1.47336 15.3285H0.283611V15.3284V12.949V12.9489H0.284611H1.47336H1.519C7.72634 12.9217 12.91 7.35752 12.91 1.5125Z"
              fill="#fff"
            ></path>
          </svg>
        </button>
        <button
          className="slider-btn slider-btn--big next-slide"
          tabIndex="0"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="90"
            height="90"
            className="linear-circle"
          >
            <defs>
              <linearGradient id="bg_gradient">
                <stop offset="0%" stopColor="#5A0DFF" />
                <stop offset="39%" stopColor="#FF29B8" />
                <stop offset="100%" stopColor="#FF581C" />
              </linearGradient>
            </defs>
            <circle cx="24" cy="24" r="20" strokeLinecap="round"></circle>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="29"
            viewBox="0 0 40 29"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M26.4206 1.7022V0.512451H24.0411V1.7022C24.0411 6.21977 26.5449 10.5647 30.3136 13.1386H0.974731V15.5181H30.3137C26.545 18.092 24.0411 22.4369 24.0411 26.9545V28.1442H26.4206V26.9545C26.4206 21.1059 31.6107 15.5384 37.8232 15.5181C37.8346 15.5182 37.8459 15.5182 37.8572 15.5182H39.047V15.5181V13.1387V13.1386H39.046H37.8572H37.8116C31.6042 13.1114 26.4206 7.54722 26.4206 1.7022Z"
              fill="#fff"
            />
          </svg>
        </button>
      </div>
    </Swiper>
  );
}
