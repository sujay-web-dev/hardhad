require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");

/** @type import('hardhat/config').HardhatUserConfig */

const GORELI_RPC_URL = process.env.GOERLI_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    goerli: {
      url: GORELI_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 5,
    },
  },
  solidity: "0.8.17",
  etherscan:{
    apiKey:ETHERSCAN_API_KEY
  }
};
