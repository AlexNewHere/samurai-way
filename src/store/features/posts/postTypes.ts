export type PostType = {
    post: string
    id: string
    likesCount: number
}
export type ProfilePageType = {
    newPostText: string
    posts: Array<PostType>
}