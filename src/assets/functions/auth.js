import firebase from "./firebase";
export const checkToken = () => {
  return localStorage.getItem("token") ? true : false;
};

export const responseFacebook = ({ response, setIsLogin }) => {
  if (response["accessToken"]) {
    localStorage.setItem("token", response["accessToken"]);
    setIsLogin(true);
  } else {
    return;
  }
};

export const responseGoogle = ({ response, setIsLogin }) => {
  if (response["accessToken"]) {
    localStorage.setItem("token", response["accessToken"]);
    setIsLogin(true);
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
export const signInWEP = ({ email, password, setIsLogin }) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      console.log(res);
      if (res["user"]["refreshToken"]) {
        localStorage.setItem("token", res["user"]["refreshToken"]);
        setIsLogin(true);
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
