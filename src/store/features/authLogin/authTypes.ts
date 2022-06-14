export type AuthResponseType = {
resultCode: number
messages: any[],
    data: AuthType
}

export type AuthType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
