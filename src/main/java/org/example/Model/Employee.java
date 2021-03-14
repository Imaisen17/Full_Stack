package org.example.Model;

import org.hibernate.annotations.Proxy;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Proxy(lazy = false)
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "surname")
    private String surname;

    @Column(name = "name")
    private String name;

    @Column(name = "fatherland")
    private String fatherland;

    @Column(name = "position")
    private String position;

    @ManyToMany(fetch = FetchType.LAZY,cascade = {CascadeType.DETACH,
            CascadeType.MERGE,
            CascadeType.PERSIST,
            CascadeType.REFRESH})
    @JoinTable(
            name = "EmployeeTask",
            joinColumns = @JoinColumn(name = "task_id"),
            inverseJoinColumns = @JoinColumn(name = "employee_id")
    )
    private List<Task> tasks;

    public Employee() {
    }

    public Employee(String surname, String name, String fatherland, String position) {
        this.surname = surname;
        this.name = name;
        this.fatherland = fatherland;
        this.position = position;
    }

    public Employee(int id, String surname, String name, String fatherland, String position) {
        this.id = id;
        this.surname = surname;
        this.name = name;
        this.fatherland = fatherland;
        this.position = position;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFatherland() {
        return fatherland;
    }

    public void setFatherland(String fatherland) {
        this.fatherland = fatherland;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public List<Task> getTasks() {
        return tasks;
    }

    public void setTasks(List<Task> tasks) {
        this.tasks = tasks;
    }

    public void addTask(Task task) {
        if (tasks == null) {
            tasks = new ArrayList<>();
        }
        task.addEmployee(this);
        tasks.add(task);
    }
}
