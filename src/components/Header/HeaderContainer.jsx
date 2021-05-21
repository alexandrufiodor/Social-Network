import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";
import {compose} from "redux";
import {follow, getUsers, setCurrentPage, toggleIsFollowingInProgress, unfollow} from "../../redux/users-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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
        this.props.getAuthUserData()
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

export default compose(
    connect(mapStateToProps, {
        getAuthUserData
    })
)(HeaderContainer)