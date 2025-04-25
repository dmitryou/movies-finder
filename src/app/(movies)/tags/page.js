import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import DramaTag from "@/components/Tag/DramaTag";
import TvShowTag from "@/components/Tag/TvShowTag";

export default function TagPage() {
  const breadcrumb = {
    title: "Movie tags",
    links: [
      { name: "Home", href: "/" },
      { name: "Movie tags", href: "#" },
    ],
  };
  return (
    <>
      <HeaderOne data={{ breadcrumb }} />

      {/* <!-- Start Main --> */}
      <main className="main">
        {/* <!-- Start Pagination Area --> */}
        <DramaTag />
        <TvShowTag />
        {/* <!-- End Pagination Area --> */}
      </main>

      <FooterOne />
    </>
  );
}
