package org.qulix.service;


import org.qulix.Model.Project;

import java.util.List;

public interface ProjectService {

    List<Project> findAll();

    void save(Project project);

    Project findById(int id);

    void deleteById(int id);
}
