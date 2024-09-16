import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import ThreeMenInABet from "../../assets/Icons/ThreeGreenMen";
import { useDispatch, connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { populateActiveBet } from "../../actions";
import "./styling.js";

import { PromptWrongNetMetamask, PromptConnectMetamask, PromptInstallMetamask, CurrentNetworkIsBSC } from "../MetamaskSuite/index.js";
import contracts from "../../config/constants/contracts";
import abis from "../../config/constants/abi";
import RowOuter from "./styling.js";

const Web3 = require("web3");
const web3 = new Web3(Web3.givenProvider);
const liveEventsContract = new web3.eth.Contract(abis.LiveEvents.MainNet, contracts.LiveEvents.MainNet);
const timer = { ended: "Bets closed", notStarted: "Bets not open yet" };

// These values are only for the pure(readonly) contract functions
// A different set of values is used for .betEnter() 
const eventBetPositions = { none: 0, teamOne: 1, draw: 2, teamTwo: 3 };

const Row = (props) => {
  const [betOn, setUserBet] = useState(0);
  const [bettingTimer, setBettingTimer] = useState(0);
  const [confirmBetButton, setBetButtonName] = useState("Confirm Bet");
  const [bettingCloseDate, setBettingCloseDate] = useState("-");
  const [totalNumberOfBets, setTotalNumberOfBets] = useState(0);
  const [betOnTeamOne, setBetsOnTeamOne] = useState("-");
  const [betOnDraw, setBetsOnDraw] = useState("-");
  const [betOnTeamTwo, setBetsOnTeamTwo] = useState("-");
  const [betTotal, setBetsTotal] = useState("-");
  const [rewardsTotal, setRewardsTotal] = useState("-");
  const [rewardRate, setRewardRate] = useState(undefined)
  const [canClaimReward, makeClaimAmountVisible] = useState(false);
  const [hideThisMatch, makeThisMatchHidden] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(undefined)
  const [currentBet, setCurrentBet] = useState(undefined)
  const dispatch = useDispatch();

  useEffect(() => {
    FetchMatchStatsFromContract();
    UpdateMatchBets();
  }, [props.isLoggedin.address]);

  useEffect(() => {
    HideMatchIfNeeded();
    UpdateMatchBets();
    EngageClaimButton();
  }, [currentEvent, currentBet, rewardRate, props]);

  useEffect(() => {
    const timerRefresher = setTimeout(() => UpdateBettingCloseTimer(), 1000);
    return () => {
      clearTimeout(timerRefresher);
    };
  });

  useEffect(() => {
    FetchMatchStatsFromContract();
    const matchStatsRefresher = setInterval(async () => FetchMatchStatsFromContract(), 10000);
    const matchBetsRefresher = setInterval(async () => UpdateMatchBets(), 2500);
    const claimButtonRefresher = setInterval(async () => EngageClaimButton(), 5000); // could be a bug here
    return () => {
      clearInterval(matchBetsRefresher);
      clearInterval(matchStatsRefresher);
      clearInterval(claimButtonRefresher);
    };
  }, []);

  function Web3IsNotFullyReady() {
    return (!web3 || !window.ethereum || !props.isLoggedin.address || !CurrentNetworkIsBSC());
  }

  async function PickActiveMatch() {
    if (!props.match || !currentEvent || !currentBet) window.location.reload(false);
    const payload = { match: props.match, event: currentEvent, bet: currentBet };
    dispatch(populateActiveBet(payload));
  }

  async function HideMatchIfNeeded() {
    //if (BetsAreStillClosed() || HideBecauseMatchEnded() || HideBecauseUserDidNotBet())
    if (HideBecauseMatchEnded() || HideBecauseUserDidNotBet())
      makeThisMatchHidden(true);
    else
      makeThisMatchHidden(false);
  }

  function BetsAreStillClosed(currentEvent) {
    const betsAreNotOpenYet = 0
    if (props.match.status == betsAreNotOpenYet)
      return true;
    else
      return false;
  }

  function HideBecauseMatchEnded() {
    if (!currentEvent) return false;
    const matchHasEnded = (bettingTimer == timer.ended);
    if (matchHasEnded && !props.showEnded)
      return true;
    else
      return false;
  }

  function HideBecauseUserDidNotBet() {
    if (!currentBet) return false;
    if (Number(currentBet.position) == 0 && props.showBetOnly)
      return true;
    else
      return false;
  }

  async function UpdateBettingCloseTimer() {
    if (!currentEvent) return;
    const betsAreNotOpenYet = 0
    if (props.match.status == betsAreNotOpenYet) {
      setBettingTimer(timer.notStarted)
      return;
    }
    const timeNow = Math.round(Date.now() / 1000);
    const secondsBeforeBetsClose = currentEvent.closeTimestamp - timeNow;
    if (secondsBeforeBetsClose < 0) {
      setBettingTimer(timer.ended);
      return;
    }
    const timeBeforeBetsClose = SecondsToHumanReadableTime(secondsBeforeBetsClose);
    const dateWhenBetsClose = TimestampToDate(currentEvent.closeTimestamp);
    setBettingCloseDate(dateWhenBetsClose);
    setBettingTimer(timeBeforeBetsClose);
  }


  function SecondsToHumanReadableTime(secondsToConvert) {
    let totalTime = secondsToConvert;
    const days = Math.floor(totalTime / 86400);
    totalTime -= days * 86400;
    const hours = Math.floor(totalTime / 3600) % 24;
    totalTime -= hours * 3600;
    const minutes = Math.floor(totalTime / 60) % 60;
    totalTime -= minutes * 60;
    const seconds = totalTime;
    const formattedTime = (
      (days == 0 ? "" : days) +
      (days == 1 ? " day " : (days > 1 ? " days " : "")) +
      (hours < 10 ? "0" + hours : hours) +
      ":" + (minutes < 10 ? "0" + minutes : minutes) +
      ":" + (seconds < 10 ? "0" + seconds : seconds)
    );
    return formattedTime;
  }

  function TimestampToDate(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    var day = date.getDate();
    var month = date.getMonth() + 1; // getMonth returns 0-11
    var year = date.getFullYear().toString();
    var slicedYear = year.slice(2);

    const formattedDate = (
      (day < 10 ? "0" + day : day) +
      "/" + (month < 10 ? "0" + month : month) +
      "/" + slicedYear
    );
    return formattedDate;
  }

  async function EngageClaimButton() {
    if (Web3IsNotFullyReady() || !currentBet) return;
    const wasClaimed = currentBet.claimed;
    const isClaimable = await liveEventsContract.methods.claimable(
      props.match.contractID, props.isLoggedin.address).call();
    if (isClaimable && !wasClaimed)
      makeClaimAmountVisible(true);
    else
      makeClaimAmountVisible(false);
  }


  async function UpdateMatchBets() {
    if (!web3 || !window.ethereum || !CurrentNetworkIsBSC()) return;
    if (confirmBetButton == "") setBetButtonName("Confirm Bet");
    if (!currentBet || !currentEvent || !rewardRate) return;
    setBetsOnTeamOne(currentEvent.oneAmount);
    setBetsOnDraw(currentEvent.drawAmount);
    setBetsOnTeamTwo(currentEvent.twoAmount);
    const betTotal = Number(currentEvent.oneAmount) + Number(currentEvent.drawAmount) + Number(currentEvent.twoAmount);
    setBetsTotal(betTotal);
    setRewardsTotal(Math.round(betTotal * (rewardRate / 100)));
    setTotalNumberOfBets(currentEvent.betCount);
    setUserBet(currentBet.position);
  }

  async function FetchMatchStatsFromContract() {
    if (Web3IsNotFullyReady()) return;
    const currentEvent = await liveEventsContract.methods.Events(props.match.contractID).call();
    const currentBet = await liveEventsContract.methods.Bets(
      props.match.contractID, props.isLoggedin.address).call();
    const rewardRate = await liveEventsContract.methods.rewardRate().call();
    setCurrentEvent(currentEvent);
    setCurrentBet(currentBet);
    setRewardRate(rewardRate);
  }

  function onLinkClick(name) {
    if (!web3 || !window.ethereum) { PromptInstallMetamask(); return; }
    if (!props.isLoggedin.address) { PromptConnectMetamask(); return; }
    if (!CurrentNetworkIsBSC()) { PromptWrongNetMetamask(); return; }
    PickActiveMatch();
    window.scrollTo(0, 0);
  }

  async function Claim() {
    if (!web3 || !window.ethereum) { PromptInstallMetamask(); return; }
    if (!props.isLoggedin.address) { PromptConnectMetamask(); return; }
    if (!CurrentNetworkIsBSC()) { PromptWrongNetMetamask(); return; }
    const claimedRewards = await liveEventsContract.methods.betClaim(props.match.contractID).send({ from: props.isLoggedin.address });
  }

  // ------------------------------ //
  function TeamOneInfo() {
    return (<div className="namebx namebxlst rightrow">
      <th><h5 className="Tname">{props.match.teamA.name}</h5></th>
      <th><div className="teamImgA"><img src={props.match.teamA.logoURL} alt="image here" height="60" width="60" /></div></th>
    </div>);
  }

  function TeamTwoInfo() {
    return (<div className="namebx namebxlst rightrow">
      <th><div className="teamImgB"><img  src={props.match.teamB.logoURL} alt="image here" height="50" width="50" /></div></th>
      <th><h5 className="Tname2">{props.match.teamB.name}</h5></th>
    </div>);
  }


  function TeamOneRewards() {
    return (
      <div className={betOn == eventBetPositions.teamOne ? `${props.colorvalue} times` : `times`}>
        {!props.isLoggedin || betOnTeamOne == 0 ? "0" : (rewardsTotal / betOnTeamOne).toFixed(2)}x
      </div>
    );
  }

  function DrawRewards() {
    return (
      <div className={betOn == eventBetPositions.draw ? `${props.colorvalue} times` : `times`}>
        {!props.isLoggedin || betOnDraw == 0 ? "0" : (rewardsTotal / betOnDraw).toFixed(2)}x
      </div>
    );
  }

  function TeamTwoRewards() {
    return (
      <div className={betOn == eventBetPositions.teamTwo ? `${props.colorvalue} times` : `times`}>
        {!props.isLoggedin || betOnTeamTwo == 0 ? "0" : (rewardsTotal / betOnTeamTwo).toFixed(2)}x
      </div>
    );
  }

  function TotalBet() {
    let totalBetFormatted;
    let betTotalEther;
    if (betTotal != "-")
      betTotalEther = Number(web3.utils.fromWei(String(betTotal), "Ether")).toFixed(4);

    if (betTotal == "-")
      totalBetFormatted = " - ";
    else if (betTotalEther < 0.0001)
      totalBetFormatted = <b className="val"> absolute 0 </b>;
    else if (betTotalEther < 0.1)
      totalBetFormatted = <b className="val"> under 0.1 </b>;
    else
      totalBetFormatted = <b className="val">{betTotalEther}</b>;

    return (
      <div className="center">
        <span>Total Bet</span>
        {totalBetFormatted}
        <b className="grad">BNB</b>
      </div>
    );
  }

  function BettingTimer() {
    let timerOutput;
    if (bettingTimer == timer.ended || bettingTimer == timer.notStarted)
      timerOutput = bettingTimer;
    else
      timerOutput = bettingCloseDate + " - " + bettingTimer + " left";
    return <div className="time">{timerOutput}</div>;
  }

  return (
    <React.Fragment>
      {hideThisMatch === true ? null : (
        <Link exact to="/bet" style={{ textDecoration: "none" }} onClick={() => onLinkClick("pred")}>
          <RowOuter
            to="/bet"
            //  onClick={() => assign()}
            className={`${props.colorvalue} ${props.status} wow fadeInDown`}
            data-wow-duration="0.5s"
            data-wow-delay="0.4s"
          >
            <div className="left">
              <div>
                <h5>{props.match.matchType.name}</h5>
                <BettingTimer />
                Match id: {props.match.contractID}
              </div>

              {canClaimReward == true ? (
                <div className="gradientbtn" onClick={() => Claim(props.match.contractID)}>
                  Claim
                </div>
              ) : (
                ""
              )}

              <div>
                <ThreeMenInABet />
                {totalNumberOfBets == "-" ? "-" : 1 * totalNumberOfBets}
              </div>
            </div>

            <TotalBet />

            <div className="right">
              <TeamOneInfo />{" "}
              <div className="versus rightrow">
                <table>
                  <tbody>
                    <tr>
                      <td></td>
                      <td><span>VS</span></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <TeamOneRewards />
                      </td>
                      <td>
                        <DrawRewards />
                      </td>
                      <td>
                        <TeamTwoRewards />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <TeamTwoInfo />{" "}
            </div>
          </RowOuter>
        </Link>
      )
      }
    </React.Fragment >
  );
};


const mapStateToProps = (state) => {
  return {
    currentBet: state.currentBet, // please don't get confused; no time to fix now, but this is not the state that we set in Row(). This is what we achieve by using reducers
    isLoggedin: state.isLoggedin,
    isPage: state.isPage,
    isActive: state.isActive,
  };
};

export default connect(mapStateToProps)(Row);
