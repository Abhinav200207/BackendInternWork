const mongoose = require('mongoose'); // Importing Mongoose


// this callback function will connect to database
exports.connectDatabase = () => {
    return mongoose.connect(process.env.MONGO_URI).then((data) => {
        console.log(`Connected to database ${data}`);
    })
}