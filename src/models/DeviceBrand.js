const { Model, DataTypes } = require('sequelize');

class DeviceBrand extends Model {
    static init(sequelize) {
        super.init({
            devicebrand: DataTypes.STRING,
        }, {
            sequelize
        })
    }
    static associate(models) {
        // this.hasMany(models.ServiceOrder, { foreignKey: "DeviceBrand_id", as: "ServicesOrdersBrands" }),
        this.hasMany(models.DeviceModel, { foreignKey: "DeviceBrand_id", as: "DeviceBrand" });
    }
}

module.exports = DeviceBrand;