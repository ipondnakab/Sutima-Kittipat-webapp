import React from "react";
import "./post-component.css";
import iconProfile from "./man.svg";
import postImage from "./bg2.jpg";

function PostCoponent({ profile, post }) {
  return (
    <article className="post-component">
      <header>
        <img src={profile ? profile.img : iconProfile} alt="profile"/>
        <div>
          <h2>{profile ? profile.name : "nameUser"}</h2>
          <p>{profile ? profile.follower : "NoF"}</p>
        </div>
      </header>
      <main>
        {/* <img src={post ? post.image : postImage} /> */}
        <img
          src={post ? post.img : postImage}
          alt="post image"
        />
        <p>
          {post
            ? post.detail
            : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        </p>
      </main>
      <footer>
        <div className="post-footer-left">
          <p>like </p>
          <p>comment</p>
          <p>Chat</p>
        </div>
        <div className="post-footer-right"></div>
      </footer>
    </article>
  );
}

export default PostCoponent;
