import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import SlideSection from "./SlideSection";
const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const products = {
    "vivo-x200-pro": {
      title: "VIVO X200 PRO",
      price: 94999,
      image: "/product1.png",
      brand: "VIVO",
      os: "Android",
      ram: "12GB",
      cpu: "Snapdragon 8 Gen 3",
      speed: "3.36GHz",
    },
    "galaxy-s25-ultra": {
      title: "Galaxy S25 Ultra",
      price: 129999,
      image: "/product2.png",
      brand: "Samsung",
      os: "Android",
      ram: "12GB",
      cpu: "Exynos 2400",
      speed: "3.36GHz",
    },
    "iphone-16-pro": {
      title: "iPhone 16 Pro Max",
      price: 132900,
      image: "/product3.png",
      brand: "Apple",
      os: "iOS",
      ram: "8GB",
      cpu: "A17 Pro",
      speed: "3.78GHz",
    },
    "iqoo-neo-10-5g": {
      title: "iQOO Neo 10 5G",
      price: 34999,
      image: "/product4.png",
      brand: "iQOO",
      os: "Android",
      ram: "8GB",
      cpu: "Dimensity 8200",
      speed: "3.1GHz",
    },
  };

  const product = products[productId];

  if (!product) return <p>Product not found</p>;

  const { title, brand, os, ram, cpu, speed, price, image } = product;

  const buyNow = (product) => {
    localStorage.setItem("productName", product.title);
    localStorage.setItem("unitPrice", product.price);
    localStorage.setItem("productImg", product.image);
    localStorage.setItem("quantity", 1);
    navigate("/buynow"); // navigate to BuyNow route
  };

  const addToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingIndex = cartItems.findIndex((item) => item.title === title);

    if (existingIndex > -1) {
      cartItems[existingIndex].quantity += 1;
    } else {
      cartItems.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    alert(`${title} has been added to your cart!`);
  };

  return (
    <SlideSection>
      <div className="Vivo">
        <div className="product-container">
          <div className="product-image">
            <img src={image} alt={title} />
          </div>

          <div className="product-info">
            <h2 className="model">{title}</h2>
            <ul className="spec-list">
              <li>
                <span>Brand:</span> {brand}
              </li>
              <li>
                <span>Operating System:</span> {os}
              </li>
              <li>
                <span>RAM Memory:</span> {ram}
              </li>
              <li>
                <span>CPU Model:</span> {cpu}
              </li>
              <li>
                <span>CPU Speed:</span> {speed}
              </li>
            </ul>
            <h3 className="price">₹{price.toLocaleString()}.00</h3>

            <button className="buy-btn" onClick={() => buyNow(product)}>
              Buy Now
            </button>
            <span> </span>
            <Link to="/yourcart">
              <button className="buy-btn" onClick={addToCart}>
                Add To Cart
              </button>
            </Link>

            <div className="about">
              <h3>About this item</h3>
              <ul>
                <li>
                  📸 Camera: Main 50MP (Sony LYT-818), Telephoto 200MP, Ultra
                  Wide 50MP, V3+ Chip
                </li>
                <li>
                  🖥️ Display: 6.78" AMOLED, 2160Hz PWM, 120Hz Refresh, 4500 nits
                  Peak Brightness
                </li>
                <li>🔋 Battery: 5000mAh with 120W Flash Charging</li>
                <li>📶 Connectivity: 5G, Wi-Fi 6E, Bluetooth 5.3</li>
                <li>
                  🎥 Certifications: Netflix HDR, Dolby Vision, APO Certified
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SlideSection>
  );
};

export default ProductDetails;
