import React, {ChangeEvent} from 'react';
import a from './Myposts.module.css'
import {Post, EmptyPost} from './index';
import {useAppSelector} from '../../../store/hooks';
import {PostAction} from '../../../store/features/posts';

export const MyPosts = () => {

    const {posts, newPostText} = useAppSelector((state) => state.posts);
    const {onPostChange, addPost} = PostAction()

    const addPostClick = () => {
        addPost()
    }

    const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onPostChange(e.currentTarget.value)
    }

    return (
        <div>
            <div>My posts</div>
            <div>
                <textarea className={a.textarea}
                          placeholder={'Enter your post'}
                          value={newPostText}
                          onChange={onPostChangeHandler}/>
                <div>
                    <button onClick={addPostClick}>Submit</button>
                </div>
            </div>

            {posts.length? posts.map(post =>
                <Post
                    key={post.id}
                    post={post.post}
                    id={post.id}
                    likesCount={post.likesCount}
                />):
            <EmptyPost/>}

        </div>
    )
}