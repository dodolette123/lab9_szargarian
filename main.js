const express = require("express"),
    app = express(),
    homeController = require("./Controllers/homeController");
    

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json())
app.use(homeController.logRequestPaths)

app.use((req, res, next) => {
    console.log(`request made to ${req.url}`);
    next();
});

app.get("/home", homeController.homePage)
app.get("/images/:number", homeController.respondWithName)

app.post("/", (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.send("POST")
});

app.listen(app.get("port"), () => {
    console.log("server running")
})



