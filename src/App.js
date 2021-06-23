import React, {Component} from 'react';
import s from './App.module.css';
import Navbar from "./components/Navbar/Navbar";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (

            <div className={s.app_wrapper}>
                <HeaderContainer/>
                <Navbar/>

                <div className={s.app_wrapper_content}>

                    <Route render={() => <DialogsContainer/>} path="/dialogs"/>
                    <Route render={() => <ProfileContainer/>} path="/profile/:userId?"/>
                    <Route component={() => <UsersContainer/>} path="/users"/>
                    <Route component={() => <News/>} path="/news"/>
                    <Route component={() => <Music/>} path="/music"/>
                    <Route component={() => <Settings/>} path="/settings"/>
                    <Route component={() => <Login/>} path="/login"/>
                </div>

            </div>


        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, { initializeApp}))(App)


// export default App;
