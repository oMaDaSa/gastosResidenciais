import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/recurrence';

//get que lista todas as transações
export const listRecurrences  = () => axios.get(REST_API_BASE_URL + '/all');

//get que lista todas as transações de uma pessoa passado um id
export const listPersonRecurrences = (personId) => axios.get(REST_API_BASE_URL + '/person-id/' + personId);

//post que cria uma transação
export const createRecurrence = (recurrence) => axios.post(REST_API_BASE_URL,recurrence);