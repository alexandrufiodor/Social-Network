import React from 'react';
import s from './Post.module.css'



const Post = (props) => {
    return (
            <div className={s.item}>
                <img src={props.avatar} alt=""/>
                {props.message}
                <div>
                    <span>Like {props.likesCounter}</span>
                </div>
            </div>
    )
}

export default Post;