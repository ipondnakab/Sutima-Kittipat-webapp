import React, { useState } from "react";
import "./post-component.css";
import iconProfile from "./man.svg";
import postImage from "./bg2.jpg";

function PostCoponent({ post }) {
  function clickLike() {
    setLike(!liked);
  }
  const [liked, setLike] = useState(false);
  return (
    <article className="post-component">
      <header>
        <img
          src={post.imageProfile ? post.imageProfile : iconProfile}
          alt="profile"
        />
        <div>
          <h2>{post.username ? post.username : post.owner}</h2>
          <p>{post.follower ? post.follower : "0"} Follower</p>
        </div>
      </header>
      <main>
        {/* <img src={post ? post.image : postImage} /> */}
        <img src={post.imageUrl ? post.imageUrl : postImage} alt="post image" />
        <p>{post.body ? post.body : "Empty Discription"}</p>
      </main>
      <footer>
        <div className="post-footer-left">
          <p
            onClick={() => clickLike()}
            style={liked ? { color: "#f00" } : { color: "#777" }}
          >
            like{" "}
          </p>
          <p>comment</p>
          {/* <p>Chat</p> */}
        </div>
        <div className="post-footer-right">
          {post.isSale ? (
            <div style={{ display: "flex" }}>
              <p style={{ color: "#aaa" }}>Price:&nbsp;</p>
              <p> {post.price}&nbsp;</p>
              <p style={{ color: "#aaa" }}>Bath&nbsp;&nbsp;</p>{" "}
            </div>
          ) : (
            ""
          )}
        </div>
      </footer>
    </article>
  );
}

export default PostCoponent;
