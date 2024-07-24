import React from 'react';

const HospitalDetails = ({ hospital }) => {
    if (!hospital) return null; // Add a null check to prevent rendering if hospital is null or undefined.

    return (
        <div className="max-w-2xl mx-auto mt-10 p-5 border rounded-lg shadow-lg">
            <img src={hospital.imageUrl} alt={hospital.name} className="w-full h-64 object-cover rounded-md mb-4" />
            <h2 className="text-3xl font-bold mb-4">{hospital.name}</h2>
            <p className="text-gray-600 mb-2">City: {hospital.city}</p>
            <p className="text-gray-600 mb-2">Rating: {hospital.rating}</p>
            <p className="text-gray-600 mb-2">Specialities: {hospital.specialities && hospital.specialities.join(', ')}</p>
            <p className="text-gray-600 mb-2">Description: {hospital.description}</p>
            <p className="text-gray-600 mb-2">Number of Doctors: {hospital.numberOfDoctors}</p>
            <p className="text-gray-600 mb-2">Number of Departments: {hospital.numberOfDepartments}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                {hospital.images && hospital.images.map((img, index) => (
                    <img key={index} src={img} alt={`Hospital ${index}`} className="w-full h-32 object-cover rounded-md" />
                ))}
            </div>
        </div>
    );
};

export default HospitalDetails;
