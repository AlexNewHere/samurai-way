import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {AppDispatch} from 'store';
import {loginApi, LoginType, FormInputs} from 'store/features';

let initialState: LoginType = {
    password: '',
    email: '',
    rememberMe: false,
    captcha: false,
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
}

export const loginUserThunk = createAsyncThunk<void, FormInputs, { dispatch: AppDispatch }>(
    'login/loginUserThunk',
    async function (data, thunkAPI) {
        try {
            await loginApi(data).then(res=>console.log(res))
        } catch (e) {
            return thunkAPI.rejectWithValue('Не удалось войти в аккаунт - ' + e)
        }
    }
)

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        clearState: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isFetching = false;
        }

    },
    extraReducers: (builder) => {
        builder.addCase(loginUserThunk.pending, () => {
            console.log('Await authorization')
        })
        builder.addCase(loginUserThunk.fulfilled, () => {
            console.log('Authorization completed')
        })
        builder.addCase(loginUserThunk.rejected, (_, action) => {
            console.log(action.payload)
        })

    }
})

export const {clearState} = loginSlice.actions
