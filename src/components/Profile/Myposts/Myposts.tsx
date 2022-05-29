import React, {ChangeEvent} from 'react';
import a from './Myposts.module.css'
import {Post} from './Post/Post';
import {useAppDispatch, useAppSelector} from '../../../store/hooks';
import {addPost, onPostChange} from '../../../store/features/posts/postsSlice';


export const MyPosts = () => {

    const {posts, newPostText}=useAppSelector((state)=>state.posts);
    const dispatch= useAppDispatch()

    let postsElements = posts.map(p =>
        <Post
            key={p.id}
            post={p.post}
            id={p.id}
            likesCount={p.likesCount}
        />)

    const addPostClick = () => {
        dispatch(addPost())
    }

    const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(onPostChange(e.currentTarget.value))
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

            {postsElements}

        </div>
    )
}