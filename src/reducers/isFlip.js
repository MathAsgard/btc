const FlipReducer = (state = false, action) => {
  switch (action.type) {
    case "SETFLIP":
      return !state;
    default:
      return state;
  }
};
export default FlipReducer;
