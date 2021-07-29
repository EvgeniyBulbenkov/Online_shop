const {Device, DeviceInfo} = require('../models/models');
const ApiError = require('../error/apiError');
const uuid = require('uuid');
const path = require('path');

class DeviceController {
    async addDevice(req, res, next) {
        try {
            let {name, price, brandId, typeId, info} = req.body;
            const {img} = req.files;
            let fileName = uuid.v4() + '.jpg';

            const device = await Device.create({name, price, brandId, typeId, info, img: fileName});

            if (info) {
               info = JSON.parse(info);
               info.forEach(i =>
               DeviceInfo.create({
                   title: i.title,
                   description: i.description,
                   deviceId: i.deviceId
               }))
            }

            await img.mv(path.resolve(__dirname, '..', 'static', fileName));

            return res.json(device);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAllDevices(req, res) {
        let {brandId, typeId, limit, page} = req.query;
        page = page || 1;
        limit = limit || 10;
        let offset = page * limit - limit;
        let devices;
        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({limit, offset});
        } else if (brandId && !typeId) {
            devices = await Device.findAndCountAll({where: {brandId}, limit, offset});
        } else if (!brandId && typeId) {
            devices = await Device.findAndCountAll({where: {typeId}, limit, offset});
        } else if (brandId && typeId) {
            devices = await Device.findAndCountAll({where: {brandId, typeId}, limit, offset});
        }

        return res.json(devices);

    }

    async getOneDevice(req, res, next) {
        const {id} = req.params;
        const device = await Device.findOne(
            {
                where: {id},
                include: [{model: DeviceInfo, as: 'info'}]
            }
        );

        if (!device) {
            next(ApiError.notFound(`Device with ID=${id} wasn't found`));
        } else return res.json(device);

    }

    async deleteDevice(req, res) {

    }

}

module.exports = new DeviceController();