// NavBar.js
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate(); // To navigate programmatically

  // Check for the username in localStorage when the component mounts
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("username"); // Remove username from localStorage
    setUsername(""); // Clear the username from state
    navigate("/signin"); // Redirect to the signin page
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Display the username in the top-left corner */}
        <span className="navbar-brand">
          {username ? `Welcome, ${username}` : "Welcome, Guest"}
        </span>

        {/* Show the logout button if the user is logged in */}
        {username && (
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        )}
        {/* Other Nav items */}
      </div>
      <div className="nav">
        <div className="row">
          <div className="col-md-6">
            <nav className="navbar navbar-expand-md navbar-light bg-light">
              {/* Navbar Toggle Button */}

              {/* Collapsible Menu */}
              <div
                className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
                id="navbarcollapse"
              >
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      SeeTents
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/Signup" className="nav-link">
                      Signup
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Signin" className="nav-link">
                      Signin
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/About" className="nav-link">
                      AboutUs
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="col-md-6">
            <button
              className="navbar-toggler"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
