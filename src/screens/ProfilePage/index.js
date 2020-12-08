import React, { useState } from "react";
import PostComponent from "../../components/PostComponent";
import HeaderProfile from "../../components/HeaderProfile";
import CreatePost from "../../components/CreatePost";

function ProfilePage() {
  let [tem, setTem] = useState([
    {
      imageProfile:
        "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg",
      username: "TestUser",
      follower: "0",
      imageUrl:
        "https://www.treehugger.com/thmb/bM_zeJcC8UpFkNa39UK69dfoT2w=/735x0/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2017__01__cow-in-pasture-crop2-3b8cdbd62aee45f6ab8d49228fa85272.jpg",
      body:
        "Ipsum is simply dummy text of the printing and typesetting industry. Industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      imageProfile:
        "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg",
      username: "TestUser",
      follower: "0",
      imageUrl:
        "https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg",
      body:
        "simply dummy text of the printing and typesetting industry. Industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      isSale: true,
      price: 76000,
    },
  ]);
  return (
    <div style={{ width: "700px", margin: "auto" }}>
      <HeaderProfile />
      <div
        style={{
          paddingBottom: 70,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CreatePost setTem={setTem} tem={tem} />
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

export default ProfilePage;
