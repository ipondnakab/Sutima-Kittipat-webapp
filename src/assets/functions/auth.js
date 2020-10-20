export const checkToken = () => {
  return localStorage.getItem("token") ? true : false;
};

export const responseFacebook = ({ response, setIsLogin }) => {
  localStorage.setItem("token", response["accessToken"]);
  setIsLogin(true);
};

export const responseGoogle = ({ response, setIsLogin }) => {
  localStorage.setItem("token", response["accessToken"]);
  setIsLogin(true);
};

export const logout = ({ setIsLogin }) => {
  localStorage.removeItem("token");
  console.log("Logout success");
  setIsLogin(false);
};
