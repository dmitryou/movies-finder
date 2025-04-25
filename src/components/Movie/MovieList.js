import { trendingOneMoviesData as movies } from "@/data/movie";
import MovieCard from "../Card/MovieCard";

export default function MovieList() {
  return (
    <div className="genres-area py-80">
      <div className="container">
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
