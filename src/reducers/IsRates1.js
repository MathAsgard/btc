/* eslint-disable no-sequences */
const Rates1Reducer = (state = "", action) => {
  switch (action.type) {
    case "SETRATES1":
      return {
        state,
        payload10: action.payload10,
      };
    default:
      if (action.payload10) {
        return action.payload10;
      } else {
        return state;
      }
  }
};
export default Rates1Reducer;
