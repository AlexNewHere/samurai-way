import React from 'react';
import avatar from '../../../logo/avatar.jpg';
import {NavLink} from 'react-router-dom';
import {useAppDispatch} from 'store/hooks';
import {changeFallowThunk, UserPostType} from 'store/features';

type PropsType = {
    items: Array<UserPostType>
    followingIsProgress: Array<string>
}

export const CardUser: React.FC<PropsType> = ({items, followingIsProgress}) => {

    const dispatch = useAppDispatch()

    return (
        <div className="placeUsers">
            {items.map(user => <div key={user.id} className="users">
                <div>
                    <NavLink to={`/profile/${user.id}`}>
                        <img
                            src={user.photos.small !== null ? user.photos.small : avatar}
                            className="imgAvatar" alt={'avatar'}/>
                    </NavLink>

                    {user.followed ?
                        <button
                            disabled={followingIsProgress.some(id => id === user.id)}
                            onClick={() => {
                                dispatch(changeFallowThunk({
                                    id: user.id,
                                    btnType: 'unfollow'
                                }))
                            }}>Unfollow</button>
                        : <button
                            disabled={followingIsProgress.some(id => id === user.id)}
                            onClick={() => {
                                dispatch(changeFallowThunk({
                                    id: user.id,
                                    btnType: 'follow'
                                }))
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

