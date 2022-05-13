import {combineReducers, legacy_createStore} from "redux";
import {addPostActionCreator, newPostTextActionCreator, profileReducer} from "./ProfileReducer";
import {addMessageActionCreator, dialogsReducer, newMessageActionCreator} from "./DialogsReducer";
import {followAC, setUsersAC, unFollowAC, usersReducer} from './UsersReducer';


export type RootReducerType= ReturnType<typeof rootReducers>

export type ActionsType =
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof newPostTextActionCreator> |
    ReturnType<typeof addMessageActionCreator> |
    ReturnType<typeof newMessageActionCreator> |
    ReturnType<typeof followAC> |
    ReturnType<typeof unFollowAC> |
    ReturnType<typeof setUsersAC>

let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

let store = legacy_createStore(rootReducers)



export default store