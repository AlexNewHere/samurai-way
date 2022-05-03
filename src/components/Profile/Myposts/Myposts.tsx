import React, {ChangeEvent} from 'react';
import a from './Myposts.module.css'
import {Post} from './Post/Post';
import {ActionsType, ProfilePageType} from '../../../Redux/State';

type PropsType = {
    posts: ProfilePageType
    newPostText: string
    dispatch: (action: ActionsType) => void

}

export const MyPosts = (props: PropsType) => {

    let postsElements = props.posts.posts.map(p =>
        <Post
            post={p.post}
            id={p.id}
            likesCount={p.likesCount}
        />)

    const onButtonClick = () => {
        props.newPostText && props.dispatch({type: 'ADD-POST'}  )
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: 'NEW-POST-TEXT' ,newText: e.currentTarget.value})
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
                    <button onClick={onButtonClick}>Submit</button>
                </div>
            </div>

            {postsElements}

        </div>
    )
}