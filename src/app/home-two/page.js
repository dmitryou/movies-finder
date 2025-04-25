import CategoryTwo from "@/components/Category/CategoryTwo";
import FavouriteDeviceOne from "@/components/FavouriteDevice/FavouriteDeviceOne";
import FeatureMovieOne from "@/components/Feature/FeatureMovieOne";
import FooterTwo from "@/components/Footer/FooterTwo";
import HeaderTwo from "@/components/Header/HeaderTwo";
import OffscreenMenu from "@/components/Menu/OffscreenMenu";
import MovieSliderTwo from "@/components/MovieSlider/MovieSliderTwo";
import NewestRelease from "@/components/Newest/NewestRelease";
import OurOriginalTwo from "@/components/OurOriginal/OurOriginalTwo";
import PricingOne from "@/components/Price/PricingOne";
import TrendingTwo from "@/components/Trending/TrendingTwo";

export default function HomeTwo() {
  return (
    <>
      <HeaderTwo />
      <OffscreenMenu />
      <main className="main">
        <FeatureMovieOne />
        <NewestRelease />
        <TrendingTwo />
        <CategoryTwo />
        <MovieSliderTwo />
        <OurOriginalTwo />
        <PricingOne />
        <FavouriteDeviceOne />
      </main>
      <FooterTwo />
    </>
  );
}
