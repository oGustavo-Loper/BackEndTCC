const { Model, DataTypes } = require('sequelize');

class DeviceModel extends Model {
    static init(sequelize) {
        super.init({
            devicemodel: DataTypes.STRING,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.hasMany(models.ServiceOrder, { foreignKey: "DeviceModel_id", as: "ServicesOrdersModels" }),
            this.belongsTo(models.DeviceBrand, { foreignKey: "DeviceBrand_id", as: "DeviceBrand" });
    }
}

module.exports = DeviceModel;
