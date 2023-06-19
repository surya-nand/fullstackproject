import React from "react";
import { useEffect, useState } from "react";
import "../Products/index.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="products-container">
      {products.map((product,index) => (
        <div className="product-card" key={index}>
          <img src={product.image} alt="product" className="product-img" />
          <div className="product-details">
            <p>
              {product.title.length >= 55
                ? `${product.title.slice(0, 55)}...`
                : product.title}
            </p>
            <div className="product-sub-details">
              <p>${product.price}</p>
              <div className="product-rating">
                {[...Array(Math.ceil(product.rating.rate))].map((e,i) => (
                  <span key={i}>⭐</span>
                ))}
                <p>({product.rating.count})</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
