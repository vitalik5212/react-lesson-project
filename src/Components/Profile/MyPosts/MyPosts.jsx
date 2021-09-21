import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div>
            <div>
                <textarea>New Post</textarea>
                <button type={"submit"}>Submit</button>
            </div>
            <Post message='Hi how are you?' likes={10}/>
            <Post message="It's my firs project" likes={45}/>
            <Post message="Goodbye" likes={0}/>
        </div>
    )
}

export default MyPosts;