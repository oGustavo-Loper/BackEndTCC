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
        this.belongsTo(models.Client, { foreignKey: "client_id", as: "client" }),
            this.belongsTo(models.Brand, { foreignKey: "brand_id", as: "brand" }),
            this.belongsTo(models.Modelos, { foreignKey: "modelo_id", as: "modelo" }),
            this.belongsTo(models.Service, { foreignKey: "service_id", as: "service" });
    }
}

module.exports = ServiceOrder;