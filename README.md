Training Task Project

1. Clone the project
2. Install JDK version 15 (https://www.oracle.com/java/technologies/javase-jdk15-downloads.html)
3. Go to the project folder
4. Use command: mvn compile (compiles project resources)
5. Use command: mvn package (packs project files into WAR format)
6. Use command:  mvn cargo:run (starts the application using Tomcat servlet container)
7. Urls were used in the application:
    7.1 http://localhost:8080/api/employees (GET, POST, PUT)
    7.2 http://localhost:8080/api/employees/{employeeId} (GET, DELETE, PUT)
    7.3 http://localhost:8080/api/projects (GET, POST, PUT)
    7.4 http://localhost:8080/api/projects/{projectId} (GET, DELETE, PUT)
    7.5 http://localhost:8080/api/tasks (GET, POST, PUT)
    7.6 http://localhost:8080/api/tasks/{taskId} (GET, DELETE, PUT)