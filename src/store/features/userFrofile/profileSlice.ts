import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {GetProfileType, profileAPI} from 'store/features';
import {AppDispatch, RootState} from 'store/store';
import {ProfileUserType} from 'store/features/userFrofile/profileTypes';


let initialState: ProfileUserType = {
    userId: 1,
    aboutMe: null,
    contacts: {},
    fullName: '',
    lookingForAJob: false,
    lookingForAJobDescription: null,
    photos: {},
    status: ''
}

export const getProfileThunk = createAsyncThunk<GetProfileType, string, { state: RootState, dispatch: AppDispatch }>(
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
    reducers: {
        setProfileUser: (_, action: PayloadAction<ProfileUserType>) => {
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

    },
    extraReducers: (builder) => {
        builder.addCase(getProfileThunk.pending, (state) => {
            console.log('Pending profile')
        })
            .addCase(getProfileThunk.fulfilled, (state, action) => {
                console.log(action.payload)
            })
            .addCase(getProfileThunk.rejected, (state, action) => {
                console.log(action.payload)
            })
    }
})

export const {setProfileUser} = profileSlice.actions
