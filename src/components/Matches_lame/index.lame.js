import React, { useState, useRef, useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import styled from "styled-components";
import Row from "../Row";
import contracts from "../../config/constants/contracts";
import abis from "../../config/constants/abi";
import './index.scss';

/*


*/

const Web3 = require("web3");
const web3 = new Web3(Web3.givenProvider);
const contract = new web3.eth.Contract(abis.LiveEvents.MainNet, contracts.LiveEvents.MainNet);

const imagesDir = "../../assets/images/testTeams"

function importImages(requirement) {
    let images = {};
    requirement.keys().map(item => { images[item.replace('./', '')] = requirement(item); });
    return images;
}

const images = importImages(require.context("../../assets/images/testTeams", false, /\.png/));


const Bet = (props) => {
  const pull_data = (data) => {};

  return (
    <div className="rowOuter">
      {!web3 || !window.ethereum ? null : <h3 className="heading">All Sports</h3>}
      <Row func={pull_data} id={72} img1={images['Extreme Demolishers.png']} img2={images['Big Floppy Dodgers.png']} sport={"NFL"} status="active" colorvalue={"green"} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedin: state.isLoggedin,
    isPage: state.isPage,
    isPlayer1: state.isPlayer1,
    isPlayer2: state.isPlayer2,
    isBetsPlayer1: state.isBetsPlayer1,
    isBetsPlayer2: state.isBetsPlayer2,
    isTotalBets: state.isTotalBets,
  };
};

export default connect(mapStateToProps)(Bet);
