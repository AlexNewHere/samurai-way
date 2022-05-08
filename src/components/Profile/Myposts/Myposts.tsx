import React, {ChangeEvent} from 'react';
import a from './Myposts.module.css'
import {Post} from './Post/Post';
import {MapDispatchToPropsType, MapStateToPropsType} from "./MypostsContainer";



export const MyPosts: React.FC<MapStateToPropsType & MapDispatchToPropsType> = (props) => {

    let postsElements = props.posts.map(p =>
        <Post
            key={p.id}
            post={p.post}
            id={p.id}
            likesCount={p.likesCount}
        />)

    const addPost = () => {
        props.addPost()
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onPostChange(e.currentTarget.value)
    }

    return (
        <div>
            <div>My posts</div>
            <div>
                <textarea className={a.textarea}
                          placeholder={'Enter your post'}
                          value={props.newPostText}
                          onChange={onPostChange}/>
                <div>
                    <button onClick={addPost}>Submit</button>
                </div>
            </div>

            {postsElements}

        </div>
    )
}