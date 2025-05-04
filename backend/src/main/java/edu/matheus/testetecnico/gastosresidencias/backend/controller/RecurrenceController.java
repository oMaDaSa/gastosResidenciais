package edu.matheus.testetecnico.gastosresidencias.backend.controller;

import edu.matheus.testetecnico.gastosresidencias.backend.domain.model.Recurrence;
import edu.matheus.testetecnico.gastosresidencias.backend.service.RecurrenceService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/recurrence")
public class RecurrenceController {
    private final RecurrenceService recurrenceService;

    public RecurrenceController(RecurrenceService recurrenceService){
        this.recurrenceService = recurrenceService;
    }

    @PostMapping()
    public ResponseEntity<Recurrence> create(@RequestBody Recurrence recurrence){
        //Cria nova recorrencia
        Recurrence recurrenceCreated = recurrenceService.create(recurrence);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("")
                .queryParam("id", recurrenceCreated.getId())
                .build()
                .toUri();
        return ResponseEntity.created(location).body(recurrenceCreated);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Recurrence>> findAll(){
        //Get em todas as recorrencias
        List<Recurrence> recurrences = recurrenceService.findAll();
        return ResponseEntity.ok(recurrences);
    }

    @GetMapping("/person-id/{id}")
    public ResponseEntity<List<Recurrence>> findAllByPerson(@PathVariable Long id){
        //Get em todas as recorrencias da pessoa com id passado por parametro
        List<Recurrence> recurrences = recurrenceService.findAllByPerson(id);
        return ResponseEntity.ok(recurrences);
    }
}
