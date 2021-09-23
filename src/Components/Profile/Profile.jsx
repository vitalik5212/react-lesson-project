import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Description from "./Description/Description";

const Profile = (props) => {
    return (
        <main>
            <Description />
            <MyPosts />
        </main>
    );
}

export default Profile;