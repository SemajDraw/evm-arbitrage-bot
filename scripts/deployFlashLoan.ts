import { ethers } from "hardhat";

async function main() {
  const FlashLoan = await ethers.getContractFactory("FlashLoan");
  const flashLoan = await FlashLoan.deploy(
    process.env.AAVE_POOL_ADDRESS_PROVIDER_CONTRACT
  );

  await flashLoan.deployed();

  console.log("FlashLoan contract deployed to address: ", flashLoan.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
