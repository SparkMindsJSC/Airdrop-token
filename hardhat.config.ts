import { HardhatUserConfig } from "hardhat/config";
require("dotenv").config();

import "@nomicfoundation/hardhat-toolbox";

const privateKey = process.env.PRIVATE_KEY || "";
const config: HardhatUserConfig = {
  paths: {
    artifacts: "./artifacts",
  },
  solidity: "0.8.20",
  defaultNetwork: "manta",
  networks: {
    manta: {
      url: "https://pacific-rpc.testnet.manta.network/http",
      chainId: 3441005,
      accounts: [privateKey],
    },
  },
};

export default config;
