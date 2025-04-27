"use client";
import Link from "next/link";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { playlistMoviesData } from "@/data/movie";
import MovieListCard from "../Card/MovieListCard";

export default function PlaylistOne() {
    const [movies, setMovies] = useState([]);
    const auth = getAuth();
  const user = auth.currentUser;

    useEffect(() => {
        if (user) {
            // Query movies created by the current user
            const q = query(
                collection(db, "movies"),
                where("createdBy", "==", user.uid)
            );

            const fetchMovies = async () => {
                const querySnapshot = await getDocs(q);
                const moviesList = querySnapshot.docs.map((doc) => ({
                    docId: doc.id,
                    ...doc.data(),
                }));
                setMovies(moviesList);
            };

            fetchMovies();
        }
    }, [user]);

    return (
        <div className="playlist-area container py-80">
            <div className="nav nav-tabs border-0 d-flex align-items-center justify-content-start gap-4 mb-4">
                <Link
                    className="active hl-btn lh-1 gradient-btn fs-18 fw-bold flex-shrink-0 text-uppercase"
                    data-bs-toggle="tab"
                    href="#"
                >
                    <span className="pt-1">Your favorite movie list</span>
                </Link>
            </div>

            <div className="tab-content">
                <div className="tab-pane container active" id="home">
                    {playlistMoviesData && playlistMoviesData.length > 0 && (
                        <div className="playlist mt-4">
                            {movies.map((movie, index) => (
                                <MovieListCard key={index} movie={movie} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
