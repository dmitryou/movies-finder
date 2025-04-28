"use client"
import { useState } from 'react';
import { handleSignup } from '../../firebase/auth';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await handleSignup(email, password);
      console.log('User signed up:', user);
    } catch (error) {
      console.error('Signup error:', error.message);
    }
  };

  return (
    <div class="registration-area my-60">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-10">
            <div class="registration-wrap holaa-form-wrapper extra-margin-top">
              <h5 class="inner-small-title mb-0">Register</h5>
              <p class="mb-4 pb-2">Welcome! Register in to your account</p>
              <form onSubmit={onSubmit}>
                <div class="row">
                  <div class="col-md-6">
                    <label class="single-input-field style-border">
                      <span>Email</span>
                      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
                    </label>
                  </div>
                  <div class="col-md-6">
                    <label class="single-input-field style-border">
                      <span>Password</span>
                      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
                    </label>
                  </div>
                  <div class="col-12">
                    {/* <label class="checkbox-wrap">
                      <input type="checkbox" id="css" checked />
                      <span>Remember me</span>
                    </label> */}
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
