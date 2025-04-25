import blogs from "@/data/blog";
import BlogCard from "../Card/BlogCard";

export default function BlogContent({ items = "4" }) {
  return (
    <>
      <div className="blog-wrapper">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            blog={blog}
            className={`${index >= items ? "d-none" : ""}`}
          />
        ))}
      </div>
    </>
  );
}
