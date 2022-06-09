const express = require('express');
const app = express();
const dotenv = require("dotenv")
const { connectDatabase } = require('./db/database');

app.use(express.json());


dotenv.config({ path: "./db/config.env" });

const PORT = process.env.PORT || 4000
connectDatabase();

const product = require('./routes/mandiroutes');

app.use("", product)


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})