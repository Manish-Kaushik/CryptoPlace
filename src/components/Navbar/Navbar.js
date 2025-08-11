import React, { useContext } from "react";
import coinlogo from "../../assets/coinlogo.png";
import arrow_icon from "../../assets/arrow_icon.png";
import { CoinContext } from "../../context/CoinContext";

const NavBar = () => {

  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: " €" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }

  }
  return (
    <div className="navBar">

      <div className="logo">
        <img src={coinlogo} alt="Crypto Logo"></img>
      </div>

      <div className="nav-items">
        <ul>
          <li> Home</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Blog</li>
        </ul>
      </div>

      <div className="btns">

      <select className="currency" onChange={currencyHandler}>
        <option option value="usd">USD</option>
        <option option value="inr">INR</option>
        <option option value="eur">EUR</option>
      </select>

      <button className="submit">
        Sign up
        <img src={arrow_icon} alt="Arrow Icon" className="arrow" />
      </button>
      </div>
    </div>
  );
};

export default NavBar;
