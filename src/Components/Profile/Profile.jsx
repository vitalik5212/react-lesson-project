import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Description from "./Description/Description";

const Profile = (props) => {
    return (
        <main className={s.content}>
            <Description />
            <MyPosts state={props.state} addPost={props.addPost}/>
        </main>
    );
}

export default Profile;