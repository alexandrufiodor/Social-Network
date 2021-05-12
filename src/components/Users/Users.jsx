import React from 'react'
import s from './Users.module.css'
import userPhoto from '../../assets/images/avatar.png';
import {NavLink} from "react-router-dom";
import {userAPI} from "../../api/api";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map((p, index) =>
                <span key={index} className={props.currentPage === p && s.selectedPage} onClick={(e) => {
                    props.onPageChanged(p)
                }}>{p}</span>
            )}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={'profile/' + u.id}>
                                    <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt=""
                                         className={s.photo}/>
                                </NavLink>
                            </div>
                            <div>   {u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleIsFollowingInProgress(true, u.id)
                                    userAPI.unfollow(u.id).then(data => {
                                        if (data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                        props.toggleIsFollowingInProgress(false, u.id)
                                    });

                                }}>Unfollow</button> :
                                <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleIsFollowingInProgress(true, u.id)
                                     userAPI.follow(u.id).then(data => {
                                        if (data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                         props.toggleIsFollowingInProgress(false, u.id)
                                    });
                                }}>Follow</button>} </div>
                                </span>
                    <span>
                                <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                                </span>
                                <span>
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
                                </span>
                                </span>
                </div>
            )
        }
    </div>

}

export default Users