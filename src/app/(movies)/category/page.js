import CategoryBrowse from "@/components/Category/CategoryBrowse";
import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import Link from "next/link";

export default function Category() {
  const breadcrumb = {
    title: "Categories",
    links: [
      { name: "Home", href: "/" },
      { name: "browse by categories", href: "#" },
    ],
  };
  return (
    <>
      <HeaderOne data={{ breadcrumb }} />
      <main className="main">
        <CategoryBrowse />
      </main>

      <FooterOne />
    </>
  );
}
