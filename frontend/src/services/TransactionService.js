import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/transaction';

export const listTransactions = () => axios.get(REST_API_BASE_URL + '/all');

export const createTransaction = (transaction) => axios.post(REST_API_BASE_URL,transaction);