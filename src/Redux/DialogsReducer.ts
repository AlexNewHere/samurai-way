import {ActionsType, DialogsPageType, MessageType} from './State';
import {v1} from 'uuid';

const ADD_MESSAGE = 'ADD-MESSAGE';
const NEW_MESSAGE_TEXT = 'NEW-MESSAGE-TEXT';

export const dialogsReducer = (state: DialogsPageType, action: ActionsType): DialogsPageType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage: MessageType = {
                id: v1(),
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            break;
        case 'NEW-MESSAGE-TEXT':
            state.newMessageText = action.newText
            break;
    }
    return state;
};



export const addMessageActionCreator = () => ({type: ADD_MESSAGE} as const)
export const newMessageActionCreator = (text: string) => ({type: NEW_MESSAGE_TEXT, newText: text} as const)

