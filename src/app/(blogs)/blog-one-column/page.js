import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import BlogColumnLayout from "@/components/Layout/BlogColumnLayout";

export default function BlogOneColumnPage() {
  const breadcrumb = {
    title: "Blog",
    links: [
      { name: "Home", href: "/" },
      { name: "Blog One Column", href: "#" },
    ],
  };
  return (
    <>
      <HeaderOne data={{ breadcrumb }} />
      {/* <!-- Start Main --> */}
      <main className="main">
        <BlogColumnLayout column="1" items="4" />
      </main>
      <FooterOne />
    </>
  );
}
