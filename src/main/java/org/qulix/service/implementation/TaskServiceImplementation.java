package org.qulix.service.implementation;

import org.qulix.Model.Task;
import org.qulix.repository.TaskRepository;
import org.qulix.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
;import java.util.List;
import java.util.Optional;

@Service
public class TaskServiceImplementation implements TaskService {

    private final TaskRepository taskRepository;

    @Autowired
    public TaskServiceImplementation(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Override
    public List<Task> findAll() {
        return taskRepository.findAll();
    }

    @Override
    public void save(Task task) {
        taskRepository.save(task);
    }

    @Override
    public Task findById(int id) {
        Optional<Task> task = taskRepository.findById(id);
        if (task.isPresent()) {
            return task.get();
        }
        else {
            throw new RuntimeException("Task with id = " + id + " not found");
        }
    }

    @Override
    public void deleteById(int id) {
        taskRepository.deleteById(id);
    }
}
