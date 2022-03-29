exports.sendReqParam = (req, res) =>{
    let veg = req.params.vegetable;
    res.send(`This is the page for ${veg}`);
}
exports.homePage = (req, res) =>
{
    res.render("index");
}


exports.respondWithName = (req, res) =>
{
    let paramsName = req.params.number;
    console.log(paramsName)
    if (paramsName == 1){
    res.render("image1" );
    }
    if (paramsName == 2){
        res.render("image2" );
        }
    if (paramsName == 3){
    res.render("image3" );
    }
}

exports.logRequestPaths = (req, res, next) => {
    console.log(`request made to: ${req.url}`);
    next();
};