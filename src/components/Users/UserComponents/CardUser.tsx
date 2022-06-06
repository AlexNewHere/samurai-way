import React from 'react';
import avatar from '../../../logo/avatar.jpg';
import {follow, PostType, toggleIsFollowing, unfollow} from '../../../store/features/users/usersSlice';
import {AnyAction} from 'redux';
import {NavLink} from 'react-router-dom';
import {fallowApi, unfallowApi} from '../../../api/getApi';


type PropsType = {
    items: Array<PostType>
    follow: (action: AnyAction) => void
    followProgress: (action: AnyAction) => void
    followingIsProgress: Array<string>
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
                        <button disabled={props.followingIsProgress.some(id => id === user.id)}
                                onClick={() => {

                                    props.followProgress(toggleIsFollowing({id: user.id, isFalse: true}))
                                    unfallowApi(user.id)
                                        .then(response => {
                                            if (response.resultCode === 0) {
                                                props.follow(unfollow(user.id))
                                            }
                                            props.followProgress(toggleIsFollowing({id: user.id, isFalse: false}))
                                        })
                                }}>Unfollow</button>
                        : <button disabled={props.followingIsProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      props.followProgress(toggleIsFollowing({id: user.id, isFalse: true}))
                                      fallowApi(user.id)
                                          .then(response => {
                                              if (response.resultCode === 0) {
                                                  props.follow(follow(user.id))
                                              }
                                              props.followProgress(toggleIsFollowing({id: user.id, isFalse: false}))
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

