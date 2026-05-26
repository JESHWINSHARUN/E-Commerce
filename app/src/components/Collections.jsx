import React from "react";
import "../styles/global.css";
import SlideSection from "./SlideSection";
function Collections() {
  return (
    <SlideSection>
      <div id="Collections">
        <div>
          <h1>COLLECTIONS</h1>
          <div className="coll-grid">
            <div className="g-container">
              <div>
                <img src="/p1.png" alt="ph1" />
              </div>
              <h2>ALL PRODUCTS</h2>
            </div>
            <div className="g-container">
              <div>
                <img src="/p2.png" alt="ph2" />
              </div>
              <h2>ANDROID PHONES</h2>
            </div>
            <div className="g-container">
              <div>
                <img src="/p3.png" alt="ph3" />
              </div>
              <h2>WINDOWS PHONE</h2>
            </div>
            <div className="g-container">
              <div>
                <img src="/p4.png" alt="ph4" />
              </div>
              <h2>DUAL SIM PHONES</h2>
            </div>
            <div className="g-container">
              <div>
                <img src="/p1.png" alt="ph5" />
              </div>
              <h2>FEATURED PHONES</h2>
            </div>
            <div className="g-container">
              <div>
                <img src="/p6.png" alt="ph6" />
              </div>
              <h2>LASTEST PRODUCT</h2>
            </div>
            <div className="g-container">
              <div>
                <img src="/p8.png" alt="ph7" />
              </div>
              <h2>NEW OFFERS</h2>
            </div>
            <div className="g-container">
              <div>
                <img src="/p2.png" alt="ph8" />
              </div>
              <h2>BEST SELLER</h2>
            </div>
          </div>
        </div>
      </div>
    </SlideSection>
  );
}
export default Collections;
