import { telegramGroupLink } from "../../config/constants/links";
export const wantedNetworkID = 56; // 56 - BSC mainnet, 97 - BSC testnet

export function PromptInstallMetamask() {
  alert("Please install MetaMask in order to use this site\nGo to " + telegramGroupLink + " if you need any help");
}

export function PromptConnectMetamask() {
  alert("Please connect your Metamask account\n" +
    "You can do this by pressing the 'Connect' button,\n" +
    "available from the menu in the top right corner");
}

export function PromptWrongNetMetamask() {
  alert("Your Metamask is connected to the wrong network\n" + 
  "You should connect to Binance Smart Chain" +
  "\nGo to " + telegramGroupLink + " if you need any help");
}

export function CurrentNetworkIsBSC() {
  const currentNetworkID = window.ethereum.networkVersion;
  if (currentNetworkID == wantedNetworkID)
    return true;
  else
    return false;
}

export async function NetworkAdd(id = wantedNetworkID) {
  let networkData;
  switch (id) {
    case 97:
      networkData = [
        {
          chainId: "0x61",
          chainName: "Binance Smart Chain Testnet",
          rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545"],
          nativeCurrency: {
            name: "BINANCE COIN",
            symbol: "tBNB",
            decimals: 18,
          },
          blockExplorerUrls: ["https://testnet.bscscan.com/"],
        },
      ];
      break;
    case 56:
      networkData = [
        {
          chainId: "0x38",
          chainName: "Binance Smart Chain",
          rpcUrls: ["https://bsc-dataseed1.binance.org"],
          nativeCurrency: {
            name: "BINANCE COIN",
            symbol: "BNB",
            decimals: 18,
          },
          blockExplorerUrls: ["https://bscscan.com/"],
        },
      ];
      break;
    default:
      break;
  }
  return window.ethereum.request({
    method: "wallet_addEthereumChain",
    params: networkData,
  });
}
