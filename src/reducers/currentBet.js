/* eslint-disable no-sequences */
const CurrentBetReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_CURRENT_BET":
      return {
        state,
        bet: action.data.bet,
        match: action.data.match,
        event: action.data.event,
      };
    default:
      if (action.data) {
        return action.data;
      } else {
        return state;
      }
  }
};
export default CurrentBetReducer;
