import React from "react";
import shortId from 'short-id';

import "./tableRecord.css";

export default function TableRecord(props) {

    const deleteRecord=()=>{
        console.log("delete Record");
    }

    const updateRecord=()=>{
        console.log("update Record");
    }

    const {elementValues, isColumnTitles, recordClassName} = props;
    return (
        <div className={'table-record '+ recordClassName}>
            {
                elementValues.map(value => {
                    if(!value){
                        value=123;
                    }
                    return (<span key={shortId.generate()}>{value}</span>)
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