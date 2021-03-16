import React, {useState, useMemo,useEffect} from "react";
import shortId from 'short-id';

import "./newTableRecord.css";
import TasksService from "../../services/tasks-service";
import ProjectsService from "../../services/projects-service";
import EmployeesService from "../../services/employees-service";
import NewRecordRowComponent from "../NewRecordRowComponent/NewRecordRowComponent";

export default function NewTableRecord(props) {

    const tasksService = useMemo(() => new TasksService(), []);
    const projectsService = useMemo(() => new ProjectsService(), []);
    const employeesService = useMemo(() => new EmployeesService(), []);

    const {inputs, createRecordInput, tableName, setTable} = props;
    const inputsKeys = Object.keys(inputs);

    const sendNewRecord = async () => {
        switch (tableName) {
            case 'projects':
                await projectsService.saveProject(newRecordValues);
                break;
            case 'employees':
                await employeesService.saveEmployee(newRecordValues);
                break;
            case 'tasks':
                await tasksService.saveTask(newRecordValues);
                break;
            default:
                console.log('saving failed');
        }
        setTable([])
        setNewRecordValues(newRecordValuesDefault);
    }

    let newRecordValuesDefault = {};

    const [newRecordValues, setNewRecordValues] = useState(newRecordValuesDefault);

    useEffect(()=>{
        newRecordValuesDefault={};
        inputsKeys.forEach(key => {
            newRecordValuesDefault[key]='';
        })
    },[])

    useEffect(()=>{
        newRecordValuesDefault={};
        inputsKeys.forEach(key => {
            newRecordValuesDefault[key]='';
        })
    },[tableName])

    const changeObjValue = (key,value) => {
        setNewRecordValues({
            ...newRecordValues,
            [key]: value,
        })
    }

    return (
        <div className={createRecordInput ? "show" : "hidden"}>
            {
                inputsKeys.map(key => {
                    if (key === 'id' || Array.isArray(inputs[key]) || inputs[key]===null) {
                        return null
                    }
                    return (
                        <NewRecordRowComponent
                            recordKey={key}
                            changeObjValue={changeObjValue}
                        />
                    );
                })
            }
            <button className='send-new-record-btn' onClick={sendNewRecord}>Add New Record</button>
        </div>
    );
}