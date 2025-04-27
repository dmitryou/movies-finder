"use client";
import { useState, useEffect } from "react";
import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import PlaylistOne from "@/components/Playlist/PlaylistOne";

export default function Playlist() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchDefaultMovies(1);
    }, []);

    const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

    const fetchDefaultMovies = async () => {
        try {
            const page = getRandomNumber();
            const res = await fetch(
                `https://api.themoviedb.org/3/movie/popular?api_key=9c5abf0e8c038652db89b7534ed902b4&language=en-US&page=${page}`
            );
            const data = await res.json();
            console.log("data", data);
            const movies = data.results;
            console.log("movies", movies);
            setMovies(movies || []);
        } catch (err) {
            console.error("Default TMDB fetch failed:", err);
            setMovies([]);
        }
    };

    const getRandomFive = (arr) => {
        const shuffled = [...arr].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, 5);
    };

    const sliderData = {
        slides: getRandomFive(movies),
    };

    return (
        <>
            <HeaderOne data={sliderData} isHero={true} />
            {/* <!-- Start Main --> */}
            <main className="main">
                <PlaylistOne />
            </main>
            {/* <!-- End Main --> */}

            <FooterOne />
        </>
    );
}
