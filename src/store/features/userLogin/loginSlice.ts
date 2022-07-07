import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppDispatch, RootState} from 'store';
import {
    authApi,
    LoginType,
    AuthType,
    LoginResponseType,
    SetErrorType
} from 'store/features';

let initialState: LoginType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetchLogin: true
}

export const authMeUserThunk = createAsyncThunk<LoginResponseType<AuthType> | void, void, { dispatch: AppDispatch, state: RootState }>(
    'login/authMeUserThunk',
    async function (_, thunkAPI) {
        try {
            let response = await authApi.me()
            if (response.resultCode === 0) {
                thunkAPI.dispatch(setAuthUserData(response.data))
            }
            thunkAPI.dispatch(changeFetching(false))
        } catch (e) {
            return thunkAPI.rejectWithValue('Не удалось войти в аккаунт - ' + e)
        }
    }
)

export const loginUserThunk = createAsyncThunk<void, SetErrorType, { dispatch: AppDispatch }>(
    'login/loginUserThunk',
    async function ({data, setError}, thunkAPI) {
        try {
            let response = await authApi.loginApi(data)
            console.log(response)
            if (response.resultCode === 0) {
                thunkAPI.dispatch(authMeUserThunk())
            }
            if (response.resultCode === 1) {
                setError('error', {
                    type: 'auth',
                    message: 'Не верный логин или пароль'
                })
            }
            if (response.resultCode === 10) {
                setError('error', {
                    type: 'auth',
                    message: 'Слишком много попыток. Введите капчу с картинки'
                })
            }
        } catch (e) {
            return thunkAPI.rejectWithValue('Не удалось войти в аккаунт - ' + e)
        }
    }
)
export const logOutUserThunk = createAsyncThunk<void, void, { dispatch: AppDispatch }>(
    'login/logOutUserThunk',
    async function (_, thunkAPI) {
        try {
            await authApi.logoutApi()
        } catch (e) {
            return thunkAPI.rejectWithValue('Не удалось войти в аккаунт - ' + e)
        }
    }
)

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setAuthUserData: (_, action: PayloadAction<AuthType>): LoginType => {
            return {...action.payload, isAuth: true, isFetchLogin: false}
        },
        changeFetching: (state, action: PayloadAction<boolean>): void => {
            state.isFetchLogin = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(authMeUserThunk.pending, (state) => {
                state.isFetchLogin = true
            })
            .addCase(authMeUserThunk.rejected, (state, action) => {
                console.log(action.payload)
                state.isFetchLogin = false
            })
            .addCase(loginUserThunk.pending, () => {
                console.log('Await authorization')
            })
            .addCase(loginUserThunk.fulfilled, () => {
                console.log('Authorization completed')
            })
            .addCase(loginUserThunk.rejected, (_, action) => {
                console.log(action.payload)
            })
            .addCase(logOutUserThunk.pending, () => {
                console.log('Await logout')
            })
            .addCase(logOutUserThunk.fulfilled, () => {
                return {...initialState, isFetchLogin: false}
            })
            .addCase(logOutUserThunk.rejected, (_, action) => {
                console.log(action.payload)
            })
    }
})

export const {changeFetching ,setAuthUserData} = loginSlice.actions
