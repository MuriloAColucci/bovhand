const { Model, DataTypes } = require('sequelize');

class Animal extends Model {
    static init(sequelize){
        super.init({
            register: DataTypes.STRING,
            nameanimal: DataTypes.STRING,
            race: DataTypes.STRING,
            gender: DataTypes.STRING,
            origin: DataTypes.STRING,
            birthday: DataTypes.DATE,
            price: DataTypes.DECIMAL,
            mother: DataTypes.STRING,
            father: DataTypes.STRING
        }, {
            sequelize
        })
    }

    static associate(models){
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
        this.hasMany(models.Sanitary, { foreignKey: 'animal_id', as: 'sanitary' });
    }

}

module.exports = Animal;