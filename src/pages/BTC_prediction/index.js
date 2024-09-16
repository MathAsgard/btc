/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import styled from "styled-components";
import Cardflip from "../../components/Cards/Cardflip";
import CardLive from "../../components/Cards/Cardlive";
import CardNext from "../../components/Cards/Cardnext";
import CardLater from "../../components/Cards/Cardlater";
import Info from "../../assets/Icons/Info";
import Replay from "../../assets/Icons/Replay";
import Chart from "./components/Chart";
import Slider from "react-slick";
import contracts from "../../config/constants/contracts";
import abis from "../../config/constants/abi";
import { toggleEpoch, toggleOracleprice } from "../../actions";
import CardExpired from "../../components/Cards/CardExpired";

const Web3 = require("web3");
const web3 = new Web3(Web3.givenProvider);
const contract = new web3.eth.Contract(abis.LiveEvents.MainNet, contracts.LiveEvents.MainNet);
const contractprediction = new web3.eth.Contract(abis.Prediction.MainNet, contracts.Prediction.MainNet);
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
const addr = "0x264990fbd0A4796A3E3d8E37C4d5F87a3aCa5Ebf";
var settings = {
  autoplay: false,
  infinite: false,
  dots: false,
  draggable: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 2000,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1800,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
//const addr = "0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE"; bnb
const priceFeed = new web3.eth.Contract(aggregatorV3InterfaceABI, addr);
//const tokencontract = new web3.eth.Contract(abis.USDC.MainNet, LP);
//const priceofToken = await contract.methods.getAmountsIn([LP, contracts.USDC.MainNet], tickets).call({from:props.isLoggedin.address});

const Home = (props) => {
  // console.log(props);
  const slider = useRef(null);
  const [thetimer, setthetimer] = useState(0);
  const [thetimer2, setthetimer2] = useState(0);
  const [thetimer3, setthetimer3] = useState(0);
  const [PriceFeedBtc, setPriceFeedBtc] = useState("");
  const [epoch, setepoch] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    try {
      if (!web3 || !window.ethereum) return;
      const intervalId = setInterval(async () => {
        var price = await priceFeed.methods.latestRoundData().call({ from: props.isLoggedin.address });
        //  console.log(price);
        dispatch(toggleOracleprice(price[1] / 10 ** 8));
        setPriceFeedBtc(price[1] / 10 ** 8);
        /*
      priceFeed.methods
        .latestRoundData()
        .call()
        .then((roundData) => {
          //  console.log("Latest Round Data", roundData);
          dispatch(toggleOracleprice(roundData[1] / 10 ** 8));
          setPriceFeedBtc(roundData[1] / 10 ** 8);
        });
        */
      }, 3000);

      return () => clearInterval(intervalId);
    } catch (e) {
      console.log(e);
    }
  }, []);

  //prediction info

  useEffect(() => {
    const intervalId = setInterval(async () => {
      if (!web3 || !window.ethereum) return;

      if (!props.isEpoch.payload8) return;
      const TimerContract = await contractprediction.methods.rounds(props.isEpoch.payload8).call({ from: props.isLoggedin.address });
      //console.log(TimerContract);
      var now = new Date();

      var diff = now.getTime() - TimerContract.lockTimestamp * 1000; // get total seconds between the times

      var delta = Math.abs(diff) / 1000;
      var days = Math.floor(delta / 86400);
      delta -= days * 86400;
      var hours = Math.floor(delta / 3600) % 24;
      delta -= hours * 3600;

      var minutes = Math.floor(delta / 60) % 60;
      var minutes2 = Math.floor(delta / 60 + 5) % 60;
      var minutes3 = Math.floor(delta / 60 + 10) % 60;
      delta -= minutes * 60;

      var seconds = parseInt(delta % 60); // in theory the modulus is not required
      // console.log(minutes);
      setthetimer((minutes < 10 ? +minutes : minutes) + ":" + (seconds < 10 ? +seconds : seconds));
      setthetimer2((minutes < 10 ? +minutes2 : minutes2) + ":" + (seconds < 10 ? "0" + seconds : seconds));
      setthetimer3((minutes < 10 ? +minutes3 : minutes3) + ":" + (seconds < 10 ? "0" + seconds : seconds));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(async () => {
    try {
      if (!web3 || !window.ethereum) return;
      const currentepoch = await contractprediction.methods.currentEpoch().call({ from: props.isLoggedin.address });

      dispatch(toggleEpoch(currentepoch));
      setepoch(currentepoch);
    } catch (e) {
      console.log(e);
    }
  }, []);

  function next() {
    if (slider)
      // @ts-ignore
      slider.current.slickNext();
  }
  function prev() {
    if (slider)
      // @ts-ignore
      slider.current.slickPrev();
  }
  return (
    <HomeDiv className="container">
      <Chart />
      <div className="header wow fadeInDown" data-wow-duration="0.9s" data-wow-delay="0.8s">
        <div className="val">
          <img src="images/bitcoin.png" alt="" />${(1 * PriceFeedBtc).toFixed(1)}
        </div>{" "}
        <div className="controls">
          <div className="prev gradientbtn" onClick={() => prev()}>
            <i className="fas fa-arrow-left"></i>
          </div>
          <div className="rect"></div>
          <div className="next gradientbtn" onClick={() => next()}>
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>
        <div className="right">
          <div className="time">
            10 <span>m</span>
          </div>
          <div className="bx ">
            <Replay />
          </div>
          <div className="bx active">
            <Info />
          </div>
        </div>
      </div>
      <Slider ref={slider} {...settings} className="wow fadeInDown" data-wow-duration="0.9s" data-wow-delay="1s">
        <div>
          <CardExpired number={1} colorvalue="red" id={props.isEpoch.payload8 ? props.isEpoch.payload8 - 4 : ""} />
        </div>
        <div>
          <CardExpired number={2} colorvalue="red" id={props.isEpoch.payload8 ? props.isEpoch.payload8 - 3 : ""} />
        </div>
        <div>
          <CardExpired number={3} colorvalue="red" id={props.isEpoch.payload8 ? props.isEpoch.payload8 - 2 : ""} />
        </div>
        <div>
          <CardLive status="active" price={PriceFeedBtc} colorvalue="home" id={props.isEpoch.payload8 ? props.isEpoch.payload8 - 1 : ""} />
        </div>
        <div>
          <CardNext comp="home" id={props.isEpoch.payload8 ? Number(props.isEpoch.payload8) : ""} />
        </div>

        <div>
          <CardLater timer={thetimer2} id={Number(props.isEpoch.payload8) + 1} />
        </div>
        <div>
          <CardLater timer={thetimer3} id={Number(props.isEpoch.payload8) + 2} />
        </div>
      </Slider>
    </HomeDiv>
  );
};
//   <CardLater timer={thetimer2} id={Number(props.isEpoch.payload8) + 1} />
//  <CardLater timer={thetimer3} id={Number(props.isEpoch.payload8) + 2} />
//    <div className="runtime">{thetimer}</div>
const HomeDiv = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    margin-bottom: 40px;
    position: relative;
    .val {
      position: relative;
      background: rgba(196, 196, 196, 0.1);
      border-radius: 100px;
      padding: 14px 20px 14px 70px;
      font-weight: 600;
      img {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: auto;
        transform: scale(1.1);
      }
    }
    .controls {
      display: flex;
      align-items: Center;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      .gradientbtn {
        height: 38px;
        width: 38px;
        padding: 0;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.3s ease;
        &:hover {
          transform: Scale(1.1);
        }
        &::before {
          height: calc(100% - 2px);
          width: calc(100% - 2px);
          border-radius: 50%;
        }
      }
      .rect {
        margin: 0 26px;
        height: 40px;
        width: 26px;
        position: Relative;
        background: linear-gradient(
          165.89deg,
          #bb9d3a 6.66%,
          #b5963a 6.97%,
          #a78539 7.99%,
          #9d7a38 9.27%,
          #987338 11.06%,
          #967138 16.02%,
          #9b763a 22.55%,
          #a9863f 30.75%,
          #c0a047 39.83%,
          #e0c352 49.5%,
          #edd156 52.83%,
          #967930 68.69%,
          #9a7d31 75.36%,
          #a68936 82.13%,
          #bb9c3d 88.95%,
          #d7b746 95.75%,
          #dcbc48 96.83%
        );
        border-radius: 3px;
        &::before {
          content: "";
          position: absolute;
          height: 100%;
          width: 100%;
          right: 0%;
          top: 0%;
          background: linear-gradient(
            165.89deg,
            #bb9d3a 6.66%,
            #b5963a 6.97%,
            #a78539 7.99%,
            #9d7a38 9.27%,
            #987338 11.06%,
            #967138 16.02%,
            #9b763a 22.55%,
            #a9863f 30.75%,
            #c0a047 39.83%,
            #e0c352 49.5%,
            #edd156 52.83%,
            #967930 68.69%,
            #9a7d31 75.36%,
            #a68936 82.13%,
            #bb9c3d 88.95%,
            #d7b746 95.75%,
            #dcbc48 96.83%
          );
          border-radius: 5px;
          opacity: 0.3;
          z-index: -1;
          transform: rotate(25deg);
          transform-origin: right bottom;
        }
      }
    }
    .right {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .runtime {
        margin-right: 8px;
      }
      .time {
        span {
          color: #7f7f7f;
        }
      }
      .bx {
        position: relative;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 6px;
        overflow: hidden;
        margin-left: 10px;
        svg {
          transform: scale(0.9);
        }
        &.active {
          &::before {
            opacity: 1;
          }
        }
        &::before {
          content: "";
          position: absolute;
          height: 100%;
          width: 100%;
          right: 0%;
          top: 0%;
          background: linear-gradient(
            133.62deg,
            #bb9d3a 2.22%,
            #b5963a 3.92%,
            #a78539 4.94%,
            #9d7a38 6.21%,
            #987338 8%,
            #967138 12.95%,
            #9b763a 19.45%,
            #a9863f 27.62%,
            #c0a047 36.68%,
            #e0c352 46.32%,
            #edd156 49.64%,
            #967930 65.45%,
            #9a7d31 72.1%,
            #a68936 78.85%,
            #bb9c3d 85.64%,
            #d7b746 92.43%,
            #dcbc48 93.5%
          );
          border-radius: 3px;
          opacity: 0.2;
          z-index: -1;
        }
      }
    }
  }

  @media screen and (max-width: 1440px) {
    .header {
      flex-direction: column;
      align-items: center;
      .controls {
        position: relative;
        margin: 34px auto 24px;
        left: 0;
        transform: translate(0);
      }
    }
  }
`;

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

export default connect(mapStateToProps)(Home);
