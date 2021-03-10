package org.example.service;


import org.example.Model.Project;

import java.util.List;

public interface ProjectService {

    List<Project> findAll();

    void save(Project project);

    Project findById(int id);

    void deleteById(int id);
}
