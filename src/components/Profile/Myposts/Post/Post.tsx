import React from 'react';
import like from './img/like.png';
import avatar from './img/avatar.png';
import a from './Post.module.css'
import {PostType} from '../../../../store/features/posts';

export const Post: React.FC<PostType> = ( {post, id, likesCount}) => {
    return (

            <div className={a.item} key={id}>
                <span><img className={a.img_logo} src={avatar} alt="Avatar"/></span>
                <span>{post}</span>
                <div>
                    <span><img className={a.img_like} src={like} alt="like"/></span>
                    <span className={a.likeNum}>{likesCount}</span>
                </div>

            </div>


    )
}