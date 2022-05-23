// export type CityType = {
//     city: string
//     country: string
// }

export type PhotoType = {
    small?: string | null
    large?: string | null
}

export type PostType = {
    name: string
    id: string
    photos: PhotoType
    status: string
    followed: boolean
    // location: CityType
}
export type UsersPageType = {
    users: Array<PostType>
}

let initialState: UsersPageType = {
    users: []
}
type ActionsType = ReturnType<typeof followAC> |
    ReturnType<typeof unFollowAC> |
    ReturnType<typeof setUsersAC>


export const usersReducer = (state: UsersPageType = initialState,
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
