// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // index route loads login.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // admin route loads adminportal.html
  app.get("/admin", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/adminportal.html"));
  });

  app.get("/admin-pax", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/adminpaxportal.html"));
  });

  //Will dynamically create a route for each group...
  app.get("/group/:group_name?", function(req, res) {
    var chosen = req.params.group_name;
  
    if (chosen) {
      console.log(chosen);
  
      for (var i = 0; i < group_name.length; i++) {
        if (chosen === group_name[i].routeName) {
          return res.json(group_name[i]);
        }
      }
      return res.json(false);
    }
    return res.json(group_name);
  });


};