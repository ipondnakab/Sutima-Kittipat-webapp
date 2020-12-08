import firebase from "./firebase";
import axios from "axios";
export const checkToken = () => {
  return localStorage.getItem("token") ? true : false;
};

export const responseFacebook = ({ response, setIsLogin, setPath }) => {
  if (response["accessToken"]) {
    localStorage.setItem("token", response["accessToken"]);
    setIsLogin(true);
    setPath("/dashboard");
  } else {
    return;
  }
};

export const responseGoogle = ({ response, setIsLogin, setPath }) => {
  if (response["accessToken"]) {
    localStorage.setItem("token", response["accessToken"]);
    setIsLogin(true);
    setPath("/dashboard");
  } else {
    return;
  }
};

export const signUpWEP = ({ email, password, setIsLogin }) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => signInWEP({ email, password, setIsLogin }))
    .catch((err) => console.error(err));
};
export const signInWEP = ({ email, password, setIsLogin, setPath }) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      console.log(res);
      if (res["user"]["refreshToken"]) {
        localStorage.setItem("token", res["user"]["refreshToken"]);
        setIsLogin(true);
        setPath("/dashboard");
      } else {
        return;
      }
    })
    .catch((err) => console.error(err));
};
export const logout = ({ setIsLogin }) => {
  localStorage.removeItem("token");
  console.log("Logout success");
  setIsLogin(false);
};
