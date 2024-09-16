/* eslint-disable no-sequences */
const OracleReducer = (state = "", action) => {
  switch (action.type) {
    case "SETORACLE":
      return {
        state,
        payload9: action.payload9,
      };
    default:
      if (action.payload9) {
        return action.payload9;
      } else {
        return state;
      }
  }
};
export default OracleReducer;
