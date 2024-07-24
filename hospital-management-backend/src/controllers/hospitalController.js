const hospitalService = require('../services/hospitalService');

const createHospital = async (req, res) => {
    try {
        const hospital = await hospitalService.createHospital(req.body);
        res.status(201).send(hospital);
    } catch (error) {
        res.status(400).send(error);
    }
};

const getHospitalsByCity = async (req, res) => {
    try {
        const hospitals = await hospitalService.getHospitalsByCity(req.query.city);
        res.status(200).send(hospitals);
    } catch (error) {
        res.status(400).send(error);
    }
};

const deleteHospital = async (req, res) => {
    try {
        const result = await hospitalService.deleteHospital(req.query.id);
        if (!result) return res.status(404).send({ message: 'Hospital not found' });
        res.status(200).send({ message: 'Hospital deleted' });
    } catch (error) {
        res.status(400).send(error);
    }
};

const updateHospital = async (req, res) => {
    try {
        const hospital = await hospitalService.updateHospital(req.query.id, req.body);
        if (!hospital) return res.status(404).send({ message: 'Hospital not found' });
        res.status(200).send(hospital);
    } catch (error) {
        res.status(400).send(error);
    }
};

const addOrUpdateHospitalDetails = async (req, res) => {
    try {
        const hospital = await hospitalService.addOrUpdateHospitalDetails(req.query.id, req.body);
        res.status(200).send(hospital);
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = {
    createHospital,
    getHospitalsByCity,
    deleteHospital,
    updateHospital,
    addOrUpdateHospitalDetails,
};
