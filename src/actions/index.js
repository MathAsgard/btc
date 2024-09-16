export const changeAddress = (data) => {
  return {
    type: "SETADDRESS",
    address: data,
  };
};

export const recordBalance = (data) => {
  return {
    type: "SETBALANCE",
    balance: data,
  };
};

export const populateActiveBet = (payload) => {
  return {
    type: "SET_CURRENT_BET",
    data: payload,
  };
};

export const updateMatchesList = (matches) => {
  return {
    type: "UPDATED_LIST_OF_ALL_MATCHES",
    payload: matches,
  };
};

export const togglePage = (data2) => {
  return {
    type: "SETPAGE",
    payload2: data2,
  };
};

export const toggleName1 = (data3) => {
  return {
    type: "SETPLAYER1",
    payload3: data3,
  };
};

export const toggleName2 = (data4) => {
  return {
    type: "SETPLAYER2",
    payload4: data4,
  };
};

export const toggleBets1 = (data5) => {
  return {
    type: "SETBETSPLAYER1",
    payload5: data5,
  };
};

export const toggleBets2 = (data6) => {
  return {
    type: "SETBETSPLAYER2",
    payload6: data6,
  };
};

export const toggleTotalBets = (data7) => {
  return {
    type: "SETTOTALBETS",
    payload7: data7,
  };
};

export const toggleEpoch = (data8) => {
  return {
    type: "SETEPOCH",
    payload8: data8,
  };
};

export const toggleFlip = () => {
  return {
    type: "SETFLIP",
  };
};

export const toggleOracleprice = (data9) => {
  return {
    type: "SETORACLE",
    payload9: data9,
  };
};

export const toggleRates1 = (data10) => {
  return {
    type: "SETRATES1",
    payload10: data10,
  };
};

export const toggleRates2 = (data11) => {
  return {
    type: "SETRATES2",
    payload11: data11,
  };
};

export const toggleActive = (data12) => {
  return {
    type: "SETACTIVE",
    payload12: data12,
  };
};

export const lame_toggleActiveMatch = (data13) => {
  return {
    type: "lame_SETCONTRACT",
    payload13: data13,
  };
};

export const togglePred = () => {
  return {
    type: "SETPRED",
  };
};

export const toggleImage1 = (data14) => {
  return {
    type: "SETIMG1",
    payload14: data14,
  };
};

export const toggleImage2 = (data15) => {
  return {
    type: "SETIMG2",
    payload15: data15,
  };
};
