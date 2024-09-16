/* eslint-disable no-sequences */
const isTotalBetsPlayer1 = (state = "", action) => {
  switch (action.type) {
    case "SETBETSPLAYER1":
      return {
        state,
        payload5: action.payload5,
      };
    default:
      if (action.payload5) {
        return action.payload5;
      } else {
        return state;
      }
  }
};
export default isTotalBetsPlayer1;
