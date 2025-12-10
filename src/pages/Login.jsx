// import React from 'react';

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div className="card bg-base-100 lg:w-5/12  rounded-none p-10">
        <div className="card-body ">
          <h2 className="text-center font-semibold text-2xl">
            Login your account
          </h2>
                  <fieldset className="fieldset ">
                      {/* Email input */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input w-full bg-slate-200"
              placeholder="Email"
                      />
                      {/* password input */}
            <label className="label">Password</label>
            <input
              type="password"
              className="input w-full bg-slate-200"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4 rounded-none w-full">Login</button>
                  </fieldset>
                  <p>Don't have an account? <Link to="/auth/register" className="text-red-600">Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
