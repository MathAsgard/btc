import React, { useState, useRef, useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import contracts from "../../../config/constants/contracts";
import abis from "../../../config/constants/abi";
import styled from "styled-components";
import CardLive from "../../../components/Cards/Cardlive";
import CardNext from "../../../components/Cards/Cardnext";
import { toggleEpoch, toggleOracleprice } from "../../../actions";
import "./Pred.scss"

const Web3 = require("web3");
const web3 = new Web3(Web3.givenProvider);
const contract = new web3.eth.Contract(abis.LiveEvents.MainNet, contracts.LiveEvents.MainNet);
const contractprediction = new web3.eth.Contract(abis.Prediction.MainNet, contracts.Prediction.MainNet);
const addr = "0x264990fbd0A4796A3E3d8E37C4d5F87a3aCa5Ebf";
//const addr = "0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE"; bnb

const aggregatorV3InterfaceABI = [
  { inputs: [], name: "decimals", outputs: [{ internalType: "uint8", name: "", type: "uint8" }], stateMutability: "view", type: "function" },
  { inputs: [], name: "description", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" },
  {
    inputs: [{ internalType: "uint80", name: "_roundId", type: "uint80" }],
    name: "getRoundData",
    outputs: [
      { internalType: "uint80", name: "roundId", type: "uint80" },
      { internalType: "int256", name: "answer", type: "int256" },
      { internalType: "uint256", name: "startedAt", type: "uint256" },
      { internalType: "uint256", name: "updatedAt", type: "uint256" },
      { internalType: "uint80", name: "answeredInRound", type: "uint80" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestRoundData",
    outputs: [
      { internalType: "uint80", name: "roundId", type: "uint80" },
      { internalType: "int256", name: "answer", type: "int256" },
      { internalType: "uint256", name: "startedAt", type: "uint256" },
      { internalType: "uint256", name: "updatedAt", type: "uint256" },
      { internalType: "uint80", name: "answeredInRound", type: "uint80" },
    ],
    stateMutability: "view",
    type: "function",
  },
  { inputs: [], name: "version", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
];
const priceFeed = new web3.eth.Contract(aggregatorV3InterfaceABI, addr);

const Pred = (props) => {
  const [PriceFeedBtc, setPriceFeedBtc] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      if (!web3 || !window.ethereum) {
      } else {
        async function getData() {
          const currentepoch = await contractprediction.methods.currentEpoch().call({ from: props.isLoggedin.address });

          var temp = await contract.methods.getBet(1).call({ from: "0xB0d51Fb4ef1E467F099C23aD0b9A8B2bdB8d97e3" });
          console.log(temp);

          dispatch(toggleEpoch(currentepoch));
        }
        getData();
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      if (!web3 || !window.ethereum) {
      } else {
        var price = await priceFeed.methods.latestRoundData().call({ from: props.isLoggedin.address });
        console.log();
        dispatch(toggleOracleprice(price[1] / 10 ** 8));
        setPriceFeedBtc(price[1] / 10 ** 8);
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
      <div className="prediction container">
        <div className="left wow fadeInLeft" data-wow-duration="0.9s" data-wow-delay="0.6s">
          <h1>
            <br /> 24/7 Crypto Prediction Pools.
          </h1>
          <p>What’s better then betting in crypto and getting paid in crypto??? Nothing.</p>
          <div className="gradientbtn">Make Your Prediction</div>
        </div>
        {!web3 || !window.ethereum ? null : (
          <div className="right wow fadeInRight" data-wow-duration="0.9s" data-wow-delay="0.6s">
            <div>
              <CardLive status="active" price={PriceFeedBtc} colorvalue="home" id={Number(props.isEpoch.payload8) - 1} />
            </div>{" "}
            <div>
              <CardNext comp="home" id={Number(props.isEpoch.payload8)} />
            </div>
          </div>
        )}
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
    isEpoch: state.isEpoch,
    isOracle: state.isOracle,
  };
};

export default connect(mapStateToProps)(Pred);
