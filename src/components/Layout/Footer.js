import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div>
      <footer className="text-muted">
        <div className="container">
          <p className="float-right">
            <Link to="#">Back to top</Link>
          </p>
          <p>
            Album example is &copy; Bootstrap, but please download and customize
            it for yourself!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
