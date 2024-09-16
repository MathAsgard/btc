const Web3 = require("web3");

const LoginReducer = (state = false, action) => {
  switch (action.type) {
    case "SETADDRESS":
      if(action.address == 0 || action.address === undefined) {
        return {
          state,
          address: undefined,
        };
      }
      return {
        state,
        address: Web3.utils.toChecksumAddress(action.address),
      };
    default:
      if (action.address) {
        return action.address;
      } else {
        return state;
      }
  }
};
export default LoginReducer;
