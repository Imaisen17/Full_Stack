package org.qulix.service;


import org.qulix.Model.TaskStatus;

public interface TaskStatusService {

    TaskStatus findById(int id);
}
