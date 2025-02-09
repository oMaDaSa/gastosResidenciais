package edu.matheus.testetecnico.gastosresidencias.service.imp;

import edu.matheus.testetecnico.gastosresidencias.domain.model.Person;
import edu.matheus.testetecnico.gastosresidencias.repository.PersonRepository;
import edu.matheus.testetecnico.gastosresidencias.service.PersonService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class PersonServiceImp implements PersonService {

    private final PersonRepository personRepository;

    public PersonServiceImp(PersonRepository personRepository){
        this.personRepository = personRepository;
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
}
