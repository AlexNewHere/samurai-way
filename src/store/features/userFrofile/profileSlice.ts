import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProfileUserType} from './index';


let initialState: ProfileUserType = {
    userId: 1,
    aboutMe: null,
    contacts: {},
    fullName: '',
    lookingForAJob: false,
    lookingForAJobDescription:  null,
    photos: {}
}

export const profileSlice = createSlice({
    name: 'profilePage',
    initialState,
    reducers: {
            setProfileUser: (_, action: PayloadAction<ProfileUserType>) => {
            return action.payload
        },
        // setPageSize: (state, action: PayloadAction<number>) => {
        //    state.pageSize = action.payload
        // },
        // setCurrentPage: (state, action: PayloadAction<number>) => {
        //     state.currentPage = action.payload
        // },
        // toggleIsFetching: (state, action: PayloadAction<boolean>) => {
        //     state.isFetching = action.payload
        // }

    }
})

export const {setProfileUser} = profileSlice.actions
