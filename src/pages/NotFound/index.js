import { Link } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import "./index.scss"

const NotFound = (props) => {
  return (
      <div className="notFound container fadeInDown" data-wow-duration="1.5s" data-wow-delay="1s">
      <video autoPlay muted loop playsinline id="bgVideo">
        <source src="images/ibetbg.mp4" type="video/mp4" />
        Seems like your browser does not support HTML5 video
      </video>
      <div className="bgOverlay" />
      <div className="message fadeInLeft" data-wow-duration="0.9s" data-wow-delay="0.8s">
        <h1>404</h1>
        <p>Page Not Found</p>
        <Link exact to="/" className="gradientbtn">
          Go home
        </Link>
      </div>
      </div>
  );
};

export default NotFound;
