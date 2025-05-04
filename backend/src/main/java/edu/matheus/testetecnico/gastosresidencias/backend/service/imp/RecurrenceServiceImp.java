package edu.matheus.testetecnico.gastosresidencias.backend.service.imp;

import edu.matheus.testetecnico.gastosresidencias.backend.domain.model.Person;
import edu.matheus.testetecnico.gastosresidencias.backend.domain.model.Recurrence;
import edu.matheus.testetecnico.gastosresidencias.backend.repository.PersonRepository;
import edu.matheus.testetecnico.gastosresidencias.backend.repository.RecurrenceRepository;
import edu.matheus.testetecnico.gastosresidencias.backend.service.RecurrenceService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class RecurrenceServiceImp implements RecurrenceService {
    private final RecurrenceRepository recurrenceRepository;

    private final PersonRepository personRepository;

    public RecurrenceServiceImp(RecurrenceRepository recurrenceRepository, PersonRepository personRepository){
        this.recurrenceRepository = recurrenceRepository;
        this.personRepository = personRepository;
    }

    @Override
    public Recurrence create(Recurrence recurrence) {
        //Encontrar a pessoa a qual a transação se aplica, pois nao pode ter income sendo menor de idade
        Person person = personRepository.findById(recurrence.getPersonId()).orElseThrow(NoSuchElementException::new);
        if(!person.isAdult() && recurrence.isIncome()){
            //Apenas adultos podem ter receita
            throw new IllegalArgumentException("Underage person cannot have an income");
        }

        personRepository.save(person);
        return recurrenceRepository.save(recurrence);
    }

    @Override
    public List<Recurrence> findAll() {
        return recurrenceRepository.findAll();
    }

    @Override
    public List<Recurrence> findAllByPerson(Long id) {
        return recurrenceRepository.findAllByPerson(id);
    }

}
