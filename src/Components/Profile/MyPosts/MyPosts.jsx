import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div className={s.myPosts}>
            <div>
                <h3>My posts</h3>
                <div>
                    <textarea>New Post</textarea>
                </div>
                <button type={"submit"}>Submit</button>
            </div>
            <Post message='Hi how are you?' likes={10}/>
            <Post message="It's my firs project" likes={45}/>
            <Post message="Goodbye" likes={0}/>
        </div>
    )
}

export default MyPosts;