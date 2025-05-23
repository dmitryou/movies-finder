"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    Navigation,
    Pagination,
    Autoplay,
    EffectCards,
    Scrollbar,
} from "swiper/modules";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { db } from "../../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { useAuth } from "../../context/AuthContext";
import ScreenLoader from "../ScreenLoader/ScreenLoader";

const VideoTwo = dynamic(() => import("@/components/Video/VideoTwo"), {
    ssr: false,
});

const BASE_URL = "https://image.tmdb.org/t/p/w780";

export default function HeroOne({ data }) {
    const { user } = useAuth();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const swiperHeroOptions = {
        speed: 1500,
        slidesPerView: "auto",
        initialSlide: "1",
        spaceBetween: "-70",
        centeredSlides: "true",
        slideToClickedSlide: "true",
        clickable: "true",
        allowTouchMove: "false",
        loop: "true",
        autoplay: {
            delay: 15000,
        },
        navigation: {
            prevEl: ".prev-slide",
            nextEl: ".next-slide",
        },
        onAutoplayTimeLeft(s, time, progress) {
            const progressCircle = document.querySelector(".linear-circle");
            if (progressCircle) {
                progressCircle.style.setProperty(
                    "--progress",
                    `${1 - progress}`
                );
            }
        },
        modules: [Autoplay, Pagination, Navigation],
    };

    const swiperHeroCardOptions = {
        speed: 500,
        effect: "cards",
        rotate: "false",
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },

        modules: [Pagination, Navigation, EffectCards, Scrollbar],
    };

    const handleSubmit = async (slide) => {
        if (!user) {
            alert("You must be logged in to add a movie.");
            return;
        }

        try {
            setIsLoading(true);

            await addDoc(collection(db, "movies"), {
                id: slide.id,
                title: slide.title,
                description: slide.overview,
                image: slide.backdrop_path,
                rating: slide.vote_average,
                duration: 0,
                createdBy: user.uid,
                createdAt: new Date(),
            });
            setIsLoading(false);

            // Navigate to the Playlist page
            router.push("/playlist"); // Navigate to the Playlist page
        } catch (error) {
            console.error("Error adding movie:", error);
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return <ScreenLoader />;
    }

    return (
        <>
            {data.slides && data.slides.length > 0 && (
                <Swiper
                    {...swiperHeroOptions}
                    className="swiper hero-slider-one"
                >
                    {data.slides.map((slide, index) => (
                        <SwiperSlide
                            key={index}
                            className="home-one-slider position-relative swiper-slide"
                        >
                            <div className="thumb">
                                <Image
                                    src={`${BASE_URL}${slide.backdrop_path}`}
                                    alt="card-img"
                                    className="w-100"
                                    width={500}
                                    height={200}
                                    unoptimized
                                />
                            </div>
                            <div className="container position-absolute top-50 start-50 translate-middle mt-5">
                                <div className="row justify-content-lg-between justify-content-center">
                                    <div className="col-lg-6 col-md-9 col-sm-12 align-self-center">
                                        <div className="content text-center text-lg-start">
                                            <ul className="movie-info-list d-flex align-item-center justify-content-center justify-content-lg-start gap-1 gap-lg-2">
                                                <li className="movie-info-list--item">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                    >
                                                        <path
                                                            d="M8.00004 12.4493L3.05574 15.2169L4.16001 9.65938L0 5.81235L5.62676 5.14521L8.00004 0L10.3733 5.14521L16 5.81235L11.8401 9.65938L12.9443 15.2169L8.00004 12.4493Z"
                                                            fill="#999999"
                                                        />
                                                    </svg>
                                                    <span>
                                                        {slide.vote_count}{" "}
                                                        Reviews
                                                    </span>
                                                </li>
                                                <li className="movie-info-list--item">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="15"
                                                        height="15"
                                                        viewBox="0 0 15 15"
                                                        fill="none"
                                                    >
                                                        <path
                                                            d="M7.5 15C3.35786 15 0 11.6421 0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 11.6421 11.6421 15 7.5 15ZM8.25 7.5V3.75H6.75V9H11.25V7.5H8.25Z"
                                                            fill="#999999"
                                                        />
                                                    </svg>
                                                    <span>
                                                        {slide.release_date}
                                                    </span>
                                                </li>
                                            </ul>
                                            <h2 className="banner-title fw-bold text-uppercase">
                                                {slide.title}
                                            </h2>
                                            <p className="banner-description pe-xl-5 me-xl-5">
                                                {slide.overview}
                                            </p>
                                            <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-xl-4 gap-2">
                                                {user ? (
                                                    <Link
                                                        className="active hl-btn lh-1 gradient-btn fs-18 fw-bold flex-shrink-0 text-uppercase"
                                                        data-bs-toggle="tab"
                                                        href="#home"
                                                    >
                                                        <span
                                                            onClick={() =>
                                                                handleSubmit(
                                                                    slide
                                                                )
                                                            }
                                                            className="pt-1"
                                                        >
                                                            Add to Playlist
                                                        </span>
                                                    </Link>
                                                ) : null}
                                                <VideoTwo
                                                    title={"Play Trailer"}
                                                    src="assets/video/video.mp4"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}

            {/* <!-- small slider --> */}
            <div className="hero-card-slider">
                {data.cardSlides && data.cardSlides.length > 0 && (
                    <Swiper
                        {...swiperHeroCardOptions}
                        className="swiper hero-card-slider-wrap"
                    >
                        {data.cardSlides.map((cardSlide, key) => (
                            <SwiperSlide
                                key={key}
                                className="hero-movie-card text-center swiper-slide"
                            >
                                <div className="thumb">
                                    <Image
                                        src={cardSlide.image}
                                        alt="card-img"
                                    />
                                </div>
                                <div className="content mt-3">
                                    <h3 className="card-title">
                                        {cardSlide.title}
                                    </h3>
                                    <p className="card-description">
                                        {cardSlide.description}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                        <div className="slider-btn-wrapper d-flex align-item-center justify-content-center gap-4 mt-xl-4 mt-3">
                            <button className="slider-btn slider-btn--big prev-slide">
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
                                    />
                                </svg>
                            </button>
                            <button className="slider-btn slider-btn--big next-slide">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    version="1.1"
                                    width="90"
                                    height="90"
                                    className="linear-circle"
                                >
                                    <defs>
                                        <linearGradient id="bg_gradient">
                                            <stop
                                                offset="0%"
                                                stopColor="#5A0DFF"
                                            />
                                            <stop
                                                offset="39%"
                                                stopColor="#FF29B8"
                                            />
                                            <stop
                                                offset="100%"
                                                stopColor="#FF581C"
                                            />
                                        </linearGradient>
                                    </defs>
                                    <circle
                                        cx="24"
                                        cy="24"
                                        r="20"
                                        strokeLinecap="round"
                                    ></circle>
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
                        <div className="hero-card-slider-control position-absolute ms-5 top-50 d-md-inline-block d-none">
                            <div className="slider-counter-two gap-1">
                                <div className="swiper-pagination"></div>
                            </div>
                        </div>
                    </Swiper>
                )}
            </div>
        </>
    );
}
