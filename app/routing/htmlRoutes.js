var path = require("path");
console.log("test test")
module.exports = function (app) {
   app.get("/", function (req, res) {
       console.log("hit route")
       res.sendFile(path.join(__dirname, "../public/home.html"))
   })
   app.get("/survey", function (req, res) {
    console.log("hit route")
    res.sendFile(path.join(__dirname, "../public/survey.html"))
})
}