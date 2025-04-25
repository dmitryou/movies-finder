import Link from "next/link";

import { movieDetailData as data } from "@/data/movie";

export default function MovieDetail() {
  return (
    <div className="movie-details container py-80">
      <div className="row justify-content-between">
        <div className="col-xxl-5 col-xl-6 col-lg-7 mb-xl-0 mb-4">
          <h3 className="section-title lh-1">{data.title}</h3>
          <p className="description fw-medium">{data.description}</p>
        </div>
        <div className="col-xl-3 col-lg-5 align-self-center">
          {data.contributors && data.contributors.length > 0 && (
            <ul className="movie-production">
              {data.contributors.map((contributor, index) => (
                <li key={index} className="list lh-1">
                  {contributor.name} :
                  <Link href={contributor.href} className="value">
                    {contributor.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
