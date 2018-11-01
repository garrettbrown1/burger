// require in express, and set up routing for it, and bring in
// the burger.js model file
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// add a '/burgers/insertOne' endpoint that posts the 
// burger name the user entered then as a callback it
// redirects back to the /index route
router.post("/burgers", function (req, res) {
  burger.insertOne(["burger_name"
  ], [
      req.body.burger_name], function (result) {
        // Send back the ID of the new quote
        res.redirect('/');
      });
});


// add a '/burgers/updateOne/:id' route that updates
// the status of the burger from being uneaten to eaten
// then does a callback that redirects to the /index endpoint
router.put('/burgers/:id', function (req, res) {
  var condition = 'id = ' + req.params.id;
  console.log('condition', condition);

  burger.updateOne({ 
    devoured: req.body.devoured
   }, condition, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      res.redirect("/");
    }
  });
});

// Export router (controller) back to the server.js to use.
module.exports = router;