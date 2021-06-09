import React from "react";
import s from './FormsControls.module.css'

const FormControl = ({input, meta, children, ...props}) => {
    const hasError = meta.touched && meta.error && s.error
    return (
        <div className={s.formControl + " " + hasError}>
            <div>
                {children}
            </div>
            {
                meta.touched && meta.error && <span>{meta.error}</span>
            }
        </div>
    )
}

export const Textarea = (props) => {
    return  <FormControl {...props}><textarea {...props.input} {...props}/></FormControl>
}

export const Input = (props) => {
    return  <FormControl {...props}><input {...props.input} {...props}/></FormControl>
}