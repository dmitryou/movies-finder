import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import BlogColumnLayout from "@/components/Layout/BlogColumnLayout";

export default function BlogTwoColumnPage() {
  const breadcrumb = {
    title: "Blog",
    links: [
      { name: "Home", href: "/" },
      { name: "Blog Two Column", href: "#" },
    ],
  };
  return (
    <>
      <HeaderOne data={{ breadcrumb }} />
      <div className="main">
        <BlogColumnLayout column="2" items="4" />
      </div>
      <FooterOne />
    </>
  );
}
