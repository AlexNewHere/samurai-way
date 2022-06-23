import {configureStore} from '@reduxjs/toolkit';
import {
    usersSlice,
    profileSlice,
    statusSlice,
    loginSlice,
    postsSlice,
    dialogsSlice,
    authSlice
} from 'store/features';

export const store = configureStore({
    reducer: {
        users: usersSlice.reducer,
        posts: postsSlice.reducer,
        dialogs: dialogsSlice.reducer,
        profilePage: profileSlice.reducer,
        authPage: authSlice.reducer,
        status: statusSlice.reducer,
        login: loginSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

//@ts-ignore
window.store = store
