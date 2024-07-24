import axios from 'axios';

// Example function to fetch hospitals by city
const fetchHospitalsByCity = async (city) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/v1/hospitals?city=${city}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching hospitals:', error);
        return [];
    }
};

export { fetchHospitalsByCity };
