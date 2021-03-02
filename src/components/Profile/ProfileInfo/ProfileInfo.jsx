import s from "../Profile.module.css";

export const ProfileInfo = () => {
    return <div>
        <div className={s.content_img}>
            <img
                src="https://www.etisalat.ae/en/images/ptc-annual-conference-homepage-1920x500_tcm313-157350.jpg"
                alt=""/>
        </div>
        <div>
            ava + description
        </div>
    </div>
}