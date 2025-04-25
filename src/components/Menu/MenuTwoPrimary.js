import Link from "next/link";
import { menuTwoData as data } from "@/data/menu";

export default function HeroTwoPrimary() {
  return (
    <ul className="primary-nav position-absolute d-xl-inline-block d-none top-50 translate-middle-y end-0 z-1 radius-100 text-end">
      {data.primaryMenus.map((menu, index) => (
        <li key={index} className="primary-nav--item">
          <Link
            href={menu.href}
            className="primary-nav--link fw-bold text-uppercase radius-100 lh-1"
          >
            <span className="link-text">{menu.name}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                opacity="0.4"
                d="M7.77539 15.396H13.432"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.27832 13.0396C1.27832 7.56192 1.8756 7.94422 5.09062 4.96267C6.49725 3.83036 8.68597 1.64551 10.5761 1.64551C12.4652 1.64551 14.6977 3.81966 16.117 4.96267C19.332 7.94422 19.9283 7.56192 19.9283 13.0396C19.9283 21.101 18.0227 21.101 10.6033 21.101C3.18399 21.101 1.27832 21.101 1.27832 13.0396Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </li>
      ))}
    </ul>
  );
}
