import React from 'react';
import avatar from '../../../logo/avatar.jpg';
import {
    changeFallowThunk,
    PostType,
} from '../../../store/features/users/usersSlice';
import {AnyAction} from 'redux';
import {NavLink} from 'react-router-dom';
import {useAppDispatch} from '../../../store/hooks';

type PropsType = {
    items: Array<PostType>
    follow: (action: AnyAction) => void
    followProgress: (action: AnyAction) => void
    followingIsProgress: Array<string>
}

export const CardUser: React.FC<PropsType> = (props) => {

    const dispatch = useAppDispatch()

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
                        <button disabled={props.followingIsProgress.some(id => id === user.id)}
                                onClick={() => {
                                    dispatch(changeFallowThunk({id: user.id, btnType: 'unfollow'}))
                                }}>Unfollow</button>
                        : <button disabled={props.followingIsProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      dispatch(changeFallowThunk({id: user.id, btnType: 'follow'}))
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

