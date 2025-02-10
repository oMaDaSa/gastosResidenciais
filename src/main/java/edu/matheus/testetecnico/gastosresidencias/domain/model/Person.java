package edu.matheus.testetecnico.gastosresidencias.domain.model;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import org.hibernate.annotations.Check;

@Entity
public class Person {
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
        return age >= 18;
    }

    public double registerIncome(double value){
        incomeTotal = getIncomeTotal() + value;
        setIncomeTotal(incomeTotal);
        balance = getBalance() + value;
        setBalance(balance);

        return expenseTotal;
    }

    public double registerExpense(double value){
        expenseTotal = getExpenseTotal() + value;
        setExpenseTotal(expenseTotal);
        balance = getBalance() - value;
        setBalance(balance);

        return expenseTotal;
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
