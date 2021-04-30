import React from 'react'
import s from './Users.module.css'
import * as axios from 'axios';
import userPhoto from '../../assets/images/avatar.png';

const Users = (props) => {


    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            });
        }
    }



    const follow = (userId) => {
        props.follow(userId);

    }
    const unfollow = (userId) => {
        props.unfollow(userId);

    }


    let usersElement = props.users.map((u, index) => {
        return (
            <div key={index}>
                <span>
                    <div><img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="" className={s.photo}/></div>
                    <div>   {u.followed ? <button onClick={() => unfollow(u.id)}>Unfollow</button> :
                        <button onClick={() => follow(u.id)}>Follow</button>}</div>
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
    })

    return (
        <div>
            {usersElement}
            <button onClick={getUsers}>Get Users</button>
        </div>

    )
}

export default Users