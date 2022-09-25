import { config as dotenvConfit } from "dotenv";
dotenvConfit();
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      from:"http://127.0.0.1:8545/",
    },
  }
  };

  export default config;
