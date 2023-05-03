import React from "react";
import { toPdf } from "react-to-pdf";

const Blog = () => {
  const handleDownload = async () => {
    const pdf = await toPdf(componentRef.current, {});

    const blob = new Blob([pdf], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "blog.pdf";
    link.click();
  };
  return (
    <div>
      <div className="page-banner w-full">
        <h1 className="text-8xl text-center pt-64 text-zinc-950">Blog</h1>
      </div>

      <div className="collapse mt-10 mb-12 text-center">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          1) Tell us the differences between uncontrolled and controlled
          components.{" "}
        </div>
        <div className="collapse-content">
          <p>
            Controlled components are those whose state is controlled by React
            and all user input is handled by callbacks passed from parent
            components. Uncontrolled components, on the other hand, manage their
            own state internally using the DOM API, and their state is not
            directly controlled by React.
          </p>
          <button onClick={handleDownload} className="btn btn-link">
            Download PDF
          </button>
        </div>
      </div>

      <div className="collapse mt-10 mb-12 text-center">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          2) How to validate React props using PropTypes
        </div>
        <div className="collapse-content">
          <p>
            PropTypes is a package in React that helps you to validate the data
            types of props. You can use PropTypes to check if the type of prop
            passed in is the same as the one you are expecting. If the type of
            prop is incorrect, it will give you an error message. It's like
            double-checking that the data you're receiving is what you expect.
          </p>
        </div>
      </div>

      <div className="collapse mt-10 mb-12 text-center">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          3) Tell us the difference between nodejs and express js.
        </div>
        <div className="collapse-content">
          <p>
            Node.js is a JavaScript runtime environment, while Express.js is a
            web framework built on top of Node.js. Node.js provides the core
            functionalities for running JavaScript on the server-side, while
            Express.js adds tools and libraries to create web applications and
            APIs more easily.
          </p>
        </div>
      </div>

      <div className="collapse mt-10 mb-12 text-center">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          3) What is a custom hook, and why will you create a custom hook?
        </div>
        <div className="collapse-content">
          <p>
            A custom hook is a reusable function in React that allows you to
            share logic across multiple components. You can create a custom hook
            to avoid duplicating code and simplify your component's logic.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
