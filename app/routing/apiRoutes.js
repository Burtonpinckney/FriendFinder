var friends = require("../data/friends")


module.exports = function (app){
    app.get("/api/friends", function (req, res) {
        res.json(friends)
    })
    app.post("/api/friends", function (req, res) {
        console.log("checking friends")
        var bestMatch = {
            name: "",
            photo: "",
            scores: 55
        }
        var answers = req.body;
        console.log(answers)
        var scorez = answers.scores
        var diff = 0
        for (let i = 0; i < friends.length; i++) {
          var diffTotal = 0
          var currenFriend = friends[i]

          for (let k = 0; k < currenFriend.scores.length; k++) {    
              diffTotal += Math.abs(parseInt(scorez[k]) - parseInt(currenFriend.scores[k]))
          }
          if (diffTotal<bestMatch.scores){
              bestMatch = {
                  name : currenFriend.name,
                  photo : currenFriend.photo,
                  scores : diffTotal
                }

          }
            
        }
        res.json(bestMatch)
    })
}