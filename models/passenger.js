// const Groups = require("./group.js");

module.exports = function(sequelize, DataTypes) {
    var Passengers = sequelize.define("Passengers", {
      
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
    pax_name: {
        type: DataTypes.STRING,
    },
    payments: {
        type: DataTypes.INTEGER,
    },
    balance: {
        type: DataTypes.INTEGER,
    },
    due_date: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        len: [1]
        }
    }, 
    isGroupLeader: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
        len: [1]
        }
    }, 
    total_group_credit: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate : {
            len: [1]
        }
    },
    hasGroupCredit: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
        len: [1]
        }
    }, 
    group_credit_shared: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
        len: [1]
        }
    },
    group_credit_split: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        len: [1]
        }
    },
    group_credit_amt: {
        type: DataTypes.INTEGER,
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
//  Passengers.belongsTo(Groups, {foreignKey: 'group_name', targetKey: 'group_name'});

  
    Passengers.associate = function(models) {
      // We're saying that a Passenger should belong to a Group
      // A Passenger can't be created without a Group due to the foreign key constraint
      Passengers.belongsTo(models.Groups, {
        foreignKey: { 
          allowNull: false,
          
        }
      });
    };
  
    return Passengers;
  };


