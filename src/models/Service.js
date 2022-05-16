const { Model, DataTypes } = require('sequelize');

class Service extends Model {
    static init(sequelize) {
        super.init({
            service: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Service;