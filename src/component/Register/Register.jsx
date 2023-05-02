import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useState } from "react";
import SocialButton from "../SocialButton/SocialButton";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    try {
      if (createUser) {
        const result = createUser(email, password);
        const loggedUser = result.user;
        console.log(loggedUser);
      } else {
        throw new Error("createUser function not found in AuthContext");
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  return (
    <div>
      <div>
        <div className="page-banner  min-h-screen">
          <div className="max-w-md  text-center mx-auto text-black py-48">
            <h1 className="mb-5 text-5xl font-bold ">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>

        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col w-3/4">
            <h1 className="text-5xl mb-5">Register Here</h1>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                    name="name"
                  />
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    name="email"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    name="password"
                  />
                  <label className="label">
                    <p className="label-text-alt link link-hover">
                      Already Have an account?<Link to="/login">Login Now</Link>
                    </p>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
              </form>
            </div>
            <SocialButton />
            {error && <div className="text-red-500 text-sm mt-4">{error}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
