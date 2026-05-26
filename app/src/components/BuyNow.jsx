import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const BuyNow = () => {
  const location = useLocation();
  const stateProduct = location.state?.product;

  const product = stateProduct || {
    title: localStorage.getItem("productName") || "Product",
    price: parseInt(localStorage.getItem("unitPrice")) || 0,
    image: localStorage.getItem("productImg") || "/default.png",
    quantity: parseInt(localStorage.getItem("quantity")) || 1,
  };

  const [quantity, setQuantity] = useState(product.quantity || 1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const checkout = () => {
    const productName = product.title;
    const total = product.price * quantity;

    console.log("Checkout Details:");
    console.log("Product Name:", productName);
    console.log("Quantity:", quantity);
    console.log("Unit Price: ₹" + product.price);
    console.log("Total Price: ₹" + total);

    alert(
      `Order placed for ${productName}\nQuantity: ${quantity}\nTotal: ₹${total}`
    );
  };

  return (
    <div className="buy">
      <div className="buy-container">
        <img id="product-img" src={product.image} alt={product.title} />
        <div>
          <h2 className="buy-product" id="product-name">
            {product.title}
          </h2>
          <h2 className="product-price">
            ₹<span>{product.price.toLocaleString("en-IN")}.00</span>
          </h2>
        </div>
      </div>

      <div className="checkout-container">
        <div className="count-container">
          <button className="prodcount" onClick={decrement}>
            −
          </button>
          <input className="by-quan" id="quantity" value={quantity} readOnly />
          <button className="prodcount" onClick={increment}>
            +
          </button>
        </div>
        <div className="price-details">
          <p>
            Total Price: ₹
            <span>{(product.price * quantity).toLocaleString("en-IN")}</span>
          </p>
        </div>
        <button className="buy-btn proceed-btn" onClick={checkout}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default BuyNow;
