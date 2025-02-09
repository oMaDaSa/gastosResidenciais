package edu.matheus.testetecnico.gastosresidencias.controller;

import edu.matheus.testetecnico.gastosresidencias.domain.model.Transaction;
import edu.matheus.testetecnico.gastosresidencias.service.TransactionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/transaction")
public class TransactionController {
    private final TransactionService transactionService;

    public TransactionController(TransactionService transactionService){
        this.transactionService = transactionService;
    }

    @PostMapping()
    public ResponseEntity<Transaction> create(@RequestBody Transaction transaction){
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
        List<Transaction> transactions = transactionService.findAll();
        return ResponseEntity.ok(transactions);
    }

    @GetMapping("/person-id")
    public ResponseEntity<List<Transaction>> findAllByPerson(@RequestParam Long id){
        List<Transaction> transactions = transactionService.findAllByPerson(id);
        return ResponseEntity.ok(transactions);
    }
}
