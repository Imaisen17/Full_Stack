import {useState, useEffect, useMemo} from "react";
import Table from '../table/index'

import Navbar from "../navbar";
import TasksService from "../../services/tasks-service";
import EmployeesService from "../../services/employees-service";
import ProjectsService from "../../services/projects-service";

import "./app.css";

export default function App(props) {

    const [table, setTable] = useState([]);

    const tasksService = useMemo(() => new TasksService(), []);
    const projectsService = useMemo(() => new ProjectsService(), []);
    const employeesService = useMemo(() => new EmployeesService(), []);

    const [navbarItem, setNavbarItem] = useState("projects");
    const [isItemChange, setIsItemChange] = useState(false);

    const loadTable=async ()=>{
        if(!table.length || isItemChange) {
            if (navbarItem === "projects") {
                const projectsDataLoaded = await projectsService.getProjects();
                setTable(projectsDataLoaded);
            } else if (navbarItem === "tasks") {
                const tasksDataLoaded = await tasksService.getTasks();
                setTable(tasksDataLoaded);
            } else if (navbarItem === "employees") {
                const employeesDataLoaded = await employeesService.getEmployees();
                setTable(employeesDataLoaded);
            }
            if (table.msg) {
                setTable([{
                    message: 'No Data Found =(',
                }])
            }
            setIsItemChange(!isItemChange);
        }
    }

    useEffect(async function () {
        await loadTable();
    }, []);

    useEffect(async function () {
        await loadTable();
    }, [navbarItem,table]);


    const handleNavbarItemChange = (event) => {
        const navbarItemValue = event.target.value;
        setNavbarItem(navbarItemValue);
        setIsItemChange(true);
    }

    return (
        <>
            <h1>TO DO APPLICATION</h1>
            <div className="container">
                <Navbar navbarItem={navbarItem} setNavbarItem={handleNavbarItemChange}/>
                <Table
                    recordClassName={navbarItem}
                    data={table}
                    setTable={setTable}
                />
            </div>
        </>
    );
}