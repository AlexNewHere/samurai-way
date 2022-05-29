import {configureStore} from '@reduxjs/toolkit';
import {usersSlice} from './features/users/usersSlice';
import {postsSlice} from './features/posts/postsSlice';
import {dialogsSlice} from './features/dialogs/dialogsSlice';
import {profileSlice} from './features/userFrofile/profileSlice';

export const store = configureStore({
    reducer: {
        users: usersSlice.reducer,
        posts: postsSlice.reducer,
        dialogs: dialogsSlice.reducer,
        profilePage: profileSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
