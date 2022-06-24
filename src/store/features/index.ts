export {
    usersSlice,
    getUsersThunk,
    changeFallowThunk,
    follow,
    unfollow,
    toggleIsFetching,
    toggleIsFollowing,
    setCurrentPage,
    setPageSize
} from './users/usersSlice'
export {UsersAction} from './users/useAction'
export type {
    ActionFallowProgressType,
    GetUsersType,
    UsersPageType,
    UserType,
    FallowType,
    PhotoType,
    UserPostType
} from './users/userTypes'

export {dialogsSlice, addPostMessage} from './dialogs'
export type {MessageType, DialogType, DialogsPageType, FormDialogsType} from './dialogs'


export {postsSlice, PostAction, addPost} from './posts'
export type {PostType, ProfilePageType, FormPostType} from './posts'

export {
    authApi,
    loginSlice,
    loginUserThunk,
    clearState,
    logOutUserThunk,
    authMeUserThunk,
    setAuthUserData
} from './userLogin'
export type {
    LoginType,
    LoginResponseType,
    LoginDataType,
    FormInputs,
    AuthType,
    SetErrorType
} from './userLogin'

export {statusSlice, getStatusThunk, updateStatusThunk, statusApi} from './userStatus'
export type {UsersStatusType, StatusUpdateType} from './userStatus'

export {profileSlice, ProfileAction, profileAPI, getProfileThunk, clearProfileState} from './userFrofile'
export type {
    GetProfileType,
    ProfileUsersType,
    ContactsType,
    PhotoProfileType
} from './userFrofile'
