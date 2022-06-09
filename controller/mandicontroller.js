const req = require('express/lib/request');
const res = require('express/lib/response');
const Mandi = require('../model/mandimodel');

exports.initializeProduct = async (req, res) => {
    try {
        const product = await Mandi.create(req.body);
        res.status(201).json(product)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const product = await Mandi.findOne({ marketID: req.body.reportDetails.marketID, cmdtyID: req.body.reportDetails.cmdtyID });
        let list = product.users;
        if (!(req.body.reportDetails.userId in product.users)) {
            list.push(req.body.reportDetails.userId);
        }
        let price = (product.users.length * product.price + req.body.reportDetails.price / req.body.reportDetails.convFctr) / (product.users.length + 1)
        console.log(price)
        const newProduct = {
            cmdtyName: req.body.reportDetails.cmdtyName,
            cmdtyID: req.body.reportDetails.cmdtyID,
            marketID: req.body.reportDetails.marketID,
            marketName: req.body.reportDetails.marketName,
            users: list,
            timestamp: Date.now().toString(),
            priceUnit: "kg",
            price: price
        }
        const updatedProduct = await Mandi.findByIdAndUpdate(product._id, newProduct, {
            new: true,
            runValidator: true,
            useFindAndModify: false
        })
        res.status(201).json({
            success: true,
            product: product
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.getMandi = async (req, res) => {
    try {
        const product = await Mandi.findById(req.query.reportID);
        res.status(201).json(product)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}