import Image from "next/image";

import data from "@/data/faq";

export default function FaqOne() {
  return (
    <div className="faq container py-80">
      <div className="row justify-content-between">
        <div className="col-xxl-4 col-lg-5 col-md-10 mb-lg-0 mb-4">
          <h3 className="section-title mb-4">{data.title}</h3>
          <Image src={data.image} alt="icon" />
        </div>
        <div className="col-xxl-6 col-lg-7">
          {data.faqs && data.faqs.length > 0 && (
            <ul
              className="accordion faq-accordion accordion-flush"
              id="accordion"
            >
              {data.faqs.map((faq, index) => (
                <li key={index} className="accordion-item faq-accordion--item">
                  <h3
                    className="accordion-header faq-accordion--header"
                    id={`accordion_${index + 1}`}
                  >
                    <button
                      className="accordion-button faq-accordion--button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse_${index + 1}`}
                      aria-expanded="true"
                      aria-controls={`collapse_${index + 1}`}
                    >
                      <span>{faq.title}</span>
                    </button>
                  </h3>
                  <div
                    id={`collapse_${index + 1}`}
                    className={`accordion-collapse collapse ${
                      index == 0 ? "show" : ""
                    }`}
                    aria-labelledby={`accordion_${index + 1}`}
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body faq-accordion--body fw-medium">
                      <p className="fw-medium mb-0">{faq.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
