import apiClient from '../api/api';

const getAllClients = async () => {
  try {
    const response = await apiClient('/client/all/', {
      method: 'GET',
    });

    return response; // Assuming the response contains an array of clients
  } catch (error) {
    console.error('Error fetching clients:', error);
    throw error;
  }
};

export default getAllClients;
