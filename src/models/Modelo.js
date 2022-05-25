const { Model, DataTypes } = require('sequelize');

class Modelos extends Model {
    static init(sequelize) {
        super.init({
            modelo: DataTypes.STRING,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.hasMany(models.ServiceOrder, { foreignKey: "modelo_id", as: "ServicesOrdersModels" });
    }
}

module.exports = Modelos;

// DeviceModel