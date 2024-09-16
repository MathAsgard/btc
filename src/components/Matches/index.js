import React, { useState } from "react";
import { connect } from "react-redux";
import Info from "../../assets/Icons/Info";
import AllMatches from "./components/all_matches";
import "./index.scss";
import MatchesDiv from "./styling";

function RenderMatches(props) {
  const [activeMatchType, setActiveMatchType] = useState("all");
  const [click, setClick] = useState(false);
  const [displayOptions, setDisplayOptions] = useState({ showBetOnly: false, showEnded: false });

  function isActive(name) {
    return activeMatchType == name;
  }

  function ToggleShowUserBetsOnly() {
    let newOptions = { ...displayOptions }; // have to copy it; else React doesn't trigger state update
    newOptions.showBetOnly = !newOptions.showBetOnly;
    setDisplayOptions(newOptions);
  }

  function ToggleShowEnded() {
    let newOptions = { ...displayOptions }; // have to copy it; else React doesn't trigger state update
    newOptions.showEnded = !newOptions.showEnded;
    setDisplayOptions(newOptions);
  }


  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  function onlinkclick(name) {
    setActiveMatchType(name);
    if (click) {
      handleClick();
    }
  }

  function DrawToggleOnlyUserBets() {
    return (
      <div className="toggle">
        <label className="switch">
          <input type="checkbox" checked={displayOptions.showBetOnly} onChange={() => ToggleShowUserBetsOnly()} /> <div></div>
        </label>
        <span> Show only my bets</span>
      </div>
    );
  }

  function DrawToggleEnded() {
    return (
      <div className="toggle">
        <label className="switch">
          <input type="checkbox" checked={displayOptions.showEnded} onChange={() => ToggleShowEnded()} /> <div></div>
        </label>
        <span> Show ended matches</span>
      </div>
    );
  }

  /*
          <li onClick={() => setActiveMatchType("ic9")} className={isActive("ic9") ? "active" : ``}>
            <img src="images/ic/ic9.png" alt="ic9" />
          </li>
  */

  function CategoryIcons(props) {
    return (
      <div className="left">
        <li onClick={() => setActiveMatchType("fighting")} className={isActive("fighting") ? "active" : ``}>
          <img src="images/ic/fighting.png" alt="fighting" />
        </li>
        <li onClick={() => setActiveMatchType("baseball")} className={isActive("baseball") ? "active" : ``}>
          <img src="images/ic/baseball.png" alt="baseball" />
        </li>
        <li onClick={() => setActiveMatchType("big_tennis")} className={isActive("big_tennis") ? "active" : ``}>
          <img src="images/ic/big_tennis.png" alt="big_tennis" />
        </li>
        <li onClick={() => setActiveMatchType("golf")} className={isActive("golf") ? "active" : ``}>
          <img src="images/ic/golf.png" alt="golf" />
        </li>
        <li onClick={() => setActiveMatchType("hockey")} className={isActive("hockey") ? "active" : ``}>
          <img src="images/ic/hockey.png" alt="hockey" />
        </li>
        <li onClick={() => setActiveMatchType("table_tennis")} className={isActive("table_tennis") ? "active" : ``}>
          <img src="images/ic/table_tennis.png" alt="table_tennis" />
        </li>
        <li onClick={() => setActiveMatchType("basketball")} className={isActive("basketball") ? "active" : ``}>
          <img src="images/ic/basketball.png" alt="basketball" />
        </li>
        <li onClick={() => setActiveMatchType("volleyball")} className={isActive("volleyball") ? "active" : ``}>
          <img src="images/ic/volleyball.png" alt="volleyball" />
        </li>
        <li onClick={() => setActiveMatchType("soccer")} className={isActive("soccer") ? "active" : ``}>
          <img src="images/ic/soccer.png" alt="" />
        </li>
        <li onClick={() => setActiveMatchType("football")} className={isActive("football") ? "active" : ``}>
          <img src="images/ic/football.png" alt="football" />
        </li>
        <li onClick={() => setActiveMatchType("all")} className={isActive("all") ? "active" : ``}>
          All
        </li>
      </div>
    );
  }

  return (
    <MatchesDiv>
      <div className="container">
        <header>
          <CategoryIcons />
        </header>
        <table className="filters">
          <tbody>
            <tr>
              <td><DrawToggleOnlyUserBets /></td>
              <td><DrawToggleEnded /></td>
              <td className="info"><div class="roro" >?<div className="tooltipContent">
                This is a tooltip content, you should be able to write whatever you want here
                </div></div></td>
            </tr>
          </tbody>
        </table>
        <div style={{ display: isActive("fighting") ? "block" : "none" }}>
          <AllMatches displayOptions={displayOptions} wantedMatchType="Fighting" />
        </div>
        <div style={{ display: isActive("soccer") ? "block" : "none" }}>
          <AllMatches displayOptions={displayOptions} wantedMatchType="Soccer" />
        </div>
        <div style={{ display: isActive("football") ? "block" : "none" }}>
          <AllMatches displayOptions={displayOptions} wantedMatchType="Football" />
        </div>
        <div style={{ display: isActive("big_tennis") ? "block" : "none" }}>
          <AllMatches displayOptions={displayOptions} wantedMatchType="Big Tennis" />
        </div>
        <div style={{ display: isActive("table_tennis") ? "block" : "none" }}>
          <AllMatches displayOptions={displayOptions} wantedMatchType="Table Tennis" />
        </div>
        <div style={{ display: isActive("basketball") ? "block" : "none" }}>
          <AllMatches displayOptions={displayOptions} wantedMatchType="Basketball" />
        </div>
        <div style={{ display: isActive("golf") ? "block" : "none" }}>
          <AllMatches displayOptions={displayOptions} wantedMatchType="Golf" />
        </div>
        <div style={{ display: isActive("volleyball") ? "block" : "none" }}>
          <AllMatches displayOptions={displayOptions} wantedMatchType="Volleyball" />
        </div>
        <div style={{ display: isActive("hockey") ? "block" : "none" }}>
          <AllMatches displayOptions={displayOptions} wantedMatchType="Hockey" />
        </div>
        <div style={{ display: isActive("baseball") ? "block" : "none" }}>
          <AllMatches displayOptions={displayOptions} wantedMatchType="Baseball" />
        </div>
        <div style={{ display: isActive("all") ? "block" : "none" }}>
          <AllMatches displayOptions={displayOptions} wantedMatchType="all" />
        </div>
      </div>
    </MatchesDiv >
  );
};

/*
"Soccer"
"Football"
"Big Tennis"
"Table Tennis"
"Basketball"
"Golf"
"Volleyball"
"Hockey"
"Baseball"
*/


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

export default connect(mapStateToProps)(RenderMatches);
