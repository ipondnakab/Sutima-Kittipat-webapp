import React from "react";
import PostComponent from "../../components/PostComponent";

function PublicPage() {
  let tem = [
    {
      profile: {
        img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg",
        name: "Kittipat",
        follower: "12.1K",
      },
      post: {
        img: "https://www.treehugger.com/thmb/bM_zeJcC8UpFkNa39UK69dfoT2w=/735x0/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2017__01__cow-in-pasture-crop2-3b8cdbd62aee45f6ab8d49228fa85272.jpg",
        detail:
          "Ipsum is simply dummy text of the printing and typesetting industry. Industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    },
    {
      profile: {
        img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135789.svg",
        name: "Sutima",
        follower: "20.4K",
      },
      post: {
        img: "https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg",
        detail:
          "simply dummy text of the printing and typesetting industry. Industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    },
    {
      profile: {
        img: "https://www.flaticon.com/svg/static/icons/svg/3011/3011292.svg",
        name: "Chakriya",
        follower: "5.12M",
      },
      post: {
        img: "https://dkpo4ygqb6rh6.cloudfront.net/COWSIGNALS_COM/imageresized/4023/8248646f7e35630b2bb4bf597c22b73a/2560_1440_75_fixedjpg/cowsignals_2560px.jpg",
        detail:
          "text of the printing and typesetting industry. Industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    },
  ];
  return (
    <div
      style={{
        paddingBottom: 70,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {tem.map((val, key) => {
        return (
          <div
            style={{
              marginTop: 32,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <PostComponent post={val.post} profile={val.profile} key={key} />
          </div>
        );
      })}
    </div>
  );
}

export default PublicPage;
