import {useState} from "react";
import shortId from 'short-id';

import "./table.css";
import TableRecord from "../tableRecord/tableRecord";
import NewTableRecord from "../NewTableRecord/NewTableRecord";

export default function Table(props) {

    const {data=[{}], recordClassName} = props;
    let isFirstRowChange = true;
    const [createRecordInput,setCreateRecordInput]=useState(false);

    const hideOrShowNewRecord = () => {
        setCreateRecordInput(!createRecordInput);
    }

    return (
        <>

            {
                data.map(element => {
                let isFirstRow=false;
                if(isFirstRowChange){
                    isFirstRowChange=false;
                    isFirstRow=true;
                }
                const elementValues = Object.values(element);
                const columnTitles = Object.keys(element);
                columnTitles.push("Remove", "Edit");
                return (
                    <>
                        {
                            isFirstRow ?
                                <TableRecord recordClassName={recordClassName} elementValues={columnTitles} isColumnTitles={true}/>
                                : null
                        }
                        <TableRecord recordClassName={recordClassName} key={shortId.generate()} elementValues={elementValues} isColumnTitles={false}/>
                    </>
                )
            })
            }
            <div className='add-new-row'>
                <span>ADD NEW</span>
                <button
                    onClick={hideOrShowNewRecord}
                    className={createRecordInput?'hide-btn':'add-btn'}>
                    {createRecordInput?"hide":"+"}
                </button>
            </div>
            <NewTableRecord
                inputs={data[0]?data[0]:{}}
                createRecordInput={createRecordInput}
            />
        </>
    );
}