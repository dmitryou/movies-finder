import MovieBanner from "@/components/Banner/MovieBanner";
import MenuOne from "@/components/Menu/MenuOne";
import OffscreenMenu from "@/components/Menu/OffscreenMenu";

export default function HeaderThree({ movie }) {
    return (
        <>
            <header className="header navbar-area position-relative">
                <MovieBanner movie={movie} />
                <MenuOne />
                <OffscreenMenu />
            </header>
        </>
    );
}
