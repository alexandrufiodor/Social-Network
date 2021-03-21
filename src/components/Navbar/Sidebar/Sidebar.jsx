import s from "./Sidebar.module.css";

export const Sidebar = (props) => {

    let sidebarFriend = props.stateFriends.map((f,index) => {
        return <div className={s.item} key={index}>
            <img src={f.avatar} alt=""/>
            <p>{f.name}</p>
        </div>
    })

    return <div className={s.sidebar}>
        <h3 className={s.title}>
            Friends
        </h3>
        <div className={s.items}>
            {sidebarFriend}
        </div>
    </div>
}
