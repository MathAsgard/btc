/* eslint-disable no-sequences */
const isTotalBetsPlayer2 = (state = "", action) => {
  switch (action.type) {
    case "SETBETSPLAYER2":
      return {
        state,
        payload6: action.payload6,
      };
    default:
      if (action.payload6) {
        return action.payload6;
      } else {
        return state;
      }
  }
};
export default isTotalBetsPlayer2;
