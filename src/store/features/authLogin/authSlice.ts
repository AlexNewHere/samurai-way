import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthType} from './authTypes';
import {authApi} from './authApi';
import {AppDispatch} from '../../store';

let initialState: AuthType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authMeUserThunk = createAsyncThunk<void, void, { dispatch: AppDispatch }>(
    'auth/authMeUserThunk',
    async function (_, thunkAPI) {
        try {
            await authApi().then(response => {
                if (response.resultCode === 0) {
                    thunkAPI.dispatch(setAuthUserData(response.data))
                }
            })
        } catch (e) {
            return thunkAPI.rejectWithValue('Не удалось войти в аккаунт - ' + e)
        }
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthUserData: (state: AuthType, action: PayloadAction<AuthType>): AuthType => {
            return {...action.payload, isAuth: true}
        },
    },
    extraReducers: (builder) => {
        builder.addCase(authMeUserThunk.pending, () => {
            console.log('Await authorization')
        })
        builder.addCase(authMeUserThunk.fulfilled, () => {
            console.log('Authorization completed')
        })
        builder.addCase(authMeUserThunk.rejected, (_, action) => {
            console.log(action.payload)
        })

    }
})

export const {setAuthUserData} = authSlice.actions
