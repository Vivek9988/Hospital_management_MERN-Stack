import React, { useState, useEffect } from 'react';

const EditHospitalForm = ({ hospital, updateHospital }) => {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [specialities, setSpecialities] = useState([]);
    const [rating, setRating] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState([]);
    const [numberOfDoctors, setNumberOfDoctors] = useState('');
    const [numberOfDepartments, setNumberOfDepartments] = useState('');

    const specialitiesOptions = ['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics'];

    useEffect(() => {
        if (hospital) {
            setName(hospital.name || '');
            setCity(hospital.city || '');
            setImageUrl(hospital.imageUrl || '');
            setSpecialities(hospital.specialities || []);
            setRating(hospital.rating || '');
            setDescription(hospital.description || '');
            setImages(hospital.images || []);
            setNumberOfDoctors(hospital.numberOfDoctors || '');
            setNumberOfDepartments(hospital.numberOfDepartments || '');
        }
    }, [hospital]);

    const handleSpecialitiesChange = (e) => {
        const value = Array.from(e.target.selectedOptions, option => option.value);
        setSpecialities(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedHospital = {
            name,
            city,
            imageUrl,
            specialities,
            rating,
            description,
            images,
            numberOfDoctors,
            numberOfDepartments
        };
        updateHospital(updatedHospital);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Edit Hospital</h2>
            <div className="mb-4">
                <label className="block mb-2">Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border rounded" required />
            </div>
            <div className="mb-4">
                <label className="block mb-2">City</label>
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} className="w-full p-2 border rounded" required />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Image URL</label>
                <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} className="w-full p-2 border rounded" required />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Specialities</label>
                <select multiple value={specialities} onChange={handleSpecialitiesChange} className="w-full p-2 border rounded">
                    {specialitiesOptions.map((speciality, index) => (
                        <option key={index} value={speciality}>{speciality}</option>
                    ))}
                </select>
            </div>
            <div className="mb-4">
                <label className="block mb-2">Rating</label>
                <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} className="w-full p-2 border rounded" required min="1" max="5" />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Description</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-2 border rounded"></textarea>
            </div>
            <div className="mb-4">
                <label className="block mb-2">Images (comma-separated URLs)</label>
                <input type="text" value={images.join(', ')} onChange={(e) => setImages(e.target.value.split(', '))} className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Number of Doctors</label>
                <input type="number" value={numberOfDoctors} onChange={(e) => setNumberOfDoctors(e.target.value)} className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Number of Departments</label>
                <input type="number" value={numberOfDepartments} onChange={(e) => setNumberOfDepartments(e.target.value)} className="w-full p-2 border rounded" />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Update Hospital</button>
        </form>
    );
};

export default EditHospitalForm;
