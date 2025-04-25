import Image from "next/image";
import Link from "next/link";

import deleteImage from "@/../public/assets/images/icons/delete.svg";

export default function MovieListCard({ movie }) {
  return (
    <div className="playlist--item">
      <div className="d-md-flex align-items-center gap-4">
        <div className="thumb">
          <Image src={movie.image} alt="playlist" />
        </div>
        <div className="content">
          <h3 className="text-uppercase lh-1 fw-medium mb-1">
            <Link href={movie.href} className="gradient-link">
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
            <li className="movie-info-list--item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
              >
                <path
                  d="M0.8 0H15.2C15.6418 0 16 0.3731 16 0.833333V14.1667C16 14.6269 15.6418 15 15.2 15H0.8C0.358176 15 0 14.6269 0 14.1667V0.833333C0 0.3731 0.358176 0 0.8 0ZM7.6 8.75V7.5H6.8V5H5.6V7.5H4.4V5H3.2V8.75H5.6V10H6.8V8.75H7.6ZM12.8 10L11 7.5L12.8 5H11.4L10 6.875V5H8.8V10H10V8.125L11.4 10H12.8Z"
                  fill="currentColor"
                />
              </svg>
              <span>{movie.quality} Quality</span>
            </li>
          </ul>
          <p className="fw-medium lh-1 mb-0">{movie.description}</p>
        </div>
      </div>
      <button className="remove-btn gradient-border-button lh-1 text-uppercase text-center fs-6 gap-2">
        <Image src={deleteImage} alt="delete" />
        <span className="mt-1">{movie.btnText}</span>
      </button>
    </div>
  );
}
