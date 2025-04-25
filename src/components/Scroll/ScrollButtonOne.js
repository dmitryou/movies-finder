import Link from "next/link";

export default function ScrollButtonOne() {
  return (
    <Link
      href="#trending-now"
      className="scroll-down gap-3 position-absolute bottom-0 start-0 z-1 ms-5 mb-5 pb-5 d-lg-inline-block d-none"
    >
      <div className="text ms-1">Scroll Down</div>
      <svg
        className="mt-2"
        width="32"
        height="56"
        viewBox="0 0 32 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.2773 0V55" stroke="#E2E2E2" strokeWidth="2"></path>
        <path
          d="M1 44.3055C5.3287 43.5416 14.4444 44.611 16.2778 54.9999"
          stroke="#E2E2E2"
          strokeWidth="2"
        ></path>
        <path
          d="M31.5557 44.3055C27.227 43.5416 18.1112 44.611 16.2779 54.9999"
          stroke="#E2E2E2"
          strokeWidth="2"
        ></path>
      </svg>
    </Link>
  );
}
