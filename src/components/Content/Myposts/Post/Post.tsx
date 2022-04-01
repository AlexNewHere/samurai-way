import React from 'react';
import a from './Post.module.css'


export const Post = () => {
    return (
        <div>
            <div className={a.item}>
                <img src="https://u.kanobu.ru/articles/pics/7e6dc974-43f4-4ad0-9a55-2465566e9662.jpg" alt="Avatar"/>
                post1
                <div>
                    <span>like</span>
                </div>

            </div>
        </div>

    )
}