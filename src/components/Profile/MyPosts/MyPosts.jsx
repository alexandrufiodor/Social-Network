import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";


const MyPosts = (props) => {

    let postsElements = props.profilePage.posts.map((p, index) => {
        return <Post avatar={p.avatar} message={p.message} likesCounter={p.likesCount} key={index}/>
    })

    let newPostElement = React.createRef();

    // const addPost = () => {
    //     props.addPost();
    // }
    //
    // const onPostChange = () => {
    //     let text = newPostElement.current.value;
    //     props.updateNewPostText(text)
    // }
    const addNewPost = (values) => {
        props.addPost(values.newPostBody);
    }
    return (

        <div>
            My posts
            <div>
                <AddPostReduxForm onSubmit={addNewPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Enter your post'} name={'newPostBody'}
                       component={'textarea'}/>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}


const AddPostReduxForm = reduxForm({
    form: 'addPostForm'
})(AddPostForm)

export default MyPosts;