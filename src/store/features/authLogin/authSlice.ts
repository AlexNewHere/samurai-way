import {createSlice, PayloadAction} from '@reduxjs/toolkit';


export type AuthType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialState: AuthType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthUserData: (state: AuthType, action: PayloadAction<AuthType>): AuthType => {
            return {...action.payload, isAuth: true}
        },

    }
})

export const {setAuthUserData} = authSlice.actions
