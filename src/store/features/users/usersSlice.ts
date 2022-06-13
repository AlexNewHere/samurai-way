import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {instance} from '../../../api';
import {RootState} from '../../store';
import {rejects} from "assert";

export type PhotoType = {
    small?: string | null
    large?: string | null
}

interface ActionFallowProgressType {
    id: string
    isFalse: boolean
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
    followingIsProgress: Array<string>
}


let initialState: UsersPageType = {
    items: [],
    totalCount: 0,
    error: null,
    pageSize: 10,
    currentPage: 1,
    isFetching: false,
    followingIsProgress: []
}

export const getUsersThunk = createAsyncThunk(
    'users/getUsersThunk',
    async function (_, thunkAPI) {
        const stateThunk = thunkAPI.getState() as RootState
        try {
            const response = await instance.get(`/users?count=${stateThunk.users.pageSize}&page=${stateThunk.users.currentPage}`)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Не удалось загрузить пользователей - ' + e)
        }
    })

export const changeFallowThunk = createAsyncThunk(
    'users/changeFallowThunk',
    async function ({id, btnType}: { id: string, btnType: string }, thunkAPI) {
        thunkAPI.dispatch(toggleIsFollowing({id, isFalse: true}))
        try {
            switch (btnType) {
                case 'follow': {
                    const response = await instance.post(`/follow/${id}`)

                    return response.data
                }
                case 'unfollow': {
                    const response = await instance.delete(`/follow/${id}`)
                    console.log(response.data)
                    return response.data
                }
            }
        } catch (e) {
            return thunkAPI.rejectWithValue('Не удалось изменить подписку - ' + e)
        }
    }
)

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        follow: (state, action: PayloadAction<string>) => {
            state.items.map(u => u.id === action.payload ? u.followed = true : u)
        },
        unfollow: (state, action: PayloadAction<string>) => {

            state.items.map(u => u.id === action.payload ? u.followed = false : u)
        },
        setPageSize: (state, action: PayloadAction<number>) => {
            state.pageSize = action.payload
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload
        },
        toggleIsFetching: (state, action: PayloadAction<boolean>) => {
            state.isFetching = action.payload
        },
        toggleIsFollowing: (state, action: PayloadAction<ActionFallowProgressType>) => {
            action.payload.isFalse ?
                state.followingIsProgress.push(action.payload.id) :
                state.followingIsProgress = state.followingIsProgress.filter(el => el !== action.payload.id)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUsersThunk.pending, (state) => {
            state.isFetching = true
        })
        builder.addCase(getUsersThunk.fulfilled, (state, action) => {
            state.isFetching = false
            state.items = action.payload.items
            state.totalCount = action.payload.totalCount
        })
        builder.addCase(getUsersThunk.rejected, (state, action) => {
            console.log(action.payload)
        })
        builder.addCase(changeFallowThunk.pending, (state) => {

        })
        builder.addCase(changeFallowThunk.fulfilled, (state, action) => {

        })
        builder.addCase(changeFallowThunk.rejected, (state, action) => {
            console.log(action.payload)
        })
    }
})

export const {
    follow,
    unfollow,
    setPageSize,
    setCurrentPage,
    toggleIsFetching,
    toggleIsFollowing
} = usersSlice.actions
