import FooterOne from "@/components/Footer/FooterOne";
import HeaderFour from "@/components/Header/HeaderFour";
import MovieDownload from "@/components/Movie/MovieDownload";

export default function MovieDownloadPage() {
  return (
    <>
      <HeaderFour isHero={true} />

      {/* <!-- Start Main --> */}
      <main className="main pb-80">
        {/* <!-- Start Pagination Area --> */}
        <MovieDownload />
        {/* <!-- End Pagination Area --> */}
      </main>

      <FooterOne />
    </>
  );
}
