import React, { useEffect, useState } from 'react';
import { listPerson } from '../services/PersonService';
import { listPersonTransactions } from '../services/TransactionService';
import { useNavigate, useParams } from 'react-router-dom';

const ListPersonTransactionsComponent = () => {

    const navigator = useNavigate();
    
    const [person, setPerson] = useState([]);
    const [transactions, setTransactions] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getPerson();
        getTransactions();
    }, []);

    function getPerson(){
        listPerson(id).then((response) => {
            const data = response.data;
            setPerson(data);

        }).catch(error => {
            console.error(error);
        });
    }

    function getTransactions(){
        listPersonTransactions(id).then((response) => {
            const data = response.data;
            setTransactions(data);

        }).catch(error => {
            console.error(error);
        });
    }

    return (
        <div className='container'>
            <h2 className='text-center'>{person.name}</h2>
            <p className='text-center'>ID: {person.id}</p>
            
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Valor</th>
                        <th>Descrição</th>
                        <th>Tipo</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.id}</td>
                            <td>{transaction.amount}</td>
                            <td>{transaction.desc}</td>
                            <td>{transaction.type}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListPersonTransactionsComponent;