import React, {ChangeEvent, ReactElement, useState} from 'react';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {updateStatusThunk} from 'store/features';

export const ProfileStatuses = (): ReactElement => {

    let [editMode, setEditMode] = useState<boolean>(false);
    let [newTitle, setTitle] = useState<string>('')
    const status = useAppSelector(state => state.status.status);
    const dispatch = useAppDispatch()

    const onDoubleClickHandle = () => {
        setEditMode(!editMode);
        status !== null && setTitle(status)
    }
    const onBlurHandle = () => {
        newTitle !== null && dispatch(updateStatusThunk(newTitle))
        setEditMode(false);
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
                onBlur={onBlurHandle}/>
            : <span onDoubleClick={onDoubleClickHandle}> {status || '-------'} </span>
    );
}