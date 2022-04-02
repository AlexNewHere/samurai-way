import React from 'react';
import a from './Myposts.module.css'
import {Post} from './Post/Post';



export const Myposts = () => {
    return (
        <div>
            <div>
                <textarea className={a.textarea}></textarea>
                <div>
                    <button>submit</button>
                </div>
            </div>
            <Post message={'Hi. I am here!'} likePost={15} />
            <Post message={'I am fine'} likePost={25}/>
        </div>
    )
}