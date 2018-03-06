var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the Groups
  app.get("/api/groups", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Group.findAll({}).then(function(dbGroup) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbGroup);
    });
  });

  app.get("/api/groups/:id", function(req, res) {
    // Find one Group with the id in req.params.id and return them to the user with res.json
    db.Group.findOne({
        where: {
        id: req.params.id
        }
    }).then(function(dbGroup) {
        res.json(dbGroup);
        console.log(dbGRoup);
    });
  });

 

}


