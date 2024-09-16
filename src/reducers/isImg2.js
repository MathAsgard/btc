/* eslint-disable no-sequences */
const Img2Reducer = (state = "", action) => {
  switch (action.type) {
    case "SETIMG2":
      return {
        state,
        payload15: action.payload15,
      };
    default:
      if (action.payload15) {
        return action.payload15;
      } else {
        return state;
      }
  }
};
export default Img2Reducer;
