package edu.matheus.testetecnico.gastosresidencias.backend.service;

import edu.matheus.testetecnico.gastosresidencias.backend.domain.model.Person;

import java.util.List;

public interface PersonService {
    Person findById(Long id);
    Person create(Person person);
    List<Person> findAll();

    void deleteById(Long id);
}
