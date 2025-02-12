package edu.matheus.testetecnico.gastosresidencias.backend.service;

import edu.matheus.testetecnico.gastosresidencias.backend.domain.model.Transaction;

import java.util.List;

public interface TransactionService {
    Transaction create(Transaction transaction);
    List<Transaction> findAll();
    List<Transaction> findAllByPerson(Long id);

}
