/* eslint-disable no-sequences */
const PageReducer = (state = "home", action) => {
  switch (action.type) {
    case "SETPAGE":
      return {
        state,
        payload2: action.payload2,
      };
    default:
      if (action.payload2) {
        return action.payload2;
      } else {
        return state;
      }
  }
};
export default PageReducer;
