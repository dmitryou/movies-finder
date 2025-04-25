import Link from "next/link";
import Image from "next/image";

import profileIcon from "@/../public/assets/images/icons/profile-icon.svg";
import clockIcon from "@/../public/assets/images/icons/clock-tranparent.svg";
import colonIcon from "@/../public/assets/images/icons/colon.svg";

import { blogDetailData as data } from "@/data/blog";

export default function BlogDetail() {
  return (
    <div className="blog blog-details">
      <div className="thumb position-relative">
        <Link href="#">
          <Image src={data.imageOne} alt="blog" />
        </Link>
        <div className="badge detalis position-absolute bottom-0 bg-body p-2">
          <div className="type lh-1 p-2 fs-18 text-uppercase fw-normal ls-1">
            {data.category}
          </div>
        </div>
      </div>
      <div className="content px-0">
        <div className="d-flex align-items-center gap-sm-4 gap-2 fs-18 mb-3 lh-1">
          <div className="d-inline-flex align-items-center gap-1">
            <Image src={profileIcon} alt="author" />
            <div className="author-name text-uppercase">{data.author}</div>
          </div>
          <div>/</div>
          <div className="d-inline-flex align-items-center gap-1">
            <Image src={clockIcon} alt="time" />
            <div className="time ms-1 flex-shrink-0 text-uppercase">
              {data.date}
            </div>
          </div>
        </div>
        <h3 className="blog-title text-uppercase mb-3">
          <Link href="#" className="gradient-link fw-medium">
            {data.title}
          </Link>
        </h3>
        <p className="text-block has-dropcap">{data.descriptionOne}</p>
        <p className="text-block">{data.descriptionTwo}</p>
        <blockquote className="quotation bg-primary mt-3">
          <Image src={colonIcon} alt="color" />
          <em className="quotation--quote d-block text-uppercase mb-3 mt-3">
            {data.qoutation}
          </em>
          <p className="quotation--author lh-1 mb-0 fw-medium">
            -- {data.qoutationAuthor}
          </p>
        </blockquote>
        <p className="text-block">{data.descriptionThree}</p>
        <div className="row my-3">
          <div className="col-6">
            <Image src={data.blogDetailImageOne} alt="blog" />
          </div>
          <div className="col-6">
            <Image src={data.blogDetailImageTwo} alt="blog" />
          </div>
        </div>
        <p className="text-block">{data.descriptionFour}</p>
      </div>
    </div>
  );
}
