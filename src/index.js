const express = require("express");
const app = express();

app.listen(3000);

app.get("/", function(req, res) {
    res.sendFile("index.html");
})

app.get("/:lang/:src", function(req, res) {
    res.sendFile(
        __dirname + "/" +
        req.params.lang + "/" +
        req.params.src + "/index.html"
    )
})

app.get("/:lang", function(req, res) {
    res.sendFile(
        __dirname + "/" +
        req.params.lang + ".html"
    )
})
