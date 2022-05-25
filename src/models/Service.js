const { Model, DataTypes } = require('sequelize');

class Service extends Model {
    static init(sequelize) {
        super.init({
            service: DataTypes.STRING,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.hasMany(models.ServiceOrder, { foreignKey: "service_id", as: "ServicesOrdersService" });
    }
}

module.exports = Service;