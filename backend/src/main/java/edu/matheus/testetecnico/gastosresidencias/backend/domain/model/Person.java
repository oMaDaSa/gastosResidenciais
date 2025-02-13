package edu.matheus.testetecnico.gastosresidencias.backend.domain.model;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import jakarta.validation.constraints.Positive;

@Entity
public class Person {
    //schema hidden para não aparecer no exemplo do json do swagger
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Schema(hidden = true)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Positive
    private int age;

    @Positive
    @Schema(hidden = true)
    private double incomeTotal = 0;

    @Positive
    @Schema(hidden = true)
    private double expenseTotal = 0;

    @Schema(hidden = true)
    private double balance = 0;

    @Schema(hidden = true)
    public boolean isAdult(){
        //verificar maioridade (menores não podem ter receita)
        return age >= 18;
    }

    public void registerIncome(double value){
        //Atualizar receita total e o saldo geral
        incomeTotal = getIncomeTotal() + value;
        setIncomeTotal(incomeTotal);
        balance = getBalance() + value;
        setBalance(balance);

    }

    public void registerExpense(double value){
        //Atualizar despesa total e o saldo geral
        expenseTotal = getExpenseTotal() + value;
        setExpenseTotal(expenseTotal);
        balance = getBalance() - value;
        setBalance(balance);

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public double getIncomeTotal() {
        return incomeTotal;
    }

    public void setIncomeTotal(double incomeTotal) {
        this.incomeTotal = incomeTotal;
    }

    public double getExpenseTotal() {
        return expenseTotal;
    }

    public void setExpenseTotal(double expenseTotal) {
        this.expenseTotal = expenseTotal;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }
}
