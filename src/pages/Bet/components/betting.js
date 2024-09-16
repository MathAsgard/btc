import { React, useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, connect } from "react-redux";
import contracts from "../../../config/constants/contracts";
import abis from "../../../config/constants/abi";
import BettingStyle from "./styling.js";
import { CurrentNetworkIsBSC, wantedNetworkID } from "../../../components/MetamaskSuite";
import { telegramGroupLink } from "../../../config/constants/links";
const Web3 = require("web3");
const web3 = new Web3(Web3.givenProvider);
const BigNumber = require("bignumber.js");
const liveEventsContract = new web3.eth.Contract(abis.LiveEvents.MainNet, contracts.LiveEvents.MainNet);

// These values are only for .betEnter() 
// A different set of values is used across the pure(readonly) contract functions
const betEnterPositions = { teamOne: 0, draw: 1, teamTwo: 2 };
const button = {
  none: "", confirm: "Confirm Bet", connect: "Connect Wallet", transacting: "Transacting...",
  disabled: "Betting Unavailable", side: "Pick a Side"
}


function Betting(props) {
  const [betButtonName, setBetButtonName] = useState(button.confirm);
  const [activenm, setactivenm] = useState("10");
  const [activenm2, setactivenm2] = useState("10");
  const [targetBetPosition, setBetTarget] = useState(undefined);
  const [mode, setmode] = useState(true);
  const [tx, setTransactionHash] = useState(0);
  const [betOnTeamOne, setBetsOnTeamOne] = useState("-");
  const [betOnDraw, setBetsOnDraw] = useState("-");
  const [betOnTeamTwo, setBetsOnTeamTwo] = useState("-");
  const [betTotal, setBetsTotal] = useState("0");
  const [rewardsTotal, setRewardsTotal] = useState("0");
  const [rewardRate, setRewardRate] = useState(undefined)
  const [userCanBet, setUserCanBet] = useState(false)
  const [bet, setCurrentBet] = useState(props.currentBet ? props.currentBet.bet : undefined);
  const [match, setCurrentMatch] = useState(props.currentBet ? props.currentBet.match : undefined);
  const [event, setCurrentEvent] = useState(props.currentBet ? props.currentBet.event : undefined);

  const [currentWalletBalance, setBalance] = useState("-");

  useEffect(UpdateWalletBalance, [props.currentBalance.balance]);
  useEffect(FetchMatchStatsFromContract, [match]);

  useEffect(() => {
    function RefresherContent() { // need this here; nameless functions in setInterval() cause bugs.
      FetchMatchStatsFromContract();
      UpdateBetButton();
      UpdateBetFigures();
    }
    const refresher = setInterval(RefresherContent(), 2000);
    const refresher2 = setInterval(UpdateBetFigures(), 2000);
    return () => {
      clearInterval(refresher2);
      clearInterval(refresher);
    }
  }, []);

  /*
    useEffect(() => {
      const matchStatsRefresher = setInterval(FetchMatchStatsFromContract(), 2000);
      const betButtonRefresher = setInterval(UpdateBetButton(), 2000);
      const betFiguresRefresher = setInterval(UpdateBetFigures(), 2000);
      return () => {
        clearInterval(matchStatsRefresher);
        clearInterval(betButtonRefresher);
        clearInterval(betFiguresRefresher);
      }
    }, []);
    */

  useEffect(() => {
    ChangeCurrentMatch();
  }, [props.currentBet]);

  useEffect(() => {
    UpdateBetFigures();
    UpdateBetStatus();
  }, [event, rewardRate]);

  useEffect(() => {
    UpdateBetButton();
  }, [userCanBet]);

  function Web3IsNotFullyReady() {
    return (!web3 || !window.ethereum || !props.isLoggedin.address || !CurrentNetworkIsBSC());
  }

  function ChangeCurrentMatch() {
    if (match.contractID != props.currentBet.match.contractID)
      setCurrentMatch(props.currentBet.match);
    setCurrentEvent(props.currentBet.event);
    setCurrentBet(props.currentBet.bet);
  }

  async function FetchMatchStatsFromContract() {
    if (Web3IsNotFullyReady()) return;
    if (props.currentBet.match.contractID != match.contractID) return;
    const currentEvent = await liveEventsContract.methods.Events(match.contractID).call();
    setCurrentEvent(currentEvent);
    const currentBet = await liveEventsContract.methods.Bets(
      match.contractID, props.isLoggedin.address).call();
    setCurrentBet(currentBet);
    const rewardRate = await liveEventsContract.methods.rewardRate().call();
    setRewardRate(rewardRate);
  }

  async function UpdateBetStatus() {
    if (!match || !event || !bet) setUserCanBet(false);
    const betStillClosed = (event.status == 0)
    const isBettable = await liveEventsContract.methods.bettable(match.contractID).call();
    const userDidNotBet = (bet.amount == 0);
    setUserCanBet((isBettable && userDidNotBet && !betStillClosed));
  }

  async function ReasonWhyBettingClosed() {
    let reason = "";
    if (!match || !event || !bet) {
      reason = "Check if your wallet is connected\nand if you're on the right network\n" +
        "and reload the page.\nIf you keep seeing this - seek help at " + telegramGroupLink;
      return reason
    }
    const isBettable = await liveEventsContract.methods.bettable(match.contractID).call();
    const userDidNotBet = (bet.amount == 0);
    if (isBettable === false) {
      reason = "Bets on this match are already closed!"
    } else if (userDidNotBet === false) {
      reason = "You can only bet once per every event!"
    } else {
      reason = "Couldn't determine the reason for which you can not bet on this event\n" +
        "report this to " + telegramGroupLink;
    }
    alert(reason);
  }

  function UpdateBetButton() {
    if (!props.isLoggedin.address || !CurrentNetworkIsBSC) {
      setBetButtonName(button.connect);
      return;
    }
    if (!userCanBet) {
      setBetButtonName(button.disabled);
      return;
    }
    if (userCanBet && betButtonName != button.side) {
      setBetButtonName(button.confirm);
      return;
    }
    if (betButtonName == button.none) {
      setBetButtonName(button.confirm);
      return;
    }
  }

  async function UpdateBetFigures() {
    if (!event || !rewardRate) return;
//    alert("Updating bet figures");
    setBetsOnTeamOne(event.oneAmount);
    setBetsOnDraw(event.drawAmount);
    setBetsOnTeamTwo(event.twoAmount);
    const betTotal = Number(event.oneAmount) + Number(event.drawAmount) + Number(event.twoAmount);
    setBetsTotal(betTotal);
    setRewardsTotal(Math.round(betTotal * (rewardRate / 100)));
  }

  function isActive(name) {
    return activenm == name;
  }

  function UpdateWalletBalance() {
    try {
      setBalance(props.currentBalance.balance);
    } catch (e) { /* do nothing */ }
  }

  async function BetEnter() {
    await UpdateBetStatus();
    if (targetBetPosition === undefined) {
      setBetButtonName(button.side);
      return;
    } else if (betButtonName == button.transacting) {
      alert("Please wait, transaction in progress;\n" +
        "This should take a minute or two")
    }
    if (userCanBet === false) return;
    try {
      const betAmountInEther = (mode == true) ? 1 * activenm : (1 * activenm2).toFixed(2);
      const betAmountInWei = new BigNumber(web3.utils.toWei(String(betAmountInEther), "Ether"));
      setBetButtonName(button.transacting);
      const buytickets = await liveEventsContract.methods.betEnter(event.id, targetBetPosition).send(
        { from: props.isLoggedin.address, value: betAmountInWei });
      console.log(buytickets);
      setBetButtonName(button.confirm);

      setTransactionHash(`https://testnet.bscscan.com/tx/${buytickets.transactionHash}`);
    } catch (e) {
      console.log(e);
    }
  }

  function handleChangeInput1(e) {
    try {
      setmode(true);
      setactivenm(e.target.value);
    } catch (error) {
      console.log(error);
    }
  }

  function handleChangeInput2(e) {
    try {
      setmode(false);

      setactivenm2(e);
    } catch (error) {
      console.log(error);
    }
  }

  async function SelectBetPosition(betPosition) {
    setBetButtonName(button.confirm);
    setBetTarget(betPosition);
  }

  /* ---------------------------- */

  function TeamOne() {
    return (
      <div className="namebx">

        <div className="betTeamImg"><img src={match.teamA.logoURL} img width="160" height="160" alt="image here"></img></div>

        <h4 >{match.teamA.name}</h4>

        <button onClick={() => SelectBetPosition(betEnterPositions.teamOne)} className={targetBetPosition == betEnterPositions.teamOne ? "gradientbtn active" : `gradientbtn`}>
          Select
        </button>
      </div>
    )
  }

  function Draw() {
    return (
      <div className="namebx">
        <h4 className="drawtop">Draw</h4>
        <div className="drawbutton"><button onClick={() => SelectBetPosition(betEnterPositions.draw)} className={targetBetPosition == betEnterPositions.draw ? "gradientbtn active" : `gradientbtn`}>
          Select
        </button></div>
      </div>
    )
  }

  function TeamTwo() {
    return (
      <div className="namebx">
        <div className="betTeamImg"><img src={match.teamB.logoURL} img width="160" height="160" alt="image here"></img></div>

        <h4 >{match.teamB.name}</h4>
        <button onClick={() => SelectBetPosition(betEnterPositions.teamTwo)} className={targetBetPosition == betEnterPositions.teamTwo ? "gradientbtn active" : `gradientbtn`}>
          Select
        </button>
      </div>
    )
  }

  function TotalBet() {
    let betTotalEther;
    if (betTotal != "-")
      betTotalEther = Number(web3.utils.fromWei(String(betTotal), "Ether")).toFixed(4);
    return (<div>
      <h6>Total Bet</h6>
      <h4>{betTotalEther} BNB</h4>
    </div>);
  }

  function TeamOneRewards() {
    return <div className="TAReward">{betOnTeamOne == 0 ? "0" : (rewardsTotal / betOnTeamOne).toFixed(2)}x</div>;
  }

  const drawOptionStyle = {
    color: 'rgba(221, 193, 78, 1)',
    border: '1px solid rgba(255, 255, 255, 0.5)',
    borderRadius: '6px',
    width: '60px',
    height: '33px',
    textAlign: 'center',
    padding: '4px',
    position: 'relative',
    top: '2rem',
    fontWeight: '800',
    backgroundColor: 'rgba(255, 206, 93, 0.2)',
  }

  function DrawRewards() {
    return <div style={drawOptionStyle}>{betOnDraw == 0 ? "0" : (rewardsTotal / betOnDraw).toFixed(2)}x</div>;
  }

  function TeamTwoRewards() {
    return <div className="TBReward">{betOnTeamTwo == 0 ? "0" : (rewardsTotal / betOnTeamTwo).toFixed(2)}x</div>;
  }

  function BetPortionOfTotalBalance() {
    return (<div className="iptoptions">
      <div className="row">
        <button className={isActive("10") ? "active" : ``} onClick={() => handleChangeInput2((10 / 100) * currentWalletBalance)}>
          10%
        </button>
        <button className={isActive("20") ? "active" : ``} onClick={() => handleChangeInput2((20 / 100) * currentWalletBalance)}>
          20%
        </button>
        <button className={isActive("50") ? "active" : ``} onClick={() => handleChangeInput2((50 / 100) * currentWalletBalance)}>
          50%
        </button>
        <button className={isActive("75") ? "active" : ``} onClick={() => handleChangeInput2((75 / 100) * currentWalletBalance)}>
          75%
        </button>
      </div>
      <button className="maxbtn" onClick={() => handleChangeInput2(currentWalletBalance)}>
        Max
      </button>
    </div>);
  }

  function LatestTransaction() {
    return tx == 0 ? (
      ""
    ) : (
      <div className="gradbtn">
        <a className="maxbtn" href={tx} target="_blank" rel="noopener noreferrer">
          View latest Tx
        </a>{" "}
      </div>
    )
  }

  function BetButton() {
    let button;
    if (userCanBet)
      button = (<div className="gradientbtn gradbtn" onClick={() => BetEnter()}>
        {betButtonName}
      </div>)
    else
      button = (<div className="gradientbtn gradbtn" onClick={() => ReasonWhyBettingClosed()}>
        {betButtonName}
      </div>)
    return button;
  }

  /* ----------------------- */

  return (
    <div className="wow fadeInDown" data-wow-duration="0.5s" data-wow-delay="0.8s">
      <BettingStyle>
        <div className="left">
          <TeamOne />
          <div className="center">
            <TotalBet />
            <div className="rewards">
              <TeamOneRewards />
              <span>VS</span>
              <TeamTwoRewards />
            </div>
            <DrawRewards />
            <div className="versus">
              <Draw />
            </div>
          </div>
          <TeamTwo />
        </div>
        <div className="right">
          <div className="header">
            <h6>Place Bet</h6>
            <h7>
              Balance: {(1 * currentWalletBalance).toFixed(6)} <span className="gradtext">BNB</span>
            </h7>
          </div>
          <div className="ipouter">
            {" "}
            {mode}
            <input
              step=".01"
              className="inputNoArrows"
              type="number"
              value={mode == true ? 1 * activenm : (1 * activenm2).toFixed(2)}
              onChange={handleChangeInput1}
            />
            <span className="gradtext">BNB</span>
          </div>
          <BetPortionOfTotalBalance />
          <BetButton />
          <LatestTransaction />
        </div>
      </BettingStyle>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentBalance: state.currentBalance,
    currentBet: state.currentBet,
    isLoggedin: state.isLoggedin,
    isPage: state.isPage,
    isActive: state.isActive,
    isContract: state.isContract,
  };
};

export default connect(mapStateToProps)(Betting);
