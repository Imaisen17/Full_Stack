package org.example.controller;

import org.example.Model.Project;
import org.example.Model.Task;
import org.example.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

@RestController
@RequestMapping("/api")
public class ProjectController {

    private final ProjectService projectService;
    private Logger logger;
    @Autowired
    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping("/projects")
    public List<Project> getProjects() {
        return projectService.findAll();
    }

    @GetMapping("/projects/{projectId}")
    public Project getProject(@PathVariable int projectId) {
        Project project = new Project();
        try {
            project = projectService.findById(projectId);
        }
        catch (RuntimeException exception) {
            logger.log(Level.ALL, "Project not found");
        }
        return project;
    }

    @PostMapping("/projects")
    public Project addProject(@RequestBody Project project) {
        project.setId(0);
        projectService.save(project);
        return project;
    }

    @PutMapping("/projects")
    public Project updateProject(@RequestBody Project project) {
        projectService.save(project);
        return project;
    }

    @DeleteMapping("/projects/{projectId}")
    public String deleteProject(@PathVariable int projectId) {
        try {
            projectService.findById(projectId);
            projectService.deleteById(projectId);
            return "Deleted project id - " + projectId;
        }
        catch (RuntimeException exception) {
           logger.log(Level.WARNING, "Project not found");
        }
        return "Project with id - " + projectId + " not found";
    }

    @PutMapping("/projects/{projectId}")
    public void addTask(@PathVariable int projectId, @RequestBody Task task) {
        try {
            Project project = projectService.findById(projectId);
            project.addTask(task);
            projectService.save(project);
        }
        catch (RuntimeException exception) {
            logger.log(Level.WARNING, "Project not found");
        }
    }
}
