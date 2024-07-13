import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api',
});

export const login = (username, password, role) => {
    return api.post('/auth/login', { username, password, role });
};

export const getAssignments = (role, classId, token) => {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`; 
    return api.get(`/assignments?role=${role}&classId=${classId}`);
};

export const createAssignment = (assignment, token) => {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return api.post('/assignments', assignment);
};
