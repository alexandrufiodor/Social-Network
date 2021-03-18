import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {rerenderEntireTree} from "../../../index";



const MyPosts = (props) => {

    let postsElements = props.posts.map( p => {
        return <Post avatar={p.avatar} message={p.message} likesCounter={p.likesCount}/>
    })

    let  newPostElement = React.createRef();

    const addPost = () => {
        debugger
        let text = newPostElement.current.value;
        newPostElement.current.value = '';

        {props.addPost(text)}
    }
    return (

        <div>
            My posts
            <div>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;