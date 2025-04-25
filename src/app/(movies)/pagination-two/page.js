import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import PaginationTwo from "@/components/Pagination/PaginationTwo";

export default function OriginalShows() {
  const breadcrumb = {
    title: "Pagination style",
    links: [
      { name: "Home", href: "/" },
      { name: "Pagination style", href: "#" },
    ],
  };
  return (
    <>
      <HeaderOne data={{ breadcrumb }} />

      {/* <!-- Start Main --> */}
      <main className="main">
        <PaginationTwo title={"Pagination style 02"} />
      </main>

      <FooterOne />
    </>
  );
}
