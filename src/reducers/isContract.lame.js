/* eslint-disable no-sequences */
// Lame stuff. Was replaced by currentEvent.
const lame_contractReducer = (state = "", action) => {
  switch (action.type) {
    case "lame_SETCONTRACT":
      return {
        state,
        payload13: action.payload13,
      };
    default:
      if (action.payload13) {
        return action.payload13;
      } else {
        return state;
      }
  }
};
export default contractReducer;
