import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {v1} from 'uuid';
import {DialogsPageType} from './dialogsTypes';

let initialState: DialogsPageType = {
  dialogs: [
    {id: v1(), name: 'Alex'},
    {id: v1(), name: 'Oleg'},
  ],

  messages: [
    {id: v1(), message: 'Hi'},
    {id: v1(), message: 'How are you?'},
  ],
  newMessageText: ''
}


export const dialogsSlice = createSlice({
    name: 'dialogs',
  initialState,
  reducers: {
    onPostChangeMessages: (state, action: PayloadAction<string>) => {
      state.newMessageText=action.payload
    },
    addPostMessage: (state) => {
      state.messages.push({id: v1(), message: state.newMessageText})
      state.newMessageText = ''
    },
  },
});
export const {onPostChangeMessages, addPostMessage} = dialogsSlice.actions;