"use client";
import { useState, useEffect } from "react";
import FooterOne from "../components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import MovieList from "@/components/Movie/MovieList";
import SearchBar from "@/components/SearchBar/SearchBar";
import Pagination from "@/components/Pagination/Pagination";

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(3);

    useEffect(() => {
        fetchDefaultMovies(1);
    }, []);

    const fetchDefaultMovies = async (page) => {
        try {
            const res = await fetch(
                `https://api.themoviedb.org/3/movie/popular?api_key=9c5abf0e8c038652db89b7534ed902b4&language=en-US&page=${page}`
            );
            const data = await res.json();
            console.log("data", data);
            const movies = data.results;
            console.log("movies", movies);
            setMovies(movies || []);
            setTotalPages(data.total_pages);
            setCurrentPage(data.page);
        } catch (err) {
            console.error("Default TMDB fetch failed:", err);
            setMovies([]);
        }
    };

    const handleResults = (movies) => {
        console.log("TMDB Search Results:", movies);
        setMovies(movies);
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
            <main className="main">
                <SearchBar onResults={handleResults} />
                <MovieList movies={movies} />
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={fetchDefaultMovies}
                />
            </main>

            <FooterOne />
        </>
    );
}
