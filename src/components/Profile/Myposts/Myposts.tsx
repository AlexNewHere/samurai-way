import React, {ReactElement} from 'react';
import {useAppSelector} from 'store/hooks';
import {FormPostType, PostAction} from 'store/features';
import {Post, EmptyPost} from 'components/Profile/Myposts';
import {useForm} from 'react-hook-form';

export const MyPosts = (): ReactElement => {

    const posts = useAppSelector((state) => state.posts.posts);
    const {addPost} = PostAction()

    const {register, handleSubmit, reset} = useForm<FormPostType>();

    const onSubmit = (data: FormPostType) => {
        addPost(data)
        reset()
    }
    return (
        <div>
            <div>My posts</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <textarea {...register('text',
                        {required: true}
                    )}
                              placeholder={'Введи текст'}/>

                <input type="submit" name={'Отправить'}/>
            </form>

            {posts.length ? posts.map(post =>
                    <Post
                        key={post.id}
                        post={post.post}
                        id={post.id}
                        likesCount={post.likesCount}
                    />) :
                <EmptyPost/>}
        </div>
    )
}