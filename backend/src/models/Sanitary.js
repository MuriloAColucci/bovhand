const { Model, DataTypes } = require('sequelize');

class Sanitary extends Model {
    static init(sequelize){
        super.init({
            date: DataTypes.DATE,
            namesanitary: DataTypes.STRING,
            dose: DataTypes.STRING,
            price: DataTypes.DECIMAL,
        }, {
            sequelize
        })
    }

    static associate(models){
        this.belongsTo(models.Animal, { foreignKey: 'animal_id', as: 'animal' });
    }
}

module.exports = Sanitary;