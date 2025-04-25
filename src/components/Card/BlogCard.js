import Link from "next/link";
import Image from "next/image";

import profileIcon from "@/../public/assets/images/icons/profile-icon.svg";
import clockIcon from "@/../public/assets/images/icons/clock-tranparent.svg";

export default function BlogCard({ blog, className = "" }) {
  return (
    <div className={`blog bg-primary ${className}`}>
      <div className="thumb position-relative">
        <Link href="#">
          <Image className="w-100" src={blog.image} alt="blog" />
        </Link>
        <div className="badge position-absolute bottom-0 bg-primary p-2">
          <div className="type lh-1 p-2 fs-18 text-uppercase fw-normal ls-1">
            {blog.category}
          </div>
        </div>
      </div>
      <div className="content">
        <div className="d-flex align-items-center gap-4 fs-18 mb-3 lh-1">
          <div className="d-inline-flex align-items-center gap-1">
            <Image src={profileIcon} alt="author" />
            <div className="author-name text-uppercase">{blog.author}</div>
          </div>
          <div className="d-inline-flex align-items-center gap-1">
            <Image src={clockIcon} alt="time" />
            <div className="time ms-1 flex-shrink-0 text-uppercase">
              {blog.date}
            </div>
          </div>
        </div>
        <h3 className="blog-title text-uppercase mb-3">
          <Link href="blog-details" className="gradient-link fw-medium">
            {blog.title}
          </Link>
        </h3>
        <Link
          href="blog-details"
          className="hl-btn gradient-border-button text-uppercase"
        >
          <span>{blog.btnText}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="12"
            viewBox="0 0 17 12"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.6116 0.129335C11.4695 0.875397 11.5527 2.06703 12.2902 3.16361C13.0221 4.25184 14.4269 5.28756 17 5.67359L16.9557 5.9989V6.0011L17 6.32641C14.4269 6.71244 13.0221 7.74816 12.2902 8.83639C11.5527 9.93297 11.4695 11.1246 11.6116 11.8707L10.9958 12C10.8239 11.0974 10.9291 9.71701 11.7772 8.45593C12.3337 7.62859 13.1978 6.86999 14.4803 6.32974H0V5.67026H14.4803C13.1978 5.13001 12.3337 4.37141 11.7772 3.54407C10.9291 2.28299 10.8239 0.902645 10.9958 0L11.6116 0.129335Z"
              fill="currentColor"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
