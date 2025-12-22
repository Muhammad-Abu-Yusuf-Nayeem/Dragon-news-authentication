// import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createNewUser,setUser} = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    // Form data extraction
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log({ name, photo, email, password });

    createNewUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div className="card bg-base-100 lg:w-5/12  rounded-none p-10">
        <div className="card-body ">
          <h2 className="text-center font-semibold text-2xl">
            Register your account
          </h2>
          <form onSubmit={handleSubmit}>
            <fieldset className="fieldset ">
              {/* Name input */}
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input w-full bg-slate-200"
                placeholder="Name"
              />
              {/* Photo input */}
              <label className="label">Photo</label>
              <input
                name="photo"
                type="text"
                className="input w-full bg-slate-200"
                placeholder="Photo URL"
              />
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

              <button className="btn btn-neutral mt-4 rounded-none w-full">
                Register
              </button>
            </fieldset>
          </form>

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
