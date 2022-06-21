import {configureStore} from '@reduxjs/toolkit';
import {usersSlice, profileSlice} from 'store/features';
import {postsSlice} from 'store/features/posts';
import {dialogsSlice} from 'store/features/dialogs';
import {authSlice} from 'store/features/authLogin';

export const store = configureStore({
    reducer: {
        users: usersSlice.reducer,
        posts: postsSlice.reducer,
        dialogs: dialogsSlice.reducer,
        profilePage: profileSlice.reducer,
        authPage: authSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

//@ts-ignore
window.store=store
