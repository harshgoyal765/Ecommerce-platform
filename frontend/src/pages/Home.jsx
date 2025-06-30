import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        setProducts(res.data);
        console.log(products);
      })
      .catch((err) => {
        console.error("AxiosError:", err);
      });
  }, []);

  return (
    <div className="home-container">
      {/* ✅ Navigation Bar */}
      <nav className="navbar">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/login" className="nav-link">
          Login
        </Link>
        <Link to="/register" className="nav-link">
          Register
        </Link>
        <Link to="/cart" className="nav-link">
          Cart
        </Link>
      </nav>

      <h1 className="heading">Product List</h1>

      {products.length > 0 ? (
        <div className="product-grid">
          {products.map((product) => (
            <div key={product._id} className="product-card">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <h2 className="product-title">{product.title}</h2>
              <p className="product-price">₹{product.price}</p>

              <p className="product-description">{product.description}</p>
              <p className="product-category">Category: {product.category}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="add-cart-btn"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-products">No products found.</p>
      )}
    </div>
  );
};
const handleAddToCart = (product) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existing = cart.find((item) => item._id === product._id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Item added to cart!");
};

export default Home;
