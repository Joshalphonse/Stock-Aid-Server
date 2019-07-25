import React from "react";
import { Link, withRouter } from "react-router-dom";

//css
import LandingPageImage from '../landingPageImage.css'
const Header = props => {
  return (
    <div>
    <header className="header">
      <div className="triangle first"></div>
      <div className="triangle second"></div>

      <svg width='0' height='0'>
      <defs>
      <clipPath id="cp" clipPathUnits="objectBoundingBox">
      <path d="M0.500, 0.945 L0.994, 0.090 L0.006, 0.090 L0.500, 0.945 L0.500, 0.650 L0.262, 0.238 L0.738, 0.237 L0.500, 0.650z"></path>
      </clipPath>
      </defs>
      </svg>

      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Stockaid</span>
        </h1>


      </div>

    </header>

  </div>
  );
};

export default withRouter(Header);
