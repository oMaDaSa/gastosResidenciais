package edu.matheus.testetecnico.gastosresidencias.service.imp;

import edu.matheus.testetecnico.gastosresidencias.domain.model.Person;
import edu.matheus.testetecnico.gastosresidencias.domain.model.Transaction;
import edu.matheus.testetecnico.gastosresidencias.repository.PersonRepository;
import edu.matheus.testetecnico.gastosresidencias.repository.TransactionRepository;
import edu.matheus.testetecnico.gastosresidencias.service.TransactionService;
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
        Person person = personRepository.findById(transaction.getPersonId()).orElseThrow(NoSuchElementException::new);
        if(person.getAge() < 18 && transaction.getType().equalsIgnoreCase("income")){
            throw new IllegalArgumentException("Underage person cannot have an income");
        }
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
