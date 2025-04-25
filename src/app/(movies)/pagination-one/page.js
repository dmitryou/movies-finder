import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import PaginationOne from "@/components/Pagination/PaginationOne";

export default function Movies() {
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
        <PaginationOne title={"Pagination style 01"} />
      </main>

      <FooterOne />
    </>
  );
}
