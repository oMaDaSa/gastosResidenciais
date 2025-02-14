import React, { useEffect, useState }from 'react'
import { createPerson } from '../services/PersonService';
import { useNavigate } from 'react-router-dom';

const PersonComponent = () => {
    //para o formulario 
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    const [errors, setErrors] = useState({ //para erros de validação
        name: '',
        age: ''
    })

    const navigator = useNavigate(); //hook para navegação 

    function savePerson(e){ 
        e.preventDefault(); //previnir a pagina de carregar para enviar os dados ao backend 
        
        if(validateForm()){ //checar form 
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

        if(name.trim()){ //sucesso 
            errorsCopy.name = '';
        }else{ //nada inserido
            errorsCopy.name = 'Insira um nome';
            valid = false;
        }

        if(age.trim()){
            const ageNum = Number(age)
            if(ageNum < 0 || isNaN(ageNum)){ //idade negativa ou nao numerica 
                errorsCopy.age = 'Insira uma idade valida';
                valid = false;
            }else{ //sucesso 
                errorsCopy.age = '';
            }
        }else{ //nada inserido 
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
                            <input  //comentarios se aplicam ao demais inputs
                                type='text' 
                                placeholder='Inserir nome'
                                name='nome'
                                value={name}
                                className={`form-control ${ errors.name ? 'is-invalid': ''}`}//se errors.name retornar algo, usar classe is-invalid, se nao, nada 
                                onChange={(e) => setName(e.target.value)} //atualiza o dado inserido na transação a ser cadastrada 
                                required
                            ></input>
                            { errors.name && <div className='invalid-feedback'>{ errors.name }</div>/*se houver erro, adiciona mensagem detalhando o erro*/}
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