const express = require("express");
const router=require('./src/routers/men')
const { connect } = require("./src/db/connect");

const app = express();
app.use(express.json());
//We will handle post request
app.use(router);

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server is running on port:${port}`);
})