import React, {useEffect} from 'react';
import a from './Profile.module.css'
import {useParams} from 'react-router-dom';
import {ProfileInfo} from 'components/Profile';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {getProfileThunk, getStatusThunk} from 'store/features';

export const UserProfile = () => {

    const dispatch = useAppDispatch()
    let {userId} = useParams<string>();
    const status = useAppSelector(state => state.status.status);

    useEffect(() => {
        if (userId !== undefined) {
            dispatch(getProfileThunk(userId))
            dispatch(getStatusThunk(userId))
        }
    }, [userId])

    return (
        <div className={a.content}>
            <ProfileInfo/>
            <div>{status}</div>
        </div>
    )
}