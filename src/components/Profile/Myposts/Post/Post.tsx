import React from 'react';
import like from './img/like.png';
import a from './Post.module.css'
import {PostType} from '../../../../store/features/posts/postsSlice';


export const Post: React.FC<PostType> = ( {post, id, likesCount}) => {
    return (

            <div className={a.item} key={id}>
                <span><img className={a.img_logo} src="https://u.kanobu.ru/articles/pics/7e6dc974-43f4-4ad0-9a55-2465566e9662.jpg" alt="Avatar"/></span>
                <span>{post}</span>
                <div>
                    <span><img className={a.img_like} src={like} alt="like"/></span>
                    <span className={a.likeNum}>{likesCount}</span>
                </div>

            </div>


    )
}