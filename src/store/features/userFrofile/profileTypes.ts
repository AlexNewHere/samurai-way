export type PhotoType = {
    small?: string | null
    large?: string | null
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
export type ProfileUserType = {
    userId: number
    aboutMe: string | null
    contacts: ContactsType
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    photos: PhotoType
}