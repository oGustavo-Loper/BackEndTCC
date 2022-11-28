const { Model, DataTypes } = require('sequelize');

class ServiceOrder_PaymentMethod extends Model {
    static init(sequelize) {
        super.init({
            installments: DataTypes.STRING,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.belongsTo(models.Payment, { foreignKey: "payment_id", as: "pagamento" });
        this.belongsTo(models.ServiceOrder, { foreignKey: "ServiceOrder_id", as: "ordemServico" });
    }
}
module.exports = ServiceOrder_PaymentMethod;