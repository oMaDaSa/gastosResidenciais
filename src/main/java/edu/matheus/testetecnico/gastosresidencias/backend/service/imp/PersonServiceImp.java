package edu.matheus.testetecnico.gastosresidencias.backend.service.imp;

import edu.matheus.testetecnico.gastosresidencias.backend.repository.TransactionRepository;
import edu.matheus.testetecnico.gastosresidencias.backend.service.PersonService;
import edu.matheus.testetecnico.gastosresidencias.backend.domain.model.Person;
import edu.matheus.testetecnico.gastosresidencias.backend.repository.PersonRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class PersonServiceImp implements PersonService {

    private final PersonRepository personRepository;
    private final TransactionRepository transactionRepository;

    public PersonServiceImp(PersonRepository personRepository, TransactionRepository transactionRepository){
        this.personRepository = personRepository;
        this.transactionRepository = transactionRepository;
    }

    @Override
    public Person findById(Long id) {
        return personRepository.findById(id).orElseThrow(NoSuchElementException::new);
    }

    @Override
    public Person create(Person person) {
        return personRepository.save(person);
    }

    @Override
    public List<Person> findAll() {
        return personRepository.findAll();
    }

    @Override
    public void deleteById(Long id){
        findById(id); //Se não encontrar, joga excessão NoSuchElement e cód 500
        personRepository.deleteById(id); //Deleta a pessoa
        transactionRepository.deleteAllByPerson(id); //Deleta as transações que a pessoa realizou
    }
}
