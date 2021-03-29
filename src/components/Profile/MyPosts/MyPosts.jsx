import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


const MyPosts = (props) => {

    let postsElements = props.posts.map((p,index) => {
        return <Post avatar={p.avatar} message={p.message} likesCounter={p.likesCount} key={index}/>
    })

    let newPostElement = React.createRef();

    const addPost = () => {
        props.dispatch(addPostActionCreator())
        props.dispatch(updateNewPostTextActionCreator(''))
    }

    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text))
    }
    return (

        <div>
            My posts
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;