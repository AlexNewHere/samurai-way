import React, {ReactElement, useEffect} from 'react';
import a from './Profile.module.css'
import {ProfileInfo, MyPosts, ProfileStatuses} from 'components/Profile';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {getProfileThunk, getStatusThunk, clearProfileState} from 'store/features';

export const Profile = (): ReactElement => {

    const dispatch = useAppDispatch()
    const userId = useAppSelector(state => state.login.id);

    useEffect(() => {
        if (userId !== null) {
            dispatch(getProfileThunk(userId.toString()))
            dispatch(getStatusThunk(userId.toString()))
        }
    }, [userId, dispatch])

    useEffect(()=> {
        return () => {
            dispatch(clearProfileState())
        }
    }, [dispatch])

    return (
        <div className={a.content}>
            <ProfileInfo/>
            <ProfileStatuses />
            <MyPosts/>
        </div>
    )
}