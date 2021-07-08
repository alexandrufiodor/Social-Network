import React from 'react';
import s from "../Profile.module.css";
import Preloader from "../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

export const ProfileInfo = (props) => {
        return <div>
            <div className={s.content_img}>
                <img
                    src="https://www.etisalat.ae/en/images/ptc-annual-conference-homepage-1920x500_tcm313-157350.jpg"
                    alt=""/>
            </div>
            {props.profile ?
                <div>
                    <div><img src={props.profile.photos.large} /></div>
                    <div>{props.profile.fullName}</div>
                    <div>Status: <ProfileStatusWithHooks status={props.status} updateStatus = {props.updateStatus}/></div>
                    <div>About me: {props.profile.aboutMe}</div>
                    <div>Job Description: {props.profile.lookingForAJobDescription}</div>
                </div> :  <Preloader />
            }

        </div>

}