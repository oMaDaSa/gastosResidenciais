package edu.matheus.testetecnico.gastosresidencias.backend.controller;

import edu.matheus.testetecnico.gastosresidencias.backend.domain.model.Transaction;
import edu.matheus.testetecnico.gastosresidencias.backend.service.TransactionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/transaction")
public class TransactionController {
    private final TransactionService transactionService;

    public TransactionController(TransactionService transactionService){
        this.transactionService = transactionService;
    }

    @PostMapping()
    public ResponseEntity<Transaction> create(@RequestBody Transaction transaction){
        //Cria nova transação
        Transaction transactionCreated = transactionService.create(transaction);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("")
                .queryParam("id", transactionCreated.getId())
                .build()
                .toUri();
        return ResponseEntity.created(location).body(transactionCreated);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Transaction>> findAll(){
        //Get em todas as transações
        List<Transaction> transactions = transactionService.findAll();
        return ResponseEntity.ok(transactions);
    }

    @GetMapping("/person-id/{id}")
    public ResponseEntity<List<Transaction>> findAllByPerson(@PathVariable Long id){
        //Get em todas as transações da pessoa com id passado por parametro
        List<Transaction> transactions = transactionService.findAllByPerson(id);
        return ResponseEntity.ok(transactions);
    }
}
