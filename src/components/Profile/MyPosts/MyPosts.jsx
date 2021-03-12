import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    let posts = [
        {id: 1, message: "Hi, how are you?", avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQwWMJbZoZ26ZyYB8M-1e7OLBVUWXRLNSO6A&usqp=CAU', likesCount: 12},
        {id: 2, message: "It's my first post", avatar: 'https://c0.klipartz.com/pngpicture/534/918/gratis-png-naruto-uzumaki-sasuke-uchiha-rock-lee-kakashi-hatake-gaara-discord-avatar.png', likesCount: 21}
    ]

    let postsElements = posts.map( p => {
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