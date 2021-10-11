import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Description from "./Description/Description";

const Profile = (props) => {
    return (
        <main className={s.content}>
            <Description />
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}/>
        </main>
    );
}

export default Profile;