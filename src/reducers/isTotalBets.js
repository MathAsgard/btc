/* eslint-disable no-sequences */
const isTotalBets = (state = "", action) => {
  switch (action.type) {
    case "SETTOTALBETS":
      return {
        state,
        payload7: action.payload7,
      };
    default:
      if (action.payload7) {
        return action.payload7;
      } else {
        return state;
      }
  }
};
export default isTotalBets;
