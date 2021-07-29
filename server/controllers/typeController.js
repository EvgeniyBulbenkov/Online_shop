const {Type} = require('../models/models');
const ApiError = require('../error/apiError');

class TypeController {
    async addType(req, res) {
        const {name} = req.body;
        const type = await Type.create({name});
        return res.json(type);
    }

    async getAllTypes(req, res) {
        const types = await Type.findAll();
        return res.json(types);
    }

    async deleteType(req, res) {

    }

}

module.exports = new TypeController();