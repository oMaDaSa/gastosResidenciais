import React, { useEffect, useState }from 'react'
import { createPerson } from '../services/PersonService';
import { useNavigate } from 'react-router-dom';

const PersonComponent = () => {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    const [errors, setErrors] = useState({
        name: '',
        age: ''
    })

    const navigator = useNavigate();
    
    function savePerson(e){
        e.preventDefault();

        if(validateForm()){
            const person = {name, age}
            console.log(person)
    
            createPerson(person).then((response) => {
                console.log(response.data);
                navigator('/persons')
            })
        }
    }

    function validateForm(){
        let valid = true;

        const errorsCopy = {... errors}

        if(name.trim()){
            errorsCopy.name = '';
        }else{
            errorsCopy.name = 'Insira um nome';
            valid = false;
        }

        if(age.trim()){
            const ageNum = Number(age)
            if(ageNum < 0 || isNaN(ageNum)){
                errorsCopy.age = 'Insira uma idade valida';
                valid = false;
            }else{
                errorsCopy.age = '';
            }
        }else{
            errorsCopy.age = 'Insira uma idade';
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;
    }

  return (
    <div className='container'>
        <br></br>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <h2 className = 'text-center'>Adicionar Pessoa</h2>
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Nome:</label>
                            <input 
                                type='text' 
                                placeholder='Inserir nome'
                                name='nome'
                                value={name}
                                className={`form-control ${ errors.name ? 'is-invalid': ''}`}
                                onChange={(e) => setName(e.target.value)}
                                required
                            ></input>
                            { errors.name && <div className='invalid-feedback'>{ errors.name }</div>}
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Idade:</label>
                            <input 
                                type='number' 
                                min = '1'
                                placeholder='Inserir idade'
                                name='idade'
                                value={age}
                                className={`form-control ${ errors.age ? 'is-invalid': ''}`}
                                onChange={(e) => setAge(e.target.value)}
                            ></input>
                            { errors.age && <div className='invalid-feedback'>{ errors.age }</div>}
                        </div>

                        <button className='btn btn-success' onClick={savePerson}>Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PersonComponent