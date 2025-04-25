import Link from "next/link";
import Image from "next/image";

import { categoryGridlMoviesData as movies } from "@/data/movie";
import MovieCard from "@/components/Card/MovieCard";
import listIcon from "@/../public/assets/images/icons/list.svg";
import gridIcon from "@/../public/assets/images/icons/grid.svg";

export default function CategoryBrowseGrid() {
  return (
    <div className="container py-80 category-grid custom-grid-container">
      <div className="header d-flex align-items-center justify-content-between mb-4">
        <h3 className="section-title mt-1 mt-lg-2 mb-0 lh-1">
          Web and tv Series
        </h3>
        <div className="d-flex align-items-center gap-2">
          <p className="fw-medium lh-1 mb-0">View As</p>
          <Link href="category-list" className="view-style-btn">
            <Image src={listIcon} alt="icon" />
          </Link>
          <Link href="category-grid" className="view-style-btn active">
            <Image src={gridIcon} alt="icon" />
          </Link>
        </div>
      </div>
      {movies && movies.length > 0 && (
        <div className="row row-gap-4">
          {movies.map((movie, index) => (
            <div key={index} className="col-lg-4 col-sm-6">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
