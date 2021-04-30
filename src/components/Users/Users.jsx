import React from 'react'
import s from './Users.module.css'
import * as axios from 'axios';
import userPhoto from '../../assets/images/avatar.png';

class Users extends React.Component {

    constructor(props) {
        super(props)

    }
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    follow = (userId) => {
        this.props.follow(userId);

    }
    unfollow = (userId) => {
        this.props.unfollow(userId);

    }


    render() {
        return <div>

            {
                this.props.users.map(u => <div key={u.id}>
                        <span>
                            <div><img src={u.photos.small !== null ? u.photos.small : userPhoto} alt=""
                                      className={s.photo}/></div>
                            <div>   {u.followed ? <button onClick={() => this.unfollow(u.id)}>Unfollow</button> :
                                <button onClick={() => this.follow(u.id)}>Follow</button>}</div>
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
}

export default Users