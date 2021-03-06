import HTTP from './'

export const fetchSpecialists = () => HTTP.get('/specialists');

export const fetchUsers = () => HTTP.get('/users');

export const signup = (user) => HTTP.post('/signup', user);

export const updateUser = (id) => HTTP.post(`/users/${id}`);

export const deleteUser = (id) => HTTP.delete(`/users/${id}`);

export const getUserById = (id) => HTTP.get(`/users/${id}`);