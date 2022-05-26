import React, {useEffect} from 'react';
import {UsersPropsType} from './UsersContainer';
import axios from 'axios';
import avatar from '../../logo/avatar.jpg'
import {UsersPageType} from '../../Redux/UsersReducer';

export const Users: React.FC<UsersPropsType> = (props) => {

    useEffect(()=> {

        axios.get<UsersPageType>('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
               props.setUsers(response.data.items)
                console.log(response.data)
            })
    }, [])

    return (
        <div>

            {
                props.items.map(user => <div key={user.id}
                                             style={{
                                                 display: 'grid',
                                                 width: '50%',
                                                 gridTemplateColumns: '1fr 3fr 1fr',
                                                 margin: '15px',
                                                 backgroundColor: '#F3BF88FF',
                                                 padding: '5px'
                                             }}>
                    <div>
                        <img
                            src={user.photos.small!==null ? user.photos.small : avatar}
                            style={{width: '80px'}} alt={'avatar'}/>

                        {user.followed ?
                            <button onClick={() => {
                                props.onFollow(user.id)
                            }}>Follow</button>
                            : <button onClick={() => {
                                props.unFollow(user.id)
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
};

