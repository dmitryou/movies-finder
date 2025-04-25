import Link from "next/link";
import Image from "next/image";

export default function MovieCategoryListCard({ movie }) {
  return (
    <div className="category-list--item row">
      <div className="col-lg-4 mb-4 mb-lg-0">
        <div className="thumb me-3">
          <Image src={movie.image} alt="card-img" />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="content">
          {movie.categories && movie.categories.length && (
            <ul className="text-uppercase color-paragraph mb-2">
              {movie.categories.map((category, index) => (
                <li key={index} className="d-inline-block">
                  {category}
                  {index < movie.categories.length - 1 ? ", " : ""}
                </li>
              ))}
            </ul>
          )}
          <h3 className="movie-name text-uppercase fw-medium lh-1 mb-2">
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
          <p className="fs-20 fw-medium mb-4">{movie.description}</p>
          <Link
            href={movie.videoSrc}
            className="hl-btn popup_video lh-1 btn-base fs-18 fw-bold flex-shrink-0 text-uppercase"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="15"
              viewBox="0 0 13 15"
              fill="none"
            >
              <path
                d="M1 2.66967C1 1.90998 1 1.53013 1.16686 1.31807C1.31227 1.13326 1.53485 1.01765 1.77687 1.00119C2.05461 0.982329 2.39036 1.18772 3.06203 1.59855L10.9592 6.42893C11.542 6.78532 11.8335 6.96359 11.934 7.19025C12.022 7.38826 12.022 7.61173 11.934 7.80974C11.8335 8.0364 11.542 8.21467 10.9592 8.57106L3.06203 13.4014C2.39036 13.8123 2.05461 14.0177 1.77687 13.9988C1.53485 13.9824 1.31227 13.8667 1.16686 13.6819C1 13.4699 1 13.0901 1 12.3304V2.66967Z"
                fill="currentColor"
                fillOpacity="0.2"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="pt-03">{movie.btnText}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
