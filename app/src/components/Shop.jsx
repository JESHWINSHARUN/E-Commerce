import React from "react";
import { Link } from "react-router-dom";
import SlideSection from "./SlideSection";

function Shop() {
  return (
    <SlideSection>
      <div id="Shop">
        <h1>NEW ARRIVALS</h1>
        <h2>FIND THE PERFECT PHONE FOR YOU</h2>
        <div className="Product-container">
          <div className="product">
            <img src="/product1.png" alt="product1" height="300px" />
            <Link to="/product/vivo-x200-pro">
              <h2>VIVO X200 PRO</h2>
            </Link>
            <div className="review">
              <div>
                <i className="fa-solid fa-star"></i>
              </div>
              <div>
                <i className="fa-solid fa-star"></i>
              </div>
              <div>
                <i className="fa-solid fa-star"></i>
              </div>
              <div>
                <i className="fa-solid fa-star"></i>
              </div>
              <div>
                <i className="fa-regular fa-star-half-stroke"></i>
              </div>
              <div>
                <span>4.5 review</span>
              </div>
            </div>
            <h2 className="product-price">Rs.94,999.00</h2>
          </div>
          <div className="product">
            <img src="/product2.png" alt="product2" height="300px" />
            <Link to="/product/galaxy-s25-ultra">
              <h2>Galaxy S25 Ultra</h2>
            </Link>
            <div className="review">
              <div>
                <i className="fa-solid fa-star"></i>
              </div>
              <div>
                <i className="fa-solid fa-star"></i>
              </div>
              <div>
                <i className="fa-solid fa-star"></i>
              </div>
              <div>
                <i className="fa-solid fa-star"></i>
              </div>
              <div>
                <i className="fa-solid fa-star"></i>
              </div>
              <div>
                <span>5 review</span>
              </div>
            </div>
            <h2 className="product-price">Rs.1,29,999.00</h2>
          </div>
          <div className="product">
            <img src="/product3.png" alt="product3" height="300px" />
            <Link to="/product/iphone-16-pro">
              <h2>iPhone 16 Pro Max</h2>
            </Link>
            <div className="review">
              <div>
                <i className="fa-solid fa-star"></i>
              </div>
              <div>
                <i className="fa-solid fa-star"></i>
              </div>
              <div>
                <i className="fa-solid fa-star"></i>
              </div>
              <div>
                <i className="fa-solid fa-star"></i>
              </div>
              <div>
                <i className="fa-regular fa-star-half-stroke"></i>
              </div>
              <div>
                <span>4.5 review</span>
              </div>
            </div>
            <h2 className="product-price">Rs.1,32,900.00</h2>
          </div>
          <div className="product">
            <img src="/product4.png" alt="product4" height="300px" />
            <Link to="/product/iqoo-neo-10-5g">
              <h2> iQOO Neo 10 5G</h2>
            </Link>
            <div className="review">
              <div>
                <i className="fa-solid fa-star"></i>
              </div>
              <div>
                <i className="fa-solid fa-star"></i>
              </div>
              <div>
                <i className="fa-solid fa-star"></i>
              </div>
              <div>
                <i className="fa-solid fa-star"></i>
              </div>
              <div>
                <i className="fa-regular fa-star"></i>
              </div>
              <div>
                <span>4 review</span>
              </div>
            </div>
            <h2 className="product-price">Rs.33,999.00</h2>
          </div>
        </div>
      </div>
    </SlideSection>
  );
}
export default Shop;
