// DeliveryHelper.js
import React from "react";
import { FaBox, FaTruck, FaCheckCircle } from "react-icons/fa"; // FontAwesome icons

const DeliveryHelper = () => {
  return (
    <div className="Dcard p-4 shadow-sm">
      <h3 className="mb-3">Delivery Information</h3>

      <ul className="list-group mb-3">
        <li className="list-group-item d-flex align-items-center">
          <FaBox className="me-2 text-primary" />
          <span>Order Received</span>
        </li>
        <li className="list-group-item d-flex align-items-center">
          <FaTruck className="me-2 text-warning" />
          <span>Out for Delivery</span>
        </li>
        <li className="list-group-item d-flex align-items-center">
          <FaCheckCircle className="me-2 text-success" />
          <span>Delivered</span>
        </li>
      </ul>

      <p>
        <strong>Estimated Delivery:</strong> 2-3 business days
      </p>
      <p>
        <strong>Need help?</strong> Contact our support at{" "}
        <a href="mailto:support@example.com">support@example.com</a>
      </p>
    </div>
  );
};

export default DeliveryHelper;
