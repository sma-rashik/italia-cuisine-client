import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <div className="grid grid-flow-col gap-4">
          <Link to="/" className="link link-hover">
            Home
          </Link>
          <Link to="/blog" className="link link-hover">
            Blog
          </Link>
          <Link to="/login" className="link link-hover">
            Sign In
          </Link>
        </div>
        <div></div>
        <div>
          <p>Copyright © 2023 - All right reserved by Cuicina d'Italia </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
