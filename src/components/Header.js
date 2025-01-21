/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "../components/Header.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);
 const handleMenuIcon = () => {
  setBurgerStatus(true);
 }
 const handleCloseIcon = () => {
  setBurgerStatus(false);
 }
  return (
    <div className="header">
      <div className="navbar">
        <div>
          <div>
            <a>
              <img src="images/logo.svg" alt="tesla-logo" />
            </a>
          </div>
        </div>
        <div className="nav-links">
          <a href="#">Model S</a>
          <a href="#">Model 3</a>
          <a href="#">Model X</a>
          <a href="#">Model Y</a>
        </div>
        <div className="nav-links-right">
          <a href="#">Shop</a>
          <a href="#">Tesla Account</a>
          <MenuIcon onClick={handleMenuIcon} />
        </div>
        {burgerStatus && (
          <div className={`BurgerNav ${burgerStatus ? "active" : ""}`}>
            <div className="close-icon">
              <CloseIcon onClick={handleCloseIcon} />
            </div>
            <li>
              <a>Existing Inventory</a>
            </li>
            <li>
              <a>Used Inventory</a>
            </li>
            <li>
              <a>Trade in</a>
            </li>
            <li>
              <a>Cybertruck</a>
            </li>
            <li>
              <a>Roadaster</a>
            </li>
            <li>
              <a>Model S</a>
            </li>
            <li>
              <a>Model X</a>
            </li>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
