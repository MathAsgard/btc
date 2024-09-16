/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
// eslint-disable-next-line react-hooks/exhaustive-deps
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import MakePred from "./components/Makepred";

import Partners from "./components/Partners";
import { Matches } from "../../components";
import contracts from "../../config/constants/contracts";
import abis from "../../config/constants/abi";
import { useDispatch, connect } from "react-redux";

const Web3 = require("web3");
const web3 = new Web3(Web3.givenProvider);
const HomeDiv = styled.div`
  .container {
    margin: 60px 0;
    .heading {
      text-align: center;
      margin-bottom: 30px;
    }
  }
`;

const Landing = (props) => {
  //console.log(props);
  const dispatch = useDispatch();
  const [shown, setShown] = useState(false);
  const [prize, setprize] = useState(0);
  const [refresh, setrefresh] = useState(false);
  const [latestwinner, setlatestwinner] = useState("");
  const [tickets, settickets] = useState(0);
  const [mytickets, setmytickets] = useState("");
  const [currentprize, setcurrentprize] = useState("");
  const [bnbbalance, setbnbbalance] = useState(0);
  const [AmountOne, setAmountOne] = useState(0);
  const [AmountTwo, setAmountTwo] = useState(0);
  const [nameof1is, setnameof1is] = useState("");
  const [nameof2is, setnameof2is] = useState("");

  const [bettingamount, setbettingamount] = useState(0);
  const [PlayerSelected, setPlayerSelected] = useState("");
  const contract = new web3.eth.Contract(abis.LiveEvents.MainNet, contracts.LiveEvents.MainNet);
  // console.log(contract);
  const [Player1, setPlayer1] = useState("-");
  const [Player2, setPlayer2] = useState("-");

  /*
  <HomeDiv>
    <Pred />
    <Partners />
  </HomeDiv>
  */

  return (
    <HomeDiv>
      <MakePred />
      <div className="wow fadeInDown" data-wow-duration="0.5s" data-wow-delay="0.4s">
        <Matches />
      </div>
      <Partners />
    </HomeDiv>
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

export default connect(mapStateToProps)(Landing);
