import Image from "next/image";
import Link from "next/link";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

import deleteImage from "@/../public/assets/images/icons/delete.svg";

const BASE_URL = "https://image.tmdb.org/t/p/w780";

export default function MovieListCard({ movie }) {
    const deleteMovie = async () => {
        try {
            console.log("movie.id", movie.docId);
            // Reference to the specific movie document
            const movieDocRef = doc(db, "movies", movie.docId);

            // Delete the document
            await deleteDoc(movieDocRef);

            console.log("Movie deleted successfully.");
            window.location.reload();
        } catch (error) {
            console.error("Error deleting movie: ", error);
        }
    };

    return (
        <div className="playlist--item">
            <div className="d-md-flex align-items-center gap-4">
                <div className="thumb">
                    <Image
                        src={`${BASE_URL}/${movie.image}`}
                        width={400}
                        height={200}
                        alt="playlist"
                        unoptimized
                    />
                </div>
                <div className="content">
                    <h3 className="text-uppercase lh-1 fw-medium mb-1">
                        <Link href={"#"} className="gradient-link">
                            {movie.title}
                        </Link>
                    </h3>
                    <ul className="movie-info-list d-flex align-item-center justify-content-start gap-1 gap-lg-2 mb-3">
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
                                    fill="currentColor"
                                />
                            </svg>
                            <span>{movie.rating} Reviews</span>
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
                                    fill="currentColor"
                                />
                            </svg>
                            <span>{movie.duration}</span>
                        </li>
                    </ul>
                    <p className="fw-medium lh-1 mb-0">{movie.description}</p>
                </div>
            </div>
            <button
                onClick={deleteMovie}
                className="remove-btn gradient-border-button lh-1 text-uppercase text-center fs-6 gap-2"
            >
                <Image src={deleteImage} alt="delete" />
                <span className="mt-1">{"Remove"}</span>
            </button>
        </div>
    );
}
