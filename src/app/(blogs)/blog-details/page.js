import Link from "next/link";

import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import BlogSidebar from "@/components/Blog/BlogSidebar";
import BlogDetail from "@/components/Blog/BlogDetail";
import BlogComment from "@/components/Blog/BlogComment";

export default function BlogDetails() {
  const breadcrumb = {
    title: "Blog Details",
    links: [
      { name: "Home", href: "/" },
      { name: "Blog Details", href: "#" },
    ],
  };
  return (
    <>
      <HeaderOne data={{ breadcrumb }} />
      <main className="main">
        <div className="blog-details-area py-80">
          <div className="container">
            <div className="row">
              <div className="col-xxl-9 col-lg-8">
                <BlogDetail />
                <BlogComment />
              </div>
              {/* <!-- Blog Side Bar --> */}
              <div className="col-xxl-3 col-lg-4 d-lg-block d-none">
                <BlogSidebar />
              </div>
            </div>
          </div>
        </div>
      </main>

      <FooterOne />
    </>
  );
}
