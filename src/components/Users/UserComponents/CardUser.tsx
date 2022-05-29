import React from 'react';
import avatar from '../../../logo/avatar.jpg';
import {follow, PostType, unfollow} from '../../../store/features/users/usersSlice';
import {AnyAction} from 'redux';
import {NavLink} from 'react-router-dom';


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
                            props.follow(follow(user.id))
                        }}>Follow</button>
                        : <button onClick={() => {
                            props.follow(unfollow(user.id))
                        }}>Unfollow</button>}
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

