export default function Register() {
  return (
    <div class="registration-area my-80">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-10">
            <div class="registration-wrap holaa-form-wrapper">
              <h5 class="inner-small-title mb-0">Register</h5>
              <p class="mb-4 pb-2">Welcome! Register in to your account</p>
              <form action="#">
                <div class="row">
                  <div class="col-md-6">
                    <label class="single-input-field style-border">
                      <span>First Name*</span>
                      <input type="text" placeholder="First Name" />
                    </label>
                  </div>
                  <div class="col-md-6">
                    <label class="single-input-field style-border">
                      <span>Last Name*</span>
                      <input type="text" placeholder="Last Name" />
                    </label>
                  </div>
                  <div class="col-md-6">
                    <label class="single-input-field style-border">
                      <span>Email</span>
                      <input type="text" placeholder="Email" />
                    </label>
                  </div>
                  <div class="col-md-6">
                    <label class="single-input-field style-border">
                      <span>Password</span>
                      <input type="text" placeholder="Password" />
                      <svg
                        class="input-icon"
                        width="18"
                        height="16"
                        viewBox="0 0 18 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.11998 9.8316C6.61803 9.33053 6.3125 8.64962 6.3125 7.88579C6.3125 6.3555 7.54511 5.12201 9.07453 5.12201C9.83138 5.12201 10.528 5.42842 11.0212 5.92949"
                          stroke="#818181"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.785 8.37598C11.5825 9.50209 10.6956 10.3908 9.57031 10.595"
                          stroke="#818181"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4.40889 12.5427C3.02351 11.455 1.85026 9.86624 1 7.88551C1.85899 5.89604 3.0401 4.29853 4.43421 3.2021C5.81959 2.10567 7.41797 1.51031 9.07484 1.51031C10.7413 1.51031 12.3388 2.1144 13.7329 3.21869"
                          stroke="#818181"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.5773 5.13885C16.1779 5.93674 16.7061 6.8577 17.1504 7.88517C15.4333 11.8632 12.3989 14.2595 9.07556 14.2595C8.3222 14.2595 7.57931 14.1373 6.86523 13.899"
                          stroke="#818181"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.9614 1L2.19141 14.77"
                          stroke="#818181"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </label>
                  </div>
                  <div class="col-12">
                    <label class="checkbox-wrap">
                      <input type="checkbox" id="css" checked />
                      <span>Remember me</span>
                    </label>
                    <div class="btn-wrap mt-sm-4 pt-lg-3 mt-4">
                      <button
                        type="submit"
                        class="hl-btn medium-btn btn-base text-uppercase lh-1"
                      >
                        <span class="pt-0">Register Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
