import { Link } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import App from '../Reconstruction/App';
import "./index.scss"

const Reconstruction = (props) => {
  return (
      <div className="reconstruction container wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="1s">
      <video autoPlay muted loop playsinline id="bgVideo">
        <source src="images/ibetbg.mp4" type="video/mp4" />
        Seems like your browser does not support HTML5 video
      </video>
      <div className="bgOverlay" />
      <div className="App">
        <div>
          <App  />
        </div>
      </div>
      </div>
  );
};

export default Reconstruction;
