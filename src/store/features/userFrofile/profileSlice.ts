import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type PhotoType = {
    small?: string | null
    large?: string | null
}

export type ContactsType = {
    facebook?: string | null
    github?: string | null
    instagram?: string | null
    mainLink?: string | null
    twitter?: string | null
    vk?: string | null
    website?: string | null
    youtube?: string | null
}
export type ProfileUserType = {
    userId: number
    aboutMe: string | null
    contacts: ContactsType
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    photos: PhotoType
}
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
            setProfileUser: (state, action: PayloadAction<ProfileUserType>) => {
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
