const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');

class User extends Model {
    static init(sequelize){
        super.init({
            nameusers: DataTypes.STRING,
            farm: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            islogged: DataTypes.BOOLEAN,
        }, {
            sequelize,
            hooks: {
                beforeCreate: (user) => {
                    const salt = bcrypt.genSaltSync();
                    user.password = bcrypt.hashSync(user.password, salt);
                }
            }
        })
    }

    static associate(models){
        this.hasMany(models.Animal, { foreignKey: 'user_id', as: 'animal' });
    }
}

module.exports = User;