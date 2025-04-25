import PaginationSlider from "./PaginationSlider";
import PaginationSliderReverse from "./PaginationSliderReverse";

export default function PaginationOne({ title = null }) {
  return (
    <div className="pagination-style py-80">
      {title && (
        <h3 className="section-title mb-0 lh-1 text-center mb-4">{title}</h3>
      )}
      <PaginationSlider />
      <PaginationSliderReverse />
      {/* <!-- Pagination Buttons --> */}
      <ul className="hl-pagination mt-5">
        <li className="hl-pagination--item">
          <button className="hl-pagination--button current">01</button>
        </li>
        <li className="hl-pagination--item">
          <button className="hl-pagination--button">02</button>
        </li>
        <li className="hl-pagination--item">
          <button className="hl-pagination--button">03</button>
        </li>
        <li className="hl-pagination--item">
          <button className="hl-pagination--button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="19"
              viewBox="0 0 28 19"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.49 0.196115C18.2638 1.3274 18.3963 3.13433 19.5707 4.7971C20.7361 6.44723 22.973 8.01774 27.0705 8.60308L27 9.09638V9.0997L27.0705 9.59299C22.973 10.1783 20.7361 11.7488 19.5707 13.399C18.3963 15.0617 18.2638 16.8687 18.49 18L17.5095 18.1961C17.2357 16.8274 17.4033 14.7343 18.7539 12.8221C19.6399 11.5675 21.016 10.4172 23.0581 9.59804H0V8.59804H23.0581C21.016 7.77883 19.6399 6.62854 18.7539 5.37401C17.4033 3.46179 17.2357 1.36872 17.5095 0L18.49 0.196115Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
}
