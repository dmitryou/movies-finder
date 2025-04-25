import Link from "next/link";
import Image from "next/image";

import { categoryListlMoviesData as movies } from "@/data/movie";
import MovieCategoryListCard from "../Card/MovieCategoryListCard";
import listIcon from "@/../public/assets/images/icons/list.svg";
import gridIcon from "@/../public/assets/images/icons/grid.svg";

export default function CategoryBrowseList() {
  return (
    <div className="category-list-area container py-80">
      <div className="header d-flex align-items-center justify-content-between">
        <h3 className="section-title mt-1 mt-lg-2 mb-0 lh-1">
          Web and tv Series
        </h3>
        <div className="d-flex align-items-center gap-2">
          <p className="fw-medium lh-1 mb-0">View As</p>
          <Link href="category-list" className="view-style-btn active">
            <Image src={listIcon} alt="icon" />
          </Link>
          <Link href="category-grid" className="view-style-btn">
            <Image src={gridIcon} alt="icon" />
          </Link>
        </div>
      </div>
      {movies && movies.length > 0 && (
        <div className="category-list">
          {movies.map((movie, index) => (
            <MovieCategoryListCard key={index} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
