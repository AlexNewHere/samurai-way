import React, {useEffect} from 'react';
import a from './Profile.module.css'
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPosts} from './Myposts/Myposts';
import axios from 'axios';
import {useAppSelector} from '../../store/hooks';
import {useParams} from 'react-router-dom';
import {ProfileAction} from '../../store/features/userFrofile/profileAction';


export const Profile = () => {

    const profile=useAppSelector(state=>state.profilePage);
    const {setProfileUser}=ProfileAction()

    let {userId}=useParams<string>();
    if (userId===undefined) {
        userId='23943'
    }
  useEffect( () => {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                setProfileUser(response.data);
            })

    }, [userId])



    return (
        <div className={a.content}>
            <ProfileInfo {...profile}/>
            <MyPosts/>
        </div>
    )
}