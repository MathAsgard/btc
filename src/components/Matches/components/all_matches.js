import React, { useState, useEffect } from "react";
import teamImages from "../../../assets/images";
import { Row } from "../../../components";
import matchesPromise from "./match_fetcher.js";

function AllMatches(props) {
  const fetchingMatches = (<h1>Fetching matches...</h1>);

  const [matches, setMatches] = useState(undefined);
  const [builtMatchesHtml, buildMatches] = useState(fetchingMatches);

  if (matches === undefined) {
    matchesPromise.then(
      (matchesAll) => {
        setMatches(matchesAll);
      }
    );
  }

  useEffect(() => {
    if (matches === undefined) {
      console.log("Fetching new matches...");
    } else {
      DrawMatchBoxes();
    }
  }, [props.wantedMatchType, props.displayOptions, matches]);


  if (props.wantedMatchType === undefined) {
    console.error("Received props.wantedMatchType = undefined; this is a required property;" +
      + " refusing to draw any matches")
    return null;
  };

  function IntegrityCheck(match) {
    function check(property) {
      return (match.hasOwnProperty(property) && match[property] !== null);
    }
    const matchIsIntact = (check('teamA') && check('teamB') && check('matchType'));
    if (!matchIsIntact)
      console.error("match #" + match.contractID + " is missing some fields; excluding it from the list");
    return matchIsIntact;
  }

  function DrawMatchBoxes() {
    let matchesHtml = [null];
    let matchHtml;
    // the value of i below is connected with the entries that backend API provides;
    // not with the entires that the contract itself provides
    //    for (var i = 36; i < matches.length; i++) { // incremental sorting order
    for (var i = matches.length - 1; i > 33; i--) { // decremental sorting order
      const match = matches[i];
      if (props.wantedMatchType != "all")
        if (props.wantedMatchType != match.matchType.name)
          continue;
      if (!IntegrityCheck(match)) continue;
      matchHtml = (
        <Row key={match.contractID}
          match={match}
          sport={match.matchType.name}
          status="active"
          colorvalue={"green"}
          showBetOnly={props.displayOptions.showBetOnly}
          showEnded={props.displayOptions.showEnded}
        />
      )
      matchesHtml.push(matchHtml);
    }
    buildMatches(matchesHtml);
  }

  return (
    <div>{builtMatchesHtml}</div>
  );
}


export default AllMatches;