import React from "react";
import { Link, useRouteError } from "react-router-dom";
import errorImg from "../../assets/1551659700811.jpg";
const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section>
      <div>
        <div>
          <img src={errorImg} alt="" />
        </div>
        <div className="text-center">
          {" "}
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            {error?.message}
          </p>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
