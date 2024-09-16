/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState, useEffect } from "react";
import { changeAddress, recordBalance } from "../../actions";
import { useDispatch, connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TelegramIcon from "../../assets/Icons/Telegram.png";
import NavBar from "./styling.js";
import { wantedNetworkID, NetworkAdd, PromptInstallMetamask, CurrentNetworkIsBSC } from "../MetamaskSuite/index.js";
const Web3 = require("web3");
const web3 = new Web3(Web3.givenProvider);


const Navbar = (props) => {
  const dispatch = useDispatch();
  const [click, setClick] = useState(false);
  const [activenm, setActivenm] = useState("home");
  const [connectionWasRejected, setConnectionRejectedByUser] = useState(false);
  const [netChangeWasRejected, setNetChangeRejectedByUser] = useState(false);

  useEffect(() => {
    HandleNetworkChange();
    UpdateNavbarContents();
    UpdateWalletBalance();
  }, [props, window]);

  useEffect(() => {
    if (!web3 || !props.isLoggedin) return;
    if (props.isPage && (props.isPage == "pred" || props.isPage.payload2 == "pred")) {
      onlinkclick("pred");
    }
  }, [props.isPage]);

  useEffect(() => {
    SetupWeb3Listeners();
    const refresher = setInterval(async () => {
      UpdateWalletBalance();
      UpdateWeb3Info();
    }, 2000);
    return () => {
      RemoveWeb3Listeners();
      clearInterval(refresher);
    }
  }, []);

  async function Login() {
    if (NoWeb3Provider()) { PromptInstallMetamask(); return; }
    if (await TryConnect() === true) {
      if (CurrentNetworkIsBSC()) {
        const address = await GetWalletAddress();
        UpdateWalletAddress(address);
      } else {
        await RequestNetworkChangeForced();
        const address = await GetWalletAddress();
        UpdateWalletAddress(address);
      }
    } else {
      setConnectionRejectedByUser(true);
      return;
    }
  }

  function UpdateNavbarContents() {
    UpdateWeb3Info();
  }

  async function UpdateWeb3Info() {
    if (connectionWasRejected === true) return;
    if (MetamaskInstalled() && !AlreadyLoggedIn() && CurrentNetworkIsBSC()) {
      window.web3 = new Web3(window.ethereum);
      const address = await GetWalletAddress();
      UpdateWalletAddress(address);
    }
    if (props.isPred == true) setActivenm("pred");
  }


  function MetamaskInstalled() {
    if (window.ethereum)
      return true;
    else
      return false;
  }

  function NoWeb3Provider() {
    if (!web3 || !window.ethereum)
      return true;
    else
      return false;
  }

  function AlreadyLoggedIn() {
    if (props.isLoggedin.address === undefined)
      return false;
    else
      return true;
  }

  async function IsConnected() {
    if (NoWeb3Provider()) return false;
    if (await TryConnect() == true)
      return true;
    else
      return false;
  }

  async function TryConnect() {
    try {
      const accounts = await window.ethereum.send("eth_requestAccounts");
    } catch (error) {
      console.log("User rejected connect request");
      alert("Connect request rejected by user");
      return false;
    }
    return true;
  }

  async function GetWalletAddress() {
    if (NoWeb3Provider())
      return null;
    const accounts = await web3.eth.getAccounts();
    const address = accounts[0]
    return address;
  }


  async function HandleNetworkChange() {
    if (NoWeb3Provider()) return;
    if (!CurrentNetworkIsBSC() && AlreadyLoggedIn()) RequestNetworkChange();
  }

  function SetupWeb3Listeners() {
    if (NoWeb3Provider()) return;
    window.ethereum.on("chainChanged", RequestNetworkChange);
    window.ethereum.on("accountsChanged", CheckAccounts);
  }

  function RemoveWeb3Listeners() {
    if (NoWeb3Provider()) return;
    window.ethereum.removeListener("accountsChanged", CheckAccounts);
    window.ethereum.removeListener("chainChanged", RequestNetworkChange);
  }


  // Because JS doesn't support named params!!! Can't just do forced = true !!
  async function RequestNetworkChangeForced() {
    await RequestNetworkChange(0, true);
  }

  async function RequestNetworkChange(chainId = 0, forced = false) {
    if (netChangeWasRejected && !forced) return;
    if (CurrentNetworkIsBSC()) { UpdateWeb3Info(); return; }
    const wantedNetworkIDHexadecimal = "0x" + wantedNetworkID.toString(16);
    const rejectionErrorCode = 4001;
    const unknownChainErrorCode = 4902;
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: wantedNetworkIDHexadecimal }],
      });
      setNetChangeRejectedByUser(false);
      UpdateWeb3Info();
      window.location.reload(false);
    } catch (e) {
      if (e.code == rejectionErrorCode) {
        setNetChangeRejectedByUser(true);
        UpdateWalletAddress(undefined);
      } else if (e.code == unknownChainErrorCode) {
        RequestNetworkAdd(wantedNetworkID)
        UpdateWeb3Info();
      }
    }
  }

  async function RequestNetworkAdd(chainId = 0) {
    const alreadyPendingErrorCode = -32002
    const rejectionErrorCode = 4001;
    try {
      await NetworkAdd(chainId);
      window.location.reload(false);
    } catch (e) {
      if (e.code == alreadyPendingErrorCode) return;
      if (e.code == rejectionErrorCode) {
        alert("You need to add this network to Metamask\n" +
        "In order to be able to use this site!\n" + 
        "Please press 'Connect'('Change Net') button again,\n" +
        "add this network and reload the page");
        setNetChangeRejectedByUser(true);
      }
    }
  }

  function CheckAccounts(accounts) {
    if (accounts.length === 0) {
      console.log("Please connect to MetaMask.");
    } else if (accounts[0] !== props.isLoggedin.address) {
      UpdateWalletAddress(accounts[0]);
    }
  }

  async function UpdateWalletBalance() {
    if (props.isLoggedin) {
      if (!props.isLoggedin.address) return;
      const balanceBNB = web3.utils.fromWei(await web3.eth.getBalance(props.isLoggedin.address), 'Ether')
      if (props.currentBalance !== undefined && props.currentBalance.balance == balanceBNB)
        return;
      else
        dispatch(recordBalance(balanceBNB));
    }
  }

  function UpdateWalletAddress(address) {
    dispatch(changeAddress(address));
    //      window.location.reload(false);
  }

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  function isActive(name) {
    return activenm == name;
  }
  function onlinkclick(name) {
    setActivenm(name);
    if (click) {
      handleClick();
    }
  }

  function ConnectButtonName() {
    let buttonText = "";
    if (!props.isLoggedin.address)
      buttonText = "Connect";
    else if (!CurrentNetworkIsBSC())
      buttonText = "Change Net";
    else if (props.isLoggedin.address)
      buttonText = props.isLoggedin.address.substr(0, 4) + "..." + props.isLoggedin.address.substr(38, props.isLoggedin.address.length)

    return buttonText;
  }


  return (
    <NavBar className="wow fadeInDown" data-wow-duration="0.6s" data-wow-delay="0.5s">
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar " onClick={(e) => e.stopPropagation()}>
        <div className="nav-container container">
          <Link exact to="/" className="nav-logo">
            <img src="images/logo.svg" alt="" />
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className={isActive("home") ? "nav-item active" : `nav-item`}>
              <Link exact to="/home" activeClassName="active" className="nav-links" onClick={() => onlinkclick("home")} className="nav-links">
                Home
              </Link>
            </li>

            <li className={isActive("pred") ? "nav-item active" : `nav-item`}>
              <Link
                exact
                to="/bet"
                activeClassName="active"
                onClick={() => onlinkclick("pred")}
                className={isActive("pred") ? "nav-links active" : `nav-links`}
                className="nav-links"
              >
                Predictions
              </Link>
            </li>

            <li className="nav-item" className={isActive("match") ? "nav-item active" : `nav-item`}>
              <Link exact to="/matches" activeClassName="active" onClick={() => onlinkclick("match")} className="nav-links">
                Matches
              </Link>
            </li>

            <li className="nav-item socialIcons">
              <a className="fab fa-facebook-f" target="_blank" href="https://www.facebook.com/IBetCrypto-234368868546504" rel="noreferrer"></a>
              <a className="fab fa-twitter" target="_blank" href="  https://twitter.com/iBetCrypto" rel="noreferrer"></a>
              <a target="_blank" href="https://t.me/iBetCrypto" rel="noreferrer">
                <img width="15" className="telegram" height="15" src={TelegramIcon} alt="Telegram" />
              </a>
              <a className="fab fa-instagram" target="_blank" href="https://www.instagram.com/ibetcrypto/" rel="noreferrer"></a>
            </li>
            <li className="nav-item connectbtn" onClick={() => Login()}>
              <div className="gradientbtn">
                {" "}
                <img src="images/metamask.svg" alt="" />{" "}
                <ConnectButtonName />
              </div>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </NavBar>
  );
};


const mapStateToProps = (state) => {
  return {
    currentBalance: state.currentBalance,
    isLoggedin: state.isLoggedin,
    isPage: state.isPage,
    isPred: state.isPred,
  };
};

export default connect(mapStateToProps)(Navbar);
