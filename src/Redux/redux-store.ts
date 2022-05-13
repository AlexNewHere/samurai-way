import {combineReducers, legacy_createStore} from "redux";
import {addPostActionCreator, newPostTextActionCreator, profileReducer} from "./ProfileReducer";
import {addMessageActionCreator, dialogsReducer, newMessageActionCreator} from "./DialogsReducer";


export type RootReducerType= ReturnType<typeof rootReducers>

export type ActionsType =
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof newPostTextActionCreator> |
    ReturnType<typeof addMessageActionCreator> |
    ReturnType<typeof newMessageActionCreator>




let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

let store = legacy_createStore(rootReducers)



export default store