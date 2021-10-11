import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postElements = props.posts
        .map(post => <Post message={post.message} likes={post.likesCount}/> );

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({
            type: 'ADD-POST'
        });
    }

    let changeNewPostText = () => {
        let text = newPostElement.current.value;
        props.dispatch({
            type: 'CHANGE-NEW-POST-TEXT',
            text: text
        });
    }

    return (
        <div className={s.myPosts}>
            <div>
                <h3>My posts</h3>
                <div>
                    <textarea value={props.newPostText} onChange={changeNewPostText} ref={newPostElement}/>
                </div>
                <button onClick={addPost} type={"submit"}>Submit</button>
            </div>
            {postElements}
        </div>
    )
}

export default MyPosts;