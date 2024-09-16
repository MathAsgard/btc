/* eslint-disable no-sequences */
const ActiveReducer = (state = "1", action) => {
  switch (action.type) {
    case "SETACTIVE":
      return {
        state,
        payload12: action.payload12,
      };
    default:
      if (action.payload12) {
        return action.payload12;
      } else {
        return state;
      }
  }
};
export default ActiveReducer;
