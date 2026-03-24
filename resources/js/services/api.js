import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
});

// إضافة "مراقب" (Interceptor) يرفق التوكن تلقائياً
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token'); // تأكد أن الاسم مطابق لما تخزنه عند الدخول
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default api;