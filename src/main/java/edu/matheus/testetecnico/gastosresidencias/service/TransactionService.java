package edu.matheus.testetecnico.gastosresidencias.service;

import edu.matheus.testetecnico.gastosresidencias.domain.model.Transaction;

import java.util.List;

public interface TransactionService {
    Transaction create(Transaction transaction);
    List<Transaction> findAll();
    List<Transaction> findAllByPerson(Long id);

}
