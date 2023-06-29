import { ethers } from "hardhat";

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const lockedAmount = ethers.utils.parseEther("0.001");

  const Lock = await ethers.getContractFactory("Lock");
  const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  await lock.deployed();

  console.log(
    `Lock with ${ethers.utils.formatEther(lockedAmount)}ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
  );
}

async function deployProducts() {
  const Products = await ethers.getContractFactory("ProductsChain");
  const products = await Products.deploy();

  await products.deployed();
  console.log(`ProductsChain deployed to ${products.address}`);
}

async function deployBloackIoTManager() {
  const signers = await ethers.getSigners();
  
  const BloackIoTManager = await ethers.getContractFactory("BloackIoTManager", signers[0]);
  const bloackIoTManager = await BloackIoTManager.deploy();

  await bloackIoTManager.deployed();
  console.log(`BloackIoTManager deployed to ${bloackIoTManager.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
// deployProducts().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });
deployBloackIoTManager().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
