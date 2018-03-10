var db = require("../models");
console.log(db + "=============");

module.exports = function(app) {    

       // GET route for getting all of the passengers within a group
       app.get("/api/pax", function(req, res) {
        var query = {};
        if (req.query.group_id) {
          query.group_id = req.query.group_id;
        }
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        
        db.Passengers.findAll({
          where: query,
          include: [db.Groups]
        }).then(function(dbPassengers) {
          res.json(dbPassengers);
        });
      });
  
        // Get route for retrieving a single passenger - may need for user view
    app.get("/api/pax/:id", function(req, res) {
     
      db.Groups.findOne({
        where: {
          id: req.params.id
        },
        include: [db.Groups]
      }).then(function(dbPassengers) {
        res.json(dbPassengers);
      });
    });
  
    // POST route for saving an update to the pax screen
    // app.post("/api/pax", function(req, res) {
    //   db.Group.create(req.body).then(function(dbGroup) {
    //     res.json(dbGroup);
    //   });
    // });
}