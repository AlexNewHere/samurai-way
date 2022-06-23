export type DialogType = {
    name: string
    id: string
}
export type MessageType = {
    message: string
    id: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export type FormDialogsType = {
    text: string
}