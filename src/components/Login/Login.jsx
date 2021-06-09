import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/Validators/validators";

const maxLength12 = maxLengthCreator(12)

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'}
                       name={'login'}
                       component={Input}
                       validate={[ requiredField,  maxLength12]}/>
            </div>
            <div>
                <Field placeholder={'Password'}
                       name={'password'}
                       component={Input}
                       validate={[ requiredField,  maxLength12]}/>
            </div>
            <div>
                <Field
                       name={'rememberMe'}
                       type={"checkbox"}
                       component={Input}
                       validate={[ requiredField]}/>
                remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


const Login = (props) => {
const onSubmit = (formData) => {
    console.log(formData)
}
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
export default Login