import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fallowApi, instance, unfallowApi} from 'api';
import {AppDispatch, RootState} from '../../store';

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
export type UserType = {
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

export type FallowType = {
    data?: any
    fieldsErrors?: any[]
    messages?: []
    resultCode: number
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


type GetUsersType = {
    items: UserType[]
    error: string | null
    totalCount: number
}

export const getUsersThunk = createAsyncThunk<GetUsersType, void, { state: RootState, dispatch: AppDispatch }>(
    'users/getUsersThunk',
    async function (_, thunkAPI) {
        const stateThunk = thunkAPI.getState()
        try {
            const response = await instance.get<GetUsersType>(`/users?count=${stateThunk.users.pageSize}&page=${stateThunk.users.currentPage}`)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Не удалось загрузить пользователей - ' + e)
        }
    })

export const changeFallowThunk = createAsyncThunk<void, { id: string, btnType: string },{dispatch: AppDispatch} >(
    'users/changeFallowThunk',
    async function ({id, btnType}, thunkAPI) {
        thunkAPI.dispatch(toggleIsFollowing({id, isFalse: true}))
        try {
            switch (btnType) {
                case 'follow': {
                    await fallowApi(id).then(res => {
                        if (res.resultCode === 0) {
                            thunkAPI.dispatch(follow(id))
                        }
                        thunkAPI.dispatch(toggleIsFollowing({id, isFalse: false}))
                    })
                    break
                }
                case 'unfollow': {
                    await unfallowApi(id).then(res => {
                        if (res.resultCode === 0) {
                            thunkAPI.dispatch(unfollow(id))
                        }
                        thunkAPI.dispatch(toggleIsFollowing({id, isFalse: false}))
                    })
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
        builder.addCase(changeFallowThunk.pending, () => {
            console.log('button pending')
        })
        builder.addCase(changeFallowThunk.fulfilled, () => {
            console.log('button fulfilled')
        })
        builder.addCase(changeFallowThunk.rejected, (_, action) => {
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
