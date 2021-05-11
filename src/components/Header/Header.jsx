import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://www.logodesign.net/logo/abstract-waves-with-sun-1353ld.png?size=2&industry=All"
                 alt="logo"/>
            <div className={s.loginBlock}>
                {props.isAuth ? <div>{props.login}</div> : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    )
}

export default Header;