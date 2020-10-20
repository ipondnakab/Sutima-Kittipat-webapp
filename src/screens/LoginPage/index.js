import React from "react";
import "./login-page.css";
import * as images from "../../assets/images/images";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";

function LoginPage() {
  const responseGoogle = (res) => {
    console.log(res);
  };
  const responseFacebook = (response) => {
    console.log(response);
  };
  return (
    <div class="column">
      <div class="left-coloumn">
        <h1>Logo</h1>
        <img src={images.logoLogin} width="400px" alt="logo" />
        <p>That is your market</p>
      </div>

      <div class="right-column">
        <div class="login">
          <h2>Login with your e-mail</h2>
          <br />

          <form action="" class="form">
            <label for="uname">
              <b>Email address</b>
            </label>
            <input
              type="text"
              placeholder="Email address"
              name="uname"
              required
            />
            <label for="psw">
              <b>Password</b>
            </label>

            <input type="password" placeholder="Password" name="psw" required />

            <button class="button-submit" type="submit">Login</button>
            <br />

            <div class="radio">
              <label>
                <input type="radio" id="checked" name="remember" /> Remember me
              </label>
              <p>
                {" "}
                Forgot <a href="#">password</a>
              </p>
            </div>
          </form>
        </div>

        <h2>Or</h2>
        <h2>Use social sign in</h2>

        <div class="logo">
          <GoogleLogin
            clientId="964427814223-2p8jsupo987e8qfadkthalnh7m5q6up4.apps.googleusercontent.com"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            style={{height: "100%"}}
            
          />
          <FacebookLogin
            appId="364075804676399"
            autoLoad={true}
            fields="name,email,picture"
            onClick={(data) => {
              console.warn(data);
            }}
            callback={responseFacebook}
          />
        </div>

        <p class="rst">
          If you don't have account<a href="#"> Register</a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
