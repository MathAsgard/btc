import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import RenderMatches from "../../components/Matches"
import Betting from "./components/betting";
import { Redirect } from "react-router";
import './index.scss';
import { connect } from "react-redux";

//const Bet: React.FC = () => { // I(@MichaelPin) have no idea why is this a React.FC
function Bet(props) {
  if (!props.currentBet) {
    console.log("Page reloaded or navigated to directly; redirecting");
    return <Redirect to={{
            pathname: "/matches",
            state: { redirected: true }
          }} />;
  }
  else {
    return (<div>
      <div className="bet container"><Betting /></div>
      <div><RenderMatches /></div>
    </div>);
  }
};

//export default Bet;
const mapStateToProps = (state) => {
  return {
    currentBet: state.currentBet,
  };
};

export default connect(mapStateToProps)(Bet);
