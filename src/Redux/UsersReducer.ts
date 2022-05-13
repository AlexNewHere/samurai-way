import {ActionsType} from './redux-store';

export type CityType = {
    city: string
    country: string
}

export type PostType = {
    fullName: string
    id: string
    status: string
    followed: boolean
    location: CityType
}
export type UsersPageType = {
    users: Array<PostType>
}

let initialstate: UsersPageType = {

    users: []
}

export const usersReducer = (state: UsersPageType = initialstate,
                             action: ActionsType): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(u => u.id === action.payload.userID ? {...u, followed: false} : u)}
        case 'UN-FOLLOW':
            return {...state, users: state.users.map(u => u.id === action.payload.userID ? {...u, followed: true} : u)}
        case 'SET-USERS':
            return {...state, users: [...state.users, ...action.payload.users]}
        default:
            return state;
    }
};

export const followAC = (userID: string) => ({type: 'FOLLOW', payload: {userID}} as const);
export const unFollowAC = (userID: string) => ({type: 'UN-FOLLOW', payload: {userID}} as const)
export const setUsersAC = (users: Array<PostType>) => ({type: 'SET-USERS', payload: {users}} as const)
