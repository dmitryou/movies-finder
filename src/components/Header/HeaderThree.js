import MovieBanner from "@/components/Banner/MovieBanner";
import RestrictionOverlay from "@/components/Overlay/RestrictionOverlay";
import MenuOne from "@/components/Menu/MenuOne";
import OffscreenMenu from "@/components/Menu/OffscreenMenu";

export default function HeaderThree() {
  return (
    <>
      <header className="header navbar-area position-relative">
        <MovieBanner />
        <RestrictionOverlay />
        <MenuOne />
        <OffscreenMenu />
      </header>
    </>
  );
}
