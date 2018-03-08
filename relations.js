var db = require("/models");
  
module.exports = function() {
// relations for two tables
db.Passengers.belongsTo(db.Groups, 
    {foreignKey: 'group_name', targetKey: 'group_name'});
};
