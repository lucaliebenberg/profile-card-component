import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

// imports
import Image from "../src/assets/images/image-victor.jpg";
import TopBackground from "../src/assets/images/bg-pattern-top.svg";
import BottomBackground from "../src/assets/images/bg-pattern-bottom.svg";
import CardBackground from "../src/assets/images/bg-pattern-card.svg";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="card__top">
          <img
            className="card__backgroundImage"
            src={CardBackground}
            alt="card background"
          />
        </div>
        <div className="middle">
          <img className="card__image" src={Image} alt="Image" />
          <p className="card__imageTitle">
            Victor Crest <span className="card__imageSpan">26</span>
          </p>
          <p className="card__imageLocation">London</p>
        </div>
        <div className="card__divider"></div>
        <div className="card__bottom">
          <div className="card__bottomStack">
            <p className="card__bottomStackTitle">80K</p>
            <p className="card__bottomStackPara">Followers</p>
          </div>
          <div className="card__bottomStack">
            <p className="card__bottomStackTitle">803K</p>
            <p className="card__bottomStackPara">Likes</p>
          </div>
          <div className="card__bottomStack">
            <p className="card__bottomStackTitle">1.4K</p>
            <p className="card__bottomStackPara">Photos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
