"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { db } from "../../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { useAuth } from "../../context/AuthContext";

const BASE_URL = "https://image.tmdb.org/t/p/w780";

export default function MovieBanner({ movie }) {
    const { user } = useAuth();
    const router = useRouter();
    console.log("movie", movie);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user) {
            alert("You must be logged in to add a movie.");
            return;
        }

        try {
            await addDoc(collection(db, "movies"), {
                id: movie.id,
                title: movie.title,
                description: movie.overview,
                image: movie.poster_path,
                rating: movie.vote_average,
                duration: movie.runtime,
                createdBy: user.uid,
                createdAt: new Date(),
            });
            // Navigate to the Playlist page
            router.reload();
        } catch (error) {
            console.error("Error adding movie:", error);
        }
    };

    console.log("movie", movie);
    console.log(`${BASE_URL}${movie.backdrop_path}`);
    return (
        <div
            className="movie-details-banner position-relative"
            style={{
                backgroundImage: `url(${BASE_URL}${movie.backdrop_path})`,
            }}
        >
            <div className="content container position-absolute bottom-0 start-50 translate-middle-x mb-60">
                <div className="row justify-content-between">
                    <div className="col-xxl-5 col-xl-6 align-self-end  mb-xl-0 mb-4">
                        <h2 className="banner-title text-uppercase mb-2">
                            {movie.title}
                        </h2>
                        <p className="banner-description pe-xl-5 me-xl-5">
                        {movie.overview}
                      </p>
                        <ul className="movie-info-list movie-production-info-list d-flex align-item-center justify-content-start gap-1 gap-lg-2 text-white">
                            <li className="movie-info-list--item style-two">
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
                                <span>{movie.vote_average} Rating</span>
                            </li>
                            <li className="movie-info-list--item style-two">
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
                                <span>{movie.runtime + "m"}</span>
                            </li>
                        </ul>
                        {user ? (
                            <Link
                                className="active hl-btn lh-1 gradient-btn fs-18 fw-bold flex-shrink-0 text-uppercase"
                                data-bs-toggle="tab"
                                href="#home"
                            >
                                <span onClick={handleSubmit} className="pt-1">
                                    Add to Playlist
                                </span>
                            </Link>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
}
