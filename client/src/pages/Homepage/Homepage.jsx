import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.scss";
import coffee from "../../assets/coffee.png";
import drink from "../../assets/drink.png";
import eat from "../../assets/eat.png";

const Homepage = () => {
  return (
    <div className="body-homepage">
      <div className="nav">
        <Link to="/eat" className="nav__link">
          <img src={eat} alt="coffee image" height={50} width={50}></img>
        </Link>
        <Link to="/coffee" className="nav__link">
          <img src={coffee} alt="coffee image" height={50} width={50}></img>
        </Link>
        <Link to="/drink" className="nav__link">
          <img src={drink} alt="coffee image" height={50} width={50}></img>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
