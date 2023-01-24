// imports
const { ethers, run } = require("hardhat");

// async main
async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("Deploying contract");
  const simpleStorage = await SimpleStorageFactory.deploy();
  await simpleStorage.deployed();
  console.log(`Deployed contract to : ${simpleStorage.address}`);
  // what happens when we deploy to our hardhat network?
}

async function verify(contractAddress, args){
  // https://api-goerli.etherscan.io/
  console.log("Verifying The Contract ....");
  try{
    await run("verify:verify",{
      address:contractAddress,
      constructorArguments:args,
    });
  } catch (e) {
    if(e.message.toLowerCase().includes("already verified")){
      console.log("Already Verified !!");
    } else {
      console.log(e);
    }
  }
}

// main
main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
