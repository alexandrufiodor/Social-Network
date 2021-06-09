import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        // updateNewPostText: (text) => {
        //     let action = updateNewPostTextActionCreator(text)
        //     dispatch(action)
        // },
        addPost: (newPostBody) => {
            dispatch(addPostActionCreator(newPostBody))
            // dispatch(updateNewPostTextActionCreator(''))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;