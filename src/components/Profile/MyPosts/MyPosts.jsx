import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import { maxLengthCreator, requiredField} from "../../../utils/Validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


const MyPosts = (props) => {

    let postsElements = props.profilePage.posts.map((p, index) => {
        return <Post avatar={p.avatar} message={p.message} likesCounter={p.likesCount} key={index}/>
    })


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

const maxLength10 = maxLengthCreator(10)
const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Post Message'}
                       name={'newPostBody'}
                       component={Textarea}
                       validate={[ requiredField,  maxLength10]}/>
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