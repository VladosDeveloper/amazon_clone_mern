import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { useStateValue } from "../states/StateProvider";
import { auth } from "../firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        {" "}
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__search-input" />
        <SearchIcon className="header__SearchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__option-one">Hello</span>
            <h6 className="header__option-one">{user?.email}</h6>
            <span className="header__option-two">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__option-one">Returns</span>
          <span className="header__option-two">& Options</span>
        </div>
        <div className="header__option">
          <span className="header__option-one">Your</span>
          <span className="header__option-two">Prime</span>
        </div>
      </div>
      <Link to="/checkout">
        <div className="header__option-Basket">
          <ShoppingBasketIcon />
          <span className="basket__count header__option-two">
            {basket?.length}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
