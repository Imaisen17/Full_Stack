import {useState, useEffect, useMemo} from "react";

import Navbar from "../navbar";
import TasksService from "../../services/tasks-service";
import EmployeesService from "../../services/employees-service";
import ProjectsService from "../../services/projects-service";

import "./app.css";

export default function App(props) {

    let table;

    const tasksService = useMemo(() => new TasksService(), []);
    const projectsService = useMemo(() => new ProjectsService(), []);
    const employeesService = useMemo(() => new EmployeesService(), []);

    const [navbarItem, setNavbarItem] = useState("projects");

    const [projectsData, setProjectsData] = useState([]);
    const [employeesData, setEmployeesData] = useState([]);
    const [tasksData, setTasksData] = useState([]);

    useEffect(() => {
        const projectsDataLoaded = projectsService.getEmployees();
        setProjectsData(projectsDataLoaded);
        
        const tasksDataLoaded = tasksService.getTasks();
        setTasksData(tasksDataLoaded);

        const employeesDataLoaded = employeesService.getEmployees();
        setEmployeesData(employeesDataLoaded); 
    }, [projectsService, tasksService, employeesService]);

    const handleNavbarItemChange = (event) => {
        const navbarItemValue = event.target.value;
        setNavbarItem(navbarItemValue);
        if (navbarItemValue === "projects") {
            table = <ProjectsTable data={projectsData} service={projectsService}/>;
        }
        else if (navbarItemValue === "tasks") {
            table = <TasksTable data={tasksData} service={tasksService}/>;
        }
        else {
            table = <EmployeesTable data={employeesData} service={employeesService}/>
        }
    }

    return (
        <div className="container">
            <Navbar navbarItem={navbarItem} setNavbarItem={handleNavbarItemChange}/>
            {table}
        </div>
    );
}