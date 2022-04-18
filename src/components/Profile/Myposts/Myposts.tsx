import React, {ChangeEvent} from 'react';
import a from './Myposts.module.css'
import {Post} from './Post/Post';
import {ProfilePageType} from '../../../Redux/State';

type PropsType = {
    posts: ProfilePageType
    newPostText: string
    addPost: (postText: string) => void
    changeNewText: (newText: string) => void
}

export const MyPosts = (props: PropsType) => {

    let postsElements = props.posts.posts.map(p => <Post post={p.post} id={p.id} likesCount={p.likesCount}/>)

    const onButtonClick = () => {

        if (props.newPostText) {props.addPost(props.newPostText)}

    }


    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
       props.changeNewText(e.currentTarget.value)
    }

    return (
        <div>
            <div>My posts</div>
            <div>
                <textarea className={a.textarea}
                          placeholder={'Enter your post'}
                          value={props.newPostText}
                          onChange={onPostChange}>
                 </textarea>
                <div>
                    <button onClick={onButtonClick}>Submit</button>
                </div>
            </div>

            {postsElements}

        </div>
    )
}