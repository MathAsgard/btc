const Web3 = require("web3");

const BalanceReducer = (state = "-", action) => {
  switch (action.type) {
    case "SETBALANCE":
      return {
        state,
        balance: action.balance,
      };
    default:
      if (action.balance) {
        return action.balance;
      } else {
        return state;
      }
  }
};

export default BalanceReducer;