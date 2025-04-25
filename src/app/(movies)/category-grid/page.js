import Link from "next/link";

import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import CategoryBrowseGrid from "@/components/Category/CategoryBrowseGrid";

export default function Category() {
  const breadcrumb = {
    title: "Categories Grid",
    links: [
      { name: "Home", href: "/" },
      { name: "browse by categories", href: "#" },
    ],
  };
  return (
    <>
      <HeaderOne data={{ breadcrumb }} />
      <main className="main">
        <CategoryBrowseGrid />
      </main>

      <FooterOne />
    </>
  );
}
