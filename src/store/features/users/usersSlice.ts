import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UsersPageType, GetUsersType, ActionFallowProgressType} from 'store/features';
import {AppDispatch, RootState} from 'store/store';
import {fallowApi, getUsersApi, unfallowApi} from 'store/features/users';

let initialState: UsersPageType = {
    items: [],
    totalCount: 0,
    error: null,
    pageSize: 10,
    currentPage: 1,
    isFetching: false,
    followingIsProgress: []
}

export const getUsersThunk = createAsyncThunk<GetUsersType, void, { state: RootState, dispatch: AppDispatch }>(
    'users/getUsersThunk',
    async function (_, thunkAPI) {
        const stateThunk = thunkAPI.getState()
        try {
            return await getUsersApi(stateThunk.users.pageSize, stateThunk.users.currentPage)
        } catch (e) {
            return thunkAPI.rejectWithValue('Не удалось загрузить пользователей - ' + e)
        }
    })

export const changeFallowThunk = createAsyncThunk<void, { id: string, btnType: string }, { dispatch: AppDispatch }>(
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
        .addCase(getUsersThunk.fulfilled, (state, action) => {
            state.isFetching = false
            state.items = action.payload.items
            state.totalCount = action.payload.totalCount
        })
        .addCase(getUsersThunk.rejected, (state, action) => {
            console.log(action.payload)
        })
        .addCase(changeFallowThunk.pending, () => {
            console.log('button pending')
        })
        .addCase(changeFallowThunk.fulfilled, () => {
            console.log('button fulfilled')
        })
        .addCase(changeFallowThunk.rejected, (_, action) => {
            console.log(action.payload)
        })
    }
})

export const {
    follow,
    unfollow,
    toggleIsFetching,
    toggleIsFollowing
} = usersSlice.actions
