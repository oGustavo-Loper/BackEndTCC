const { Model, DataTypes } = require('sequelize');

class Payment extends Model {
    static init(sequelize) {
        super.init({
            // installments: DataTypes.STRING,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.belongsToMany(models.ServiceOrder, {
            through: 'ServiceOrder_PaymentMethods',
            as: 'services_orders',
            foreignKey: 'payment_id'
        })
    }
}

module.exports = Payment;