import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import BlogColumnLayout from "@/components/Layout/BlogColumnLayout";

export default function BlogThreeColumnPage() {
  const breadcrumb = {
    title: "Blog",
    links: [
      { name: "Home", href: "/" },
      { name: "Blog Three Column", href: "#" },
    ],
  };
  return (
    <>
      <HeaderOne data={{ breadcrumb }} />
      <div className="main">
        <BlogColumnLayout column="3" items="6" />
      </div>
      <FooterOne />
    </>
  );
}
