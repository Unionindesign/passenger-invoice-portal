var db = require("../models");

module.exports = function(app) {
       // GET route for getting all of the passengers within a group
       app.get("/api/pax", function(req, res) {
        var query = {};
        if (req.query.group_id) {
          query.GroupId = req.query.group_id;
        }
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        db.Group.findAll({
          where: query,
          include: [db.Group]
        }).then(function(dbGroup) {
          res.json(dbGroup);
          console.log("Here is the res.json for the seleceted group: ", dbGroup);
        });
      });
  
        // Get route for retrieving a single passenger
    app.get("/api/pax/:id", function(req, res) {
     
      db.Group.findOne({
        where: {
          id: req.params.id
        },
        include: [db.Group]
      }).then(function(dbGroup) {
        res.json(dbGroup);
      });
    });
  
    // POST route for saving a new post
    app.post("/api/posts", function(req, res) {
      db.Group.create(req.body).then(function(dbGroup) {
        res.json(dbGroup);
      });
    });
}