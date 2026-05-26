import { Link } from "react-router-dom";
import React, { useState } from "react";
import SlideSection from "./SlideSection";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("desc");

  return (
    <SlideSection>
      <div className="tabs-container">
        <div className="tabs">
          <button
            className={`tab-btn ${activeTab === "desc" ? "active" : ""}`}
            onClick={() => setActiveTab("desc")}
          >
            Description
          </button>
          <button
            className={`tab-btn ${activeTab === "shipping" ? "active" : ""}`}
            onClick={() => setActiveTab("shipping")}
          >
            Shipping &amp; Returns
          </button>
          <button
            className={`tab-btn ${activeTab === "reviews" ? "active" : ""}`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
        </div>

        <div
          className={`tab-content ${activeTab === "desc" ? "active" : ""}`}
          id="desc"
        >
          <p>
            Mobile phones are pivotal in our daily lives. Living without a
            mobile phone is challenging in this contemporary environment. A
            mobile phone is a broadband network that is a compact, small device
            used to send and receive speech, video, and other data types. Mobile
            phone usage offers additional benefits and features.
          </p>
          <h4>Design and Build</h4>
          <p>
            It distinguishes out from the other smartphone competitors because
            of its fresh, sophisticated colors, which when combined with TFT LCD
            Display, give it a luxurious appearance. Its approximate weight is
            195.00 g dimensions are 164.5 x 76.9 x 8.4mm making it convenient
            and comfortable to hold. This phone includes Bluetooth and GPS
            connectivity as well as expandable storage.
          </p>
          <h4>Display and Screen</h4>
          <p>
            A 6.20-inch screen with a resolution of 1080x2340 pixels displays
            all types of entertainment great, and the colors appear to be rather
            realistic. Standard Wi-Fi is supported up to 802.11 b/g/n with
            Type-C USB. As its vendor Sensors like Face unlock, Fingerprint,
            Proximity and Accelerometer are supported. The speaker grill and
            audio jack are located at the bottom.
          </p>
          <h4>Hardware and Performance</h4>
          <p>
            The latest smartphone features a 14nm chipset-based 1.8GHz Octa-core
            Exynos 7904 processor with 4GB of RAM and 64GB of storage. The
            5000mAh battery is compatible with the Aspect ratio 19.5:9.The phone
            is among the best performances in its category because of this
            combination. On low-end hardware, the Experience UI for phones has
            been tuned to operate without a hitch. The icons and appearance are
            nearly identical to One UI. The software is reliable, sophisticated,
            and enjoyable.
          </p>
        </div>

        <div
          className={`tab-content ${activeTab === "shipping" ? "active" : ""}`}
          id="shipping"
        >
          <h4>Shipping</h4>
          <p>🚚 Free shipping available across India.</p>
          <p>📦 Estimated delivery time: 3-5 business days.</p>
          <p>🔄 Easy returns within 10 days of delivery.</p>
        </div>

        <div
          className={`tab-content ${activeTab === "reviews" ? "active" : ""}`}
          id="reviews"
        >
          <h4>Customer Reviews</h4>
          <p>⭐ 4.6/5 based on 1,234 ratings</p>
          <p>"Excellent phone with amazing camera!" - Akash R.</p>
          <p>
            "Battery life could be better, but display is top-notch." - Priya M.
          </p>
        </div>
      </div>
    </SlideSection>
  );
};

export default Tabs;
