const { Model, DataTypes } = require('sequelize');

class Brand extends Model {
    static init(sequelize) {
        super.init({
            brand: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Brand;