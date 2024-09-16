import { Link } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import "./index.css"
import contracts from "../../config/constants/contracts";
import abis from "../../config/constants/abi";

const Web3 = require("web3");
const web3 = new Web3(Web3.givenProvider);
const predictionContract = new web3.eth.Contract(abis.Prediction.MainNet, contracts.Prediction.MainNet);

const Test = (props) => {

  async function CheckForMetamask() {
    if (MetamaskNotInstalled())
      SetStatus("Metamask NOT installed");
    else
      SetStatus("Metamask installed");
  }

  async function Connect() {
    console.log("Logging in");
    if (MetamaskNotInstalled()) return;
    if (await TryConnect() == true) {
      SetStatus("Connected!");
    } else {
      SetStatus("User rejected connection!");
    }
  }

  async function GetAddress() {
    if (MetamaskNotInstalled()) {
      return;
    }
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    const address = accounts[0];
    SetStatus(address);
  }

  function MetamaskNotInstalled() {
    if (!web3 || !window.ethereum)
      return true;
    else
      return false;
  }

  async function TryConnect() {
    try {
      const accounts = await window.ethereum.send("eth_requestAccounts");
    } catch (error) {
      alert("Connect request rejected by user");
      return false;
    }
    return true;
  }

  function SetStatus(status) {
    document.getElementById("status").innerHTML = status;
  }


  return (
    <div class="center">
      <h1>Metamask test page</h1>
      <p>Status messages:</p>
      <div id="status"> </div>
      <button onClick={() => CheckForMetamask()}>Check for Metamask</button> 
      <button onClick={() => Connect()}>Connect</button> 
      <button onClick={() => GetAddress()}>Display address</button> 
    </div>
  );
};

export default Test;