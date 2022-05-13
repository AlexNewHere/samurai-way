import {
    addMessageActionCreator,
    DialogType, MessageType,
    newMessageActionCreator
} from '../../Redux/DialogsReducer';
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootReducerType} from "../../Redux/redux-store";
import {Dispatch} from 'redux';


export type MapStateToPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}
export type MapDispatchToPropsType = {
    onPostChange: (texgt: string) => void,
    addPost: () => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
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
