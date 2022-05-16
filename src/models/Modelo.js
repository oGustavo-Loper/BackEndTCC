const { Model, DataTypes } = require('sequelize');

class Modelos extends Model {
    static init(sequelize) {
        super.init({
            modelo: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Modelos;

// DeviceModel