import jsPDF from "jspdf";
import React from "react";
import "jspdf-autotable";
const Blog = () => {
  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    // Loop through all the collapse elements
    const collapses = document.querySelectorAll(".collapse");
    collapses.forEach((collapse, index) => {
      // Get the title and content of each collapse element
      const title = collapse.querySelector(".collapse-title").textContent;
      const content = collapse.querySelector(".collapse-content").textContent;

      // Add the title and content to the PDF document
      doc.text(`${index + 1}) ${title}`, 10, 10 + index * 60);
      doc.text(content, 10, 20 + index * 60);
    });

    doc.save("questions.pdf");
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
          <button onClick={handleDownloadPDF} className="btn btn-link">
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
          <button onClick={handleDownloadPDF} className="btn btn-link">
            Download PDF
          </button>
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
          <button onClick={handleDownloadPDF} className="btn btn-link">
            Download PDF
          </button>
        </div>
      </div>

      <div className="collapse mt-10 mb-12 text-center">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          4) What is a custom hook, and why will you create a custom hook?
        </div>
        <div className="collapse-content">
          <p>
            A custom hook is a reusable function in React that allows you to
            share logic across multiple components. You can create a custom hook
            to avoid duplicating code and simplify your component's logic.
          </p>
          <button onClick={handleDownloadPDF} className="btn btn-link">
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
