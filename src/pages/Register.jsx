// import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div className="card bg-base-100 lg:w-5/12  rounded-none p-10">
        <div className="card-body ">
          <h2 className="text-center font-semibold text-2xl">
            Register your account
          </h2>
          <fieldset className="fieldset ">
            {/* Name input */}
            <label className="label">Name</label>
            <input
              type="text"
              className="input w-full bg-slate-200"
              placeholder="Name"
            />
            {/* Photo input */}
            <label className="label">Photo</label>
            <input
              type="text"
              className="input w-full bg-slate-200"
              placeholder="Photo URL"
            />
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
            
            <button className="btn btn-neutral mt-4 rounded-none w-full">
              Register
            </button>
          </fieldset>
          <p>
            Have an account?{" "}
            <Link to="/auth/login" className="text-red-600">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
