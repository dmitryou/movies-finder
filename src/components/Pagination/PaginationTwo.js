import Link from "next/link";
import PaginationSlider from "./PaginationSlider";
import PaginationSliderReverse from "./PaginationSliderReverse";

export default function PaginationTwo({ title = null }) {
  return (
    <div className="pagination-style py-80">
      {title && (
        <h3 className="section-title mb-0 lh-1 text-center mb-4">{title}</h3>
      )}

      <PaginationSlider />
      <PaginationSliderReverse />

      {/* <!-- Pagination Buttons --> */}
      <div className="btn-wrap text-center">
        <Link
          href="#"
          className="hl-btn medium-btn lh-1 btn-base fs-18 fw-bold radius-20 flex-shrink-0 text-uppercase mt-5"
        >
          <span className="pt-0">Load more</span>
        </Link>
      </div>
    </div>
  );
}
