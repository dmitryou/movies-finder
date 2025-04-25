"use client";

import Link from "next/link";
import Image from "next/image";

import logo from "@/../public/assets/images/logo.svg";
import profileImage from "@/../public/assets/images/icons/profile.svg";
import { useThemeContext } from "@/context/ThemeContext";

export default function HeroTwoSecondary() {
  const { toggleMobileMenu } = useThemeContext();
  return (
    <div className="secondary-nav row align-items-center position-absolute top-0 start-0 end-0 mx-auto z-1 mx-xl-5">
      <div className="position-relative d-inline-block d-none">
        <div className="search ms-auto">
          <button className="bg-transparent border-0 header_search_btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.5111 11.6277C10.5016 12.6081 9.12422 13.2117 7.60587 13.2117C4.50983 13.2117 2 10.7019 2 7.60587C2 4.50983 4.50983 2 7.60587 2C10.7019 2 13.2117 4.50983 13.2117 7.60587C13.2117 9.12422 12.6081 10.5016 11.6277 11.5111L11.5111 11.6277ZM11.91 12.6172C10.7539 13.611 9.25005 14.2117 7.60587 14.2117C3.95755 14.2117 1 11.2542 1 7.60587C1 3.95755 3.95755 1 7.60587 1C11.2542 1 14.2117 3.95755 14.2117 7.60587C14.2117 9.25005 13.611 10.7539 12.6172 11.91L15.8865 15.1793L15.1793 15.8865L11.91 12.6172Z"
                fill="currentColor"
              ></path>
              <path
                d="M11.5111 11.6277L11.8594 11.9864L11.8646 11.9813L11.5111 11.6277ZM11.6277 11.5111L11.9813 11.8647L11.9864 11.8594L11.6277 11.5111ZM11.91 12.6172L12.2636 12.2636L11.9357 11.9357L11.5841 12.238L11.91 12.6172ZM12.6172 11.91L12.238 11.5841L11.9357 11.9357L12.2636 12.2636L12.6172 11.91ZM15.8865 15.1793L16.24 15.5329L16.5936 15.1793L16.24 14.8258L15.8865 15.1793ZM15.1793 15.8865L14.8258 16.24L15.1793 16.5936L15.5329 16.24L15.1793 15.8865ZM7.60587 13.7117C9.25945 13.7117 10.7604 13.0537 11.8594 11.9864L11.1627 11.269C10.2428 12.1624 8.98898 12.7117 7.60587 12.7117V13.7117ZM1.5 7.60587C1.5 10.978 4.23369 13.7117 7.60587 13.7117V12.7117C4.78597 12.7117 2.5 10.4258 2.5 7.60587H1.5ZM7.60587 1.5C4.23369 1.5 1.5 4.23369 1.5 7.60587H2.5C2.5 4.78597 4.78597 2.5 7.60587 2.5V1.5ZM13.7117 7.60587C13.7117 4.23369 10.978 1.5 7.60587 1.5V2.5C10.4258 2.5 12.7117 4.78597 12.7117 7.60587H13.7117ZM11.9864 11.8594C13.0537 10.7604 13.7117 9.25945 13.7117 7.60587H12.7117C12.7117 8.98898 12.1624 10.2428 11.269 11.1627L11.9864 11.8594ZM11.8646 11.9813L11.9813 11.8646L11.2742 11.1575L11.1575 11.2742L11.8646 11.9813ZM7.60587 14.7117C9.37412 14.7117 10.9926 14.0652 12.236 12.9963L11.5841 12.238C10.5152 13.1569 9.12599 13.7117 7.60587 13.7117V14.7117ZM0.5 7.60587C0.5 11.5303 3.6814 14.7117 7.60587 14.7117V13.7117C4.23369 13.7117 1.5 10.978 1.5 7.60587H0.5ZM7.60587 0.5C3.6814 0.5 0.5 3.6814 0.5 7.60587H1.5C1.5 4.23369 4.23369 1.5 7.60587 1.5V0.5ZM14.7117 7.60587C14.7117 3.6814 11.5303 0.5 7.60587 0.5V1.5C10.978 1.5 13.7117 4.23369 13.7117 7.60587H14.7117ZM12.9963 12.236C14.0652 10.9926 14.7117 9.37412 14.7117 7.60587H13.7117C13.7117 9.12599 13.1569 10.5152 12.238 11.5841L12.9963 12.236ZM12.2636 12.2636L15.5329 15.5329L16.24 14.8258L12.9707 11.5565L12.2636 12.2636ZM15.5329 14.8258L14.8258 15.5329L15.5329 16.24L16.24 15.5329L15.5329 14.8258ZM15.5329 15.5329L12.2636 12.2636L11.5565 12.9707L14.8258 16.24L15.5329 15.5329Z"
                fill="#fff"
              ></path>
            </svg>
          </button>
        </div>
        {/* <!-- Search Box --> */}
        <div className="header_search_box position-absolute end-0">
          <form className="single_form header_search_form d-flex align-items-center">
            <input
              type="text"
              name="s"
              placeholder="Search query..."
              required=""
              className="search"
              autoFocus={false}
            />
            <button
              type="submit"
              className="d-flex align-items-center justify-content-center"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1376_579)">
                  <path
                    d="M23.707 22.293L17.738 16.324C19.3647 14.3346 20.1644 11.7961 19.9719 9.23357C19.7793 6.67103 18.6092 4.28053 16.7036 2.55652C14.798 0.832514 12.3026 -0.0931045 9.73367 -0.0288727C7.16472 0.0353591 4.71873 1.08453 2.90164 2.90162C1.08455 4.71871 0.035382 7.1647 -0.0288498 9.73365C-0.0930816 12.3026 0.832537 14.798 2.55655 16.7036C4.28056 18.6092 6.67106 19.7793 9.23359 19.9718C11.7961 20.1644 14.3346 19.3646 16.324 17.738L22.293 23.707C22.4816 23.8892 22.7342 23.99 22.9964 23.9877C23.2586 23.9854 23.5094 23.8802 23.6948 23.6948C23.8803 23.5094 23.9854 23.2586 23.9877 22.9964C23.99 22.7342 23.8892 22.4816 23.707 22.293ZM10 18C8.41778 18 6.87106 17.5308 5.55546 16.6518C4.23987 15.7727 3.21449 14.5233 2.60899 13.0615C2.00349 11.5997 1.84506 9.99113 2.15374 8.43928C2.46243 6.88743 3.22435 5.46197 4.34317 4.34315C5.46199 3.22433 6.88746 2.4624 8.4393 2.15372C9.99115 1.84504 11.5997 2.00347 13.0615 2.60897C14.5233 3.21447 15.7727 4.23985 16.6518 5.55544C17.5308 6.87103 18 8.41775 18 10C17.9976 12.121 17.154 14.1545 15.6543 15.6542C14.1545 17.154 12.121 17.9976 10 18Z"
                    fill="#E82B4B"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_1376_579">
                    <rect width="24" height="24" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </button>
          </form>
        </div>
      </div>
      <div className="col-6 secondary-nav--left">
        <Link className="main-logo me-lg-5 me-4" href="/">
          <Image src={logo} alt="img" />
        </Link>
        <button
          id="navigation-button"
          className="menu-btn d-md-inline-block d-none"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
          >
            <path
              d="M0 0H16V1.77778H0V0ZM0 6.22222H10.6667V8H0V6.22222ZM0 12.4444H16V14.2222H0V12.4444Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
      <div className="col-6 secondary-nav--right text-end">
        <Link
          href="pricing"
          className="hl-btn btn-base text-uppercase radius-100 fs-18  d-md-inline-block d-none"
        >
          <svg
            className="me-2"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="15"
            viewBox="0 0 18 15"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.0918 0.681633C9.49771 -0.227206 8.14931 -0.227215 7.55522 0.681633L4.55572 5.27005L2.26304 3.97109C1.11443 3.32031 -0.266602 4.34018 0.0445324 5.6094L1.60213 11.9633C1.67226 12.2494 1.93203 12.4509 2.23065 12.4509H15.4163C15.715 12.4509 15.9748 12.2494 16.0449 11.9633L17.6025 5.6094C17.9137 4.34017 16.5326 3.32032 15.384 3.97109L13.0913 5.27005L10.0918 0.681633ZM9.00466 1.3719C8.91986 1.24207 8.72716 1.24207 8.64236 1.3719L5.30994 6.46957C5.12341 6.75493 4.74268 6.84607 4.4441 6.67693L1.61851 5.07604C1.45442 4.98308 1.25713 5.12877 1.30158 5.31008L2.73965 11.1764H14.9074L16.3455 5.31008C16.3898 5.12877 16.1926 4.98308 16.0285 5.07604L13.2029 6.67693C12.9043 6.84607 12.5236 6.75493 12.3371 6.46957L9.00466 1.3719Z"
              fill="currentColor"
            />
            <path
              d="M2.7884 13.7254C2.43128 13.7254 2.14178 14.0108 2.14178 14.3628C2.14178 14.7147 2.43128 15 2.7884 15H14.8584C15.2155 15 15.505 14.7147 15.505 14.3628C15.505 14.0108 15.2155 13.7254 14.8584 13.7254H2.7884Z"
              fill="currentColor"
            />
          </svg>
          <span>Subscribe Now</span>
        </Link>
        <Link href="#" className="profile-btn d-inline-block">
          <Image src={profileImage} alt="profile" className="w-100 h-100" />
        </Link>
        <button
          id="navigation-button"
          className="menu-button menu menu_btn d-lg-none border-0 bg-transparent"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
          >
            <path
              d="M0 0H16V1.77778H0V0ZM0 6.22222H10.6667V8H0V6.22222ZM0 12.4444H16V14.2222H0V12.4444Z"
              fill="#fff"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
