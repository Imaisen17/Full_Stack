package org.qulix.service.implementation;

import org.qulix.Model.Project;
import org.qulix.repository.ProjectRepository;
import org.qulix.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class ProjectServiceImplementation implements ProjectService {

    private final ProjectRepository projectRepository;

    @Autowired
    public ProjectServiceImplementation(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    @Override
    public List<Project> findAll() {
        return projectRepository.findAll();
    }

    @Override
    public void save(Project project) {
        projectRepository.save(project);
    }

    @Override
    public Project findById(int id) {
        Optional<Project> project = projectRepository.findById(id);
        if (project.isPresent()) {
            return project.get();
        }
        else {
            throw new RuntimeException("Project with id = " + id + " not found");
        }
    }

    @Override
    public void deleteById(int id) {
        projectRepository.deleteById(id);
    }
}
