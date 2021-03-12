Training Task Project

1. Clone the project
2. Install JDK version 15 (https://www.oracle.com/java/technologies/javase-jdk15-downloads.html)
3. Go to the project folder
4. Use command: mvnw.cmd clean install
5. Use command: mvnw compile (compiles project resources)
6. Use command: mvnw package (packs project files into WAR format)
7. Use command:  mvnw cargo:run (starts the application using Tomcat servlet container)
8. Urls were used in the application:
    8.1 http://localhost:8080/api/employees (GET, POST, PUT)
    8.2 http://localhost:8080/api/employees/{employeeId} (GET, DELETE, PUT)
    8.3 http://localhost:8080/api/projects (GET, POST, PUT)
    8.4 http://localhost:8080/api/projects/{projectId} (GET, DELETE, PUT)
    8.5 http://localhost:8080/api/tasks (GET, POST, PUT)
    8.6 http://localhost:8080/api/tasks/{taskId} (GET, DELETE, PUT)