// This file is designed to abstract interactions with the backend API
// It fetches a list of matches from the backend.
// And returns them

// const baseURL = "https://secure-shore-43384.herokuapp.com/v1/"; // RIP old backend
const baseURL = process.env.PUBLIC_URL
//const baseURL = "http://localhost:3000/"
const matchesURL = baseURL + "matches.json";
let matchesAll;

async function GetMatches(paramsForGET) {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  };
  const response = await fetch(matchesURL, options);
  const data = await response.json();
  return data;
}

async function FetchAllMatches() {
  const matches = await GetMatches();

  // Remove the below bit in production
  /*
  for (let match of matches) {
    var matchInfo = "match #" + match.contractID + ': of type "' + match.matchType.name + '" - ends at ' + match.endDate;
    console.log(matchInfo);
  }
  */
  return matches;
}

export default matchesAll = FetchAllMatches();  