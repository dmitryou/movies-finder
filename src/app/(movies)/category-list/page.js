import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import CategoryBrowseList from "@/components/Category/CategoryBrowseList";

export default function Category() {
  const breadcrumb = {
    title: "Categories List",
    links: [
      { name: "Home", href: "/" },
      { name: "browse by categories", href: "#" },
    ],
  };
  return (
    <>
      <HeaderOne data={{ breadcrumb }} />
      <main className="main">
        <CategoryBrowseList />
      </main>
      <FooterOne />
    </>
  );
}
