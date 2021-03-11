CREATE TABLE Project (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(128) NOT NULL,
    short_name VARCHAR(32) NOT NULL,
    description VARCHAR(1024) NOT NULL
);

CREATE TABLE TaskStatus (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    status_code VARCHAR(5) NOT NULL,
    name VARCHAR(25) NOT NULL
);

INSERT INTO TaskStatus(status_code, name) VALUES ('NOT', 'Not started'),
                                                 ('INPR', 'In progress'),
                                                 ('FNSD', 'Finished'),
                                                 ('WAIT', 'Waiting');

CREATE TABLE Task (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(128) NOT NULL,
    hours FLOAT,
    date_start DATE,
    date_end DATE,
    status_id INT NOT NULL,
    project_id INT NOT NULL,
    CONSTRAINT FK_task_status FOREIGN KEY (status_id) REFERENCES TaskStatus(ID),
    CONSTRAINT FK_task_project FOREIGN KEY (project_id) REFERENCES Project(ID)
);

CREATE TABLE Employee (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    surname VARCHAR(64),
    name VARCHAR(64),
    fatherland VARCHAR(64),
    position VARCHAR(64)
);

CREATE TABLE EmployeeTask (
    employee_id INT NOT NULL,
    task_id INT NOT NULL,
    CONSTRAINT PK_employee_task PRIMARY KEY (employee_id, task_id),
    CONSTRAINT FK_employee_task_employee FOREIGN KEY (employee_id) REFERENCES Employee(ID),
    CONSTRAINT FK_employee_task_task FOREIGN KEY (task_id) REFERENCES Task(ID)
);