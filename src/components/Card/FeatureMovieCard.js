import Image from "next/image";
import Link from "next/link";

import starIcon from "@/../public/assets/images/icons/card/star-fill.svg";
import clockIcon from "@/../public/assets/images/icons/card/clock-fill.svg";
import qualityIcon from "@/../public/assets/images/icons/card/4k-fill.svg";

export default function FeatureMovieCard({ movie }) {
  return (
    <div className="movie-card-small style-two">
      {/* <!-- Card Thumbnail --> */}
      <Link href={movie.href} className="thumb d-inline-block">
        <Image src={movie.image} alt="card-img" />
      </Link>
      {/* <!-- Movie Details --> */}
      <div className="details details-two text-center m-0 pb-0">
        <h4 className="movie-name text-uppercase">
          <Link href={movie.href} className="gradient-link">
            {movie.title}
          </Link>
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
        {movie.categories && movie.categories.length > 0 && (
          <ul className="movie-type">
            {movie.categories.map((category, index) => (
              <li key={index}>{category},</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
