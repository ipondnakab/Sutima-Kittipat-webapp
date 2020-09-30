import React from "react";
import "./login-page.css";

function LoginPage() {
    return (
        <div class="column">

            <div class="left-coloumn">
                <h1>Logo</h1>
                <img src="./images/logo.png" width="400px" alt="logo" />
                <h3>That is your market</h3>

            </div>

            <div class="right-column">

                <div class="login">
                    <h2>Login with your e-mail</h2><br />

                    <form action="" class="form">
                        <label for="uname"><b>Email address</b></label>
                        <input type="text" placeholder="Email address" name="uname" required />
                        <label for="psw"><b>Password</b></label>

                        <input type="password" placeholder="Password" name="psw" required />

                        <button type="submit">Login</button><br />

                        <div class="radio">
                            <label><input type="radio" id="checked" name="remember" /> Remember me</label>
                            <p> Forgot <a href="#">password</a></p>
                        </div>
                    </form>
                </div>

                <h2>Or</h2>
                <h2>Use social sign in</h2>

                <div class="logo">
                    <img src="./images/google.png" width="50px" alt="blogo" />
                    <img src="./images/facebook.png " width="50px" alt="gg" />
                </div><br />
                <span class="rgt">If you don't have account<a href="#"> Register</a></span>
            </div>
        </div>
    );
}

export default LoginPage;
