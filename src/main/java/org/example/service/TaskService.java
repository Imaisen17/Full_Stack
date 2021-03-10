package org.example.service;


import org.example.Model.Task;

import java.util.List;

public interface TaskService {

    List<Task> findAll();

    void save(Task task);

    Task findById(int id);

    void deleteById(int id);
}
