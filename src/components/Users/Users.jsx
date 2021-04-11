import React from 'react'
import s from './Users.module.css'

const Users = (props) => {



    const setUsers = () => {
        if (props.users.length === 0) {
            props.setUsers([{
                id: 1,
                photoURL: 'https://c0.klipartz.com/pngpicture/534/918/gratis-png-naruto-uzumaki-sasuke-uchiha-rock-lee-kakashi-hatake-gaara-discord-avatar.png',
                followed: false,
                fullName: 'Alex',
                status: 'React Developer',
                location: {city: 'Tiraspol', country: 'Moldova'}
            },
                {
                    id: 2,
                    photoURL: 'https://c0.klipartz.com/pngpicture/534/918/gratis-png-naruto-uzumaki-sasuke-uchiha-rock-lee-kakashi-hatake-gaara-discord-avatar.png',
                    followed: true,
                    fullName: 'Ion',
                    status: 'C# Developer',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 3,
                    photoURL: 'https://c0.klipartz.com/pngpicture/534/918/gratis-png-naruto-uzumaki-sasuke-uchiha-rock-lee-kakashi-hatake-gaara-discord-avatar.png',
                    followed: false,
                    fullName: 'Dan',
                    status: 'JS Developer',
                    location: {city: 'Minsk', country: 'Belarus'}
                }]);

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
                    <div><img src={u.photoURL} alt="" className={s.photo}/></div>
                    <div>   {u.followed ? <button onClick={() => unfollow(u.id)}>Unfollow</button> :
                        <button onClick={() => follow(u.id)}>Follow</button>}</div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>


            </div>
        )
    })

    return (
        <div>
            {usersElement}


            <button onClick={setUsers}>Set Users</button>

        </div>
    )
}

export default Users