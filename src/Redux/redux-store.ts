import {combineReducers, legacy_createStore} from "redux";
import {profileReducer} from "./ProfileReducer";
import {dialogsReducer} from "./DialogsReducer";
import {usersReducer} from './UsersReducer';

export type RootReducerType= ReturnType<typeof rootReducers>

let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

let store = legacy_createStore(rootReducers)


export default store