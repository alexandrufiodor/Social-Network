import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = (props) => {


    // // let state = props.store.getState();
    //
    // const addPost = () => {
    //     props.store.dispatch(addPostActionCreator())
    //     props.store.dispatch(updateNewPostTextActionCreator(''))
    // }
    //
    // const onPostChange = (text) => {
    //     let action = updateNewPostTextActionCreator(text)
    //     props.store.dispatch(action)
    // }
    return (
        <StoreContext.Consumer>{
            (store) => {
                let state =  store.getState();

                const addPost = () => {
                    store.dispatch(addPostActionCreator())
                    store.dispatch(updateNewPostTextActionCreator(''))
                }

                const onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text)
                    store.dispatch(action)
                }

                return <MyPosts updateNewPostText={onPostChange}
                                addPost={addPost}
                                posts={state.profilePage.posts}
                                newPostText={state.profilePage.newPostText}/>
            }

        }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;