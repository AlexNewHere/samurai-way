export type PostType = {
    post: string
    id: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
}

export type FormPostType = {
    text: string
}