import React, { useEffect, useState } from 'react';
import { listPersons } from '../services/PersonService';

const ListPersonComponent = () => {
    const [people, setPerson] = useState([]);
    const [totals, setTotals] = useState({
        incomeTotal: 0,
        expenseTotal: 0, // Corrected property name
        balance: 0      // Corrected property name
    });

    useEffect(() => {
        listPersons().then((response) => {
            const data = response.data;
            setPerson(data);

            const calculatedTotals = data.reduce((acc, person) => {
                acc.incomeTotal += person.incomeTotal; 
                acc.expenseTotal += person.expenseTotal; 
                acc.balance += person.balance;      
                return acc;
            }, { incomeTotal: 0, expenseTotal: 0, balance: 0 });

            setTotals(calculatedTotals);
        }).catch(error => {
            console.error(error);
        });
    }, []);

    return (
        <div className='container'>
            <h2 className='text-center'>Pessoas</h2>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Receita Total</th>
                        <th>Despesa Total</th>
                        <th>Saldo</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map(person => (
                        <tr key={person.id}>
                            <td>{person.id}</td>
                            <td>{person.name}</td>
                            <td>{person.age}</td>
                            <td>{person.incomeTotal}</td>
                            <td>{person.expenseTotal}</td>
                            <td>{person.balance}</td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="3">Totais</td>
                        <td>{totals.incomeTotal}</td>
                        <td>{totals.expenseTotal}</td> 
                        <td>{totals.balance}</td>      
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ListPersonComponent;