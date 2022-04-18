import React from 'react';
// import like from './like.png';
import a from './Post.module.css'
import {PostType} from '../../../../Redux/State';


export const Post = (props: PostType) => {
    return (
        <div>
            <div className={a.item} key={props.id}>
                <span><img className={a.img_logo} src="https://u.kanobu.ru/articles/pics/7e6dc974-43f4-4ad0-9a55-2465566e9662.jpg" alt="Avatar"/></span>
                <span>{props.post}</span>
                <div>
                    <span><img className={a.img_like} src='https://avatanplus.com/files/resources/original/5793ae2d8ca1715618e06208.png' alt="like"/></span>
                    <span className={a.likeNum}>{props.likesCount}</span>
                </div>

            </div>
        </div>

    )
}