ALTER TABLE Task DROP CONSTRAINT FK_task_status;
ALTER TABLE Task DROP CONSTRAINT FK_task_project;

ALTER TABLE EmployeeTask DROP CONSTRAINT FK_employee_task_employee;
ALTER TABLE EmployeeTask DROP CONSTRAINT FK_employee_task_task;

DROP TABLE IF EXISTS Project;

DROP TABLE IF EXISTS TaskStatus;

DROP TABLE IF EXISTS Task;

DROP TABLE IF EXISTS Employee;

DROP TABLE IF EXISTS EmployeeTask;