module.exports = function(sequelize, DataTypes) {
    var Group = sequelize.define("Group", {
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
        }  
    });
  
    Group.associate = function(models) {
      
      Group.hasMany(models.Passenger, {
        onDelete: "cascade"
      });
    };
  
    return Group;
  };