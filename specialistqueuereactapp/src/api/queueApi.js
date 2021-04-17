import HTTP from './'

export const addClientToQueue = (client) => HTTP.post('/queues', client);