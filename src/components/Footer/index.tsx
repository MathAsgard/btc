/* eslint-disable jsx-a11y/anchor-has-content */
// @ts-nocheck
import React from "react";
import styled from "styled-components";

import TelegramIcon from "../../assets/Icons/Telegram.png";

const Footer: React.FC = () => {
//  const [click, setClick] = React.useState(false);
//  const handleClick = () => setClick(!click); 
//  const Close = () => setClick(false);

  return (
    <Nav className="wow fadeInUp" data-wow-duration="0.7s" data-wow-delay="0.5s">
      <div className="social">
        <a className="fab fa-facebook-f" target="_blank" href="https://www.facebook.com/IBetCrypto-234368868546504" rel="noreferrer"></a>

        <a className="fab fa-twitter" target="_blank" href="  https://twitter.com/iBetCrypto" rel="noreferrer"></a>

        <a target="_blank" href="https://t.me/iBetCrypto" rel="noreferrer">
          <img width="15" className="telegram" height="15" src={TelegramIcon} alt="Telegram" />
        </a>

        <a className="fab fa-instagram" target="_blank" href="https://www.instagram.com/ibetcrypto/" rel="noreferrer"></a>
      </div>
      <div className="copyright">Copyright 2021</div>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 60px;
  .telegram {
    background-color: black;
  }
  .social {
    display: flex;
    align-items: center;
    i {
      margin: 0 10px;
      color: #4c4c4c;
      transition: all 0.3s ease;
      cursor: pointer;
      &:hover {
        color: #fff;
      }
    }
    a {
      margin: 0 10px;
      color: #4c4c4c;
      transition: all 0.3s ease;
      cursor: pointer;
      &:hover {
        color: #fff;
      }
    }
  }
  .copyright {
    margin-left: 18px;
    font-weight: 300;
    font-size: 14px;
  }
`;

export default Footer;
