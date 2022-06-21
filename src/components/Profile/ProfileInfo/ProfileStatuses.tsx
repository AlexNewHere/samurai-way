import React, {ChangeEvent, FC, useState} from 'react';

// type PropsType = {
//     status: string
// }

export const ProfileStatuses = () => {

    let [editMode, setEditMode] = useState<boolean>(false);
    let [newTitle, setTitle] = useState<string>('status')

    const onDoubleClickHandler = () => {
        setEditMode(!editMode);
        // callback(newTitle)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return (
        editMode
            ? <input
                value={newTitle}
                onChange={onChangeHandler}
                autoFocus
                onBlur={onDoubleClickHandler}/>
            : <span onDoubleClick={onDoubleClickHandler}> {newTitle} </span>
    );


}