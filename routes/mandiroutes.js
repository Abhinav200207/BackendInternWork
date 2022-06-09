var express = require('express');
const { getMandi, updateProduct, initializeProduct } = require('../controller/mandicontroller');

const router = express.Router(); // setting up route

router.route("/reports").get(getMandi).post(updateProduct);
router.route("/create").post(initializeProduct)

module.exports = router;