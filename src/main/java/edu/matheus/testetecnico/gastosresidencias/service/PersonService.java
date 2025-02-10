package edu.matheus.testetecnico.gastosresidencias.service;

import edu.matheus.testetecnico.gastosresidencias.domain.model.Person;
import org.springframework.stereotype.Service;

import java.util.List;

public interface PersonService {
    Person findById(Long id);
    Person create(Person person);
    List<Person> findAll();

    void deleteById(Long id);
}
