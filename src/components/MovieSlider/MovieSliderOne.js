"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import Link from "next/link";
import Image from "next/image";
import heroSliderTwoImage from "@/../public/assets/images/hero/hero-slide-2.webp";
import heroSliderOneImage from "@/../public/assets/images/hero/hero-slide-1.webp";
import certificateImageOne from '@/../public/assets/images/icons/certificate-1.webp';
import certificateImageTwo from '@/../public/assets/images/icons/certificate-2.webp';
import certificateImageThree from '@/../public/assets/images/icons/certificate-3.webp';

export default function MovieSliderOne() {
  const swiperOptions = {
    speed: 1500,
    slidesPerView: "auto",
    initialSlide: "2",
    centeredSlides: true,
    slideToClickedSlide: true,
    clickable: "true",
    allowTouchMove: false,
    loop: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    modules: [Autoplay],
    breakpoints: {
      1366: {
        spaceBetween: -50,
      },
      1600: {
        spaceBetween: -70,
      },
    },
  };
  return (
    <Swiper
      {...swiperOptions}
      className="swiper hero-slider-one style-two pt-80"
    >
      <SwiperSlide className="home-one-slider position-relative swiper-slide">
        <video
          className="video-autoplay"
          src="assets/video/video.mp4"
          preload="auto"
          muted
          autoPlay
          loop
        ></video>
        <div className="thumb">
          <Image src={heroSliderTwoImage} alt="card-img" className="w-100" />
        </div>
        <div className="container position-absolute top-50 start-50 translate-middle mt-5">
          <div className="row justify-content-lg-between justify-content-center">
            <div className="col-lg-6 col-md-9 col-sm-12 align-self-center offset-lg-6">
              <div className="content text-center text-lg-start">
                <div className="movie-info-list d-flex align-item-center justify-content-center justify-content-lg-start gap-1 gap-lg-2">
                    <Image className="me-3" src={certificateImageOne} alt="img" />
                    <Image className="me-3" src={certificateImageTwo} alt="img" />
                    <Image className="me-3" src={certificateImageThree} alt="img" />
                </div>
                <h2 className="banner-title fw-bold text-uppercase">
                  The Dark Beauty
                </h2>
                <p className="banner-description pe-xl-5 me-xl-5">
                  Enjoy your favorite moves, tv show, sports, news, Live event
                  and entertainment streaming now!
                </p>
                <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-xl-4 gap-2">
                  <Link
                    href="movie-details"
                    className="hl-btn big-btn lh-1 btn-base fs-18 fw-bold radius-20 flex-shrink-0 text-uppercase"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="15"
                      viewBox="0 0 13 15"
                      fill="none"
                    >
                      <path
                        d="M1 2.66967C1 1.90998 1 1.53013 1.16686 1.31807C1.31227 1.13326 1.53485 1.01765 1.77687 1.00119C2.05461 0.982329 2.39036 1.18772 3.06203 1.59855L10.9592 6.42893C11.542 6.78532 11.8335 6.96359 11.934 7.19025C12.022 7.38826 12.022 7.61173 11.934 7.80974C11.8335 8.0364 11.542 8.21467 10.9592 8.57106L3.06203 13.4014C2.39036 13.8123 2.05461 14.0177 1.77687 13.9988C1.53485 13.9824 1.31227 13.8667 1.16686 13.6819C1 13.4699 1 13.0901 1 12.3304V2.66967Z"
                        fill="currentColor"
                        fillOpacity="0.2"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Watch Now</span>
                  </Link>
                  <Link
                    href="assets/video/video.mp4"
                    className="popup_video hl-btn big-btn lh-1 trans-btn fs-18 radius-20 fw-medium flex-shrink-0 text-uppercase btn-inactive"
                  >
                    <svg
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 20H20V22H12C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.2512 21.2561 16.3287 20.0007 18H17.2916C18.9525 16.5341 20 14.3894 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8C14 9.10457 13.1046 10 12 10ZM8 14C6.89543 14 6 13.1046 6 12C6 10.8954 6.89543 10 8 10C9.10457 10 10 10.8954 10 12C10 13.1046 9.10457 14 8 14ZM16 14C14.8954 14 14 13.1046 14 12C14 10.8954 14.8954 10 16 10C17.1046 10 18 10.8954 18 12C18 13.1046 17.1046 14 16 14ZM12 18C10.8954 18 10 17.1046 10 16C10 14.8954 10.8954 14 12 14C13.1046 14 14 14.8954 14 16C14 17.1046 13.1046 18 12 18Z"></path>
                    </svg>
                    <span>Play Trailer </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="home-one-slider position-relative swiper-slide">
        <video
          className="video-autoplay"
          src="assets/video/video.mp4"
          preload="auto"
          muted
          autoPlay
          loop
        ></video>
        <div className="thumb">
          <Image src={heroSliderOneImage} alt="card-img" className="w-100" />
        </div>
        <div className="container position-absolute top-50 start-50 translate-middle mt-5">
          <div className="row justify-content-lg-between justify-content-center">
            <div className="col-lg-6 col-md-9 col-sm-12 align-self-center offset-lg-6">
              <div className="content text-center text-lg-start">
                <div className="movie-info-list d-flex align-item-center justify-content-center justify-content-lg-start gap-1 gap-lg-2">
                  <Image className="me-3" src={certificateImageOne} alt="img" />
                  <Image className="me-3" src={certificateImageTwo} alt="img" />
                  <Image className="me-3" src={certificateImageThree} alt="img" />
                </div>
                <h2 className="banner-title fw-bold text-uppercase">
                  The Dark Beauty
                </h2>
                <p className="banner-description pe-xl-5 me-xl-5">
                  Enjoy your favorite moves, tv show, sports, news, Live event
                  and entertainment streaming now!
                </p>
                <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-xl-4 gap-2">
                  <Link
                    href="movie-details"
                    className="hl-btn big-btn lh-1 btn-base fs-18 fw-bold radius-20 flex-shrink-0 text-uppercase"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="15"
                      viewBox="0 0 13 15"
                      fill="none"
                    >
                      <path
                        d="M1 2.66967C1 1.90998 1 1.53013 1.16686 1.31807C1.31227 1.13326 1.53485 1.01765 1.77687 1.00119C2.05461 0.982329 2.39036 1.18772 3.06203 1.59855L10.9592 6.42893C11.542 6.78532 11.8335 6.96359 11.934 7.19025C12.022 7.38826 12.022 7.61173 11.934 7.80974C11.8335 8.0364 11.542 8.21467 10.9592 8.57106L3.06203 13.4014C2.39036 13.8123 2.05461 14.0177 1.77687 13.9988C1.53485 13.9824 1.31227 13.8667 1.16686 13.6819C1 13.4699 1 13.0901 1 12.3304V2.66967Z"
                        fill="currentColor"
                        fillOpacity="0.2"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Watch Now</span>
                  </Link>
                  <Link
                    href="assets/video/video.mp4"
                    className="popup_video hl-btn big-btn lh-1 trans-btn fs-18 radius-20 fw-medium flex-shrink-0 text-uppercase btn-inactive"
                  >
                    <svg
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 20H20V22H12C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.2512 21.2561 16.3287 20.0007 18H17.2916C18.9525 16.5341 20 14.3894 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8C14 9.10457 13.1046 10 12 10ZM8 14C6.89543 14 6 13.1046 6 12C6 10.8954 6.89543 10 8 10C9.10457 10 10 10.8954 10 12C10 13.1046 9.10457 14 8 14ZM16 14C14.8954 14 14 13.1046 14 12C14 10.8954 14.8954 10 16 10C17.1046 10 18 10.8954 18 12C18 13.1046 17.1046 14 16 14ZM12 18C10.8954 18 10 17.1046 10 16C10 14.8954 10.8954 14 12 14C13.1046 14 14 14.8954 14 16C14 17.1046 13.1046 18 12 18Z"></path>
                    </svg>
                    <span>Play Trailer </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="home-one-slider position-relative swiper-slide">
        <video
          className="video-autoplay"
          src="assets/video/video.mp4"
          preload="auto"
          muted
          autoPlay
          loop
        ></video>
        <div className="thumb">
          <Image src={heroSliderOneImage} alt="card-img" className="w-100" />
        </div>
        <div className="container position-absolute top-50 start-50 translate-middle mt-5">
          <div className="row justify-content-lg-between justify-content-center">
            <div className="col-lg-6 col-md-9 col-sm-12 align-self-center offset-lg-6">
              <div className="content text-center text-lg-start">
                <div className="movie-info-list d-flex align-item-center justify-content-center justify-content-lg-start gap-1 gap-lg-2">
                  <Image className="me-3" src={certificateImageOne} alt="img" />
                  <Image className="me-3" src={certificateImageTwo} alt="img" />
                  <Image className="me-3" src={certificateImageThree} alt="img" />
                </div>
                <h2 className="banner-title fw-bold text-uppercase">
                  The Dark Beauty
                </h2>
                <p className="banner-description pe-xl-5 me-xl-5">
                  Enjoy your favorite moves, tv show, sports, news, Live event
                  and entertainment streaming now!
                </p>
                <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-xl-4 gap-2">
                  <Link
                    href="movie-details"
                    className="hl-btn big-btn lh-1 btn-base fs-18 fw-bold radius-20 flex-shrink-0 text-uppercase"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="15"
                      viewBox="0 0 13 15"
                      fill="none"
                    >
                      <path
                        d="M1 2.66967C1 1.90998 1 1.53013 1.16686 1.31807C1.31227 1.13326 1.53485 1.01765 1.77687 1.00119C2.05461 0.982329 2.39036 1.18772 3.06203 1.59855L10.9592 6.42893C11.542 6.78532 11.8335 6.96359 11.934 7.19025C12.022 7.38826 12.022 7.61173 11.934 7.80974C11.8335 8.0364 11.542 8.21467 10.9592 8.57106L3.06203 13.4014C2.39036 13.8123 2.05461 14.0177 1.77687 13.9988C1.53485 13.9824 1.31227 13.8667 1.16686 13.6819C1 13.4699 1 13.0901 1 12.3304V2.66967Z"
                        fill="currentColor"
                        fillOpacity="0.2"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Watch Now</span>
                  </Link>
                  <Link
                    href="assets/video/video.mp4"
                    className="popup_video hl-btn big-btn lh-1 trans-btn fs-18 radius-20 fw-medium flex-shrink-0 text-uppercase btn-inactive"
                  >
                    <svg
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 20H20V22H12C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.2512 21.2561 16.3287 20.0007 18H17.2916C18.9525 16.5341 20 14.3894 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8C14 9.10457 13.1046 10 12 10ZM8 14C6.89543 14 6 13.1046 6 12C6 10.8954 6.89543 10 8 10C9.10457 10 10 10.8954 10 12C10 13.1046 9.10457 14 8 14ZM16 14C14.8954 14 14 13.1046 14 12C14 10.8954 14.8954 10 16 10C17.1046 10 18 10.8954 18 12C18 13.1046 17.1046 14 16 14ZM12 18C10.8954 18 10 17.1046 10 16C10 14.8954 10.8954 14 12 14C13.1046 14 14 14.8954 14 16C14 17.1046 13.1046 18 12 18Z"></path>
                    </svg>
                    <span>Play Trailer </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
