import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import PaginationTwo from "@/components/Pagination/PaginationTwo";

export default function OriginalShows() {
  const breadcrumb = {
    title: "ORIGINAL SHOWS",
    links: [
      { name: "Home", href: "/" },
      { name: "ORIGINAL SHOWS", href: "#" },
    ],
  };
  return (
    <>
      <HeaderOne data={{ breadcrumb }} />

      {/* <!-- Start Main --> */}
      <main className="main">
        <PaginationTwo />
      </main>

      <FooterOne />
    </>
  );
}
