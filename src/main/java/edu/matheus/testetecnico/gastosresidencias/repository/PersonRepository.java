package edu.matheus.testetecnico.gastosresidencias.repository;

import edu.matheus.testetecnico.gastosresidencias.domain.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {

}
