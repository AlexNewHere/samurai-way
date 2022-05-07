import React from 'react';
import {storeType} from '../../Redux/State';
import {addMessageActionCreator, newMessageActionCreator} from '../../Redux/DialogsReducer';
import {Dialogs} from "./Dialogs";

type PageStateType = {
    store: storeType
}

export const DialogsContainer = (props: PageStateType) => {

    const state = props.store.getState().dialogsPage

       const addPost = () => {
        state.newMessageText && props.store.dispatch(addMessageActionCreator())
    }

    const onPostChange = (text: string) => {
        console.log(text)
        props.store.dispatch(newMessageActionCreator(text))
    }

    return (
        <Dialogs
            dialogs={state.dialogs}
            messages={state.messages}
            newMessageText={state.newMessageText}
            onPostChange={onPostChange}
            addPost={addPost}/>
    )
}

