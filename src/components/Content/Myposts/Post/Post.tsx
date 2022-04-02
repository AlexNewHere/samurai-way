import React from 'react';
// import like from './like.png';
import a from './Post.module.css'

type PropsType = {
    message: string,
    likePost: number
    }


export const Post = (props: PropsType) => {
    return (
        <div>
            <div className={a.item}>
                <span><img className={a.img_logo} src="https://u.kanobu.ru/articles/pics/7e6dc974-43f4-4ad0-9a55-2465566e9662.jpg" alt="Avatar"/></span>
                <span>{props.message}</span>
                <div>
                    <span><img className={a.img_like} src='https://avatanplus.com/files/resources/original/5793ae2d8ca1715618e06208.png' alt="like"/></span>
                    <span className={a.likeNum}>{props.likePost}</span>
                </div>

            </div>
        </div>

    )
}