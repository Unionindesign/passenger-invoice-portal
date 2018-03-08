// const Passengers = require("./passenger.js");


module.exports = function(sequelize, DataTypes) {
    var Groups = sequelize.define("Groups", {
        group_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            len: [1]
            }
        },
        tour_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            len: [1]
            }
        },
        tour_code: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            len: [1]
            }
        },
        departure_date: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            len: [1]
            }
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        // underscored: true 
    });
  
    Groups.associate = function(models) {
      
      Groups.hasMany(models.Passengers, {
        // underscored: true,
        onDelete: "cascade"
      });
    };
  
    return Groups;
  };

