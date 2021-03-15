import {useState} from "react";
import shortId from 'short-id';

import "./table.css";
import TableRecord from "../tableRecord/tableRecord";
import NewTableRecord from "../NewTableRecord/NewTableRecord";

export default function Table(props) {

    const {data=[{}], recordClassName, setTable} = props;
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
                const columnTitles = Object.keys(element);
                columnTitles.push("Remove", "Edit");
                return (
                    <>
                        {
                            isFirstRow ?
                                <TableRecord
                                    recordClassName={recordClassName}
                                    element={Object.keys(element)}
                                    isColumnTitles={true}
                                    setTable={setTable}
                                    table={data}
                                />
                                : null
                        }
                        <TableRecord
                            recordClassName={recordClassName}
                            key={shortId.generate()}
                            element={element}
                            isColumnTitles={false}
                            setTable={setTable}
                            table={data}
                        />
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
                setTable={setTable}
                table={data}
            />
        </>
    );
}