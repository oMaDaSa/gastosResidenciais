package edu.matheus.testetecnico.gastosresidencias.backend.repository;

import edu.matheus.testetecnico.gastosresidencias.backend.domain.model.Recurrence;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface RecurrenceRepository extends JpaRepository<Recurrence, Long> {
    //Encontrar todas as transações de uma determinada pessoa (id passado)
    @Query("SELECT r FROM Recurrence r WHERE r.personId = :id")
    public List<Recurrence> findAllByPerson(Long id);

    //operação de deleção de recorrência. Modifica a tabela e transactional para garantir ACID
    //Deletar todas as transações da pessoa deleta
    @Modifying
    @Transactional
    @Query("DELETE FROM Recurrence r WHERE r.personId = :id")
    void deleteAllByPerson(Long id);
}
