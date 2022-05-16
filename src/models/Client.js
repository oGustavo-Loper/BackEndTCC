const { Model, DataTypes } = require('sequelize');

class Client extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            number: DataTypes.INTEGER,
            CPF: DataTypes.STRING,
            email: DataTypes.STRING,
            address: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Client;