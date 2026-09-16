const { ethers } = require("ethers");
const asyncErrorHandler = require("../middlewares/helpers/asyncErrorHandler");
const wETHAbi = require("../config/abis/wETH.json");

exports.getWETHTotalSupply = asyncErrorHandler(async (req, res, next) => {
  const provider = new ethers.JsonRpcProvider(process.env.ETH_RPC_URL);
  const contract = new ethers.Contract(
    process.env.WETH_CONTRACT_ADDRESS,
    wETHAbi,
    provider
  );

  console.log(contract);
  const raw = await contract.totalSupply();
  const totalSupply = parseFloat(ethers.formatUnits(raw, 18));

  res.status(200).json({
    wETH: {
      totalSupply,
    },
  });
});
