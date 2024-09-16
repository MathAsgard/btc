/* eslint-disable no-sequences */
const EpochReducer = (state = "", action) => {
  switch (action.type) {
    case "SETEPOCH":
      return {
        state,
        payload8: action.payload8,
      };
    default:
      if (action.payload8) {
        return action.payload8;
      } else {
        return state;
      }
  }
};
export default EpochReducer;
