import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {


    let state = props.store.getState();

    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
        props.store.dispatch(updateNewPostTextActionCreator(''))
    }

    const onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }
    return (

        <MyPosts  updateNewPostText = {onPostChange}
                  addPost = {addPost}
                  posts={state.profilePage.posts}
                  newPostText={state.profilePage.newPostText}  />
    )
}

export default MyPostsContainer;