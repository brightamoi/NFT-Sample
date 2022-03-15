// Import ethers from Hardhat package
const { ethers } = require("hardhat");

async function main() {
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so nftContract here is a factory for instances of our GameItem contract.
  */
  const contract = await ethers.getContractFactory("NFTee");

  // here we deploy the contract
  const deployedContract = await contract.deploy();

  //Wait for deployment to finish
  await deployedContract.deployed();

  // print the address of the deployed contract
  console.log("NFT Contract Address:", deployedContract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
