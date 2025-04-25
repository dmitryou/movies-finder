import Link from "next/link";
import Image from "next/image";
import data from "@/data/banner";

export default function MovieBanner() {
  return (
    <div className="movie-details-banner position-relative">
      <div className="thumb">
        <video src={data.videoSrc} className="" autoPlay loop muted></video>
      </div>
      <div className="content container position-absolute bottom-0 start-50 translate-middle-x mb-60">
        <div className="row justify-content-between">
          <div className="col-xxl-5 col-xl-6 align-self-end  mb-xl-0 mb-4">
            <h2 className="banner-title text-uppercase mb-2">{data.title}</h2>
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
                <span>{data.rating} Reviews</span>
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
                <span>{data.duration}</span>
              </li>
              <li className="movie-info-list--item style-two">
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
                <span>{data.quality} Quality</span>
              </li>
            </ul>
            <div className="d-flex align-items-center gap-sm-3 gap-2">
              <Link
                href="assets/video/video.mp4"
                className="popup_video hl-btn lh-1 gradient-btn fs-18 fw-bold flex-shrink-0 text-uppercase"
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
                <span className="pt-0">{data.btnOneText}</span>
              </Link>
              <Link
                href="#"
                className="hl-btn lh-1 trans-btn fs-18 fw-medium flex-shrink-0 text-uppercase"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="15"
                  viewBox="0 0 17 15"
                  fill="none"
                >
                  <path
                    d="M0 11.0526H8.09524V12.6316H0V11.0526ZM0 5.52632H16.1905V7.10526H0V5.52632ZM0 0H16.1905V1.57895H0V0ZM12.9524 11.0526V8.68421H14.5714V11.0526H17V12.6316H14.5714V15H12.9524V12.6316H10.5238V11.0526H12.9524Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="pt-0">{data.btnTwoText}</span>
              </Link>
              <Link
                href="#"
                className="hl-btn lh-1 trans-btn fs-18 fw-medium flex-shrink-0 text-uppercase"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <path
                    opacity="0.4"
                    d="M4.63861 6.35272H3.90348C2.30007 6.35272 1 7.65279 1 9.2562L1 13.0973C1 14.6999 2.30007 16 3.90348 16H12.673C14.2764 16 15.5765 14.6999 15.5765 13.0973V9.24833C15.5765 7.64964 14.2804 6.35272 12.6817 6.35272H11.9387"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.28809 0.999977V10.4873"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.99121 3.30725L8.28799 1.00023L10.5856 3.30725"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="col-3 align-self-xl-end">
            <div className="d-flex align-item-xl-end justify-content-xl-end gap-2">
              {data.icons.map((icon, index) => (
                <Image key={index} src={icon} alt="icon" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
