import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {authMe} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // authAPI.me().then(response => {
        //          if (response.resultCode == 0) {
        //             let { email, id, login} = response.data
        //             this.props.setAuthUserData(id, email, login)
        //          }
        //     });
    }

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

export default connect(mapStateToProps, {
    authMe
})(HeaderContainer);