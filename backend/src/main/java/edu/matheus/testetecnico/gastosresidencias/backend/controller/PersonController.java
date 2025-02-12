package edu.matheus.testetecnico.gastosresidencias.backend.controller;

import edu.matheus.testetecnico.gastosresidencias.backend.service.PersonService;
import edu.matheus.testetecnico.gastosresidencias.backend.domain.model.Person;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/person")
public class PersonController {
    private final PersonService personService;

    public PersonController(PersonService personService){
        this.personService = personService;
    }

    @PostMapping
    public ResponseEntity<Person> create(@RequestBody @Valid Person person){

        Person personCreated = personService.create(person);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("")
                .queryParam("id", personCreated.getId())
                .build()
                .toUri();
        return ResponseEntity.created(location).body(personCreated);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Person> findById(@PathVariable Long id){
        Person person = personService.findById(id);
        return ResponseEntity.ok(person);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Person>> findAll(){
        List<Person> people = personService.findAll();
        return ResponseEntity.ok(people);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Long id){
        personService.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
