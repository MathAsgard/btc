const PredReducer = (state = false, action) => {
  switch (action.type) {
    case "SETPRED":
      return !state;
    default:
      return state;
  }
};
export default PredReducer;
