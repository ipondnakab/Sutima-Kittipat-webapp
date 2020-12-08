import React, { useState } from "react";
import PostComponent from "../../components/PostComponent";
import HeaderProfile from "../../components/HeaderProfile";
import CreatePost from "../../components/CreatePost";

export default function ProfilePage({ tem, setTem, userData }) {
  return (
    <div style={{ width: "700px", margin: "auto" }}>
      <HeaderProfile userData={userData} />
      <div
        style={{
          paddingBottom: 70,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CreatePost setTem={setTem} tem={tem} userData={userData} />
        {tem.map((val, key) => {
          return val.username == userData.username ? (
            <div
              key={key}
              style={{
                marginTop: 32,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <PostComponent post={val} />
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
}
