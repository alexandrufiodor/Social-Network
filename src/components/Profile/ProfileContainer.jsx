import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    constructor(props) {
        super(props)

    }

    componentDidMount() {
        let userID = this.props.match.params.userId

        if (!userID) {
            userID = this.props.authorizedUserId
        }
        this.props.getUserProfile(userID);
        this.props.getUserStatus(userID);
    }

    render() {
        return <div>
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus = {this.props.updateStatus}/>
        </div>

    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus}),
    withRouter
)(ProfileContainer)
