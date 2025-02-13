package edu.matheus.testetecnico.gastosresidencias.backend.repository;

import edu.matheus.testetecnico.gastosresidencias.backend.domain.model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    //Encontrar todas as transações de uma determinada pessoa (id passado)
    @Query("SELECT t FROM Transaction t WHERE t.personId = :id")
    public List<Transaction> findAllByPerson(Long id);

    //operação de deleção de transação. Modifica a tabela e transactional para garantir ACID
    //Deletar todas as transações da pessoa deleta
    @Modifying
    @Transactional
    @Query("DELETE FROM Transaction t WHERE t.personId = :id")
    void deleteAllByPerson(Long id);
}
