import React, { useState, useEffect } from "react";
import "../css/ServicesApp.scss";

const ServicesApp = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      console.log(data.products);
      setProducts(data.products);
    };
    fetchProducts();
  }, []);
  return (
    <div class="container">
      <div className="row">
      {products.map((products) => (
        <div className="col-4">
          <img src={products.images[2]} alt=""  className="w-100"/>
          <div className="text-white">{products.brand}</div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default ServicesApp;
