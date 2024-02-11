require("@matterlabs/hardhat-zksync-solc");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.17",
    defaultNetwork: 'sepolia',
    networks: {
      hardhat: {},
      sepolia: {
        url: 'https://rpc.sepolia.dev',
        accounts: [`0x${process.env.PRIVATE_KEY}`],
        chain: {
          name: "sepolia",
          chainId: 11155111,
        }
      }
    
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
