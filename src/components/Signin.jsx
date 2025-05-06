import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(""); // Store the username
  const navigate = useNavigate();

  // Feedback system
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Load username from localStorage on component mount (for persistent login)
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  // Posting data (handling login)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading state

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      const response = await axios.post(
        "https://gibzy.pythonanywhere.com/api/signin",
        formData
      );

      if (response.data.user) {
        setLoading(false);
        setSuccess(response.data.success);
        setUsername(response.data.user.username); // Set username after successful login
        setEmail(""); // Clear email input
        setPassword(""); // Clear password input

        // Save the username in localStorage for persistent login
        localStorage.setItem("username", response.data.user.username);

        navigate("/");
      } else {
        setLoading(false);
        setSuccess(""); // Reset success message
        setError(response.data.message);
      }
    } catch (error) {
      setLoading(false);
      setError("An error occurred, please try again.");
    }
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("username"); // Remove username from localStorage
    setUsername(""); // Clear username from state
    navigate("/signin"); // Redirect to signin page
  };

  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-6 card shadow p-4">
        <h1>Signin Form</h1>
        {loading && <p>Loading...</p>}
        {success && <div className="alert alert-success">{success}</div>}
        {error && <div className="alert alert-danger">{error}</div>}

        {/* Show the logout button if the user is logged in */}
        {username ? (
          <div>
            <h2>Welcome, {username}!</h2>
            <button
              onClick={handleLogout}
              className="btn btn-danger btn-lg w-45"
            >
              Logout
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                placeholder="Enter account password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn bg-success w-45 btn-lg">
              Signin
            </button>

            <p>
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Signin;
