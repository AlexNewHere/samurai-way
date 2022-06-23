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

export {profileSlice, ProfileAction, profileAPI, getProfileThunk} from './userFrofile'

export {postsSlice, PostAction} from './posts'

export {statusSlice, getStatusThunk, updateStatusThunk, statusApi} from './userStatus'

export type {UsersStatusType, StatusUpdateType} from './userStatus'

export type {PostType, ProfilePageType} from './posts'

export type {
    ActionFallowProgressType,
    GetUsersType,
    UsersPageType,
    UserType,
    FallowType,
    PhotoType,
    UserPostType
} from './users/userTypes'

export type {
    GetProfileType,
    ProfileUsersType,
    ContactsType,
    PhotoProfileType
} from './userFrofile'
