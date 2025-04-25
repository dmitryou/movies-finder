import Image from "next/image";
import pricing from "@/data/pricing";

export default function PricingList() {
  return (
    <div className="container">
      <div className="row justify-content-center mb-30">
        <div className="col-xl-4 col-lg-6 col-md-8 col-sm-10">
          <h3 className="section-title text-center">{pricing.title}</h3>
          <p className="section-description text-center">
            {pricing.description}
          </p>
        </div>
      </div>
      {pricing.items && pricing.items.length && (
        <div className="row justify-content-center">
          {pricing.items.map((item, index) => (
            <div
              key={index}
              className="col-xxl-4 col-xl-5 col-lg-5 col-md-6 col-sm-10 mb-md-0 mb-4"
            >
              <div
                className="pricing-card"
                style={{
                  backgroundImage: "url('assets/images/pricing.webp')",
                }}
              >
                <div className="pricing-card--header position-relative">
                  <Image src={item.image} alt="regular" />
                  <h4 className="title text-uppercase mt-3 mb-0">
                    {item.title}
                  </h4>
                  <div className="price-badge position-absolute">
                    <p className="price mb-2 lh-1">{item.price}</p>
                    <p className="duration mb-0 lh-1">{item.type}</p>
                  </div>
                </div>
                <div className="pricing-card--body">
                  {item.features && item.features.length > 0 && (
                    <ul className="pricing-card--list lh-1">
                      {item.features.map((feature, key) => (
                        <li key={key} className="service-item">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                  <button
                    className="pricing-card--button lh-1 text-uppercase text-center d-block w-100"
                    style={{
                      backgroundImage: "url('assets/images/price-btn.webp')",
                    }}
                  >
                    {item.btnText}
                  </button>
                  <p className="note text-center lh-1 mt-3 mb-0">
                    {item.promotionText}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
