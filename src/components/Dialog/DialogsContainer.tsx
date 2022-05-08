import React from 'react';
import {
    addMessageActionCreator,
    DialogType, MessageType,
    newMessageActionCreator
} from '../../Redux/DialogsReducer';
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {ActionsType, RootReducerType} from "../../Redux/redux-store";


export type MapStateToPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}
export type MapDispatchToPropsType = {
    onPostChange: (texgt: string) => void,
    addPost: () => void
}

let mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
    return {
        onPostChange: (text: string) => {
            dispatch(newMessageActionCreator(text))
        },
        addPost: () => {
            dispatch(addMessageActionCreator())
        }
    }
}

export const DialogsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootReducerType>(mapStateToProps, mapDispatchToProps)(Dialogs)
