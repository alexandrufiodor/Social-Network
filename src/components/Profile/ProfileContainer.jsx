import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
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
            userID = 12385
        }
        this.props.getUserProfile(userID);
    }

    render() {
        return <div>
            <Profile {...this.props} profile={this.props.profile}/>
        </div>

    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
