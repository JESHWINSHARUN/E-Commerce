import React, { useEffect, useState } from "react";
import "../styles/variable.css";
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(items);
  }, []);

  const renderCart = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total.toLocaleString("en-IN");
  };

  const increaseQty = (index) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity++;
    setCartItems(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

  const decreaseQty = (index) => {
    const newCartItems = [...cartItems];
    if (newCartItems[index].quantity > 1) {
      newCartItems[index].quantity--;
    } else {
      newCartItems.splice(index, 1);
    }
    setCartItems(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

  const removeItem = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };
  const checkout = () => {
    console.log("Checkout Summary:");
    cartItems.forEach((item) => {
      console.log(
        `Product: ${item.title}, Quantity: ${item.quantity}, Unit Price: ₹${
          item.price
        }, Total: ₹${item.price * item.quantity}`
      );
    });
    console.log("Total Amount: ₹" + renderCart());

    alert("Thank you! Your order has been placed.");
    localStorage.removeItem("cartItems");
    setCartItems([]);
  };

  return (
    <div className="cart-container">
      <h1>Your Shopping Cart</h1>
      <div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => {
            const itemTotal = item.price * item.quantity;
            return (
              <div className="cart-item" key={index}>
                <img src={item.image} alt={item.name} />
                <div className="cart-details">
                  <h2>{item.title}</h2>
                  <p>
                    Price: ₹<span className="unit-price">{item.price}</span>
                  </p>
                  <div className="quantity-control">
                    <button onClick={() => decreaseQty(index)}>
                      <i className="fa-solid fa-minus"></i>
                    </button>
                    <input type="text" value={item.quantity} readOnly />
                    <button onClick={() => increaseQty(index)}>
                      <i className="fa-solid fa-plus" />
                    </button>
                    <button
                      className="remove-btn"
                      onClick={() => removeItem(index)}
                    >
                      <i className="fa-solid fa-trash" />
                    </button>
                  </div>
                  <p>
                    Total: ₹<span className="total-price">{itemTotal}</span>
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="summary">
        Total Amount: ₹<span id="final-total">{renderCart()}</span>
      </div>
      <button className="checkout-btn" onClick={checkout}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
