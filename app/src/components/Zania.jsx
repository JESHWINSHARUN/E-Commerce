import React from "react";
import SlideSection from "./SlideSection";

function Zania() {
  function gotoShop() {
    const element = document.getElementById("Shop");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <SlideSection>
      <div id="Home">
        <div className="Home1">
          <div className="Home-img">
            <img src="/img3.png" alt="img" height="100%" width="100%" />
          </div>
          <div className="home-container">
            <h4> ZANIA BLACK EDITION</h4>
            <h1>CURVY BEVEL</h1>
            <h1>DUAL AUDIO</h1>
            <div className="shop-btn">
              <button className="btn1" onClick={gotoShop}>
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <div className="hf-container1">
          <div className="hf-item">
            <img src="/logo1.png" alt="free" />
            <div>
              <p>FREE SHIPPING</p>
              <p>For orders over $50</p>
            </div>
          </div>
        </div>
        <div className="hf-container1">
          <div className="hf-item">
            <img src="/logo2.png" alt="discount" />
            <div>
              <p>OFFICIAL DISCOUNT</p>
              <p>Save Big on next Product</p>
            </div>
          </div>
        </div>
        <div className="hf-container1">
          <div className="hf-item">
            <img src="/logo3.png" alt="helpline" />
            <div>
              <p>24/7 HELPLINE</p>
              <p>Care till end</p>
            </div>
          </div>
        </div>
      </div>
    </SlideSection>
  );
}

export default Zania;
