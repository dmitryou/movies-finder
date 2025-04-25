import Image from "next/image";

import { movieDetailData as data } from "@/data/movie";

export default function MovieCasting() {
  return (
    <div className="movie-casting py-80">
      <div className="container">
        <h3 className="section-title text-center pb-1 mb-4">Cast</h3>
        {data.casts && data.casts.length > 0 && (
          <ul className="cast">
            {data.casts.map((cast, index) => (
              <li key={index} className="cast--item">
                <div className="cast--link text-center">
                  <div className="cast--thumb">
                    <Image src={cast.image} alt="caster" className="person" />
                  </div>
                  <h4 className="cast--name text-uppercase gradient-link">
                    {cast.name}
                  </h4>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
