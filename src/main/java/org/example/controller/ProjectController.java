package org.example.controller;

import org.example.Model.Project;
import org.example.Model.Task;
import org.example.service.ProjectService;
import org.example.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class ProjectController {

    private final ProjectService projectService;
    org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(ProjectController.class);


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
            return project;
        } catch (RuntimeException exception) {
            log.error("Failed to ", exception);
        }
        return null;
    }

    @PostMapping("/projects")
    public Project addProject(@Valid @RequestBody Project project) {
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
        } catch (RuntimeException exception) {
            log.error("Failed to ", exception);
        }
        return "Project with id - " + projectId + " not found";
    }

    @PutMapping("/projects/{projectId}")
    public void addTask(@PathVariable int projectId, @RequestBody Task task) {
        try {
            Project project = projectService.findById(projectId);
            project.addTask(task);
            projectService.save(project);
        } catch (RuntimeException exception) {
            log.error("Failed to ", exception);
        }
    }
}
