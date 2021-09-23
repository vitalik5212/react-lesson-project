import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {

    let posts =  [
        {id: 1, message: 'Hi how are you?', likesCount: 16},
        {id: 2, message: 'It\'s my firs project', likesCount: 45},
        {id: 3, message: 'Goodbye', likesCount: 0},
    ];

    return (
        <div className={s.myPosts}>
            <div>
                <h3>My posts</h3>
                <div>
                    <textarea>New Post</textarea>
                </div>
                <button type={"submit"}>Submit</button>
            </div>
            <Post message={posts[0].message} likes={posts[0].likesCount}/>
            <Post message={posts[1].message} likes={posts[1].likesCount}/>
            <Post message={posts[2].message} likes={posts[2].likesCount}/>
        </div>
    )
}

export default MyPosts;