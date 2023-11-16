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
            
            case "visually-impaired-1":
                res.sendFile(
                    __dirname + "/assets/visually-impaired-1.jpg"
                )
                break;
            
            case "visually-impaired-2":
                res.sendFile(
                    __dirname + "/assets/visually-impaired-2.jpg"
                )
                break;
            
            case "visually-impaired-3":
                res.sendFile(
                    __dirname + "/assets/visually-impaired-3.jpg"
                )
                break;
            
            case "visually-impaired-4":
                res.sendFile(
                    __dirname + "/assets/visually-impaired-4.jpg"
                )
                break;
            
            case "visually-impaired-5":
                res.sendFile(
                    __dirname + "/assets/visually-impaired-5.jpg"
                )
                break;
            
            case "favicon":
                res.sendFile(
                    __dirname + "/assets/favicon.png"
                )
                break;
            
            case "open-source-1":
                res.sendFile(
                    __dirname + "/assets/open-source-1.jpg"
                )
                break;

            case "open-source-2":
                res.sendFile(
                    __dirname + "/assets/open-source-2.jpg"
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
        
        case "about-project":
            res.sendFile(
                __dirname + "/" +
                req.params.lang + "/subtitles/about/about-project.html"
            )
            break;
        
        case "parents":
            res.sendFile(
                __dirname + "/" +
                req.params.lang + "/subtitles/about/parents.html"
            )
            break;
        
        case "educators":
            res.sendFile(
                __dirname + "/" +
                req.params.lang + "/subtitles/about/educators.html"
            )
            break;
        
        case "developers":
            res.sendFile(
                __dirname + "/" +
                req.params.lang + "/subtitles/about/developers.html"
            )
            break;
        
        case "donate":
            res.sendFile(
                __dirname + "/" +
                req.params.lang + "/subtitles/about/donate.html"
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

console.log("Server launching in: 3000");