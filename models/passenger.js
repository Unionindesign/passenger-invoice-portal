module.exports = function(sequelize, DataTypes) {
    var Passenger = sequelize.define("Passenger", {
      
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
        allowNull: false,
        validate: {
        len: [1]
        }
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
  
    Passenger.associate = function(models) {
      // We're saying that a Passenger should belong to a Group
      // A Post can't be created without an Author due to the foreign key constraint
      Passenger.belongsTo(models.Group, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Passenger;
  };