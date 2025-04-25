import Link from "next/link";

import privacy from "@/data/privacy";

export default function PrivacyPolicyContent() {
  return (
    <div className="privacy-policy container py-80">
      <div className="row justify-content-between">
        <div className="col-xl-4 col-lg-5 mb-4 mb-lg-0">
          <div className="table-content">
            <h3 className="section-title small lh-1 mb-3">{privacy.title}</h3>
            {privacy.items && privacy.items.length > 0 && (
              <ul className="content-list">
                {privacy.items.map((item, index) => (
                  <li key={index} className="content-item">
                    <Link
                      href={`#${index + 1}`}
                      className="gradient-link fw-semibold"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        {privacy.items && privacy.items.length > 0 && (
          <div className="col-lg-7 content-block">
            {privacy.items.map((item, index) => (
              <div key={index} id={index + 1} className="terms">
                <h3 className="section-title small lh-1">
                  {item.content.title}
                </h3>
                <p className="description">{item.content.description}</p>
                {item.content.descriptionTwo && (
                  <p className="description">{item.content.descriptionTwo}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
