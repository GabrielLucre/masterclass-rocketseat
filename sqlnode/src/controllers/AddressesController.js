const User = require('../models/User.js');
const Addresses = require('../models/Addresses.js');

module.exports = {
    async index(req, res) {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: { association: 'Addresses' }
        });

        return res.json(user);
    },

    async store(req, res) {
        const { user_id } = req.params;
        const { zipcode, street, number } = req.body;

        const user = await User.findByPk(user_id);

        if (!user_id) {
            return res.status(400).json({ error: 'User not Found' });
        }

        const addresses = await Addresses.create({
            zipcode,
            street,
            number,
            user_id,
        });

        return res.json(addresses);
    }
};