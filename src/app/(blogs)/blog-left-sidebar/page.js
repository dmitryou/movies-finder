import BlogContent from "@/components/Blog/BlogContent";
import BlogSidebar from "@/components/Blog/BlogSidebar";
import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import BlogPagination from "@/components/Pagination/BlogPagination";

export default function BlogLeftSidebarPage() {
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
        <div className="blog-area py-80">
          <div className="container">
            <div className="row">
              {/* <!-- Blog Side Bar --> */}
              <div className="col-xxl-3 col-lg-4 d-lg-block d-none">
                <BlogSidebar />
              </div>
              <div className="col-xxl-9 col-lg-8">
                <BlogContent />
                <BlogPagination />
              </div>
            </div>
          </div>
        </div>
      </main>
      <FooterOne />
    </>
  );
}
