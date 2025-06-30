import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css"; // 👈 import the CSS

const Cart = () => {
  const items = JSON.parse(localStorage.getItem("cart") || "[]");
  const navigate = useNavigate();

  const handleCheckout = () => {
    alert("Redirecting to Stripe (not implemented yet)");
    navigate("/success");
  };

  return (
    <div className="cart-container">
      <h1 className="cart-heading">Your Cart</h1>

      {items.length > 0 ? (
        items.map((item, i) => (
          <div key={i} className="cart-item">
            <p className="cart-item-title">{item.title}</p>
            <p>Qty: {item.quantity}</p>
            <p>Price: ₹{item.price * item.quantity}</p>
          </div>
        ))
      ) : (
        <p style={{ textAlign: "center", color: "gray" }}>Your cart is empty.</p>
      )}

      {items.length > 0 && (
        <button className="cart-checkout-btn" onClick={handleCheckout}>
          Checkout
        </button>
      )}
    </div>
  );
};

export default Cart;
