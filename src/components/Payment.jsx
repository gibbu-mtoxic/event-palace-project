import axios from 'axios';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import DeliveryHelper from './DeliveryHelper';

const Payment = () => {

   const { product } = useLocation().state || {};
   const [phone, setPhone] = useState("");
   const handleSubmit = async (e) => {
     e.preventDefault();
     try {
       const formData = new FormData();
       formData.append("amount", product.product_cost);
       formData.append("phone", phone);
       const response = await axios.post(
         "https://gibzy.pythonanywhere.com/api/mpesa_payment",
         formData
       );
     } catch (error) {}
   };
  return (
    <div className="row justify-content-center mt-2">
      <h1 className="m-2">Make your payments-lipa na MPESA</h1>
      <div className=" card shaodow col-md-6 p-2">
        <h1 className="text-success">lipa na MPESA</h1>
        <h3 className="text-light"><b>{product.product_name}</b></h3>
        <b className="text-warning">ksh{product.product_cost}</b>
        <form onSubmit={handleSubmit} action="">
          <input
            type="tel"
            placeholder="Enter 254*********"
            className="form-control"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <br />
          <button type="submit" className="btn w-100 btn-outline-success">
            shop Now
          </button>
        </form>
      </div>
      <DeliveryHelper />
    </div>
  );
}

export default Payment