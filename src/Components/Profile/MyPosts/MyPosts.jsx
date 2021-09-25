import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postElements = props.state.posts
        .map(post => <Post message={post.message} likes={post.likesCount}/> );

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