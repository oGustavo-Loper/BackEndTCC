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
    static associate(models) {
        this.hasMany(models.ServiceOrder, { foreignKey: "client_id", as: "ServicesOrders" });
    }
}

module.exports = Client;