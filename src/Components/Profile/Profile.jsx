import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Description from "./Description/Description";

const Profile = (props) => {
    return (
        <main className={s.content}>
            <Description />
            <MyPosts posts={props.profilePage.posts}
                     changeNewPostText={props.changeNewPostText}
                     newPostText={props.profilePage.newPostText}
                     addPost={props.addPost}/>
        </main>
    );
}

export default Profile;