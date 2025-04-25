import Link from "next/link";

import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import BlogSidebar from "@/components/Blog/BlogSidebar";
import BlogDetail from "@/components/Blog/BlogDetail";
import BlogComment from "@/components/Blog/BlogComment";

export default function BlogDetailsWithoutSidebar() {
  const breadcrumb = {
    title: "Blog Details",
    links: [
      { name: "Home", href: "/" },
      { name: "Blog Details Without Sidebar", href: "#" },
    ],
  };
  return (
    <>
      <HeaderOne data={{ breadcrumb }} />
      <main className="main">
        <div className="blog-details-area py-80">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xxl-10 col-lg-11">
                <BlogDetail />
                <BlogComment />
              </div>
            </div>
          </div>
        </div>
      </main>

      <FooterOne />
    </>
  );
}
