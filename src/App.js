import React from 'react';
import s from './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className={s.app_wrapper}>
                <Header/>
                <Navbar state={props.state.sideBar}/>

                <div className={s.app_wrapper_content}>

                    <Route render={() => <Dialogs state={props.state.dialogsPage}
                                                  updateNewMessageText={props.updateNewMessageText}
                                                  addMessage={props.addMessage}/>}
                           path="/dialogs"/>
                    <Route component={() => <Profile state={props.state.profilePage}
                                                     updateNewPostText={props.updateNewPostText}
                                                     addPost={props.addPost}/>} path="/profile"/>
                    <Route component={() => <News/>} path="/news"/>
                    <Route component={() => <Music/>} path="/music"/>
                    <Route component={() => <Settings/>} path="/settings"/>
                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
