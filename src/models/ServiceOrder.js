const { Model, DataTypes } = require('sequelize');

class ServiceOrder extends Model {
    static init(sequelize) {
        super.init({
            observation: DataTypes.STRING,
            withdrawal: DataTypes.DATE,
            value: DataTypes.FLOAT,
            open: DataTypes.BOOLEAN,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.belongsTo(models.Client, { foreignKey: "client_id", as: "client" }),
            this.belongsTo(models.DeviceBrand, { foreignKey: "DeviceBrand_id", as: "DeviceBrand" }),
            this.belongsTo(models.DeviceModel, { foreignKey: "DeviceModel_id", as: "DeviceModel" }),
            this.belongsTo(models.Service, { foreignKey: "service_id", as: "service" });
    }
}

module.exports = ServiceOrder;