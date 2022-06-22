export type PhotoProfileType = {
    small: string
    large: string
}

export type ContactsType = {
    facebook?: string | null
    github?: string | null
    instagram?: string | null
    mainLink?: string | null
    twitter?: string | null
    vk?: string | null
    website?: string | null
    youtube?: string | null
}
export type GetProfileType = {
    userId: number
    aboutMe: string | null
    contacts: ContactsType
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    photos: PhotoProfileType | undefined
}
export type ProfileUsersType = {
    profile: GetProfileType
    isLoading: boolean
}


