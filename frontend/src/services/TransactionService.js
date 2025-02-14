import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/transaction';

//get que lista todas as transações
export const listTransactions = () => axios.get(REST_API_BASE_URL + '/all');

//get que lista todas as transações de uma pessoa passado um id
export const listPersonTransactions = (personId) => axios.get(REST_API_BASE_URL + '/person-id/' + personId);

//post que cria uma transação
export const createTransaction = (transaction) => axios.post(REST_API_BASE_URL,transaction);