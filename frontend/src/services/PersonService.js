import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/person';

//get que lista todas as pessoas
export const listPersons = () => axios.get(REST_API_BASE_URL + '/all');

//get que lista uma pessoa passado um id
export const listPerson = (personId) => axios.get(REST_API_BASE_URL + '/' + personId);

//post que cria pessoa
export const createPerson = (person) => axios.post(REST_API_BASE_URL,person);

//delete que deleta pessoa passado um id
export const deletePerson = (personId) => axios.delete(REST_API_BASE_URL + '/' + personId);