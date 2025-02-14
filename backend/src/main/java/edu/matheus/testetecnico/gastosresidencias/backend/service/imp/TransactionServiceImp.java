package edu.matheus.testetecnico.gastosresidencias.backend.service.imp;

import edu.matheus.testetecnico.gastosresidencias.backend.repository.TransactionRepository;
import edu.matheus.testetecnico.gastosresidencias.backend.domain.model.Person;
import edu.matheus.testetecnico.gastosresidencias.backend.domain.model.Transaction;
import edu.matheus.testetecnico.gastosresidencias.backend.repository.PersonRepository;
import edu.matheus.testetecnico.gastosresidencias.backend.service.TransactionService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class TransactionServiceImp implements TransactionService {
    private final TransactionRepository transactionRepository;

    private final PersonRepository personRepository;

    public TransactionServiceImp(TransactionRepository transactionRepository, PersonRepository personRepository){
        this.transactionRepository = transactionRepository;
        this.personRepository = personRepository;
    }

    @Override
    public Transaction create(Transaction transaction) {
        //Encontrar a pessoa a qual a transação se aplica, para alterar seus totais
        Person person = personRepository.findById(transaction.getPersonId()).orElseThrow(NoSuchElementException::new);
        if(!person.isAdult() && transaction.isIncome()){
            //Apenas adultos podem ter receita
            throw new IllegalArgumentException("Underage person cannot have an income");
        }
        double amount = transaction.getAmount();

        //registrar a transação nos totais da pessoa
        if(transaction.isIncome()){
            person.registerIncome(amount);
        }else if(transaction.isExpense()){
            person.registerExpense(amount);
        }
        personRepository.save(person);
        return transactionRepository.save(transaction);
    }

    @Override
    public List<Transaction> findAll() {
        return transactionRepository.findAll();
    }

    @Override
    public List<Transaction> findAllByPerson(Long id) {
        return transactionRepository.findAllByPerson(id);
    }

}
