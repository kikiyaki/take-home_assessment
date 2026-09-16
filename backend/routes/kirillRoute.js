const express = require("express");
const { getWETHTotalSupply } = require("../controllers/kirillController");

const router = express.Router();

router.route("/weth/total-supply").get(getWETHTotalSupply);

module.exports = router;
