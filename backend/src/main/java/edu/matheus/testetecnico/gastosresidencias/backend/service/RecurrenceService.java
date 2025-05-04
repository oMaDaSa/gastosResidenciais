package edu.matheus.testetecnico.gastosresidencias.backend.service;

import edu.matheus.testetecnico.gastosresidencias.backend.domain.model.Recurrence;

import java.util.List;

public interface RecurrenceService {
    Recurrence create(Recurrence recurrence);
    List<Recurrence> findAll();
    List<Recurrence> findAllByPerson(Long id);

}
