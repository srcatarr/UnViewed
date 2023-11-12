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
            
            case "main-script-js":
                res.sendFile(
                    __dirname + "/js/script.js"
                )
                break;
            
            case "tr-banner":
                res.sendFile(
                    __dirname + "/assets/tr-banner.gif"
                )
                break;

            default:
                break;
        }
    } else switch (req.params.src) {
        case "p":
            res.sendFile(
                __dirname + "/" +
                req.params.lang + "/profile.html"
            )
            break;
        
        case "app":
            res.sendFile(
                __dirname + "/" +
                req.params.lang + "/app.html"
            )
            break;
        
        case "admin":
            res.sendFile(
                __dirname + "/" +
                req.params.lang + "/admin.html"
            )
            break;
    
        default:
            res.sendFile(
                __dirname + "/" +
                req.params.lang + "/" +
                req.params.src + "/index.html"
            )
            break;
    }
})

app.get("/:lang", function(req, res) {
    if (req.params.lang === "public") {
        res.send(
            "<script>window.location.href = '../'</script>"
        )
    } else if (req.params.lang === "subtitle") {
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