import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type PhotoType = {
    small?: string | null
    large?: string | null
}

export type PostType = {
    name: string
    id: string
    photos: PhotoType
    status: string
    followed: boolean
    uniqueUrlName?: string | null

}
export type UsersPageType = {
    items: Array<PostType>
    totalCount: number
    error: string | null
    pageSize: number
    currentPage: number
    isFetching: boolean
}
let initialState: UsersPageType = {
    items: [],
    totalCount: 0,
    error: null,
    pageSize: 10,
    currentPage: 1,
    isFetching: false
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        follow: (state, action: PayloadAction<string>) => {
            state.items.map(u => u.id === action.payload ? u.followed = false : u)
        },
        unfollow: (state, action: PayloadAction<string>) => {

            state.items.map(u => u.id === action.payload ? u.followed = true : u)
        },
        setUsers: (state, action: PayloadAction<UsersPageType>) => {
            state.items = action.payload.items
            state.totalCount = action.payload.totalCount
        },
        setPageSize: (state, action: PayloadAction<number>) => {
           state.pageSize = action.payload
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload
        },
        toggleIsFetching: (state, action: PayloadAction<boolean>) => {
            state.isFetching = action.payload
        }

    }
})

export const {follow, unfollow, setUsers, setPageSize, setCurrentPage, toggleIsFetching} = usersSlice.actions
