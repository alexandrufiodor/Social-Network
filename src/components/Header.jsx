import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://www.logodesign.net/logo/abstract-waves-with-sun-1353ld.png?size=2&industry=All"
                 alt="logo"/>
        </header>
    )
}

export default Header;