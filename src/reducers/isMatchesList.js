/* eslint-disable no-sequences */
const MatchesListReducer = (state = "", action) => {
  switch (action.type) {
    case "UPDATED_LIST_OF_ALL_MATCHES":
      return {
        state,
        matches: action.payload,
      };
    default:
      if (action.payload) {
        return action.payload;
      } else {
        return state;
      }
  }
};
export default MatchesListReducer;
