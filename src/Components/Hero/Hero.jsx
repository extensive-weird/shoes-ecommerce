import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./Hero.css";
import hand_img from "../Assets/hand.png";
import shoes_img from "../Assets/shoes.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div className="hero-intro">
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_img} alt="hand" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <FaLongArrowAltRight />
        </div>
      </div>
      <div className="hero-right">
        <img src={shoes_img} alt="shoes" />
      </div>
    </div>
  );
};

export default Hero;
