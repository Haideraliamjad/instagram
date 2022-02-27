import React from 'react'

const Post = ({dp,post,name,views}) => {
    return (
        <div className='post-container'>
            <div className="post-head">
                <div className="left-box">
                    <img src={dp} className="post-img" alt="" />
                    <p>{name}</p>
                </div>
                <i class="fas fa-ellipsis-v"></i>
            </div>
            <img src={post} className="post-content" alt="post" />
            <div className="post-foot">
                <div className="foot-post-left">
                <i class="far fa-heart post-icon"></i>
                <i class="far fa-comment post-icon"></i>
                <i class="far fa-paper-plane post-icon"></i>
                </div>
                <i class="far fa-bookmark post-icon"></i>
            </div>
            <h3 className="view-post">{views} views</h3>
        </div>
    )
}

export default Post
