import React from "react";
import "./login-page.css";
import * as images from "../../assets/images/images";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { responseFacebook, responseGoogle } from "../../assets/functions/auth";

function LoginPage({ setIsLogin }) {
  return (
    <div className="column">
      <div className="left-coloumn">
        <h1>Logo</h1>
        <img src={images.logoLogin} width="400px" alt="logo" />
        <p>That is your market</p>
      </div>

      <div className="right-column">
        <div className="login">
          <h2>Login with your e-mail</h2>
          <br />

          <form action="" className="form">
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

            <button className="button-submit" type="submit">
              Login
            </button>
            <br />

            <div className="radio">
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

        <div className="logo">
          <GoogleLogin
            clientId="964427814223-2p8jsupo987e8qfadkthalnh7m5q6up4.apps.googleusercontent.com"
            onSuccess={(response) => responseGoogle({ response, setIsLogin })}
            onFailure={(err) => {
              console.log(err);
            }}
            cookiePolicy={"single_host_origin"}
            style={{ height: "100%" }}
          />

          <FacebookLogin
            appId="364075804676399"
            fields="name,email,picture"
            callback={(response) => responseFacebook({ response, setIsLogin })}
            onFailure={(err) => {
              console.log(err);
            }}
          />
        </div>

        <span className="rst">
          If you don't have account <a href="#">Register</a>
        </span>
      </div>
    </div>
  );
}

export default LoginPage;
