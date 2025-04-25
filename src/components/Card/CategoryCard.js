import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({ category }) {
  return (
    <div className="category-card">
      <div className="thumbnail">
        <Image
          src={category.image}
          alt="category"
          className="thumb-img w-100"
        />
      </div>
      <div className="details">
        <h4 className="title lh-1 mb-0">{category.title}</h4>
        <Link href={category.href} className="hl-btn circle-btn flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="18"
            viewBox="0 0 25 18"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.3368 0.763844V0H14.8091V0.763844C14.8091 3.66421 16.4166 6.45372 18.8361 8.10623H0V9.63392H18.8362C16.4166 11.2864 14.8091 14.0759 14.8091 16.9763V17.7401H16.3368V16.9763C16.3368 13.2214 19.6689 9.64694 23.6575 9.63396C23.6648 9.63398 23.672 9.63399 23.6793 9.63399H24.4431V9.63392V8.1063V8.10623H24.4425H23.6793H23.65C19.6648 8.0888 16.3368 4.51646 16.3368 0.763844Z"
              fill="currentColor"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
