import React, {useEffect} from 'react';
import a from './Profile.module.css'
import {ProfileInfo, MyPosts, ProfileStatuses} from 'components/Profile';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {getProfileThunk, getStatusThunk} from 'store/features';

export const Profile = () => {

    const dispatch = useAppDispatch()
    const userId = useAppSelector(state => state.authPage.id);

    useEffect(() => {
        if (userId !== null) {
            dispatch(getProfileThunk(userId.toString()))
            dispatch(getStatusThunk(userId.toString()))
        }
    }, [userId, dispatch])

    return (
        <div className={a.content}>
            <ProfileInfo/>
            <ProfileStatuses />
            <MyPosts/>
        </div>
    )
}