import React from 'react';
import s from './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


const App = (props) => {

    return (
        <BrowserRouter>

                <div className={s.app_wrapper}>
                    <Header/>
                    <Navbar  />

                    <div className={s.app_wrapper_content}>

                        <Route render={() => <DialogsContainer  />} path="/dialogs"/>
                        <Route render={() => <ProfileContainer  />} path="/profile"/>
                        <Route component={() => <UsersContainer  />} path="/users"/>
                        <Route component={() => <News/>} path="/news"/>
                        <Route component={() => <Music/>} path="/music"/>
                        <Route component={() => <Settings/>} path="/settings"/>
                    </div>

                </div>

        </BrowserRouter>
    );
}


export default App;
