import React, { useState } from 'react';

const HospitalsList = ({ hospitals, selectHospital, editHospital, deleteHospital }) => {
  const [selectedCity, setSelectedCity] = useState('');

  const filteredHospitals = selectedCity ? hospitals.filter(hospital => hospital.city === selectedCity) : hospitals;

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Hospitals</h2>
      <div className="mb-4">
        <label className="block mb-2">Filter by City</label>
        <input type="text" value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} className="w-full p-2 border rounded" placeholder="Enter city name" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredHospitals.map(hospital => (
          <div key={hospital.name} className="p-4 border rounded-lg shadow-lg">
            <img src={hospital.imageUrl} alt={hospital.name} className="w-full h-32 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold">{hospital.name}</h3>
            <p className="text-gray-600">{hospital.city}</p>
            <p className="text-gray-600">Rating: {hospital.rating}</p>
            <button onClick={() => selectHospital(hospital)} className="mt-2 bg-blue-500 text-white p-2 rounded mr-2">View Details</button>
            <button onClick={() => editHospital(hospital)} className="mt-2 bg-yellow-500 text-white p-2 rounded mr-2">Edit</button>
            <button onClick={() => deleteHospital(hospital.name)} className="mt-2 bg-red-500 text-white p-2 rounded">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HospitalsList;
