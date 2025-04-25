"use client";
import { useState, useEffect } from "react";
import FooterOne from "../components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import MovieList from "@/components/Movie/MovieList";
import SearchBar from "@/components/SearchBar/SearchBar";

export default function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchDefaultMovies = async () => {
            try {
                const res = await fetch(
                    `https://api.themoviedb.org/3/movie/popular?api_key=9c5abf0e8c038652db89b7534ed902b4&language=en-US&page=1`
                );
                const data = await res.json();
                const movies = data.results;
                console.log("movies", movies);
                setMovies(movies || []);
            } catch (err) {
                console.error("Default TMDB fetch failed:", err);
                setMovies([]);
            }
        };

        fetchDefaultMovies();
    }, []);
    //API route
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movies`);
    // const data = await res.json();
    // const movies = data.results;

    const handleResults = (movies) => {
        console.log("TMDB Search Results:", movies);
        setMovies(movies);
        // You could set these in state and render them below
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
            <div className="p-4 text-white">
                <SearchBar onResults={handleResults} />
            </div>
            <main className="main">
                <MovieList movies={movies} />
            </main>
            <FooterOne />
        </>
    );
}
