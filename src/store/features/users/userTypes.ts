export type PhotoType = {
    small?: string | null
    large?: string | null
}

export type ActionFallowProgressType = {
    id: string
    isFalse: boolean
}

export type UserPostType = {
    name: string
    id: string
    photos: PhotoType
    status: string
    followed: boolean
    uniqueUrlName?: string | null

}
export type UserType = {
    name: string
    id: string
    photos: PhotoType
    status: string
    followed: boolean
    uniqueUrlName?: string | null
}

export type UsersPageType = {
    items: Array<UserPostType>
    totalCount: number
    error: string | null
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingIsProgress: Array<string>
}

export type FallowType = {
    data?: any
    fieldsErrors?: any[]
    messages?: []
    resultCode: number
}

export type GetUsersType = {
    items: UserType[]
    error: string | null
    totalCount: number
}