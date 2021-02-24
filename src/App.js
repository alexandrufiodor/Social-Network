import React from 'react';
import s from './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";


const App = () => {
    return (
        <div className={s.app_wrapper}>
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}


export default App;
