import React from 'react';
import avatar from '../../../logo/avatar.jpg';
import {follow, PostType, unfollow} from '../../../store/features/users/usersSlice';
import {AnyAction} from 'redux';
import {NavLink} from 'react-router-dom';
import axios from 'axios';


type PropsType = {
    items: Array<PostType>
    follow: (action: AnyAction) => void
}

export const CardUser: React.FC<PropsType> = (props) => {

    return (
        <div className="placeUsers">
            {props.items.map(user => <div key={user.id} className="users">
                <div>
                    <NavLink to={`/content/${user.id}`}>
                        <img
                            src={user.photos.small !== null ? user.photos.small : avatar}
                            className="imgAvatar" alt={'avatar'}/>
                    </NavLink>

                    {user.followed ?
                        <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${user.id}`,
                                {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '34a6ba5d-948d-420a-986a-4ade213dda25'
                                    }
                                })
                                .then(response => {
                                    console.log(response.data.resultCode)
                                    if (response.data.resultCode === 0) {
                                        props.follow(unfollow(user.id))
                                    }
                                })
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${user.id}`, {},
                                {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '34a6ba5d-948d-420a-986a-4ade213dda25'
                                    }
                                })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(follow(user.id))
                                    }
                                })
                        }}>Follow</button>}
                </div>
                <div>
                    {user.name}
                    <div> {user.status} </div>
                </div>
                <div>
                    <div>city</div>
                    <div>country</div>
                </div>
            </div>)
            }
        </div>
    );
}

