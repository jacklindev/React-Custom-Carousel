import React from "react";

import "./style.scss";

const Product = ({ name, price, image }) => (
  <div className="product">
    <div className="product-image">
      <img src={image} alt="dress-img" />
    </div>
    <h5 className="product-name">{name}</h5>
    <h6 className="product-price">{price}</h6>
  </div>
);

export default Product;
