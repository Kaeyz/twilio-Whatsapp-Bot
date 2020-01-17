require("dotenv").config({ path: ".env" });
const express = require("express");
const bodyParser = require("body-parser");

const router = require("./router");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});