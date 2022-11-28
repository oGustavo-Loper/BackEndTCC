const { Model, DataTypes } = require('sequelize');

class PaymentMethod extends Model {
    static init(sequelize) {
        super.init({
            PaymentMethod: DataTypes.STRING,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.hasMany(models.Payment, { foreignKey: "PaymentMethod_id", as: "paymentMethod" });

        // this.belongsToMany(models.ServiceOrder, {
        //     through: 'ServiceOrders_PaymentMethods',
        //     as: 'services_orders',
        //     foreignKey: 'PaymentMethod_id'
        // })
    }
}

module.exports = PaymentMethod;