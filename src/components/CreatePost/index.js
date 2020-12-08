import React, { Component } from "react";
import "./createPost.css";
import iconProfile from "./man.svg";
import postImage from "./bg2.jpg";
import axios from "axios";

export default class PostComponent extends Component {
  fileObj = [];
  fileArray = [];
  constructor(props) {
    super(props);
    this.state = {
      file: [],
      profile: props.userData,
      discription: "",
      price: null,
      isSale: false,
    };
    this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this);
    this.uploadFiles = this.uploadFiles.bind(this);
  }

  uploadMultipleFiles(e) {
    console.log(e);
    this.fileObj.push(e.target.files);
    for (let i = 0; i < this.fileObj[0].length; i++) {
      this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]));
    }
    this.setState({ file: this.fileArray });
  }

  uploadFiles(e) {
    e.preventDefault();
    if (!this.state.file[0]) {
      return;
    }

    const newPost = {
      ...this.state.profile,
      imageUrl: this.state.file[0] ? this.state.file[0] : undefined,
      body: this.state.discription,
      date: new Date().toISOString(),
      isSale: this.state.isSale,
      price: this.state.price,
    };
    this.props.setTem([newPost, ...this.props.tem]);
    axios
      .post(
        `https://asia-east2-farmacro-af287.cloudfunctions.net/api/posts/`,
        newPost
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => console.log(err));

    this.fileArray = [];
    this.setState({ file: [], discription: "" });
  }

  onChangeDiscription(e) {
    this.setState({ discription: e.target.value });
  }
  onChangePrice(e) {
    this.setState({ price: e.target.value });
  }

  onChangeIsSale(e) {
    this.setState({ isSale: !this.state.isSale });
  }
  render() {
    return (
      <article className="create-post-component">
        <header>
          <img
            src={
              this.state.profile.imageProfile
                ? this.state.profile.imageProfile
                : iconProfile
            }
            alt="profile"
          />
          <div>
            <h2>
              {this.state.profile.username
                ? this.state.profile.username
                : "nameUser"}
            </h2>
            <p>
              {this.state.profile.follower ? this.state.profile.follower : 0}{" "}
              Follower
            </p>
          </div>
        </header>
        <main style={{ width: "100%" }}>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <input
              type="text"
              id="discription-input"
              style={{
                width: "90%",
                justifySelf: "center",
                alignSelf: "center",
              }}
              placeholder="Discription"
              onChange={this.onChangeDiscription.bind(this)}
              value={this.state.discription}
            />
            <div
              className="image-upload-group"
              style={{ width: "100%", display: "flex" }}
            >
              <div
                className="form-group multi-preview"
                style={{ display: "flex" }}
              >
                {this.fileArray.map((url, key) => (
                  <div
                    key={key}
                    className="form-group multi-preview"
                    style={{
                      width: "100px",
                      height: "100px",
                      margin: "12px",
                      borderRadius: "4px",
                      overflow: "hidden",
                    }}
                  >
                    <img src={url} alt="..." style={{ height: "100%" }} />
                  </div>
                ))}
              </div>

              <div
                className="form-group"
                style={{
                  width: "100px",
                  height: "100px",
                  boxShadow: `0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048),
                0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
                0 100px 80px rgba(0, 0, 0, 0.12)`,
                  margin: "12px",
                  borderRadius: "4px",
                }}
              >
                <span
                  style={{
                    width: "100px",
                    height: "100px",

                    float: "left",
                    position: "absolute",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  +
                </span>
                <input
                  type="file"
                  className="form-control"
                  onChange={this.uploadMultipleFiles.bind(this)}
                  multiple
                  style={{
                    opacity: "0",
                    width: "100%",
                    height: "100%",
                    float: "left",
                  }}
                />
              </div>
            </div>
          </form>
        </main>
        <footer
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            {this.state.isSale ? (
              <input
                type="text"
                id="price-input"
                style={{
                  width: "90%",
                  justifySelf: "center",
                  alignSelf: "center",
                }}
                placeholder="Price"
                onChange={this.onChangePrice.bind(this)}
                value={this.state.price}
              />
            ) : (
              <p>Sale&nbsp;&nbsp;</p>
            )}
            <label class="switch">
              <input
                type="checkbox"
                onChange={this.onChangeIsSale.bind(this)}
              />
              <span class="slider round"></span>
            </label>
          </div>

          <button
            style={{
              backgroundColor:
                this.state.file.length === 0 ? "#777" : "skyblue",
              color: "white",
            }}
            onClick={this.uploadFiles}
          >
            Post
          </button>
        </footer>
      </article>
    );
  }
}
