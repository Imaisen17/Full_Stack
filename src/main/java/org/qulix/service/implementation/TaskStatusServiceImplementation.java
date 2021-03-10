package org.qulix.service.implementation;

import org.qulix.Model.TaskStatus;
import org.qulix.repository.TaskStatusRepository;
import org.qulix.service.TaskStatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class TaskStatusServiceImplementation implements TaskStatusService {

    private final TaskStatusRepository taskStatusRepository;

    @Autowired public TaskStatusServiceImplementation(TaskStatusRepository taskStatusRepository) {
        this.taskStatusRepository = taskStatusRepository;
    }

    @Override
    @Transactional
    public TaskStatus findById(int id) {
        Optional<TaskStatus> status = taskStatusRepository.findById(id);
        if (status.isPresent()) {
            return status.get();
        }
        else {
            throw new RuntimeException("Status with id = " + id + " not found");
        }
    }
}
