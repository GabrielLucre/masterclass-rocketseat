const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.hasMany(models.Addresses, { foreignKey: 'user_id', as: 'Addresses' });
        this.belongsToMany(models.Techs, { foreignKey: 'user_id', through: 'User_Techs', as: 'Techs' });
    }
}

module.exports = User;