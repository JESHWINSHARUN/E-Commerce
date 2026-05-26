import React from "react";
import SlideSection from "./SlideSection";
function Footer() {
  return (
    <SlideSection>
      <footer className="footer" id="Footer">
        <div className="footer-content">
          <div className="footer-box">
            <h2>About us</h2>
            <p>
              Pellentesque posuere orci lobortis scelerisque blandit. Donec id
              tellus lacinia an, tincidunt risus ac.
            </p>
          </div>
          <div className="footer-box">
            <h4>Information</h4>
            <a href="#">Search</a>
            <a href="#">Store Location</a>
            <a href="#">Order & Return</a>
            <a href="#">Private Policy</a>
          </div>
          <div className="footer-box">
            <h4>Support</h4>
            <a href="#">Search</a>
            <a href="#">Store Location</a>
            <a href="#">Order & Return</a>
            <a href="#">Private Policy</a>
          </div>
          <div className="footer-box">
            <h4>Help</h4>
            <a href="#">Help & FAQ's</a>
            <a href="#">Information</a>
            <a href="#">Shipping Details</a>
            <a href="#">Online Payment</a>
          </div>
          <div className="footer-box subscribe-box">
            <input type="email" placeholder="Email" className="email-input" />
            <button className="signup-btn">Sign Up</button>
            <div className="social-icons">
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-square-facebook"></i>
              <i className="fa-brands fa-pinterest"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
        <div className="footer-bottom">All Right Reserved © 2025, PHONO</div>
      </footer>
    </SlideSection>
  );
}
export default Footer;
