import React, { useState }from 'react'
//import { createRecurrence } from '../services/RecurrenceService';
import { useNavigate } from 'react-router-dom';

const RecurrenceComponent = () => {
  
    //para o formulario
    const [personId, setPersonId] = useState('')
    const [recurrence, setRecurrence] = useState('')
    const [amount, setAmount] = useState('')
    const [type, setType] = useState('')
    const [desc, setDesc] = useState('')

    //hook para navegação
    const navigator = useNavigate();

    //para erros de validação
    const [errors, setErrors] = useState({
            personId: '',
            recurrence: '',
            amount: '',
            desc: '',
            type: ''
        })
    
    function saveTransaction(e){
        e.preventDefault(); //previnir a pagina de carregar para enviar os dados ao backend

        const recurrence = {personId, recurrence, amount, type, desc}
        console.log(transaction);

        if(validateForm()){ //checar form
            createRecurrence(recurrence).then((response) => {
                console.log(response.data);
                navigator('/persons'); //volta para pagina inicial
            })
        }
    
    }

    function validateForm(){
        let valid = true;

        const errorsCopy = {... errors}

        if(personId.trim()){
            const personIdNum = Number(personId)
            if(personIdNum < 0 || isNaN(personIdNum)){ //id negativo ou nao numerico
                errorsCopy.personId = 'Insira um id valido';
                valid = false;
            }else{ //sucesso
                errorsCopy.personId = '';
            }
        }else{ //nada inserido
            errorsCopy.personId = 'Insira um id';
            valid = false;
        }

        if(amount.trim()){
            const amountNum = Number(amount)
            if(amountNum < 0 || isNaN(amountNum)){ //quantia negativa ou nao numerica
                errorsCopy.amount = 'Insira uma quantia valida';
                valid = false;
            }else{//sucesso
                errorsCopy.amount = '';
            }
        }else{ //nada inserido
            errorsCopy.amount = 'Insira uma quantia';
            valid = false;
        }

        if(recurrence.trim()){//sucesso
            errorsCopy.recurrence = '';
        }else{//nada inserido
            errorsCopy.recurrence = 'Insira um tipo de recorrência';
            valid = false;
        }

        if(type.trim()){//sucesso
            errorsCopy.type = '';
        }else{//nada inserido
            errorsCopy.type = 'Insira um tipo';
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
                <h2 className = 'text-center'>Adicionar Recorrência</h2>
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Id da pessoa:</label>
                            <input 
                                //comentarios se aplicam ao demais inputs
                                type='text' 
                                placeholder='Inserir id'
                                name='id'
                                value={personId} 
                                className={`form-control ${ errors.personId ? 'is-invalid': ''}`} //se errors.personId retornar algo, usar classe is-invalid, se nao, nada
                                onChange={(e) => setPersonId(e.target.value)} //atualiza o dado inserido na transação a ser cadastrada
                            ></input>
                            { errors.personId && <div className='invalid-feedback'>{ errors.personId }</div>/*se houver erro, adiciona mensagem detalhando o erro*/}
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Recorrência:</label>
                            <select
                                className={`form-control ${ errors.type ? 'is-invalid': ''}`}
                                name = 'type'
                                value={type}
                                onChange={(e) => setRecurrence(e.target.value)}>
                                <option value="" disabled>Selecione</option>
                                <option value="MENSAL">Mensal</option>
                                <option value="SEMANAL">Despesa</option>
                                <option value="DIARIO">Diário</option>
            
                            </select>
                            { errors.amount && <div className='invalid-feedback'>{ errors.amount }</div>}
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Quantia:</label>
                            <input 
                                type='text' 
                                placeholder='Inserir quantia'
                                name='amount'
                                value={amount}
                                className={`form-control ${ errors.amount ? 'is-invalid': ''}`}
                                onChange={(e) => setAmount(e.target.value)}
                            ></input>
                            { errors.amount && <div className='invalid-feedback'>{ errors.amount }</div>}
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Descrição:</label>
                            <input 
                                type='text' 
                                placeholder='Inserir descrição'
                                name='desc'
                                value={desc}
                                className={`form-control ${ errors.desc ? 'is-invalid': ''}`}
                                onChange={(e) => setDesc(e.target.value)}
                            ></input>
                            { errors.desc && <div className='invalid-feedback'>{ errors.desc }</div>}
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Tipo:</label>
                            <select 
                                className={`form-control ${ errors.type ? 'is-invalid': ''}`}
                                name = 'type'
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                            >
                            <option value="" disabled>Selecione</option>
                            <option value="RECEITA">Receita</option>
                            <option value="DESPESA">Despesa</option>
                            </select>
                            { errors.type && <div className='invalid-feedback'>{ errors.type }</div>}
                        </div>
                        <button className='btn btn-success' onClick={saveTransaction}>Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RecurrenceComponent