import React, {useEffect} from 'react';
import a from './Profile.module.css'
import {useParams} from 'react-router-dom';
import {ProfileInfo, MyPosts, ProfileStatuses} from 'components/Profile';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {getProfileThunk, getStatusThunk} from 'store/features';

export const MY_ID_NUMBER: string = '23943'

export const Profile = () => {

    const dispatch = useAppDispatch()
    let {userId} = useParams<string>();
    const status = useAppSelector(state => state.status.status);

    useEffect(() => {
        if (userId === undefined) {
            userId = MY_ID_NUMBER
        }
        dispatch(getProfileThunk(userId))
        dispatch(getStatusThunk(userId))
    }, [userId])

    return (
        <div className={a.content}>
            <ProfileInfo/>
            {userId === undefined ?
                <>
                    <ProfileStatuses status={status}/>
                    <MyPosts/>
                </> :
                <div>{status}</div>
            }
        </div>
    )
}