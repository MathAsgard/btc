import React, { useState } from "react";
import { connect } from "react-redux";
import RenderMatches from "../../components/Matches"

function Matches(props) {
  let targetHtml = [];

  function GotRedirectedFromBetPage() {
    // apparently we're using browser history here
    if (props.location.state)
      if (props.location.state.redirected)
        return true
    return false
  }

  if (GotRedirectedFromBetPage()) {
    return (
      <div>
        <div className="container">
          <h2 style={{ marginBottom: "5%" }} >Please select a match in order to make a bet!</h2>
        </div>
        <div className="wow fadeInDown" data-wow-duration="2.5s" data-wow-delay="1.2s">
          <RenderMatches />
        </div>
      </div>
    );
  }
  else {
    return <RenderMatches />
  }
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

export default connect(mapStateToProps)(Matches);