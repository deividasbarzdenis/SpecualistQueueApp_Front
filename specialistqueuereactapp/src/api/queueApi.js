import HTTP from './'

export const addClientToQueue = (client) => HTTP.post('/queues', client);

export const fetchQueue = (page) => HTTP.get(`/queues/clients/${page}`);

export const fetchClients = () => HTTP.get('/queues');