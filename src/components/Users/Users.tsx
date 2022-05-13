import React from 'react';
import {UsersPropsType} from './UsersContainer';
import {v1} from 'uuid';


export const Users: React.FC<UsersPropsType> = (props) => {

    if (!props.users.length) {
        props.setUsers([
            {
                id: v1(),
                followed: false,
                fullName: 'Oleg O',
                status: 'I am funny',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: v1(),
                followed: true,
                fullName: 'Alex K',
                status: 'I am crazy dog',
                location: {city: 'Minsk', country: 'Belarus'}
            },
        ]);
    }


    return (
        <div>
            {
                props.users.map(user => <div key={user.id}
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
                            src={'https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'}
                            style={{width: '80px'}} alt={'image'}/>

                        {user.followed ?
                            <button onClick={() => {
                                props.onFollow(user.id)
                            }}>Follow</button>
                            : <button onClick={() => {
                                props.unFollow(user.id)
                            }}>Unfollow</button>}

                    </div>

                    <div>
                        {user.fullName}
                        <div> {user.status} </div>
                    </div>
                    <div>
                        <div>{user.location.city}</div>
                        <div>{user.location.country}</div>
                    </div>
                </div>)
            }
        </div>
    );
};

