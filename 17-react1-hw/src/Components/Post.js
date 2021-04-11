import React from 'react';

const Post = (props) => {
  console.log(props);
  return (
    <div className="wrapper">
      <div className="author">
        <div className="author-avatar"><img src={props.author.photo} alt="avatar" /></div>
        <div className="author-info">
          <div className="author-name">{props.author.name}</div>
          <div className="author-icon"><img src={`${process.env.PUBLIC_URL}/assets/approval-symbol-in-badge.png`} alt="check" /></div>
          <div className="author-nickname">{props.author.nickname}</div>
          <div className="date">{props.date}</div>
          <div className="info-option"><img src={`${process.env.PUBLIC_URL}/assets/down-chevron.png`} alt="arrow-down" /></div>
        </div>
      </div>
      <div className="content">
        <div className="content-text">{props.content}</div>
        <div className="content-image"><img src={props.image} alt="image" /></div>
      </div>
      <div className="social">
        <div className="social-comment"><img src={`${process.env.PUBLIC_URL}/assets/speech-bubble.png`} alt="comment" /> {props.comment}</div>
        <div className="social-retweet"><img src={`${process.env.PUBLIC_URL}/assets/retweet.png`} alt="retweet" /> {props.retweet}</div>
        <div className="social-like"><img src={`${process.env.PUBLIC_URL}/assets/heart.png`} alt="heart" /> {props.like}</div>
        <div className="social-share"><img src={`${process.env.PUBLIC_URL}/assets/upload.png`} alt="upload" /></div>
      </div>
    </div>
  )
}

export default Post;