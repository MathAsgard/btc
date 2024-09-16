/* eslint-disable no-sequences */
const Player1Reducer = (state = "", action) => {
  switch (action.type) {
    case "SETPLAYER1":
      return {
        state,
        payload3: action.payload3,
      };
    default:
      if (action.payload3) {
        return action.payload3;
      } else {
        return state;
      }
  }
};
export default Player1Reducer;
