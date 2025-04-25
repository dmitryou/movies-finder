import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import BlogLayout from "@/components/Layout/BlogLayout";

export default function Blog() {
  const breadcrumb = {
    title: "Blog",
    links: [
      { name: "Home", href: "/" },
      { name: "Blog", href: "#" },
    ],
  };
  return (
    <>
      <HeaderOne data={{ breadcrumb }} />
      {/* <!-- Start Main --> */}
      <main className="main">
        <BlogLayout />
      </main>
      <FooterOne />
    </>
  );
}
