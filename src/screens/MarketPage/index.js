import React, { Component, useState, useEffect } from "react";
import PostComponent from "../../components/PostComponent";
import CreatePost from "../../components/CreatePost";
import axios from "axios";

function MarketPage({ tem, setTem }) {
  return (
    <div
      style={{
        paddingBottom: 70,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          marginTop: 32,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      ></div>
      {tem.map((val, key) => {
        return val.isSale ? (
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
  );
}

export default MarketPage;
