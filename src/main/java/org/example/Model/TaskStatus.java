package org.example.Model;

import javax.persistence.*;
import java.util.List;

@Entity(name="TaskStatus")
public class TaskStatus {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="ID")
    private int id;

    @Column(name="status_code")
    private String statusCode;

    @Column(name="name")
    private String name;

    @OneToMany(mappedBy="status", cascade={CascadeType.DETACH,
            CascadeType.MERGE,
            CascadeType.PERSIST,
            CascadeType.REFRESH})
    private List<Task> tasks;

    public TaskStatus() {
    }

    public TaskStatus(String statusCode, String name) {
        this.statusCode = statusCode;
        this.name = name;
    }

    public TaskStatus(int id, String statusCode, String name) {
        this.id = id;
        this.statusCode = statusCode;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getStatusCode() {
        return statusCode;
    }

    public void setStatusCode(String statusCode) {
        this.statusCode = statusCode;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}