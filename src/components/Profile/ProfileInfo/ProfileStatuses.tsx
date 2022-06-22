import React, {ChangeEvent, FC, useState} from 'react';
import {useAppDispatch} from 'store/hooks';
import {updateStatusThunk} from 'store/features';

type PropsType = {
    status: string | null
}

export const ProfileStatuses: FC<PropsType> = ({status}) => {

    let [editMode, setEditMode] = useState<boolean>(false);
    let [newTitle, setTitle] = useState<string>('')
    const dispatch = useAppDispatch()

    const onDoubleClickHandle = () => {
        setEditMode(!editMode);
        status!==null && setTitle(status)
    }
    const onBlurHandle = () => {
        newTitle!==null && dispatch(updateStatusThunk(newTitle))
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