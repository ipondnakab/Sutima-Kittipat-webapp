import React, { useState } from "react";
import PostComponent from "../../components/PostComponent";
import HeaderProfile from "../../components/HeaderProfile";
import CreatePost from "../../components/CreatePost";

export default function PublicPage({ tem, setTem, userData}) {
  return (
    <div style={{ width: "700px", margin: "auto", marginTop: "100px" }}>
      <div
        style={{
          paddingBottom: 70,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CreatePost setTem={setTem} tem={tem} userData={userData}/>
        {tem.map((val, key) => {
          return (
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
          );
        })}
      </div>
    </div>
  );
}
