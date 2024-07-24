import React, { useState } from 'react';
import './App.css';
import HospitalForm from './assets/components/HospitalForm';
import HospitalsList from './assets/components/HospitalsList';
import HospitalDetails from './assets/components/HospitalDetails';
import EditHospitalForm from './assets/components/EditHospitalForm';

const App = () => {
  const [hospitals, setHospitals] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const addHospital = (hospital) => {
    setHospitals([...hospitals, hospital]);
  };

  const updateHospital = (updatedHospital) => {
    setHospitals(hospitals.map(hospital => hospital.name === updatedHospital.name ? updatedHospital : hospital));
    setSelectedHospital(null);
    setEditMode(false);
  };

  const deleteHospital = (hospitalName) => {
    setHospitals(hospitals.filter(hospital => hospital.name !== hospitalName));
    setSelectedHospital(null);
    setEditMode(false);
  };

  const handleSelectHospital = (hospital) => {
    setSelectedHospital(hospital);
    setEditMode(false);
  };

  const handleEditHospital = (hospital) => {
    setSelectedHospital(hospital);
    setEditMode(true);
  };

  return (
    <div className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 min-h-screen flex flex-col items-center py-6">
      <h1 className="text-3xl font-bold text-center text-white mb-8">Hospital Management System</h1>
      <div className="w-full max-w-4xl">
        <HospitalForm addHospital={addHospital} />
        <HospitalsList
          hospitals={hospitals}
          selectHospital={handleSelectHospital}
          editHospital={handleEditHospital}
          deleteHospital={deleteHospital}
        />
        {selectedHospital && !editMode && (
          <HospitalDetails hospital={selectedHospital} />
        )}
        {selectedHospital && editMode && (
          <EditHospitalForm
            hospital={selectedHospital}
            updateHospital={updateHospital}
          />
        )}
      </div>
    </div>
  );
};

export default App;
