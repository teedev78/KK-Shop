import React from "react";
import { useNavigate } from "react-router-dom";

//Style
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const navigate = useNavigate();
  const isSignin = false;

  return (
    <div className="kk__navbar">
      <div className="kk__navbar_container">
        <div className="kk__navbar-links_logo">
          <div onClick={() => navigate("/")}>KK-Shop</div>
        </div>
        <div className="kk__navbar-search_bar">
          <input type="text" id="searchbar" placeholder="ค้นหา" />
          <FontAwesomeIcon
            icon={faSearch}
            className="kk__navbar__search_icon"
          />
        </div>
        <div className="kk__navbar-cart_icon">
          <FontAwesomeIcon
            icon={faCartShopping}
            onClick={() => navigate("/cart")}
          />
        </div>
        <div className="kk__navbar-profile">
          {isSignin ? (
            <div className="kk_navbar-profile_icon">
              <div className="circle"></div>
            </div>
          ) : (
            <div className="kk__navbar-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
