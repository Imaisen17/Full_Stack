package org.example.controller;

import org.example.Model.Employee;
import org.example.Model.Task;
import org.example.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api")
public class EmployeeController {

    private final EmployeeService employeeService;
    org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(EmployeeController.class);

    @Autowired
    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping("/employees")
    public List<Employee> getEmployees() {
        return employeeService.findAll();
    }

    @GetMapping("employees/{employeeId}")
    public Employee getEmployee(@PathVariable int employeeId) {
        Employee employee = new Employee();
        try {
            employee = employeeService.findById(employeeId);
            return employee;
        } catch (RuntimeException exception) {
            log.error("Failed to ",  exception);
        }
        return null;
    }

    @PostMapping("/employees")
    public Employee addEmployee(@RequestBody Employee employee) {
        employee.setId(0);
        employeeService.save(employee);
        return employee;
    }

    @PutMapping("/employees")
    public Employee updateEmployee(@RequestBody Employee employee) {
        employeeService.save(employee);
        return employee;
    }

    @DeleteMapping("/employees/{employeeId}")
    public String deleteEmployee(@PathVariable int employeeId) {
        try {
            employeeService.findById(employeeId);
            employeeService.deleteById(employeeId);
            return "Deleted employee id - " + employeeId;
        } catch (RuntimeException exception) {
            log.error("Failed to ", exception);
        }
        return "Employee with id - " + employeeId + " not found";
    }

    @PutMapping("/employees/{employeeId}")
    public void addTask(@PathVariable int employeeId, @RequestBody Task task) {
        try {
            Employee employee = employeeService.findById(employeeId);
            employee.addTask(task);
            employeeService.save(employee);
        } catch (RuntimeException exception) {
            log.error("Failed to ", exception);
        }
    }
}
