import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {v1} from 'uuid';
import {DialogsPageType, FormDialogsType} from 'store/features';

let initialState: DialogsPageType = {
    dialogs: [
        {id: v1(), name: 'Alex'},
        {id: v1(), name: 'Oleg'},
    ],

    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How are you?'},
    ]
}

export const dialogsSlice = createSlice({
    name: 'dialogs',
    initialState,
    reducers: {
        addPostMessage: (state, action: PayloadAction<FormDialogsType>) => {
            state.messages.push({id: v1(), message: action.payload.text})
        },
    },
});
export const {addPostMessage} = dialogsSlice.actions;