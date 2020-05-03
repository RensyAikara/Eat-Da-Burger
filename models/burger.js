var orm = require("../config/orm.js");

var burger = {
    //Display all rows (all burgers)
    selectAll: function(cb){
        orm.selectAll("burgers",function(res){
            cb(res);
        });
    },
    // adding a new row (adding burger)
    insertOne: function(cols, vals, cb){
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    //Changing devour status
    updateOne: function(objColVals, condition, cb){
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
}

module.exports = burger;