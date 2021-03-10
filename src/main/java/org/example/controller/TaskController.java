package org.example.controller;

import org.example.Model.Employee;
import org.example.Model.Task;
import org.example.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class TaskController {

    private final TaskService taskService;
    org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(TaskController.class);

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping("/tasks")
    public List<Task> getTasks() {
        return taskService.findAll();
    }

    @GetMapping("/tasks/{taskId}")
    public Task getTask(@PathVariable int taskId) {
        Task task = new Task();
        try {
            task = taskService.findById(taskId);
            return task;
        } catch (RuntimeException exception) {
            log.error("Failed to ", exception);
        }
        return null;
    }

    @PostMapping("/tasks")
    public Task addTask(@RequestBody Task task) {
        task.setId(0);
        taskService.save(task);
        return task;
    }

    @PutMapping("/tasks")
    public Task updateTask(@RequestBody Task task) {
        taskService.save(task);
        return task;
    }

    @DeleteMapping("/tasks/{taskId}")
    public String deleteTask(@PathVariable int taskId) {
        try {
            taskService.findById(taskId);
            taskService.deleteById(taskId);
            return "Deleted task id - " + taskId;
        } catch (RuntimeException exception) {
            log.error("Failed to ", exception);
        }
        return "Task with id - " + taskId + " not found";
    }

    @PutMapping("/tasks/{taskId}")
    public void addTask(@PathVariable int taskId, @RequestBody Employee employee) {
        try {
            Task task = taskService.findById(taskId);
            task.addEmployee(employee);
            taskService.save(task);
        } catch (RuntimeException exception) {
            log.error("Failed to ", exception);
        }
    }
}
