import BlogContent from "@/components/Blog/BlogContent";
import BlogSidebar from "@/components/Blog/BlogSidebar";
import BlogPagination from "@/components/Pagination/BlogPagination";

export default function BlogLayout({ items = "4" }) {
  return (
    <div className="blog-area py-80">
      <div className="container">
        <div className="row">
          <div className="col-xxl-9 col-lg-8">
            <BlogContent items="4" />
            <BlogPagination />
          </div>
          {/* <!-- Blog Side Bar --> */}
          <div className="col-xxl-3 col-lg-4 d-lg-block d-none">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
