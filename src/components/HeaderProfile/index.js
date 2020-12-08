import React from "react";
import "./headerProfile.css";
export default function HeaderProfile({ userData }) {
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
          backgroundImage: `url(${userData.imageCover})`,
        }}
      ></div>
      <div className={"infomation-user"}>
        <img
          alt={"profile image"}
          src={
            userData.imageProfile
              ? userData.imageProfile
              : "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
          }
        />
        <div>
          <h2>{userData.username}</h2>
          <p>
            {userData.numberOfFollower ? userData.numberOfFollower : 0} Follower
          </p>
        </div>
      </div>
    </div>
  );
}
