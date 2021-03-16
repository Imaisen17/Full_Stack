import React, {useMemo} from "react";
import shortId from 'short-id';
import dateFormat from 'dateformat';

import "./tableRecord.css";

import TasksService from "../../services/tasks-service";
import ProjectsService from "../../services/projects-service";
import EmployeesService from "../../services/employees-service";


export default function TableRecord(props) {

    const tasksService = useMemo(() => new TasksService(), []);
    const projectsService = useMemo(() => new ProjectsService(), []);
    const employeesService = useMemo(() => new EmployeesService(), []);

    const {element, isColumnTitles, recordClassName, setTable} = props;

    const deleteRecord = async () => {
        switch (recordClassName){
            case 'projects': await projectsService.deleteProject(element.id); break;
            case 'employees': await employeesService.deleteEmployee(element.id); break;
            case 'tasks': await tasksService.deleteTask(element.id); break;
            default: console.log('deleting failed');
        }
        setTable([]);
    }

    const updateRecord = () => {
        console.log("update Record");
    }

    let elementValues=[];
    let elementKeys=[];
    const defaultDateEnd='date-end';

    if(isColumnTitles){
        elementValues=[...element, 'delete', 'edit'];
    } else {
        elementValues = Object.values(element);
        elementKeys = Object.keys(element);
    }

    if(elementKeys.includes('dateEnd') || elementKeys.includes('dateStart')){
        if(!element.dateEnd){
            element.dateEnd=defaultDateEnd;
        } else if(element.dateEnd!==defaultDateEnd){
            element.dateEnd = dateFormat(element.dateEnd, "mm/dd/yyyy");
        }
        element.dateStart=dateFormat(element.dateStart,"mm/dd/yyyy");
        elementValues = Object.values(element);
    }

    return (
        <div className={'table-record ' + recordClassName}>
            {
                elementValues.map(value => {
                    if (!value) {
                        return <select></select>;
                    }
                    console.log("Value: ", value);
                    if (Array.isArray(value)) {
                        return (
                            <select>{
                                value.map(el => {
                                    console.log("EEELLL: ", el)
                                    if (typeof (el) === "object") {
                                        const keys = Object.keys(el);
                                        return keys.map(key => {
                                            console.log("EEELLL MAAP: ", key, el[key]);
                                            return (
                                                <option>{key}: {el[key]}</option>
                                            )
                                        })
                                    }
                                    return (
                                        <option>{el}</option>
                                    )
                                })}
                            </select>
                        )
                    } else if (typeof (value) === "object") {
                        const valueKeys = Object.keys(value);
                        return (
                            <select>
                                {
                                    valueKeys.map(key => {
                                        if (Array.isArray(value[key])) {
                                            return null;
                                        }
                                        return (<option>{key}: {value[key]}</option>)
                                    })
                                }
                        </select>)
                    } else {
                        if(value===defaultDateEnd){
                            return (
                                <input type='date' key={shortId.generate()}/>
                            )
                        }
                        return (
                            <span key={shortId.generate()}>{value}</span>
                        )
                    }
                })
            }
            {
                !isColumnTitles ?
                    <>
                        <button onClick={deleteRecord} className='table-btn delete'>delete</button>
                        <button onClick={updateRecord} className='table-btn update'>edit</button>
                    </>
                    : null
            }
        </div>
    );
}