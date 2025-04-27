import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import starIcon from "@/../public/assets/images/icons/card/star-stroke.svg";
import clockIcon from "@/../public/assets/images/icons/card/clock-stroke.svg";
import qualityIcon from "@/../public/assets/images/icons/card/4k-stroke.svg";

const VideoOne = dynamic(() => import("@/components/Video/VideoOne"), {
  ssr: false,
});

const BASE_URL = "https://image.tmdb.org/t/p/w780";

export default function MovieCard({ movie }) {
  return (
    <Link href={`/movie-details/${movie.id}`} className="block">
      <div className="movie-card-small position-relative cursor-pointer transition-transform hover:scale-[1.02]">
        {/* Thumbnail */}
        <Image
          src={`${BASE_URL}/${movie.poster_path}`}
          width={780}
          height={439}
          alt="card-img"
          className="w-100"
          unoptimized
        />

        {/* Badge */}
        {movie.isRibbon && (
          <div className="movie-badge position-absolute">
            <span>{movie.count}</span>
          </div>
        )}

        {/* Details */}
        <div className="details position-absolute text-center">
          <h4 className="movie-name text-uppercase fw-normal">
            <span className="gradient-link fw-normal">{movie.title}</span>
          </h4>

          <ul className="movie-info">
            <li>
              <Image src={starIcon} alt="star" />
              <span>{movie.rating}</span>
            </li>
            <li>
              <Image src={clockIcon} alt="clock" />
              <span>{movie.duration}</span>
            </li>
            <li>
              <Image src={qualityIcon} alt="4k" />
              <span>{movie.quality} Quality</span>
            </li>
          </ul>

          {movie.categories?.length > 0 && (
            <ul className="movie-type">
              {movie.categories.map((category, index) => (
                <li key={index}>
                  {category}
                  {index < movie.categories.length - 1 ? ", " : ""}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Link>
  );
}
