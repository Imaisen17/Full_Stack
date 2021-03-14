import React from "react";
import shortId from 'short-id';

import "./newTableRecord.css";

export default function NewTableRecord(props) {

    const {inputs, createRecordInput} = props;
    console.log(inputs);
    const inputsKeys = Object.keys(inputs);

    const sendNewRecord=async ()=>{
        console.log("Send Record");
    }

    return (
        <div className={createRecordInput ? "show" : "hidden"}>
            {
                inputsKeys.map(key => {
                    if (key==='id'){
                        return null
                    }
                    return (
                        <input
                            className="new-record-input"
                            key={shortId.generate()}
                            type="text"
                            placeholder={key}
                        />
                    );
                })
            }
            <button className='send-new-record-btn' onClick={sendNewRecord}>Add New Record</button>
        </div>
    );
}