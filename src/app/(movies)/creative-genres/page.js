import FooterOne from "@/components/Footer/FooterOne";
import KidsAndFamilyGenre from "@/components/Genre/KidsAndFamilyGenre";
import MovieGenre from "@/components/Genre/MovieGenre";
import WebAndTvSeriesGenre from "@/components/Genre/WebAndTvSeriesGenre";
import HeaderOne from "@/components/Header/HeaderOne";

export default function CreativeGenrePage() {
  const breadcrumb = {
    title: "Creative Genres",
    links: [
      { name: "Home", href: "/" },
      { name: "Creative Genres", href: "#" },
    ],
  };
  return (
    <>
      <HeaderOne data={{ breadcrumb }} />

      {/* <!-- Start Main --> */}
      <main className="main">
        {/* <!-- Start Pagination Area --> */}
        <MovieGenre />
        <KidsAndFamilyGenre />
        <WebAndTvSeriesGenre />
        {/* <!-- End Pagination Area --> */}
      </main>

      <FooterOne />
    </>
  );
}
