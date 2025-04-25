import Link from "next/link";
import Image from "next/image";

import data from "@/data/favourite-device";

export default function FavouriteDeviceOne() {
  return (
    <div className="enjoy-favourite-device pt-80">
      <div className="hl-container">
        <div className="row align-items-center justify-content-xxl-between justify-content-center">
          <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-8 col-sm-9">
            <div className="responsive text-lg-start text-center">
              <h3 className="responsive--title text-uppercase mb-2">
                {data.title}
              </h3>
              <p className="responsive--description fw-medium mb-4">
                {data.description}
              </p>
              <div className="d-lg-flex align-items-center gap-2 pt-2 mb-lg-0 mb-4">
                <Link
                  href="#"
                  className="border-radius-50 hl-btn btn-base small-btn fs-18 fw-light text-uppercase flex-shrink-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="22"
                    viewBox="0 0 17 22"
                    fill="none"
                  >
                    <path
                      d="M16.4408 7.22358C16.3198 7.31809 14.1836 8.52991 14.1836 11.2245C14.1836 14.3412 16.9019 15.4438 16.9832 15.4711C16.9707 15.5383 16.5514 16.9812 15.5501 18.4513C14.6572 19.745 13.7247 21.0367 12.3061 21.0367C10.8875 21.0367 10.5225 20.2071 8.88485 20.2071C7.28896 20.2071 6.72153 21.064 5.42395 21.064C4.12638 21.064 3.22099 19.8668 2.18001 18.3967C0.974225 16.6703 0 13.9884 0 11.4429C0 7.36009 2.63687 5.19478 5.23203 5.19478C6.61096 5.19478 7.76042 6.10627 8.62617 6.10627C9.45019 6.10627 10.7353 5.14017 12.304 5.14017C12.8986 5.14017 15.0348 5.19478 16.4408 7.22358ZM11.5593 3.4117C12.2081 2.63672 12.667 1.56141 12.667 0.486107C12.667 0.336992 12.6545 0.185777 12.6274 0.0639648C11.5718 0.103869 10.3159 0.771736 9.55867 1.65592C8.96412 2.33639 8.40921 3.4117 8.40921 4.50171C8.40921 4.66552 8.43633 4.82934 8.44885 4.88185C8.5156 4.89445 8.62408 4.90915 8.73256 4.90915C9.67967 4.90915 10.8708 4.27069 11.5593 3.4117Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>Apps Store</span>
                </Link>
                <Link
                  href="#"
                  className="border-radius-50 hl-btn trans-btn small-btn fs-18 fw-light text-uppercase flex-shrink-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="22"
                    viewBox="0 0 19 22"
                    fill="none"
                  >
                    <path
                      d="M0.500002 20.1165V20.1156L0.500002 1.01253C0.500002 1.01249 0.500002 1.01236 0.500002 1.01233C0.500066 0.910857 0.530615 0.810752 0.589244 0.724242C0.591074 0.721542 0.59293 0.718858 0.59481 0.71619L10.6741 10.564L0.594806 20.4127C0.592763 20.4099 0.59075 20.407 0.588767 20.404C0.530201 20.3178 0.49981 20.2178 0.500002 20.1165ZM6.11951 17.868L12.1357 11.9917L13.7395 13.5582L6.11951 17.868ZM13.5974 10.564L15.5924 8.61627L18.2277 10.1073C18.3124 10.1553 18.3812 10.2233 18.4285 10.3034C18.4756 10.3835 18.5 10.4733 18.5 10.564C18.5 10.6547 18.4756 10.7445 18.4285 10.8245L18.8591 11.0785L18.4285 10.8245C18.3813 10.9045 18.3125 10.9725 18.2279 11.0205C18.2279 11.0205 18.2278 11.0206 18.2277 11.0206L15.5914 12.5117L13.5974 10.564ZM6.11837 3.25886L13.7405 7.56871L12.1357 9.13624L6.11837 3.25886Z"
                      stroke="white"
                    />
                  </svg>
                  <span>Play Store</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-7 col-xl-6 col-lg-5 col-md-8 col-sm-9 offset-0 enjoy-favourite-img">
            <Image src={data.image} alt="responsive-device" />
          </div>
        </div>
      </div>
    </div>
  );
}
