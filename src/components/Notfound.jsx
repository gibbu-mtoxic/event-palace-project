import React from "react";
import { useNavigate } from "react-router-dom";
import image from '../image/binoculars_1322864.png';

const Notfound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>The url entered cannot be found</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="button"
      >
        Return home
      </button>
      <br />
      <img src={image} alt="" className="ib" />
    </div>
  );
};

export default Notfound;
