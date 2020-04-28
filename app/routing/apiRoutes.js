
var friends = require("../data/friends.js")

module.exports = function (app){

app.get("/api/friends", function(req,res){

    res.json(friends)
})

app.post('/api/friends', function(req, res) {
    // Capture the user input object
    var userInput = req.body;
    // console.log('userInput = ' + JSON.stringify(userInput));

    var userResponses = userInput.scores;
    // console.log('userResponses = ' + userResponses);

    // Compute best friend match
    var matchName = '';
    var matchImage = '';
    var matchEmail = '';
    var totalDifference = 50; 

    // Examine all existing friends in the list
    for (var i = 0; i < friends.length; i++) {
        // console.log('friend = ' + JSON.stringify(friends[i]));

        // Compute differenes for each question
        var diff = 0;
        for (var j = 0; j < userResponses.length; j++) {
            diff += Math.abs(friends[i].scores[j] - userResponses[j]);
        }
        // console.log('diff = ' + diff);

        // If lowest difference, record the friend match
        if (diff < totalDifference) {
          

            totalDifference = diff;
            matchName = friends[i].name;
            matchImage = friends[i].photo;
            matchEmail = friends[i].email;
        }
    }

    // Add new user
    friends.push(userInput);

    // Send appropriate response
    res.json({status: 'OK', matchName: matchName, matchImage: matchImage, matchEmail: matchEmail});
});
};

