const express = require("express");
const app = express();
const fs = require("fs");
require("dotenv").config();

console.log(process.env.GS_ID);

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
            
            case "github-js":
                res.sendFile(
                    __dirname + "/js/github-rest.js"
                )
                break;

            default:
                fs.access(
                    __dirname + "/" +
                    req.params.lang + "/" +
                    req.params.src + "/index.html",
                    fs.constants.F_OK, (err) => {
                        if (err) {
                            res.sendFile(
                                __dirname + "/404.html"
                            )
                        }
                    }
                )
                break;
        }
    } else switch (req.params.src) {
        case "p":
            res.sendFile(
                __dirname + "/" +
                req.params.lang + "/profile.html"
            )
            break;
        
        case "s":
            res.sendFile(
                __dirname + "/" +
                req.params.lang + "/sink.html"
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
            fs.access(
                __dirname + "/" +
                req.params.lang + "/index.html",
                fs.constants.F_OK, (err) => {
                    if (err) {
                        res.sendFile(
                            __dirname + "/404.html"
                        )
                    } else {            
                        fs.access(
                            __dirname + "/" +
                            req.params.lang + "/" +
                            req.params.src + "/index.html",
                            fs.constants.F_OK, (err) => {
                                if (err) {
                                    res.sendFile(
                                        __dirname + "/404.html"
                                    )
                                } else {
                                    res.sendFile(
                                        __dirname + "/" +
                                        req.params.lang + "/" +
                                        req.params.src + "/index.html"
                                    )
                                }
                            }
                        )
                    }
                }
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
    } else if (req.params.lang === "source-code") {
        res.sendFile(
            __dirname + "/source-code.html"
        )
    } else if (req.params.lang === "route") {
        res.sendFile(
            __dirname + "/route.json"
        )
    } else if (req.params.lang === "api") {
        res.sendFile(
            __dirname + "/api.html"
        )
    } else if (req.params.lang === "beta") {
        res.send(
            String(process.env.GS_ID)
        )
    } else {
        fs.access(
            __dirname + "/" +
            req.params.lang + "/index.html",
            fs.constants.F_OK, (err) => {
                if (err) {
                    res.sendFile(
                        __dirname + "/404.html"
                    )
                } else {
                    res.sendFile(
                        __dirname + "/" +
                        req.params.lang + "/index.html"
                    )
                }
            }
        )
    }
})

app.get("/:lang/p/:name", function(req, res) {
    res.send(
        "<script>window.location.href = '../p?name=" +
        req.params.name + "'</script>"
    )
})

app.get("/:lang/p/:name/:ticket", function(req, res) {
    res.send(
        "<script>window.location.href = '../../p?name=" +
        req.params.name + "&ticket=" + req.params.ticket +
        "'</script>"
    )
})

app.get("/:lang/s/:sink", function(req, res) {
    res.send(
        "<script>window.location.href = '../s?sink=" +
        req.params.sink + "'</script>"
    )
})

app.use("*", function(req, res) {
    res.status(404).sendFile(
        __dirname + "/404.html"
    )
})

console.log("Server launching in: 3000");