const main = async () => {
  const transactionFactory = await hre.ethers.getContractFactory(
    "Transactions"
  );
  const transactionContract = await transactionFactory.deploy();

  await transactionContract.deployed();
  console.log("Transactions deployed to:", transactionContract.address);
};

// IIFE (Immediately Invoked Function Expression) which runs as soon as it is defined.
(async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
