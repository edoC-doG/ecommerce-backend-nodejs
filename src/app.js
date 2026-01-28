const express = require("express");
const morgan = require("morgan")
const helmet = require("helmet")
const compression = require("compression")
const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

app.get("/", (req, res, next) => {
    const strCompress = "Hello World!";
    return res.status(200).json({
        message: "Hello Compress",
        metadata: strCompress.repeat(10000)
    })
})

module.exports = app; 