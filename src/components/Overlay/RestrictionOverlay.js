import Link from "next/link";

export default function RestrictionOverlay() {
  return (
    <div className="restriction-overlay d-none">
      <div className="content position-absolute top-50 start-50 translate-middle text-center">
        <h3 className="title text-uppercase">Start watching Holla</h3>
        <p className="description">
          Access restricted to Basic and Premium members. Upgrade now to view.
        </p>
        <div className="d-flex align-items-center justify-content-center gap-4 pt-3 mt-4">
          <Link
            href="#"
            className="hl-btn big-btn lh-1 gradient-btn fs-18 fw-bold flex-shrink-0 text-uppercase"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="19"
              viewBox="0 0 17 19"
              fill="none"
            >
              <path
                opacity="0.2"
                d="M4.29102 4.29399C4.29102 2.10108 6.13391 0.316162 8.39896 0.316162H12.9013C15.1609 0.316162 16.9991 2.09661 16.9991 4.28504V14.2305C16.9991 16.4243 15.1572 18.2101 12.8921 18.2101H8.38972C6.13021 18.2101 4.29102 16.4288 4.29102 14.2394V13.3984V4.29399Z"
                fill="white"
              />
              <path
                d="M12.1119 8.77446L9.45649 6.17179C9.18205 5.90338 8.74039 5.90338 8.46686 6.17358C8.19423 6.44377 8.19514 6.87949 8.46868 7.1479L9.92268 8.57315H0.69974C0.31352 8.57315 0 8.88182 0 9.26296C0 9.64321 0.31352 9.95099 0.69974 9.95099H9.92268L8.46868 11.3771C8.19514 11.6455 8.19423 12.0813 8.46686 12.3515C8.60408 12.4866 8.7831 12.5546 8.96304 12.5546C9.14115 12.5546 9.32018 12.4866 9.45649 12.3532L12.1119 9.75058C12.2436 9.62084 12.3182 9.44548 12.3182 9.26296C12.3182 9.07955 12.2436 8.90419 12.1119 8.77446Z"
                fill="white"
              />
            </svg>
            <span className="pt-0">Log in</span>
          </Link>
          <Link
            href="#"
            className="hl-btn big-btn lh-1 trans-btn fs-18 fw-bold flex-shrink-0 text-uppercase"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="12"
              viewBox="0 0 10 12"
              fill="none"
            >
              <path
                opacity="0.4"
                d="M4.79822 7.90503C2.21041 7.90503 0 8.31303 0 9.94504C0 11.5776 2.19661 12.0001 4.79822 12.0001C7.38604 12.0001 9.59645 11.5926 9.59645 9.96004C9.59645 8.32743 7.40044 7.90503 4.79822 7.90503Z"
                fill="white"
              />
              <path
                d="M4.79826 6.35043C6.56107 6.35043 7.97348 4.93742 7.97348 3.17522C7.97348 1.41301 6.56107 0 4.79826 0C3.03605 0 1.62305 1.41301 1.62305 3.17522C1.62305 4.93742 3.03605 6.35043 4.79826 6.35043Z"
                fill="white"
              />
            </svg>
            <span className="pt-0">Join now</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
