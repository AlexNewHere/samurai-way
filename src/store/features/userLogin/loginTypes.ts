import {UseFormSetError} from 'react-hook-form';

export type LoginResponseType<D> = {
    resultCode: number
    messages: any[]
    data: D
}
export type AuthType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export type LoginDataType = {
    userId: number | null
}

export type LoginType = AuthType & {
    isFetchLogin: boolean
}

export type FormInputs = {
    email: string
    password: string
    rememberMe: boolean
    error: string
}

export type SetErrorType = {
    data: FormInputs
    setError: UseFormSetError<FormInputs>
}









