import FooterOne from "../components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import MovieList from "@/components/Movie/MovieList";

export default async function Home() {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=9c5abf0e8c038652db89b7534ed902b4&language=en-US&page=1`
    );
    const data = await res.json();
    const movies = data.results;
    console.log('movies', movies)
    //API route
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movies`);
    // const data = await res.json();
    // const movies = data.results;

    const getRandomFive = (arr) => {
        const shuffled = [...arr].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, 5);
    };
    const sliderData = {
        slides: getRandomFive(movies),
    };

    return (
        <>
            <HeaderOne data={sliderData} isHero={true} />
            <main className="main">
                <MovieList movies={movies} />
            </main>
            <FooterOne />
        </>
    );
}
