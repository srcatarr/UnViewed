const express = require("express");
const app = express();

app.listen(3000);

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.get("/:lang/:src", function(req, res) {
    if (req.params.lang === "public") {
        res.sendFile(
            __dirname + "/" +
            req.params.src
        )
    } else {
        res.sendFile(
            __dirname + "/" +
            req.params.lang + "/" +
            req.params.src + "/index.html"
        )
    }
})

app.get("/:lang", function(req, res) {
    if (req.params.lang === "public") {
        res.send(
            "<script>window.location.href = '../'</script>"
        )
    } else {
        res.sendFile(
            __dirname + "/" +
            req.params.lang + "/index.html"
        )
    }
})