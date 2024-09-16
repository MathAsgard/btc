/* eslint-disable no-sequences */
const Player2Reducer = (state = "", action) => {
  switch (action.type) {
    case "SETPLAYER2":
      return {
        state,
        payload4: action.payload4,
      };
    default:
      if (action.payload4) {
        return action.payload4;
      } else {
        return state;
      }
  }
};
export default Player2Reducer;
