import React, { useEffect, useState } from 'react';
import { deletePerson, listPersons } from '../services/PersonService';
import { useNavigate } from 'react-router-dom';

const ListPersonComponent = () => {

    const navigator = useNavigate();

    const [persons, setPersons] = useState([]);
    const [totals, setTotals] = useState({ //calcular os totais, iniciando com 0
        incomeTotal: 0,
        expenseTotal: 0,
        balance: 0      
    });

    useEffect(() => {
        getAllPersons();
    }, []);

    function getAllPersons(){
        listPersons().then((response) => {
            const data = response.data;
            setPersons(data);

            const calculatedTotals = data.reduce((acc, person) => { //somar aos totais cada receita, despesa e saldo de cada pessoa 
                acc.incomeTotal += person.incomeTotal; 
                acc.expenseTotal += person.expenseTotal; 
                acc.balance += person.balance;      
                return acc;
            }, { incomeTotal: 0, expenseTotal: 0, balance: 0 });

            setTotals(calculatedTotals);
        }).catch(error => {
            console.error(error);
        });
    }

    function addNewPerson(){
        navigator('add-person');
    }

    function addNewTransaction(){
        navigator('add-transaction');
    }

    function addNewRecurrence(){
        navigator('add-recurrence/');
    }

    function personTransactions(id){
        navigator('person-transactions/' + id);
    }

    function personRecurrences(id){
        navigator('person-recurrences/'+ id);
    }

    

    function removePerson(id){
        console.log(id);
        deletePerson(id).then((response) => {
            getAllPersons();
        }).catch(error => {
            console.error(error);
        })
    }

    return (
        <div className='container'>
            <h2 className='text-center'>Pessoas</h2>
            <div className='text-center'>
                <button className = "btn btn-primary mx-2 my-2" onClick={addNewPerson}> Adicionar Pessoa</button>
                <button className = "btn btn-primary mx-2 my-2" onClick={addNewTransaction}> Adicionar Transação</button>
                <button className = "btn btn-primary mx-2 my-2" onClick={addNewRecurrence}> Adicionar Recorrência</button>
            </div>
            
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Receita Total</th>
                        <th>Despesa Total</th>
                        <th>Saldo</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {persons.map(person => (
                        <tr key={person.id}>
                            <td>{person.id}</td>
                            <td>{person.name}</td>
                            <td>{person.age}</td>
                            <td>{person.incomeTotal}</td>
                            <td>{person.expenseTotal}</td>
                            <td>{person.balance}</td>
                            <td>
                                <button className='btn btn-info text-white w-50' onClick={() => personTransactions(person.id)}>Transações</button>
                                <button className='btn btn-warning text-white m-1' onClick={() => personRecurrences(person.id)}>Recorrências</button>
                                <button className='btn btn-danger  text-white' onClick={() => removePerson(person.id)}>Deletar</button>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="3">Totais</td>
                        <td>{totals.incomeTotal}</td>
                        <td>{totals.expenseTotal}</td> 
                        <td colSpan="2">{totals.balance}</td>      
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ListPersonComponent;