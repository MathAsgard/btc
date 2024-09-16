/* eslint-disable import/no-anonymous-default-export */
export default {
  OldMainContract: {
    MainNet: [
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "previousOwner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "newOwner",
            type: "address",
          },
        ],
        name: "OwnershipTransferred",
        type: "event",
      },
      {
        inputs: [
          {
            internalType: "uint8",
            name: "selected",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "betId",
            type: "uint256",
          },
        ],
        name: "bet",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "betId",
            type: "uint256",
          },
        ],
        name: "claim",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "string",
            name: "name1",
            type: "string",
          },
          {
            internalType: "string",
            name: "name2",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "closeTime",
            type: "uint256",
          },
        ],
        name: "createBet",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "betId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_closeTime",
            type: "uint256",
          },
        ],
        name: "setCloseTime",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_treasuryFee",
            type: "uint256",
          },
        ],
        name: "setTreasuryFee",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint16",
            name: "_winner",
            type: "uint16",
          },
          {
            internalType: "uint256",
            name: "betId",
            type: "uint256",
          },
        ],
        name: "setWinner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "newOwner",
            type: "address",
          },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        stateMutability: "payable",
        type: "fallback",
      },
      {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "bets",
        outputs: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name1",
            type: "string",
          },
          {
            internalType: "string",
            name: "name2",
            type: "string",
          },
          {
            internalType: "uint16",
            name: "gameWinner",
            type: "uint16",
          },
          {
            internalType: "uint256",
            name: "totalbets",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalBetsOne",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalBetsTwo",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "closeTime",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "betId",
            type: "uint256",
          },
        ],
        name: "getBet",
        outputs: [
          {
            internalType: "uint16",
            name: "gameWinner",
            type: "uint16",
          },
          {
            internalType: "uint256",
            name: "totalbets",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalBetsOne",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalBetsTwo",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "closeTime",
            type: "uint256",
          },
          {
            internalType: "uint16",
            name: "selected",
            type: "uint16",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint8",
            name: "_from",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "_to",
            type: "uint8",
          },
        ],
        name: "getBets",
        outputs: [
          {
            internalType: "uint16[]",
            name: "gameWinner",
            type: "uint16[]",
          },
          {
            internalType: "uint256[]",
            name: "totalbets",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "totalBetsOne",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "totalBetsTwo",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "closeTime",
            type: "uint256[]",
          },
          {
            internalType: "uint16[]",
            name: "selected",
            type: "uint16[]",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "minimum",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "owner",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "playersID",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "treasuryFee",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ],
  },
  Prediction: {
    MainNet: [
      {
        inputs: [
          { internalType: "address", name: "_oracleAddress", type: "address" },
          { internalType: "address", name: "_adminAddress", type: "address" },
          { internalType: "address", name: "_operatorAddress", type: "address" },
          { internalType: "uint256", name: "_intervalSeconds", type: "uint256" },
          { internalType: "uint256", name: "_bufferSeconds", type: "uint256" },
          { internalType: "uint256", name: "_minBetAmount", type: "uint256" },
          { internalType: "uint256", name: "_oracleUpdateAllowance", type: "uint256" },
          { internalType: "uint256", name: "_treasuryFee", type: "uint256" },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, internalType: "address", name: "sender", type: "address" },
          { indexed: true, internalType: "uint256", name: "epoch", type: "uint256" },
          { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "BetBear",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, internalType: "address", name: "sender", type: "address" },
          { indexed: true, internalType: "uint256", name: "epoch", type: "uint256" },
          { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "BetBull",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, internalType: "address", name: "sender", type: "address" },
          { indexed: true, internalType: "uint256", name: "epoch", type: "uint256" },
          { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "Claim",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, internalType: "uint256", name: "epoch", type: "uint256" },
          { indexed: true, internalType: "uint256", name: "roundId", type: "uint256" },
          { indexed: false, internalType: "int256", name: "price", type: "int256" },
        ],
        name: "EndRound",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, internalType: "uint256", name: "epoch", type: "uint256" },
          { indexed: true, internalType: "uint256", name: "roundId", type: "uint256" },
          { indexed: false, internalType: "int256", name: "price", type: "int256" },
        ],
        name: "LockRound",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [{ indexed: false, internalType: "address", name: "admin", type: "address" }],
        name: "NewAdminAddress",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, internalType: "uint256", name: "bufferSeconds", type: "uint256" },
          { indexed: false, internalType: "uint256", name: "intervalSeconds", type: "uint256" },
        ],
        name: "NewBufferAndIntervalSeconds",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, internalType: "uint256", name: "epoch", type: "uint256" },
          { indexed: false, internalType: "uint256", name: "minBetAmount", type: "uint256" },
        ],
        name: "NewMinBetAmount",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [{ indexed: false, internalType: "address", name: "operator", type: "address" }],
        name: "NewOperatorAddress",
        type: "event",
      },
      { anonymous: false, inputs: [{ indexed: false, internalType: "address", name: "oracle", type: "address" }], name: "NewOracle", type: "event" },
      {
        anonymous: false,
        inputs: [{ indexed: false, internalType: "uint256", name: "oracleUpdateAllowance", type: "uint256" }],
        name: "NewOracleUpdateAllowance",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, internalType: "uint256", name: "epoch", type: "uint256" },
          { indexed: false, internalType: "uint256", name: "treasuryFee", type: "uint256" },
        ],
        name: "NewTreasuryFee",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, internalType: "address", name: "previousOwner", type: "address" },
          { indexed: true, internalType: "address", name: "newOwner", type: "address" },
        ],
        name: "OwnershipTransferred",
        type: "event",
      },
      { anonymous: false, inputs: [{ indexed: true, internalType: "uint256", name: "epoch", type: "uint256" }], name: "Pause", type: "event" },
      { anonymous: false, inputs: [{ indexed: false, internalType: "address", name: "account", type: "address" }], name: "Paused", type: "event" },
      {
        anonymous: false,
        inputs: [
          { indexed: true, internalType: "uint256", name: "epoch", type: "uint256" },
          { indexed: false, internalType: "uint256", name: "rewardBaseCalAmount", type: "uint256" },
          { indexed: false, internalType: "uint256", name: "rewardAmount", type: "uint256" },
          { indexed: false, internalType: "uint256", name: "treasuryAmount", type: "uint256" },
        ],
        name: "RewardsCalculated",
        type: "event",
      },
      { anonymous: false, inputs: [{ indexed: true, internalType: "uint256", name: "epoch", type: "uint256" }], name: "StartRound", type: "event" },
      {
        anonymous: false,
        inputs: [
          { indexed: true, internalType: "address", name: "token", type: "address" },
          { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "TokenRecovery",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [{ indexed: false, internalType: "uint256", name: "amount", type: "uint256" }],
        name: "TreasuryClaim",
        type: "event",
      },
      { anonymous: false, inputs: [{ indexed: true, internalType: "uint256", name: "epoch", type: "uint256" }], name: "Unpause", type: "event" },
      { anonymous: false, inputs: [{ indexed: false, internalType: "address", name: "account", type: "address" }], name: "Unpaused", type: "event" },
      {
        inputs: [],
        name: "MAX_TREASURY_FEE",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "adminAddress",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "uint256", name: "epoch", type: "uint256" }],
        name: "betBear",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [{ internalType: "uint256", name: "epoch", type: "uint256" }],
        name: "betBull",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [],
        name: "bufferSeconds",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "uint256[]", name: "epochs", type: "uint256[]" }],
        name: "claim",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      { inputs: [], name: "claimTreasury", outputs: [], stateMutability: "nonpayable", type: "function" },
      {
        inputs: [
          { internalType: "uint256", name: "epoch", type: "uint256" },
          { internalType: "address", name: "user", type: "address" },
        ],
        name: "claimable",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "currentEpoch",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      { inputs: [], name: "executeRound", outputs: [], stateMutability: "nonpayable", type: "function" },
      { inputs: [], name: "genesisLockOnce", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" },
      { inputs: [], name: "genesisLockRound", outputs: [], stateMutability: "nonpayable", type: "function" },
      {
        inputs: [],
        name: "genesisStartOnce",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
      },
      { inputs: [], name: "genesisStartRound", outputs: [], stateMutability: "nonpayable", type: "function" },
      {
        inputs: [
          { internalType: "address", name: "user", type: "address" },
          { internalType: "uint256", name: "cursor", type: "uint256" },
          { internalType: "uint256", name: "size", type: "uint256" },
        ],
        name: "getUserRounds",
        outputs: [
          { internalType: "uint256[]", name: "", type: "uint256[]" },
          {
            components: [
              { internalType: "enum PancakePredictionV2.Position", name: "position", type: "uint8" },
              { internalType: "uint256", name: "amount", type: "uint256" },
              { internalType: "bool", name: "claimed", type: "bool" },
            ],
            internalType: "struct PancakePredictionV2.BetInfo[]",
            name: "",
            type: "tuple[]",
          },
          { internalType: "uint256", name: "", type: "uint256" },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "address", name: "user", type: "address" }],
        name: "getUserRoundsLength",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "intervalSeconds",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "uint256", name: "", type: "uint256" },
          { internalType: "address", name: "", type: "address" },
        ],
        name: "ledger",
        outputs: [
          { internalType: "enum PancakePredictionV2.Position", name: "position", type: "uint8" },
          { internalType: "uint256", name: "amount", type: "uint256" },
          { internalType: "bool", name: "claimed", type: "bool" },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "minBetAmount",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "operatorAddress",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "oracle",
        outputs: [{ internalType: "contract AggregatorV3Interface", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "oracleLatestRoundId",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "oracleUpdateAllowance",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      { inputs: [], name: "owner", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" },
      { inputs: [], name: "pause", outputs: [], stateMutability: "nonpayable", type: "function" },
      { inputs: [], name: "paused", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" },
      {
        inputs: [
          { internalType: "address", name: "_token", type: "address" },
          { internalType: "uint256", name: "_amount", type: "uint256" },
        ],
        name: "recoverToken",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "uint256", name: "epoch", type: "uint256" },
          { internalType: "address", name: "user", type: "address" },
        ],
        name: "refundable",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
      },
      { inputs: [], name: "renounceOwnership", outputs: [], stateMutability: "nonpayable", type: "function" },
      {
        inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        name: "rounds",
        outputs: [
          { internalType: "uint256", name: "epoch", type: "uint256" },
          { internalType: "uint256", name: "startTimestamp", type: "uint256" },
          { internalType: "uint256", name: "lockTimestamp", type: "uint256" },
          { internalType: "uint256", name: "closeTimestamp", type: "uint256" },
          { internalType: "int256", name: "lockPrice", type: "int256" },
          { internalType: "int256", name: "closePrice", type: "int256" },
          { internalType: "uint256", name: "lockOracleId", type: "uint256" },
          { internalType: "uint256", name: "closeOracleId", type: "uint256" },
          { internalType: "uint256", name: "totalAmount", type: "uint256" },
          { internalType: "uint256", name: "bullAmount", type: "uint256" },
          { internalType: "uint256", name: "bearAmount", type: "uint256" },
          { internalType: "uint256", name: "rewardBaseCalAmount", type: "uint256" },
          { internalType: "uint256", name: "rewardAmount", type: "uint256" },
          { internalType: "bool", name: "oracleCalled", type: "bool" },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "address", name: "_adminAddress", type: "address" }],
        name: "setAdmin",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "uint256", name: "_bufferSeconds", type: "uint256" },
          { internalType: "uint256", name: "_intervalSeconds", type: "uint256" },
        ],
        name: "setBufferAndIntervalSeconds",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [{ internalType: "uint256", name: "_minBetAmount", type: "uint256" }],
        name: "setMinBetAmount",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [{ internalType: "address", name: "_operatorAddress", type: "address" }],
        name: "setOperator",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [{ internalType: "address", name: "_oracle", type: "address" }],
        name: "setOracle",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [{ internalType: "uint256", name: "_oracleUpdateAllowance", type: "uint256" }],
        name: "setOracleUpdateAllowance",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [{ internalType: "uint256", name: "_treasuryFee", type: "uint256" }],
        name: "setTreasuryFee",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "treasuryAmount",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "treasuryFee",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      { inputs: [], name: "unpause", outputs: [], stateMutability: "nonpayable", type: "function" },
      {
        inputs: [
          { internalType: "address", name: "", type: "address" },
          { internalType: "uint256", name: "", type: "uint256" },
        ],
        name: "userRounds",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
    ],
  },
  LiveEvents: {
    MainNet: [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_operatorAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_minAmount",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "sender",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "BetClaim",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "sender",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "int256",
            "name": "position",
            "type": "int256"
          }
        ],
        "name": "BetEnter",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "blockNumber",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "closeTimeStamp",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "endTimestamp",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "string",
            "name": "category",
            "type": "string"
          },
          {
            "indexed": false,
            "internalType": "string",
            "name": "data",
            "type": "string"
          }
        ],
        "name": "LiveEventAdd",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "blockNumber",
            "type": "uint256"
          }
        ],
        "name": "LiveEventCancel",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "blockNumber",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "closeTimeStamp",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "endTimestamp",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "string",
            "name": "category",
            "type": "string"
          },
          {
            "indexed": false,
            "internalType": "string",
            "name": "data",
            "type": "string"
          }
        ],
        "name": "LiveEventEdit",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "blockNumber",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "int256",
            "name": "position",
            "type": "int256"
          }
        ],
        "name": "LiveEventEnd",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "blockNumber",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "startTimestamp",
            "type": "uint256"
          }
        ],
        "name": "LiveEventStart",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "rewardBaseAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "rewardAmount",
            "type": "uint256"
          }
        ],
        "name": "RewardsCalculated",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "rewardRate",
            "type": "uint256"
          }
        ],
        "name": "SetRewardRate",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "Bets",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "eventId",
            "type": "uint256"
          },
          {
            "internalType": "enum IBetCryptoLiveEvents.Position",
            "name": "position",
            "type": "uint8"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "claimed",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "Events",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "startTimestamp",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "closeTimestamp",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "endTimestamp",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "category",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "data",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "oneAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "drawAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "twoAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "rewardAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "rewardBaseAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "betCount",
            "type": "uint256"
          },
          {
            "internalType": "enum IBetCryptoLiveEvents.Position",
            "name": "position",
            "type": "uint8"
          },
          {
            "internalType": "enum IBetCryptoLiveEvents.Status",
            "name": "status",
            "type": "uint8"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [

        ],
        "name": "OwnershipRenounce",
        "outputs": [

        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransfer",
        "outputs": [

        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          }
        ],
        "name": "betClaim",
        "outputs": [

        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "int256",
            "name": "position",
            "type": "int256"
          }
        ],
        "name": "betEnter",
        "outputs": [

        ],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          }
        ],
        "name": "bettable",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "user",
            "type": "address"
          }
        ],
        "name": "claimable",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [

        ],
        "name": "currentID",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "fundsExtract",
        "outputs": [

        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [

        ],
        "name": "fundsInject",
        "outputs": [

        ],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [

        ],
        "name": "getOpenEvents",
        "outputs": [
          {
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "cursor",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "size",
            "type": "uint256"
          }
        ],
        "name": "getUserEnteredEvents",
        "outputs": [
          {
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "eventId",
                "type": "uint256"
              },
              {
                "internalType": "enum IBetCryptoLiveEvents.Position",
                "name": "position",
                "type": "uint8"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "claimed",
                "type": "bool"
              }
            ],
            "internalType": "struct IBetCryptoLiveEvents.Bet[]",
            "name": "",
            "type": "tuple[]"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "user",
            "type": "address"
          }
        ],
        "name": "getUserEnteredEventsCount",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "closeTimeStamp",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "endTimestamp",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "category",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "data",
            "type": "string"
          }
        ],
        "name": "liveEventAdd",
        "outputs": [

        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          }
        ],
        "name": "liveEventCancel",
        "outputs": [

        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "closeTimeStamp",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "endTimestamp",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "category",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "data",
            "type": "string"
          }
        ],
        "name": "liveEventEdit",
        "outputs": [

        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "int256",
            "name": "position",
            "type": "int256"
          }
        ],
        "name": "liveEventEnd",
        "outputs": [

        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          }
        ],
        "name": "liveEventStart",
        "outputs": [

        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [

        ],
        "name": "minAmount",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [

        ],
        "name": "operatorAddress",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [

        ],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [

        ],
        "name": "rewardRate",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_rewardRate",
            "type": "uint256"
          }
        ],
        "name": "setRewardRate",
        "outputs": [

        ],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ]
  },
};
