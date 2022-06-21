export {
    usersSlice,
    getUsersThunk,
    changeFallowThunk,
    follow,
    unfollow,
    toggleIsFetching,
    toggleIsFollowing
} from './users/usersSlice'
export {UsersAction} from './users/useAction'

export {profileSlice, ProfileAction} from './userFrofile'
export {postsSlice, PostAction} from './posts'
export type {PostType, ProfilePageType} from './posts'
export type {ProfileUserType} from './userFrofile'


export type {
    ActionFallowProgressType,
    GetUsersType,
    UsersPageType,
    UserType,
    FallowType,
    PhotoType,
    UserPostType
} from './users/userTypes'
