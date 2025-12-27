// import React from 'react';

import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext, useState } from "react";

const Login = () => {
  const { userLogin, setUser } = useContext(AuthContext);
  const [error, setError] = useState([]);

  const location = useLocation();
  console.log("Private route location:", location);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({ email, password });
    userLogin(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log("Logged in user:", loggedUser);
        setUser(loggedUser);
        navigate(location?.state ? location?.state : "/");
        form.reset();
      })
      .catch((err) => {
        setError({ login: err.code });
        console.log("Login error:", err);
      });
  };
  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div className="card bg-base-100 lg:w-5/12  rounded-none p-10">
        <div className="card-body ">
          <h2 className="text-center font-semibold text-2xl">
            Login your account
          </h2>
          <form onSubmit={handleSubmit}>
            <fieldset className="fieldset ">
              {/* Email input */}
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input w-full bg-slate-200"
                placeholder="Email"
              />
              {/* password input */}
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input w-full bg-slate-200"
                placeholder="Password"
              />

              {error?.login && (
                <p className="text-red-600 mt-2">{error.login}</p>
              )}

              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4 rounded-none w-full">
                Login
              </button>
            </fieldset>
          </form>
          <p>
            Don`t have an account?{" "}
            <Link to="/auth/register" className="text-red-600">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
