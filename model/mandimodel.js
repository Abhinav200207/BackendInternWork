const mongoose = require('mongoose');

const mandiSchema = new mongoose.Schema({
    cmdtyName: { type: String, required: true },
    cmdtyID: { type: String, required: true },
    marketID: { type: String, required: true },
    marketName: { type: String, required: true },
    users: [
        {
            type: String,
        }
    ],
    timestamp: { type: String, required: true },
    priceUnit: { type: String, required: true },
    price: { type: Number, required: true }
});

module.exports = mongoose.model("comodity", mandiSchema);