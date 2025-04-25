import Link from "next/link";
import Image from "next/image";

import searchIcon from "@/../public/assets/images/icons/search.svg";
import clockIcon from "@/../public/assets/images/icons/clock-tranparent.svg";

import { sidebarData as data } from "@/data/blog";

export default function BlogSidebar() {
  return (
    <div className="blog-sidebar">
      <form
        action="#"
        method="post"
        className="position-relative widget_search"
      >
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search here..."
          className="hl-input-field blog-search-input lh-1 w-100"
        />
        <button
          type="submit"
          className="blog-search-btn position-absolute top-50 end-0 translate-middle-y me-1"
        >
          <Image src={searchIcon} alt="search" />
        </button>
      </form>
      <div className="divider"></div>
      {/* <!-- Recent Post --> */}
      <h4 className="title text-uppercase lh-1 mb-2">{data.title}</h4>
      {data.posts && data.posts.length > 0 && (
        <ul className="recent-post-list">
          {/* <!-- Single Recent Post --> */}
          {data.posts.map((post, index) => (
            <li key={index} className="row recent-post">
              <div className="col-4">
                <div className="thumb">
                  <Image src={post.image} alt="post" />
                </div>
              </div>
              <div className="col-8 ps-0 align-self-center">
                <div className="content">
                  <div className="d-flex align-item-center">
                    <div className="d-inline-flex align-items-center">
                      <Image src={clockIcon} alt="time" />
                      <div className="time fs-14 ms-1 flex-shrink-0 text-uppercase">
                        {post.date}
                      </div>
                    </div>
                  </div>
                  <h6 className="post-title fw-medium fs-18 mb-0 lh-1 mt-2">
                    <Link href={post.href} className="gradient-link">
                      {post.title}
                    </Link>
                  </h6>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="divider"></div>
      {/* <!-- Categories --> */}
      <h4 className="title text-uppercase lh-1 mb-2">Categories</h4>
      {data.categories && data.categories.length > 0 && (
        <ul className="category-list lh-1">
          {data.tags.map((category, index) => (
            <li key={index}>
              <Link href={category.href} className="category-link">
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <div className="divider"></div>
      {/* <!-- Tags --> */}
      <h4 className="title text-uppercase lh-1 mb-2">Tags</h4>
      {data.tags && data.tags.length > 0 && (
        <ul className="tag-list gap-2 d-flex align-item-center flex-wrap lh-1">
          {data.tags.map((tag, index) => (
            <li key={index}>
              <Link href={tag.href} className="tag-link text-uppercase fs-14">
                {tag.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
