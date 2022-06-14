import React, {useEffect} from 'react';
import a from './Profile.module.css'
import {ProfileInfo} from './ProfileInfo';
import {MyPosts} from './Myposts';
import {useAppSelector} from '../../store/hooks';
import {useParams} from 'react-router-dom';
import {ProfileAction} from '../../store/features/userFrofile';
import {getProfileApi} from '../../store/features/userFrofile/profileApi';


export const Profile = () => {

    const profile=useAppSelector(state=>state.profilePage);
    const {setProfileUser}=ProfileAction()

    let {userId}=useParams<string>();

  useEffect( () => {
      if (userId===undefined) {
          userId='23943'
      }
      getProfileApi(userId)
            .then(response => {
                setProfileUser(response);
            })
    }, [userId])

    return (
        <div className={a.content}>
            <ProfileInfo {...profile}/>
            <MyPosts/>
        </div>
    )
}