import React, { useState } from "react";
import * as images from "../../assets/images/images";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import {
  responseFacebook,
  responseGoogle,
  signUpWEP,
} from "../../assets/functions/auth";

function RegisterPage(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const register = (e) => {
    e.preventDefault();
    signUpWEP({ ...props, email, password });
  };
  return (
    <div class="column">
      <div class="left-coloumn">
        <h1>Logo</h1>
        <img src={images.logoRegister} width="400px" alt="logo" />
        <p>That is your market</p>
      </div>

      <div class="right-column">
        <div class="login">
          <h2>Register with your e-mail</h2>
          <br />

          <form action="" class="form">
            <label for="username">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label for="email">
              <b>Email address</b>
            </label>
            <input
              type="text"
              placeholder="Email address"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label for="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Password"
              name="psw"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <label>
              <input type="radio" id="check" name="remember" /> Remember me
            </label>
            <br />

            <button class="button-submit" type="submit" onClick={register}>
              Submit
            </button>
            <br />
          </form>
        </div>

        <h2>Or</h2>
        <h2>Use social sign in</h2>

        <div class="logo">
          <GoogleLogin
            clientId="964427814223-2p8jsupo987e8qfadkthalnh7m5q6up4.apps.googleusercontent.com"
            onSuccess={(response) => responseGoogle({ response, ...props })}
            onFailure={(err) => {
              console.log(err);
            }}
            cookiePolicy={"single_host_origin"}
            style={{ height: "100%" }}
          />

          <FacebookLogin
            appId="364075804676399"
            fields="name,email,picture"
            callback={(response) => responseFacebook({ response, ...props })}
            onFailure={(err) => {
              console.log(err);
            }}
          />
        </div>

        <span class="rst">
          If you have account<a href="#">Login</a>
        </span>
      </div>
    </div>
  );
}

export default RegisterPage;
