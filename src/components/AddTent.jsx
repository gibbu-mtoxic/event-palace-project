import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AddTent = () => {
  //appropriate hooks
  const [product_name, setProductName] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_cost, setProductCost] = useState("");
  const [product_photo, setProductPhoto] = useState("");

  //feedbacksystem
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  //posting data
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading("connecting");
    try {
      const formData = new FormData();
      formData.append("product_name", product_name);
      formData.append("product_description", product_description);
      formData.append("product_cost", product_cost);
      formData.append("product_photo", product_photo);
      //connecting to the database
      const response = await axios.post(
        "https://gibzy.pythonanywhere.com/api/add_product",
        formData
      );
      setLoading("");
      setError("");
      setSuccess(response.data.message);

      if (response.data.messsage) {
        setError("");
        setLoading("");
        setSuccess(response.data.message);
        setProductName("");
        setProductDescription("");
        setProductCost("");
        setProductPhoto("");
      }
    } catch (error) {
      setError(error.message);
      setLoading("");
    }
  };
  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-6 p-3 card shadow">
        <h1>WELCOME TO ADD PRODUCTS</h1>
        {loading}
        {success}
        {error}
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="productc name"
            className="form-control"
            value={product_name}
            onChange={(e) => setProductName(e.target.value)}
          />
          <br />
          <textarea
            placeholder="product description"
            className="form-control"
            value={product_description}
            onChange={(e) => setProductDescription(e.target.value)}
          ></textarea>
          <br />
          <input
            type="number"
            placeholder="product cost"
            className="form-control"
            value={product_cost}
            onChange={(e) => setProductCost(e.target.value)}
          />
          <br />
          <input
            type="file"
            placeholder="choose image"
            classname="form-control"
            onChange={(e) => setProductPhoto(e.target.files[0])}
          />
          <br />
          <button type="submit" className="btn bg-success w-30 btn-lg">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTent