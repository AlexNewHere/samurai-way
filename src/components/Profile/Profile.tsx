import React, {useEffect} from 'react';
import a from './Profile.module.css'
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPosts} from './Myposts/Myposts';
import axios from 'axios';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {setProfileUser} from '../../store/features/userFrofile/profileSlice';
import {useParams} from 'react-router-dom';


export const Profile = () => {

    const profile=useAppSelector(state=>state.profilePage);
    const dispatch=useAppDispatch()

    const history=useParams<string>();

  useEffect( () => {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${history.id}`)
            .then(response => {

                dispatch(setProfileUser(response.data));
            })
    }, [])


    console.log(profile);
    return (
        <div className={a.content}>
            <ProfileInfo {...profile}/>
            <MyPosts/>
        </div>
    )
}