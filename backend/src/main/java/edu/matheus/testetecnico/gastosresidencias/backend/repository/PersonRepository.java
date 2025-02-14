package edu.matheus.testetecnico.gastosresidencias.backend.repository;

import edu.matheus.testetecnico.gastosresidencias.backend.domain.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {
    //operação de deleção de pessoa. Modifica a tabela e transactional para garantir ACID
    @Modifying
    @Transactional
    @Query("DELETE FROM Person p WHERE p.id = :id")
    void deleteById(Long id);
}
