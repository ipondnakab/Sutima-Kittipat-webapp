import React from "react";
import * as images from "../../assets/images/images";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";

function RegisterPage() {
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
        <img src={images.logoRegister} width="400px" alt="logo" />
        <p>That is your market</p>
      </div>

      <div class="right-column">
        <div class="login">
          <h2>Register with your e-mail</h2>
          <br />

          <form action="" class="form">
            <label for="name">
              <b>Username</b>
            </label>
            <input type="text" placeholder="Username" name="name" required />
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

            <label>
              <input type="radio" id="check" name="remember" /> Remember me
            </label>
            <br />

            <button class="button-submit" type="submit">Submit</button>
            <br />
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

        <span class="rgt">
          If you have account<a href="#">Login</a>
        </span>
      </div>
    </div>
  );
}

export default RegisterPage;
