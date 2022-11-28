const { Model, DataTypes } = require('sequelize');

class Machine extends Model {
    static init(sequelize) {
        super.init({
            machine: DataTypes.STRING,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.hasMany(models.Payment, { foreignKey: "machine_id", as: "Machine" });
    }
}

module.exports = Machine;