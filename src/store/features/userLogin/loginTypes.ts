export type LoginResponseType = {
    resultCode: number
    fieldsErrors: any[]
    messages: any[]
    data: LoginDataType
}

export type LoginDataType = {
    userId: number | null
}

export type LoginType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: boolean
    isFetching: boolean
    isSuccess: boolean
    isError: boolean
    errorMessage: string
}


export type FormInputs = {
    email: string
    password: string
    rememberMe: boolean
}





