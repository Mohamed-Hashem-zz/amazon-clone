import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasket from "@mui/icons-material/ShoppingBasket";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../../ContextApi/StateProvider/StateProvider";
import { SignOut } from "./../../Firebase.js";
import { toast } from "react-toastify";

export default function Header() {
  const [state] = useStateValue();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await SignOut()
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => {
        toast.error("Error has been happened");
      });
  };

  return (
    <>
      <header className="header">
        <Link to="/">
          <img
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Amazon-logo"
            className="header__logo"
          />
        </Link>

        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header_searchIcon" />
        </div>

        <div className="header__nav">
          <div className="header__option">
            <span className="header__optionLineOne">
              Hello {state?.user?.email ? state?.user?.email : "Guest"}
            </span>
            <Link to="/login">
              <span className="header__optionLineTwo" onClick={handleSignOut}>
                {state?.user ? "Sign Out" : "Sign In"}
              </span>
            </Link>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Primes</span>
          </div>
          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingBasket />
              <span className="header__optionLineTwo header__basketCount">
                {state?.basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </header>
    </>
  );
}
