import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000/auth';

// Sign Up API
export const register = async (data) => {
  const sanitizedData = {
    email: data.email.trim(),
    name: data.name.trim(),
    password: data.password,
  };
  const response = await axios.post(`${API_BASE_URL}/register`, sanitizedData);
  return response.data;
};

// Login API
export const login = async (data) => {
  const sanitizedData = {
    email: data.email.trim(),
    password: data.password,
  };
  const response = await axios.post(`${API_BASE_URL}/login`, sanitizedData);
  return response.data;
};
