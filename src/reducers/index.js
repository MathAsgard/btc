import { combineReducers } from "redux";
import LoginReducer from "./isWallet";
import BalanceReducer from "./currentBalance";
import CurrentBetReducer from "./currentBet";
import MatchesListReducer from "./isMatchesList";
import PageReducer from "./isPage";
import Player1Reducer from "./isPlayer1";
import Player2Reducer from "./isPlayer2";
import isTotalBetsPlayer1 from "./isTotalBetsPlayer1";
import isTotalBetsPlayer2 from "./isTotalBetsPlayer2";
import isTotalBets from "./isTotalBets";
import EpochReducer from "./isEpoch";
import FlipReducer from "./isFlip";
import OracleReducer from "./isOracle";
import Rates1Reducer from "./IsRates1";
import Rates2Reducer from "./IsRates2";
import ActiveReducer from "./isActive";
//import contractReducer from "./isContract";
import PredReducer from "./isPred";
import Img1Reducer from "./isImg1";
import Img2Reducer from "./isImg2";

const allReducers = combineReducers({
  isLoggedin: LoginReducer,
  currentBalance: BalanceReducer,
  currentBet: CurrentBetReducer,
  isMatchesList: MatchesListReducer,
  isPage: PageReducer,
  isPlayer1: Player1Reducer,
  isPlayer2: Player2Reducer,
  isBetsPlayer1: isTotalBetsPlayer1,
  isBetsPlayer2: isTotalBetsPlayer2,
  isTotalBets: isTotalBets,
  isEpoch: EpochReducer,
  isFlip: FlipReducer,
  isPred: PredReducer,
  isOracle: OracleReducer,
  isRates1: Rates1Reducer,
  isRates2: Rates2Reducer,
  isActive: ActiveReducer,
  //  isContract: contractReducer,
  isImg1: Img1Reducer,
  isImg2: Img2Reducer,
});

export default allReducers;
