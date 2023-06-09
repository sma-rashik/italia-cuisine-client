import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import SocialButton from "../SocialButton/SocialButton";
import { sendPasswordResetEmail } from "firebase/auth";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const { auth } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error);
      });
  };

  const handleResetPassword = (event) => {
    const email = emailRef.current.value;
    if (!email) {
      alert("Please Provide your email address to reset password");
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Please Check Your mail");
      })
      .catch((error) => {
        setError(
          "No user found with provided email. Please check the email and try again."
        );
      });
  };
  return (
    <div>
      <div className="page-banner  min-h-screen">
        <div className="max-w-md  text-center mx-auto text-black py-48">
          <h1 className="mb-5 text-5xl font-bold ">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col w-3/4">
          <h1 className="text-5xl mb-5">Please Login</h1>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  ref={emailRef}
                  className="input input-bordered"
                  name="email"
                  required
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
                  required
                />
                <label className="label">
                  <Link
                    to="/register"
                    className="label-text-alt link link-hover"
                  >
                    Create an Account!!
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6 ">
                <button className="btn btn-primary">Login</button>
                <small className="mt-3  btn-link">
                  Forgot Password?{" "}
                  <Link onClick={handleResetPassword}>Reset Password</Link>
                </small>
              </div>
              {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
            </form>
          </div>
          <SocialButton />
        </div>
      </div>
    </div>
  );
};

export default Login;
