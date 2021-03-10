package org.qulix.repository;


import org.qulix.Model.TaskStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Repository
public interface TaskStatusRepository extends JpaRepository<TaskStatus, Integer> {
}
