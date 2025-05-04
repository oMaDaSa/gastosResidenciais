package edu.matheus.testetecnico.gastosresidencias.backend.domain.model;

import jakarta.persistence.*;

@Entity
public class Recurrence extends Entry {

    @Enumerated
    private RecurrenceType recurrenceType;

    public void setRecurrenceType(RecurrenceType recurrenceType) {
        this.recurrenceType = recurrenceType;
    }

    public RecurrenceType getRecurrenceType() {
        return recurrenceType;
    }
}
