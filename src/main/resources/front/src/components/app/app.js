import {useState, useEffect, useMemo} from "react";
import Table from '../table/index'

import Navbar from "../navbar";
import TasksService from "../../services/tasks-service";
import EmployeesService from "../../services/employees-service";
import ProjectsService from "../../services/projects-service";

import "./app.css";

export default function App(props) {

    const [table, setTable] = useState([]);

    //const tasksService = useMemo(() => new TasksService(), []);
    const projectsService = useMemo(() => new ProjectsService(), []);
    const employeesService = useMemo(() => new EmployeesService(), []);

    const [navbarItem, setNavbarItem] = useState("projects");

    useEffect(async function () {
        console.log(navbarItem);
        const projectsDataLoaded = await projectsService.getEmployees();
        setTable(projectsDataLoaded);
    }, []);

    useEffect(async function () {
        console.log(navbarItem);
        if (navbarItem === "projects") {
            const projectsDataLoaded = await projectsService.getEmployees();
            setTable(projectsDataLoaded);
        }
        /* else if (navbarItem === "tasks")
             /!*const tasksDataLoaded = tasksService.getTasks();
         setTasksData(tasksDataLoaded);*!/
             setTable(tasksData)
         }*/
        else if(navbarItem==="employees"){
            const employeesDataLoaded = await employeesService.getEmployees();
            setTable(employeesDataLoaded);
        } else {
            setTable([{
                message: 'No Data Found =(',
            }])
        }

    }, [navbarItem]);

    const handleNavbarItemChange = (event) => {
        const navbarItemValue = event.target.value;
        setNavbarItem(navbarItemValue);
    }

    return (
        <>
            <h1>TO DO APPLICATION</h1>
            <div className="container">
                <Navbar navbarItem={navbarItem} setNavbarItem={handleNavbarItemChange}/>
                <Table recordClassName={navbarItem} data={table}/>
            </div>
        </>
    );
}