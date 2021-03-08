package org.example.repository;


import org.example.Model.TaskStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface TaskStatusRepository extends JpaRepository<TaskStatus, Integer> {
}
