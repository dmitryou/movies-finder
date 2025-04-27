import Image from "next/image";

const BASE_URL = "https://image.tmdb.org/t/p/w780";

export default function MovieCasting({ casting }) {

    const firstActors = casting?.cast?.slice(0, 15) || [];
    return (
        <div className="movie-casting py-80">
            <div className="container">
                <h3 className="section-title text-center pb-1 mb-4">Cast</h3>
                {firstActors && firstActors.length > 0 && (
                    <ul className="cast">
                        {firstActors.map((cast, index) => (
                            <li key={index} className="cast--item">
                                <div className="cast--link text-center">
                                    <div className="cast--thumb">
                                        <Image
                                            src={`${BASE_URL}/${cast.profile_path}`}
                                            width={200}
                                            height={200}
                                            alt="caster"
                                            className="person"
                                            unoptimized
                                        />
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
