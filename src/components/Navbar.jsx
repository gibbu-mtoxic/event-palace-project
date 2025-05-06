import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav">
      <div className="row">
        <div className="col-md-6">
          <nav className="navbar navbar-expand-md navbar-light bg-light">
            {/* Navbar Toggle Button */}
            <button
              className="navbar-toggler"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Collapsible Menu */}
            <div
              className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
              id="navbarcollapse"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to="/signup" className="nav-link">
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/signin" className="nav-link">
                    Signin
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/GetTent" className="nav-link">
                    See Tents
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/About" className="nav-link">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
