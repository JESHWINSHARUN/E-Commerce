import React from "react";
import "../styles/global.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Nav() {
  return (
    <div className="nav">
      <nav>
        <div className="flex">
          <div>
            <img src="/img1.png" height="50px" width="90px" alt="img" />
          </div>
          <div className="container">
            <div>
              <HashLink smooth to="/#Home">
                Home
              </HashLink>
            </div>
            <div>
              <HashLink smooth to="/#Collections">
                Collections
              </HashLink>
            </div>
            <div>
              <HashLink smooth to="/#Features">
                Accessories
              </HashLink>
            </div>
            <div>
              <HashLink smooth to="/#Shop">
                Shop
              </HashLink>
            </div>
            <div>
              <HashLink smooth to="/#Footer">
                <i className="fa-solid fa-user"></i>
              </HashLink>
            </div>
            <div>
              <Link to="/yourcart">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
            </div>
            <div>
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
