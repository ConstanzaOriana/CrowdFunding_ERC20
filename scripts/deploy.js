const hre = require("hardhat");


async function main() {

  const Contract = await hre.ethers.getContractFactory("ERC20");
  const _contract = await Contract.deploy("0xa1F13eAd039bD25448C9444D8726B6fB94DBe7E5");

  await _contract.deployed();

  console.log("ERC20 deployed to: ", _contract.address);
}


main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});