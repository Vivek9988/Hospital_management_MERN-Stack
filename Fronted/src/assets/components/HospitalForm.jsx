import React, { useState } from 'react';

const HospitalForm = ({ addHospital }) => {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [specialities, setSpecialities] = useState([]);
    const [rating, setRating] = useState('');
    const [description, setDescription] = useState('');
    const [numberOfDoctors, setNumberOfDoctors] = useState('');
    const [numberOfDepartments, setNumberOfDepartments] = useState('');

    const specialitiesOptions = ['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics'];

    const handleSpecialitiesChange = (e) => {
        const value = Array.from(e.target.selectedOptions, option => option.value);
        setSpecialities(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newHospital = {
            name,
            city,
            imageUrl,
            specialities,
            rating,
            description,
            numberOfDoctors,
            numberOfDepartments
        };
        addHospital(newHospital);
        setName('');
        setCity('');
        setImageUrl('');
        setSpecialities([]);
        setRating('');
        setDescription('');
        setNumberOfDoctors('');
        setNumberOfDepartments('');
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto mt-10 p-8 border border-gray-300 rounded-lg shadow-lg bg-white">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Add New Hospital</h2>
            <div className="mb-5">
                <label className="block mb-2 text-lg font-medium text-gray-700">Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-lg font-medium text-gray-700">City</label>
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-lg font-medium text-gray-700">Image URL</label>
                <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-lg font-medium text-gray-700">Specialities</label>
                <select multiple value={specialities} onChange={handleSpecialitiesChange} className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                    {specialitiesOptions.map((speciality, index) => (
                        <option key={index} value={speciality}>{speciality}</option>
                    ))}
                </select>
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-lg font-medium text-gray-700">Rating</label>
                <input type="" value={rating} onChange={(e) => setRating(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"  />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-lg font-medium text-gray-700">Description</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-lg font-medium text-gray-700">Number of Doctors</label>
                <input type="number" value={numberOfDoctors} onChange={(e) => setNumberOfDoctors(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-lg font-medium text-gray-700">Number of Departments</label>
                <input type="number" value={numberOfDepartments} onChange={(e) => setNumberOfDepartments(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Add Hospital</button>
        </form>
    );
};

export default HospitalForm;
