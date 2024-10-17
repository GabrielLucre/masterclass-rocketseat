const { Op } = require('sequelize');
const User = require('../models/User.js');

module.exports = {
    async show(req, res) {
        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.iLike]: '%@rocketseat.com.br'
                }
            },
            include: [
                {
                    association: 'Addresses',
                    where: {
                        street: 'Rua Guilherme Gembala'
                    }
                },
                {
                    association: 'Techs',
                    required: false,
                    where: {
                        name: {
                            [Op.iLike]: '%React%'
                        }
                    }
                }
            ]
        });

        return res.json(users);
    }
};