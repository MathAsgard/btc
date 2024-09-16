/* eslint-disable no-sequences */
const Img1Reducer = (state = "", action) => {
  switch (action.type) {
    case "SETIMG1":
      return {
        state,
        payload14: action.payload14,
      };
    default:
      if (action.payload14) {
        return action.payload14;
      } else {
        return state;
      }
  }
};
export default Img1Reducer;
