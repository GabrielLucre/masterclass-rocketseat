const User = require('../models/User.js');
const Techs = require('../models/Techs.js');

module.exports = {
    async index(req, res) {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: { association: 'Techs', through: { attributes: [] } }
        });

        return res.json(user.Techs);
    },

    async store(req, res) {
        const { user_id } = req.params;
        const { name } = req.body;

        const user = await User.findByPk(user_id);

        if (!user) {
            return res.status(400).json({ error: 'User not Found' });
        }

        const [tech] = await Techs.findOrCreate({
            where: { name }
        })

        await user.addTech(tech);

        return res.json(tech);
    },

    async delete(req, res) {
        const { user_id } = req.params;
        const { name } = req.body;

        const user = await User.findByPk(user_id);

        if (!user) {
            return res.status(400).json({ error: 'User not Found' });
        }

        const tech = await Techs.findOne({
            where: { name }
        })

        user.removeTech(tech);

        return res.json()
    }
};