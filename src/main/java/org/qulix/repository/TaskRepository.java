package org.qulix.repository;


import org.qulix.Model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Repository
public interface TaskRepository extends JpaRepository<Task, Integer> {
}
