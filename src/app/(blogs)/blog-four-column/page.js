import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import BlogColumnLayout from "@/components/Layout/BlogColumnLayout";

export default function BlogFourColumnPage() {
  const breadcrumb = {
    title: "Blog",
    links: [
      { name: "Home", href: "/" },
      { name: "Blog Four Column", href: "#" },
    ],
  };
  return (
    <>
      <HeaderOne data={{ breadcrumb }} />
      <div className="main">
        <BlogColumnLayout column="4" items="8" />
      </div>
      <FooterOne />
    </>
  );
}
