import React, { useEffect, useState }from 'react'
import { createTransaction } from '../services/TransactionService';
import { useNavigate } from 'react-router-dom';

const TransactionComponent = () => {
  
    const [personId, setPersonId] = useState('')
    const [amount, setAmount] = useState('')
    const [type, setType] = useState('')
    const [desc, setDesc] = useState('')

    const navigator = useNavigate();

    const [errors, setErrors] = useState({
            personId: '',
            amount: '',
            desc: '',
            type: ''
        })
    
    function saveTransaction(e){
        e.preventDefault();

        const transaction = {personId, amount, type, desc}
        console.log(transaction);

        if(validateForm()){
            createTransaction(transaction).then((response) => {
                console.log(response.data);
                navigator('/persons');
            })
        }
    
    }

    function validateForm(){
        let valid = true;

        const errorsCopy = {... errors}

        if(personId.trim()){
            const personIdNum = Number(personId)
            if(personIdNum < 0 || isNaN(personIdNum)){
                errorsCopy.personId = 'Insira um id valido';
                valid = false;
            }else{
                errorsCopy.personId = '';
            }
        }else{
            errorsCopy.personId = 'Insira um id';
            valid = false;
        }

        if(amount.trim()){
            const amountNum = Number(amount)
            if(amountNum < 0 || isNaN(amountNum)){
                errorsCopy.amount = 'Insira uma quantia valida';
                valid = false;
            }else{
                errorsCopy.amount = '';
            }
        }else{
            errorsCopy.amount = 'Insira uma quantia';
            valid = false;
        }

        if(type.trim()){
            errorsCopy.type = '';
        }else{
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
                <h2 className = 'text-center'>Adicionar Transação</h2>
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Id da pessoa:</label>
                            <input 
                                type='text' 
                                placeholder='Inserir id'
                                name='id'
                                value={personId} 
                                className={`form-control ${ errors.personId ? 'is-invalid': ''}`}
                                onChange={(e) => setPersonId(e.target.value)}
                            ></input>
                            { errors.personId && <div className='invalid-feedback'>{ errors.personId }</div>}
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

export default TransactionComponent