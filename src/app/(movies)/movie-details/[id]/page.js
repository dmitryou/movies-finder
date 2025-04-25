import FooterOne from "@/components/Footer/FooterOne";
import HeaderThree from "@/components/Header/HeaderThree";
import MovieCasting from "@/components/Movie/MovieCasting";

// const TMDB_API_KEY = process.env.TMDB_API_KEY; // or NEXT_PUBLIC_TMDB_KEY
const TMDB_API_KEY = "9c5abf0e8c038652db89b7534ed902b4";

export default async function MovieDetails({ params }) {
    const { id } = params;

    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}&language=en-US`
    );
    const movie = await res.json();
    console.log("movie",movie)
    return (
        <>
            <HeaderThree movie={movie}/>
            <main className="main">
                <MovieCasting movie={movie}/>
            </main>

            <FooterOne />
        </>
    );
}
