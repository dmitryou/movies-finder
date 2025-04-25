import Image from "next/image";

import fullHDIcon from "@/../public/assets/images/icons/4k-full-hd.svg";
import whiteIcon from "@/../public/assets/images/icons/white.svg";
import ccIcon from "@/../public/assets/images/icons/cc.svg";
import adIcon from "@/../public/assets/images/icons/ad.svg";
import sdhIcon from "@/../public/assets/images/icons/sdh.svg";

import { heroThreeData as data } from "@/data/hero";
import RestrictionOverlay from "../Overlay/RestrictionOverlay";

export default function HeroThree() {
  return (
    <>
      {data && (
        <div class="movie-details-banner position-relative bg-overlay">
          <div class="content container position-absolute bottom-0 start-50 translate-middle-x mb-60">
            <div class="row justify-content-between">
              <div class="col-xxl-5 col-xl-6 align-self-end  mb-xl-0 mb-4">
                {data.title && (
                  <h2 class="banner-title text-uppercase mb-2">{data.title}</h2>
                )}
                <ul class="movie-info-list movie-production-info-list d-flex align-item-center justify-content-start gap-1 gap-lg-2 text-white">
                  <li class="movie-info-list--item style-two">
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
                    <span>{data.review} Reviews</span>
                  </li>
                  <li class="movie-info-list--item style-two">
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
                  <li class="movie-info-list--item style-two">
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
                <div class="d-flex align-items-center gap-3">
                  <a
                    href="assets/video/video.mp4"
                    class="popup_video hl-btn lh-1 btn-base fs-18 fw-bold flex-shrink-0 text-uppercase"
                  >
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M4.63861 6.35272H3.90348C2.30007 6.35272 1 7.65279 1 9.2562L1 13.0973C1 14.6999 2.30007 16 3.90348 16H12.673C14.2764 16 15.5765 14.6999 15.5765 13.0973V9.24833C15.5765 7.64964 14.2804 6.35272 12.6817 6.35272H11.9387"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.28857 10.4873L8.28857 0.999939"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.5854 8.17999L8.28867 10.487L5.9911 8.17999"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span class="pt-0">{data.downloadBtnText}</span>
                  </a>
                  <a
                    href="#"
                    class="hl-btn lh-1 trans-btn fs-18 fw-medium flex-shrink-0 text-uppercase"
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
                    <span class="pt-0">{data.addToListBtnText}</span>
                  </a>
                </div>
              </div>
              <div class="col-3 align-self-xl-end">
                <div class="d-flex align-item-xl-end justify-content-xl-end gap-2">
                  <Image src={fullHDIcon} alt="icon" />
                  <Image src={whiteIcon} alt="icon" />
                  <Image src={ccIcon} alt="icon" />
                  <Image src={adIcon} alt="icon" />
                  <Image src={sdhIcon} alt="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <RestrictionOverlay />
    </>
  );
}
