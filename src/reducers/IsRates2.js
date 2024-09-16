/* eslint-disable no-sequences */
const Rates2Reducer = (state = "", action) => {
  switch (action.type) {
    case "SETRATES2":
      return {
        state,
        payload11: action.payload11,
      };
    default:
      if (action.payload11) {
        return action.payload11;
      } else {
        return state;
      }
  }
};
export default Rates2Reducer;
