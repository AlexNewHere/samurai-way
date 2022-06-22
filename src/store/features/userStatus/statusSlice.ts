import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {AppDispatch} from 'store/store';
import {statusApi, UsersStatusType} from 'store/features/userStatus';

let initialState: UsersStatusType = {
    status: null,
    isLoading: false
}

export const getStatusThunk = createAsyncThunk<string | null, string, { dispatch: AppDispatch }>(
    'userStatus/getStatusThunk',
    async function (id, thunkAPI) {
        try {
            return await statusApi.getStatus(id)
        } catch (e) {
            return thunkAPI.rejectWithValue('Не удалось загрузить статус - ' + e)
        }
    })
export const updateStatusThunk = createAsyncThunk<void, string, { dispatch: AppDispatch }>(
    'userStatus/updateStatusThunk',
    async function (status, thunkAPI) {
        try {
            await statusApi.updateStatus(status)
            // thunkAPI.dispatch(getStatusThunk(MY_ID_NUMBER))
        } catch (e) {
            return thunkAPI.rejectWithValue('Не удалось загрузить статус - ' + e)
        }
    })

export const statusSlice = createSlice({
    name: 'userStatus',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getStatusThunk.pending, (state) => {
            state.isLoading = true
        })
            .addCase(getStatusThunk.fulfilled, (state, action) => {
                state.isLoading = false
                state.status = action.payload
            })
            .addCase(getStatusThunk.rejected, (state) => {
                state.isLoading = false
            })
            .addCase(updateStatusThunk.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateStatusThunk.fulfilled, (state) => {
                state.isLoading = false
            })
            .addCase(updateStatusThunk.rejected, (state) => {
                state.isLoading = false
            })
    }
})

// export const {} = statusSlice.actions
