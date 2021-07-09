import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import { logout} from "../../redux/auth-reducer";
import {compose} from "redux";

class HeaderContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    // componentDidMount() {
    //     this.props.getAuthUserData()
    // }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {
        // getAuthUserData,
        logout
    })
)(HeaderContainer)