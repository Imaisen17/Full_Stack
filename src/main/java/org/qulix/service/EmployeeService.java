package org.qulix.service;


import org.qulix.Model.Employee;

import java.util.List;

public interface EmployeeService {

    List<Employee> findAll();

    void save(Employee employee);

    Employee findById(int id);

    void deleteById(int id);
}
