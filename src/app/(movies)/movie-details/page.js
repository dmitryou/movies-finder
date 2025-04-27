"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import FooterOne from "@/components/Footer/FooterOne";
import HeaderThree from "@/components/Header/HeaderThree";
import MovieCasting from "@/components/Movie/MovieCasting";

const TMDB_API_KEY = "9c5abf0e8c038652db89b7534ed902b4";

export default function MovieDetails() {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const [movie, setMovie] = useState({});
    const [casting, setCasting] = useState({});

    useEffect(() => {
        fetchMovieAndCasting();
    }, []);

    const fetchMovieAndCasting = async () => {
        try {
            const res = await fetch(
                `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}&language=en-US`
            );
            const movie = await res.json();
            const resCast = await fetch(
                `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${TMDB_API_KEY}`
            );
            const casting = await resCast.json();
            setMovie(movie);
            setCasting(casting);
        } catch (err) {
            console.error("Default TMDB fetch failed:", err);
        }
    };

    //make data for one slide
    const data = {
        slides: [{ ...movie }],
    };

    const sliderData = {
        slides: [movie],
    };

    return (
        <>
            <HeaderThree movie={movie} />
            <main className="main">
                <MovieCasting movie={movie} casting={casting} />
            </main>

            <FooterOne />
        </>
    );
}
