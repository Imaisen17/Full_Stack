package org.example.Model;

import org.hibernate.annotations.Proxy;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity(name="Project")
@Proxy(lazy = false)
public class Project {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="ID")
    private int id;

    @Column(name="name")
    private String name;

    @Column(name="short_name")
    private String shortName;

    @Column(name="description")
    private String description;

    @OneToMany(mappedBy="project", cascade=CascadeType.ALL)
    private List<Task> tasks;

    public Project() {
    }

    public Project(String name, String shortName, String description) {
        this.name = name;
        this.shortName = shortName;
        this.description = description;
    }

    public Project(int id, String name, String shortName, String description) {
        this.id = id;
        this.name = name;
        this.shortName = shortName;
        this.description = description;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getShortName() {
        return shortName;
    }

    public void setShortName(String shortName) {
        this.shortName = shortName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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
        task.setProject(this);
        tasks.add(task);
    }
}

