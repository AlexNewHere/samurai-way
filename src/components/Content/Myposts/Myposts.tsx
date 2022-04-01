import React from 'react';
import a from './Myposts.module.css'
import {Post} from './Post/Post';


export const Myposts = () => {
    return (
        <div>
            <div>
                <textarea></textarea>
                <div>
                    <button>submit</button>
                </div>
            </div>
            <Post/>
            <Post/>
        </div>

    )
}