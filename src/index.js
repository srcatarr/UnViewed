const express = require("express");
const app = express();

app.listen(3000);

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.get("/:lang/:src", function(req, res) {
    if (req.params.lang === "public") {
        switch (req.params.src) {
            case "bootstrap-css":
                res.sendFile(
                    __dirname + "/css/bootstrap.min.css"
                )
                break;
            
            case "bootstrap-js":
                res.sendFile(
                    __dirname + "/js/bootstrap.bundle.min.js"
                )
                break;
            
            case "main-style-css":
                res.sendFile(
                    __dirname + "/css/style.css"
                )
                break;

            default:
                break;
        }
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