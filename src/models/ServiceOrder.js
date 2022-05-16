const { Model, DataTypes } = require('sequelize');

class ServiceOrder extends Model {
    static init(sequelize) {
        super.init({
            observation: DataTypes.STRING,
            withdrawal: DataTypes.DATE,
            value: DataTypes.FLOAT,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Client, { foreignKey: "client_id", as: "client" },
            models.Brand, { foreignKey: "brand_id", as: "brand" },
            models.Modelo, { foreignKey: "modelo_id", as: "modelo" },
            models.Service, { foreignKey: "service_id", as: "service" })
    }
}

module.exports = ServiceOrder;