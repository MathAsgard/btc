import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import partner from "../../../assets/Icons/CarmaCoin.png";
import partner2 from "../../../assets/Icons/Partner1.jpg";
import partner3 from "../../../assets/Icons/Partner2.png";
import './Partners.scss';

const Partners: React.FC = () => {
  return (
    <div className="partners wow fadeInDown" data-wow-duration="0.9s" data-wow-delay="0.4s">
      <div className="container">
        <h3>Our Partners</h3>
        <div className="imgOuter">
          <a target="_blank" href="https://carmacoin.co" rel="noreferrer">
            {" "}
            <img src={partner3} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Partners;
