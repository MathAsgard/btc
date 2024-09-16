import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { togglePage, toggleBets1, toggleBets2, toggleTotalBets, toggleName1, toggleName2 } from "../../../actions";
import "./Makepred.scss"
import Carousel from "./App"
import "./Carousel.css"

const MakePred = (props) => {
  //console.log(props);

  return (
    <div className="prediction-make container mt-0 wow fadeInDown">
      <video autoPlay muted loop id="myVideo">
        <source src="images/ibetbg.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className="bgOvverlay" />
      <div className="left wow fadeInLeft" data-wow-duration="0.9s" data-wow-delay="0.8s">
        <h1 className="CIn">Crypto In.</h1>
        <Carousel/>
        <h1 className="COut">Crypto out.</h1>
        
        <Link exact to="/matches" className="gradientbtn">
          Make Your Prediction
        </Link>
      </div>
    </div>
  );
};

export default MakePred;
