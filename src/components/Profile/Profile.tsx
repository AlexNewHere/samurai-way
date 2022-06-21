import React, {useEffect} from 'react';
import a from './Profile.module.css'
import {useParams} from 'react-router-dom';
import {ProfileAction, profileAPI} from 'store/features';
import {ProfileInfo, MyPosts} from 'components/Profile';
import {useAppDispatch} from 'store/hooks';
import {getProfileThunk} from 'store/features/userFrofile/profileSlice';

export const Profile = () => {

    const {setProfileUser}=ProfileAction()

    const dispatch = useAppDispatch()
    let {userId}=useParams<string>();

  useEffect( () => {
      if (userId===undefined) {
          userId='23943'
      }
      dispatch(getProfileThunk(userId))
      profileAPI.getProfile(userId)
            .then(response => {
                setProfileUser(response);
            })
    }, [userId])

    return (
        <div className={a.content}>
            <ProfileInfo />
            <MyPosts/>
        </div>
    )
}