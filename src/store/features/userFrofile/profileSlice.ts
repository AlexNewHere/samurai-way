import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {GetProfileType, profileAPI, ProfileUsersType} from 'store/features';


let initialState: ProfileUsersType = {
    profile: {} as GetProfileType,
    isLoading: false
}

export const getProfileThunk = createAsyncThunk<GetProfileType, string>(
    'profilePage/getProfileThunk',
    async function (id, thunkAPI) {
        try {
            return await profileAPI.getProfile(id)
        } catch (e) {
            return thunkAPI.rejectWithValue('Не удалось загрузить профиль - ' + e)
        }
    })


export const profileSlice = createSlice({
    name: 'profilePage',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProfileThunk.pending, (state) => {
            state.isLoading = true
        })
            .addCase(getProfileThunk.fulfilled, (state, action) => {
                state.isLoading = false
                state.profile = action.payload
            })
            .addCase(getProfileThunk.rejected, (state) => {
                state.isLoading = false
            })

    }
})

export const {} = profileSlice.actions
