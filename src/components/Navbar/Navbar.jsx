import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {Sidebar} from "./Sidebar/Sidebar";

const Navbar = (props) => {

    return (
        <div className={s.navBar}>
            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/news" activeClassName={s.active}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
                </div>
            </nav>


            {/*<Sidebar stateFriends={props.store.sideBar.friends}/>*/}

        </div>

    )
}

export default Navbar;