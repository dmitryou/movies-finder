import Image from "next/image";

import { commentData as data } from "@/data/blog";

export default function BlogComment() {
  return (
    <>
      <div className="comment-reply-area mb-40">
        <h3 className="section-title lh-1 mb-0">{data.form.title}</h3>
        <p>{data.form.description}</p>
        <form className="cmnt-reply-form mt-30" action="#">
          <div className="d-block d-sm-flex align-items-center justify-content-between gap-2 gap-lg-4 mb-4">
            <label htmlFor="name" className="w-100">
              <span className="d-inline-block mb-2">
                {data.form.fields.fullName.label}
              </span>
              <input
                type="text"
                id="name"
                placeholder={data.form.fields.fullName.placeholder}
                required
                className="hl-input-field cmnt-reply-field d-inline-block w-100"
              />
            </label>
            <label htmlFor="email" className="w-100 mt-sm-0 mt-4">
              <span className="d-inline-block mb-2">
                {data.form.fields.email.label}
              </span>
              <input
                type="email"
                id="email"
                placeholder={data.form.fields.email.placeholder}
                required
                className="hl-input-field cmnt-reply-field d-inline-block w-100"
              />
            </label>
          </div>
          <label htmlFor="message" className="w-100">
            <span className="d-inline-block mb-2">
              {data.form.fields.message.label}
            </span>
            <textarea
              id="message"
              rows="3"
              placeholder={data.form.fields.message.placeholder}
              required
              className="hl-input-field cmnt-reply-field d-inline-block w-100"
            ></textarea>
          </label>
          <div className="position-relative z-1">
            <button
              type="submit"
              className="hl-btn big-btn btn-base text-uppercase lh-1 mt-3"
            >
              <span>{data.form.btnText}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="11"
                viewBox="0 0 16 11"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.0111 0.118557C10.8858 0.802447 10.9592 1.89478 11.6099 2.89997C12.2557 3.89752 13.4952 4.84693 15.7656 5.20079L15.7266 5.499V5.501L15.7656 5.79921C13.4952 6.15307 12.2557 7.10248 11.6099 8.10003C10.9592 9.10522 10.8858 10.1976 11.0111 10.8814L10.4678 11C10.3161 10.1726 10.4089 8.90726 11.1573 7.75127C11.6483 6.99288 12.4108 6.29749 13.5423 5.80226H0.765625V5.19774H13.5423C12.4108 4.70251 11.6483 4.00712 11.1573 3.24873C10.4089 2.09274 10.3161 0.827425 10.4678 0L11.0111 0.118557Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>

      <div className="comment-area">
        <h3 className="section-title lh-1 mb-3">Comment</h3>
        {data.comments && data.comments.length > 0 && (
          <ul className="comment-list">
            {/* <!-- Comment --> */}
            {data.comments.map((comment, index) => (
              <li key={index} className="comment-item">
                <div className="comment d-md-flex align-items-center gap-4">
                  <div className="thumb flex-shrink-0 mb-lg-0 mb-4">
                    <Image src={comment.avatar} alt="visitor" />
                  </div>
                  <div className="content flex-grow-1">
                    <div className="header d-md-flex align-items-center justify-content-between">
                      <h5 className="visitor-name  text-uppercase lh-1 mt-1 mb-0">
                        {comment.name}
                      </h5>
                      <button className="hl-btn mt-lg-0 mt-3 mb-lg-0 mb-3 small-btn btn-base comment-reply-btn text-uppercase fw-light">
                        <span>Reply</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="12"
                          viewBox="0 0 14 12"
                          fill="none"
                          className="mt-03"
                        >
                          <path
                            d="M13.5168 3.37667L10.5001 0.37345C10.2511 0.125649 9.99865 0 9.74966 0C9.40779 0 9.00856 0.258865 9.00856 0.988428V2.01088C6.8168 2.10598 4.76999 3.00081 3.20887 4.55486C1.5554 6.20079 0.644713 8.38924 0.644531 10.717C0.644505 10.8843 0.75198 11.0328 0.91133 11.0857C0.951988 11.0992 0.99366 11.1058 1.03492 11.1058C1.15535 11.1058 1.27194 11.0501 1.34714 10.9505C3.19044 8.5079 5.9657 7.06437 9.00856 6.95038V7.95705C9.00856 8.68659 9.40776 8.94548 9.74963 8.94551H9.74966C9.99865 8.94551 10.2512 8.81986 10.5001 8.57206L13.5168 5.56881C13.81 5.27698 13.9715 4.88773 13.9715 4.47277C13.9715 4.05778 13.81 3.66852 13.5168 3.37667ZM12.9646 5.01913L9.9479 8.0224C9.89003 8.08 9.84211 8.11639 9.80676 8.13849C9.79747 8.09799 9.78943 8.03852 9.78943 7.95708V6.55441C9.78943 6.33975 9.61462 6.16573 9.39899 6.16573C7.66423 6.16573 6.00656 6.56141 4.47212 7.34173C3.37056 7.90193 2.3636 8.65604 1.51086 9.55411C2.07814 5.72693 5.39951 2.7798 9.39899 2.7798C9.61462 2.7798 9.78943 2.60578 9.78943 2.39112V0.988428C9.78943 0.906986 9.79747 0.847517 9.80674 0.807042C9.84209 0.829145 9.89003 0.865526 9.9479 0.923129L12.9646 3.92638C13.1104 4.07141 13.1906 4.26544 13.1906 4.47277C13.1906 4.68006 13.1104 4.8741 12.9646 5.01913Z"
                            fill="white"
                          />
                        </svg>
                      </button>
                    </div>
                    <p className="fw-medium mb-0">{comment.description}</p>
                  </div>
                </div>
                {comment.replies && comment.replies.length > 0 && (
                  <ul className="comment-list reply-list">
                    {/* <!-- Comment Reply --> */}
                    {comment.replies.map((reply, i) => (
                      <li key={i} className="comment-item">
                        <div className="comment d-md-flex align-items-center gap-4">
                          <div className="thumb flex-shrink-0 mb-lg-0 mb-4">
                            <Image src={reply.avatar} alt="visitor" />
                          </div>
                          <div className="content flex-grow-1">
                            <div className="header d-md-flex align-items-center justify-content-between">
                              <h5 className="visitor-name  text-uppercase lh-1 mt-1 mb-0">
                                {reply.name}
                              </h5>
                              <button className="hl-btn mt-lg-0 mt-3 mb-lg-0 mb-3 small-btn btn-base comment-reply-btn text-uppercase fw-light">
                                <span>Reply</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="12"
                                  viewBox="0 0 14 12"
                                  fill="none"
                                  className="mt-03"
                                >
                                  <path
                                    d="M13.5168 3.37667L10.5001 0.37345C10.2511 0.125649 9.99865 0 9.74966 0C9.40779 0 9.00856 0.258865 9.00856 0.988428V2.01088C6.8168 2.10598 4.76999 3.00081 3.20887 4.55486C1.5554 6.20079 0.644713 8.38924 0.644531 10.717C0.644505 10.8843 0.75198 11.0328 0.91133 11.0857C0.951988 11.0992 0.99366 11.1058 1.03492 11.1058C1.15535 11.1058 1.27194 11.0501 1.34714 10.9505C3.19044 8.5079 5.9657 7.06437 9.00856 6.95038V7.95705C9.00856 8.68659 9.40776 8.94548 9.74963 8.94551H9.74966C9.99865 8.94551 10.2512 8.81986 10.5001 8.57206L13.5168 5.56881C13.81 5.27698 13.9715 4.88773 13.9715 4.47277C13.9715 4.05778 13.81 3.66852 13.5168 3.37667ZM12.9646 5.01913L9.9479 8.0224C9.89003 8.08 9.84211 8.11639 9.80676 8.13849C9.79747 8.09799 9.78943 8.03852 9.78943 7.95708V6.55441C9.78943 6.33975 9.61462 6.16573 9.39899 6.16573C7.66423 6.16573 6.00656 6.56141 4.47212 7.34173C3.37056 7.90193 2.3636 8.65604 1.51086 9.55411C2.07814 5.72693 5.39951 2.7798 9.39899 2.7798C9.61462 2.7798 9.78943 2.60578 9.78943 2.39112V0.988428C9.78943 0.906986 9.79747 0.847517 9.80674 0.807042C9.84209 0.829145 9.89003 0.865526 9.9479 0.923129L12.9646 3.92638C13.1104 4.07141 13.1906 4.26544 13.1906 4.47277C13.1906 4.68006 13.1104 4.8741 12.9646 5.01913Z"
                                    fill="white"
                                  />
                                </svg>
                              </button>
                            </div>
                            <p className="fw-medium mb-0">
                              {reply.description}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
