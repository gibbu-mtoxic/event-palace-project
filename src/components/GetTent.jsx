import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const GetTent = () => {
  const [products, setProducts] = useState([]);
  const image_url = "https://gibzy.pythonanywhere.com/static/images/";
  const navigate = useNavigate("");
  const [searchTerm, setSearchTerm] = useState("");
  const getProducts = async () => {
    try {
      const response = await axios.get(
        "https://gibzy.pythonanywhere.com/api/get_product"
      );

      setProducts(response.data.products);
    } catch (error) {}
  };

  //loop bloking
  useEffect(() => {
    getProducts();
  }, []);
  //search hook

  //handling the search
  const filteredProducts = products.filter((product) =>
    product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container-fluid row">
      <h1>Explore our Products</h1>
      <input
        type="text"
        placeholder="search for products"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredProducts.map((product, index) => (
        <div className="col-md-3 mb-4" key={index}>
          <div className="card shadow p-3">
            <img
              src={image_url + product.product_photo}
              alt={product.product_photo}
            />
            <div className=" cards-container card-body ">
              <h5 className="mt-2">{product.product_name}</h5>
              <p className="text-muted">{product.product_description}</p>
              <b className="text-warning">ksh{product.product_cost}</b>
              <br />
              <button
                className="btn bg-success w-75 m-2 text-light"
                onClick={() => {
                  navigate("/payment", { state: { product } });
                }}
              >
                show details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GetTent;
