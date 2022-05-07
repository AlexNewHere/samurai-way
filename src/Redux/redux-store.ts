import {combineReducers, legacy_createStore} from "redux";
import {profileReducer} from "./ProfileReducer";
import {dialogsReducer} from "./DialogsReducer";
import {ActionsType, RootStateType} from "./State";

export type storeType = {
    _state: RootStateType
    _onChange: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsType) => void
}

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

let store: storeType = legacy_createStore(reducers)

export default store