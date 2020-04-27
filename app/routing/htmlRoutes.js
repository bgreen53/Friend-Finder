var path = require("path")

module.exports = function(app){

    app.get("/", function(req,res){
        res.sendFile(path.join(__dirname + "/../public/home.htm"))
    })

    app.get("/survey", function(req,res){
        res.sendFile(path.join(__dirname + "/../public/survey.htm"))
    })

}