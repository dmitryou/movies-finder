import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import TrendingOne from "@/components/Trending/TrendingOne";
import LiveStreamingFeature from "@/components/Feature/LiveStreamingFeature";
import PopularOne from "@/components/Popular/PopularOne";
import CategoryOne from "@/components/Category/CategoryOne";
import WeeklyPopularOne from "@/components/Popular/WeeklyPopularOne";
import MovieSliderOne from "@/components/MovieSlider/MovieSliderOne";
import OurOriginalOne from "@/components/OurOriginal/OurOriginalOne";

export default function Home() {
  return (
    <>
      <HeaderOne isHero={true} />
      <main className="main">
        <TrendingOne />
        <LiveStreamingFeature />
        <PopularOne />
        <CategoryOne />
        <WeeklyPopularOne />
        <MovieSliderOne />
        <OurOriginalOne />
      </main>
      <FooterOne />
    </>
  );
}
