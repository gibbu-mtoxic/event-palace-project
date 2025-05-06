import axios from "axios";
import React, { useState } from "react";
import {Link} from "react-router-dom";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    
    //feedbacksystem
    const [loading, setLoading] = useState("");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [passwordStrength, setPasswordStrength] = useState("");

    // Function to check password strength
    const checkPasswordStrength = (pwd) => {
      let strength = 0;
      if (pwd.length >= 8) strength++;
      if (/[A-Z]/.test(pwd)) strength++;
      if (/[a-z]/.test(pwd)) strength++;
      if (/[0-9]/.test(pwd)) strength++;
      if (/[^A-Za-z0-9]/.test(pwd)) strength++;

      switch (strength) {
        case 0:
        case 1:
        case 2:
          return "Weak";
        case 3:
        case 4:
          return "Medium";
        case 5:
          return "Strong";
        default:
          return "";
      }
    };

    // Function to generate a strong password
    const generatePassword = () => {
      const length = 12;
      const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
      let generated = "";
      for (let i = 0, n = charset.length; i < length; ++i) {
        generated += charset.charAt(Math.floor(Math.random() * n));
      }
      setPassword(generated);
      setPasswordStrength(checkPasswordStrength(generated));
    };

    //fetching data
    const handlesubmit = async (e) => {
      e.preventDefault();
      setLoading("connecting...");
      try {
        const formData = new FormData();
        formData.append("username", username);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("password", password);
        //hosting data
        const response = await axios.post(
          "https://gibzy.pythonanywhere.com/api/signup",
          formData
        );
        setLoading("");
        setSuccess(response.data.message);
      } catch (error) {
        setError(error.message);
        setLoading("");
      }
    };

  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-6 card shadow p-2 ">
        <h1>signup form</h1>
        {loading}
        {success}
        {error}
        <form onSubmit={handlesubmit} action="">
          {/**username input */}
          <input
            type="text"
            placeholder="username"
            className="form-control"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />

          <br />
          {/**email input */}
          <input
            type="email"
            placeholder="Enter your Email"
            className="form-control"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          {/**telephone number input */}
          <input
            type="number"
            placeholder="Enter your telephone number"
            className="form-control"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <br />
          {/**password input with generator button */}
          <div className="d-flex align-items-center">
            <input
              type="text"
              placeholder="Enter your password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordStrength(checkPasswordStrength(e.target.value));
              }}
            />
            <button
              type="button"
              className="btn btn-secondary ms-2"
              onClick={generatePassword}
              title="Generate strong password"
            >
              Generate
            </button>
          </div>
          <small>Password strength: <strong>{passwordStrength}</strong></small>
          <br />
          <button type="submit" className=" btn bg-primary text-light w-50 ">
            signup
          </button>
          <p>
            Alredy have account?<Link to="/signin">signin</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
