import React, { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom';

import axios from "axios";


const Signin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  

  //feedbacksystem
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  //posting data
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      const response = await axios.post(
        "https://gibzy.pythonanywhere.com/api/signin",
        formData
      );
       if (response.data.user) {
         setLoading("");
         setSuccess(response.data.success);
         navigate("/");
       } else {
         setSuccess(response.data.message);
       }
      
    } catch (error) {
      setError(error.message);
    }
  };

return (
<div className="row justify-content-center mt-4">
      <div className="col-md-6 card shadow p-2">
        <h1>Signin form</h1>
        {loading}
        {success}
        {error}
        <form action="" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            className="form-control"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <input
            type="password"
            placeholder="Enter account password"
            className="form-control"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <button type="submit" className="btn bg-success w-45 btn-lg">
            Signin
          </button>
          <p>
            Don't have an account?<Link to="/signup">signup</Link>
          </p>
        </form>
      </div>
    </div>

  )
}



export default Signin;