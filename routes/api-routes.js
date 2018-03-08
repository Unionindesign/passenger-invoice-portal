var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the Groups
  app.get("/api/groups", function(req, res) {
    db.Groups.findAll({}).then(function(dbGroups) {
      res.json(dbGroups);
    });
  });

  app.get("/api/groups/:id", function(req, res) {
    // Find one Group with the id in req.params.id and return them to the user with res.json
    db.Groups.findOne({
        where: {
        id: req.params.id
        }
    }).then(function(dbGroups) {
        res.json(dbGroups);
        console.log(dbGroups);
    });
  });

 

}


