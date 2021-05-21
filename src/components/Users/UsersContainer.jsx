import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    followSuccess, getUsers,
    setCurrentPage, toggleIsFollowingInProgress, unfollow,
    unfollowSuccess
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class UsersContainer extends React.Component {

    constructor(props) {
        super(props)

    }
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }


    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        users={this.props.users}
                        followingInProgress={this.props.followingInProgress}/>
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        followingInProgress: state.usersPage.followingInProgress,
    }
}


export default withAuthRedirect(connect(mapStateToProps, {
    setCurrentPage, toggleIsFollowingInProgress,
    getUsers, follow, unfollow
})(UsersContainer));

