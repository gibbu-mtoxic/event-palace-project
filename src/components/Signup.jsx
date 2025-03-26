
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
          {/**password input */}
          <input
            type="password"
            placeholder="Enter your password"
            className="form-control"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
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