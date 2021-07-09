import React, {useEffect, useState} from 'react';

export const ProfileStatusWithHooks = (props) => {

    let [status, setStatus] = useState(props.status)
    let [editMode, setEditMode] = useState(false)

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }
    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || "-------"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                       value={status}/>
            </div>
            }
        </div>
    )
}