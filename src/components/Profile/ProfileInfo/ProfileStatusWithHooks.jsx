import React, {useEffect, useState} from 'react';

export const ProfileStatusWithHooks = (props) => {

   const [status, setStatus] = useState(props.status)
   const [editMode, setEditMode] = useState(false)


    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    // useEffect(() => {
    //     if (status !== props.status) {
    //         setStatus(status)
    //         console.log('componentDidUpdate')
    //     }
    //
    // }, [])
    return (
        <div>
            {
                !editMode ?
                <div>
                    <span onDoubleClick={activateEditMode}>{ status || "----"}</span>
                </div> : <div>
                    <input type="text" onChange={onStatusChange}  onBlur={deactivateEditMode} autoFocus={true}
                           value={status}/>
                </div>
            }
        </div>
    )
}