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
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default MyPosts;