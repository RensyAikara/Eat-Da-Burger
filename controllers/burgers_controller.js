var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// route for getting all burgers
router.get("/",function(req,res){
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
        res.render("index",hbsObject);
    });
});
// route for adding a burger
router.post("/api/burgers", function(req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
      res.json({ id: result.insertId });
    });
});
// route for updating burger details
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    burger.updateOne({ devoured: req.body.devoured }, condition, function(result) {
            if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
      }
    });
});

module.exports = router;