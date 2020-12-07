import React from "react";
import "./headerProfile.css";
export default function HeaderProfile() {
  const data = {
    coverImg: "https://wallpaperaccess.com/full/175640.jpg",
    name: "TestUser",
    numberOfFollower: 0,
    img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg",
  };
  return (
    <div className={"header-profile"}>
      <div
        className={"cover-img-div"}
        style={{
          backgroundImage: `url(${data.coverImg})`,
        }}
      ></div>
      <div className={"infomation-user"}>
        <img
          alt={"profile image"}
          src={
            data.img
              ? data.img
              : "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
          }
        />
        <div>
          <h2>{data.name}</h2>
          <p>{data.numberOfFollower} Follower</p>
        </div>
      </div>
    </div>
  );
}
