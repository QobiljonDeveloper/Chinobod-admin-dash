const apiUrl = 'http://164.92.99.180:8001';

const apiClient = async (endpoint, options = {}) => {
  const url = `${apiUrl}${endpoint}`;
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const fetchOptions = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers
    }
  };

  try {
    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
      const errorDetails = await response.json();
      throw new Error(`Error: ${response.status} ${response.statusText}, Details: ${JSON.stringify(errorDetails)}`);
    }

    return response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export default apiClient;
