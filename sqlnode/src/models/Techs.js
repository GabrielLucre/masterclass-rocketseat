const { Model, DataTypes } = require('sequelize');

class Techs extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'Techs'
        })
    }

    static associate(models) {
        this.belongsToMany(models.User, { foreignKey: 'tech_id', through: 'User_Techs', as: 'Users' });
    }
}

module.exports = Techs;