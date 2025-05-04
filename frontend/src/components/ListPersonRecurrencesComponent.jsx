import React, { useEffect, useState } from 'react';
import { listPerson } from '../services/PersonService';
import { listPersonRecurrences} from '../services/RecurrenceService';
import { useNavigate, useParams } from 'react-router-dom';

const ListPersonRecurrencesComponent = () => {

    const navigator = useNavigate();
    
    const [person, setPerson] = useState([]);
    const [recurrences, setRecurrences] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getPerson();
        getRecurrences();
    }, []);

    function getPerson(){
        listPerson(id).then((response) => {
            const data = response.data;
            setPerson(data);

        }).catch(error => {
            console.error(error);
        });
    }

    function getRecurrences(){
        listPersonRecurrences(id).then((response) => {
            const data = response.data;
            setRecurrences(data);

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
                        <th>Recorrência</th>
                        <th>Tipo</th>
                    </tr>
                </thead>
                <tbody>
                    {recurrences.map(recurrence => (
                        <tr key={recurrence.id}>
                            <td>{recurrence.id}</td>
                            <td>{recurrence.amount}</td>
                            <td>{recurrence.desc}</td>
                            <td>{recurrence.type}</td>
                            <td>{recurrence.recurrenceType}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListPersonRecurrencesComponent;