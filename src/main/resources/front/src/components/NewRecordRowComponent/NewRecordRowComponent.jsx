import React, {useState} from "react";

import "./NewRecordRowComponent.css";

export default function NewRecordRowComponent(props) {

    const {changeObjValue, recordKey} = props;

    const [newRecordCurrValue, setNewRecordCurrValue] = useState(null);

    const changeObjRowValue = (event) => {
        if (recordKey === 'dateStart') {
            const date = new Date();
            event.target.value=date;
        } else if (recordKey === 'dateEnd') {
            event.target.value=null;
        }
        setNewRecordCurrValue(event.target.value);
        changeObjValue(recordKey, event.target.value);
    }

    return (
        <input
            className="new-record-input"
            type="text"
            onChange={changeObjRowValue}
            placeholder={recordKey}
        />
    );
}