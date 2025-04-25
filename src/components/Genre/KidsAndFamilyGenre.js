import MovieCard from "../Card/MovieCard";

import { kidsAndFamilyGenreMoviesData as movies } from "@/data/movie";

export default function KidsAndFamilyGenre() {
  return (
    <div class="genres-area bg-gradient-black py-80">
      <div class="container">
        <h3 class="section-title mt-lg-2 lh-1 mb-4 text-lg-start text-center">
          kids & family
        </h3>
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
    </div>
  );
}
