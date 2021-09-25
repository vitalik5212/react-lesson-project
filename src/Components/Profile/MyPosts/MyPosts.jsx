import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {

    let posts =  [
        {id: 1, message: 'Hi how are you?', likesCount: 16},
        {id: 2, message: 'It\'s my firs project', likesCount: 45},
        {id: 3, message: 'Goodbye', likesCount: 0},
    ];

    let postElements = posts.map(post => <Post message={post.message} likes={post.likesCount}/> );

    return (
        <div className={s.myPosts}>
            <div>
                <h3>My posts</h3>
                <div>
                    <textarea>New Post</textarea>
                </div>
                <button type={"submit"}>Submit</button>
            </div>
            {postElements}
        </div>
    )
}

export default MyPosts;