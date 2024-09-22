import axios from 'axios';

const api = axios.create({
  baseURL: `{process.env.NEXT_PUBLIC_BACKEND_URL}/api/`,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
