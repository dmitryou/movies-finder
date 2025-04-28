"use client"
import { useState } from 'react';
import { handleLogin } from '../../firebase/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await handleLogin(email, password);
      console.log('User logged in:', user);
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  return (
    <div class="registration-area my-60">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-6">
            <div class="registration-wrap holaa-form-wrapper extra-margin-top">
              <h5 class="inner-small-title mb-0">Login</h5>
              <p class="mb-4 pb-2">Welcome! Log in to your account</p>
              <form onSubmit={onSubmit}>
                <label class="single-input-field style-border">
                  <span>Email</span>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
                </label>
                <label class="single-input-field style-border">
                  <span>Password</span>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
                </label>
                <div class="check-btn">
                  <div class="btn-wrap mt-sm-4 pt-lg-3 mt-4">
                    <button
                      type="submit"
                      class="hl-btn medium-btn btn-base text-uppercase lh-1"
                    >
                      <span class="pt-0">Log In</span>
                    </button>
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
