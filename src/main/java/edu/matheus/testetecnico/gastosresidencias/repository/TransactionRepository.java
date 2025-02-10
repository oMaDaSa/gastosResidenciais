package edu.matheus.testetecnico.gastosresidencias.repository;

import edu.matheus.testetecnico.gastosresidencias.domain.model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    @Query("SELECT t FROM Transaction t WHERE t.personId = :id")
    public List<Transaction> findAllByPerson(Long id);

    @Modifying
    @Transactional
    @Query("DELETE FROM Transaction t WHERE t.personId = :id")
    void deleteAllByPerson(Long id);
}
