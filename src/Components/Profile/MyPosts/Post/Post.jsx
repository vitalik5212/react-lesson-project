import React from "react";
import s from './Post.module.css';

function Post() {
    return (
        <div className={s.item}>
            <img className={s.icon} src="https://decider.com/wp-content/uploads/2020/12/AVA-NETFLIX-REVIEW.jpg?quality=90&strip=all" alt="img"/>
            Post<br/>
            <span>like</span>
        </div>
    )
}

export default Post;