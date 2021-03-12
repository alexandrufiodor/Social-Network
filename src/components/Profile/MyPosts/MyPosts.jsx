import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";



const MyPosts = (props) => {

    let postsElements = props.posts.map( p => {
        return <Post avatar={p.avatar} message={p.message} likesCounter={p.likesCount}/>
    })

    return (

        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;