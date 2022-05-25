const { Model, DataTypes } = require('sequelize');

class Brand extends Model {
    static init(sequelize) {
        super.init({
            brand: DataTypes.STRING,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.hasMany(models.ServiceOrder, { foreignKey: "brand_id", as: "ServicesOrdersBrands" });
    }
}

module.exports = Brand;