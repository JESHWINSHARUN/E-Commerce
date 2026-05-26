import React from "react";
import SlideSection from "./SlideSection";

function Features() {
  return (
    <SlideSection>
      <div id="Features">
        <div className="entertainment">
          <h1>LOSE YOURSELF IN ENTERTAINMENT</h1>
          <h3>SPEND LESS ENJOY MORE</h3>

          <div className="entertainment-container">
            <div className="entertainment-item">
              <div className="keynum">1</div>
              <h2>TRIPLE CAMERA</h2>
              <p>
                Duis at tellus at urna condimentum mattis pellentesque id nibh.
                Elit scelerisque mauris pellentesque pulvinar. Nunc aliquet
                bibendum enim facilisis gravida.
              </p>
              <div>
                <button className="entertainment-btn" href="#Shop">
                  View More
                </button>
              </div>
            </div>
            <div className="entertainment-item">
              <div className="keynum">2</div>
              <h2>ULTRA GAME MODE</h2>
              <p>
                Duis at tellus at urna condimentum mattis pellentesque id nibh.
                Elit scelerisque mauris pellentesque pulvinar. Nunc aliquet
                bibendum enim facilisis gravida.
              </p>
              <div>
                <button className="entertainment-btn" href="#Shop">
                  View More
                </button>
              </div>
            </div>
            <div className="entertainment-item">
              <div className="keynum">3</div>
              <h2>SUPER AMOLED DISPLAY</h2>
              <p>
                Duis at tellus at urna condimentum mattis pellentesque id nibh.
                Elit scelerisque mauris pellentesque pulvinar. Nunc aliquet
                bibendum enim facilisis gravida.
              </p>
              <div>
                <button className="entertainment-btn" href="#Shop">
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideSection>
  );
}
export default Features;
