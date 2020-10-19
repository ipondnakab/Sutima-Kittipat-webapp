import React from "react";
import * as images from "../../assets/images/images";


function RegisterPage(){
    return(
        <div class="column">
        
        <div class="left-coloumn">
            <h1>Logo</h1>
            <img src={images.logoRegister} width="400px" alt="logo"/>
            <h3>That is your market</h3>

        </div>

        <div class="right-column">

            <div class="login">
                <h2>Register with your e-mail</h2><br/>

                <form action="" class="form">
                        <label for="name"><b>Username</b></label>
                        <input type="text" placeholder="Username" name="name" required/>
                        <label for="uname"><b>Email address</b></label>
                        <input type="text" placeholder="Email address" name="uname" required/>
                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Password" name="psw" required/>

                        <label><input type="radio" id="check" name="remember"/> Remember me</label><br/>
        
                        <button type="submit">Submit</button><br/>
                </form>
            </div>

            <h2>Or</h2>
            <h2>Use social sign in</h2>

            <div class="logo">
                <img src= {images.iconGoogle} width="50px" alt= "blogo"/>
                <img src= {images.iconFacebook} width="50px" alt= "gg"/>
            </div>

            <span class="rgt">If you have account<a href="#">Login</a></span>
        </div>
    </div>

    );
}

export default RegisterPage;