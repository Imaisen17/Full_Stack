package org.example.service;


import org.example.Model.Employee;

import java.util.List;

public interface EmployeeService {

    List<Employee> findAll();

    void save(Employee employee);

    Employee findById(int id);

    void deleteById(int id);
}
