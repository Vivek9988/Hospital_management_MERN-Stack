const Hospital = require('../models/Hospital');

const createHospital = async (data) => {
    const hospital = new Hospital(data);
    return await hospital.save();
};

const getHospitalsByCity = async (city) => {
    return await Hospital.find({ city });
};

const deleteHospital = async (id) => {
    return await Hospital.findByIdAndDelete(id);
};

const updateHospital = async (id, data) => {
    return await Hospital.findByIdAndUpdate(id, data, { new: true });
};

const addOrUpdateHospitalDetails = async (id, details) => {
    const hospital = await Hospital.findById(id);
    if (hospital) {
        Object.assign(hospital, details);
        return await hospital.save();
    } else {
        const newHospital = new Hospital(details);
        return await newHospital.save();
    }
};

module.exports = {
    createHospital,
    getHospitalsByCity,
    deleteHospital,
    updateHospital,
    addOrUpdateHospitalDetails,
};
