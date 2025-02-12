package edu.matheus.testetecnico.gastosresidencias.backend.domain.model;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import jakarta.validation.constraints.Positive;

@Entity
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Schema(hidden = true)
    private Long id;

    @Column(nullable = false)
    private Long personId;

    @Positive
    private Double amount;

    private String desc;

    @Enumerated
    private TransactionType type;

    @Schema(hidden = true)
    public boolean isIncome(){
        return (type ==TransactionType.INCOME || type == TransactionType.RECEITA);
    }

    @Schema(hidden = true)
    public boolean isExpense(){
        return  (type ==TransactionType.EXPENSE || type == TransactionType.DESPESA);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getPersonId() {
        return personId;
    }

    public void setPersonId(Long personId) {
        this.personId = personId;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public TransactionType getType() {
        return type;
    }

    public void setType(TransactionType type) {
        this.type = type;
    }
}
