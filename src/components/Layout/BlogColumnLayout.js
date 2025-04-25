import BlogCard from "@/components/Card/BlogCard";
import BlogPagination from "@/components/Pagination/BlogPagination";

import blogs from "@/data/blog";

export default function BlogColumnLayout({ column = "1", items = "4" }) {
  return (
    <div className="blog-area py-80">
      <div className="container">
        <div className="row">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className={`col-lg-${Math.floor(12 / column)} mb-4 ${
                index >= items ? "d-none" : ""
              }`}
            >
              <BlogCard
                blog={blog}
                className={` ${items > 4 ? "style-2" : ""}`}
              />
            </div>
          ))}
          <BlogPagination />
        </div>
      </div>
    </div>
  );
}
