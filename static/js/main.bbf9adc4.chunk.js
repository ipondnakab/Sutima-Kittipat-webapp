(this["webpackJsonpsutima-kittipat-project"]=this["webpackJsonpsutima-kittipat-project"]||[]).push([[0],{39:function(e,t,a){},40:function(e,t,a){},45:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a.n(n),l=a(32),o=a.n(l),c=(a(39),a(13)),s=a(16),i=a(7),m=a(25),u=a(26),p=a(28),g=a(27);a(40);var d=function(e){var t=e.menu;return t=void 0===t||t,r.a.createElement("nav",{className:"nav-bar"},r.a.createElement("div",{className:"nav",style:{justifyContent:t?"space-between":"start"}},r.a.createElement("div",{className:"left-nav"},r.a.createElement(s.b,{className:"logo",to:"/"},r.a.createElement("h1",null,"Logo"))),r.a.createElement("div",{className:"right-nav",style:{display:t?"flex":"none"}},t||null)))},f=a(14),h=(a(45),a(20)),E=a(21),b=a.n(E),v=a(34).a.initializeApp({apiKey:"AIzaSyBlkL_X4nWqW5Y1TIsDsQZnFOvgyfkKdZM",authDomain:"farmacro-af287.firebaseapp.com",databaseURL:"https://farmacro-af287.firebaseio.com",projectId:"farmacro-af287",storageBucket:"farmacro-af287.appspot.com",messagingSenderId:"964427814223",appId:"1:964427814223:web:8660f5af152ff5299da13a",measurementId:"G-78M5EZYR9J"}),w=function(e){var t=e.response,a=e.setIsLogin;t.accessToken&&(localStorage.setItem("token",t.accessToken),a(!0))},y=function(e){var t=e.response,a=e.setIsLogin;t.accessToken&&(localStorage.setItem("token",t.accessToken),a(!0))},k=function(e){var t=e.email,a=e.password,n=e.setIsLogin;v.auth().signInWithEmailAndPassword(t,a).then((function(e){console.log(e),e.user.refreshToken&&(localStorage.setItem("token",e.user.refreshToken),n(!0))})).catch((function(e){return console.error(e)}))};var I=function(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),l=a[0],o=a[1],s=Object(n.useState)(""),i=Object(c.a)(s,2),m=i[0],u=i[1];return r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"left-coloumn"},r.a.createElement("h1",null,"Logo"),r.a.createElement("img",{src:"https://raw.githubusercontent.com/ipondnakab/Sutima-Kittipat-webapp/master/src/assets/images/img-login-page.svg",width:"400px",alt:"logo"}),r.a.createElement("p",null,"That is your market")),r.a.createElement("div",{className:"right-column"},r.a.createElement("div",{className:"login"},r.a.createElement("h2",null,"Login with your e-mail"),r.a.createElement("br",null),r.a.createElement("form",{action:"",className:"form"},r.a.createElement("label",{for:"email"},r.a.createElement("b",null,"Email address")),r.a.createElement("input",{type:"text",placeholder:"Email address",name:"email",onChange:function(e){return o(e.target.value)},required:!0}),r.a.createElement("label",{for:"password"},r.a.createElement("b",null,"Password")),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",onChange:function(e){return u(e.target.value)},required:!0}),r.a.createElement("button",{className:"button-submit",type:"submit",onClick:function(t){t.preventDefault(),k(Object(f.a)({email:l,password:m},e))}},"Login"),r.a.createElement("br",null),r.a.createElement("div",{className:"radio"},r.a.createElement("label",null,r.a.createElement("input",{type:"radio",id:"checked",name:"remember"})," Remember me"),r.a.createElement("p",null," ","Forgot ",r.a.createElement("a",{href:"#"},"password"))))),r.a.createElement("h2",null,"Or"),r.a.createElement("h2",null,"Use social sign in"),r.a.createElement("div",{className:"logo"},r.a.createElement(h.GoogleLogin,{clientId:"964427814223-2p8jsupo987e8qfadkthalnh7m5q6up4.apps.googleusercontent.com",onSuccess:function(t){return y(Object(f.a)({response:t},e))},onFailure:function(e){console.log(e)},cookiePolicy:"single_host_origin",style:{height:"100%"}}),r.a.createElement(b.a,{appId:"364075804676399",fields:"name,email,picture",callback:function(t){return w(Object(f.a)({response:t},e))},onFailure:function(e){console.log(e)}})),r.a.createElement("span",{className:"rst"},"If you don't have account ",r.a.createElement("a",{href:"#"},"Register"))))};var j=function(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),l=(a[0],a[1]),o=Object(n.useState)(""),s=Object(c.a)(o,2),i=s[0],m=s[1],u=Object(n.useState)(""),p=Object(c.a)(u,2),g=p[0],d=p[1];return r.a.createElement("div",{class:"column"},r.a.createElement("div",{class:"left-coloumn"},r.a.createElement("h1",null,"Logo"),r.a.createElement("img",{src:"https://raw.githubusercontent.com/ipondnakab/Sutima-Kittipat-webapp/master/src/assets/images/img-register-page.svg",width:"400px",alt:"logo"}),r.a.createElement("p",null,"That is your market")),r.a.createElement("div",{class:"right-column"},r.a.createElement("div",{class:"login"},r.a.createElement("h2",null,"Register with your e-mail"),r.a.createElement("br",null),r.a.createElement("form",{action:"",class:"form"},r.a.createElement("label",{for:"username"},r.a.createElement("b",null,"Username")),r.a.createElement("input",{type:"text",placeholder:"Username",name:"username",onChange:function(e){return l(e.target.value)},required:!0}),r.a.createElement("label",{for:"email"},r.a.createElement("b",null,"Email address")),r.a.createElement("input",{type:"text",placeholder:"Email address",name:"email",onChange:function(e){return m(e.target.value)},required:!0}),r.a.createElement("label",{for:"psw"},r.a.createElement("b",null,"Password")),r.a.createElement("input",{type:"password",placeholder:"Password",name:"psw",onChange:function(e){return d(e.target.value)},required:!0}),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",id:"check",name:"remember"})," Remember me"),r.a.createElement("br",null),r.a.createElement("button",{class:"button-submit",type:"submit",onClick:function(t){t.preventDefault(),function(e){var t=e.email,a=e.password,n=e.setIsLogin;v.auth().createUserWithEmailAndPassword(t,a).then((function(e){return k({email:t,password:a,setIsLogin:n})})).catch((function(e){return console.error(e)}))}(Object(f.a)(Object(f.a)({},e),{},{email:i,password:g}))}},"Submit"),r.a.createElement("br",null))),r.a.createElement("h2",null,"Or"),r.a.createElement("h2",null,"Use social sign in"),r.a.createElement("div",{class:"logo"},r.a.createElement(h.GoogleLogin,{clientId:"964427814223-2p8jsupo987e8qfadkthalnh7m5q6up4.apps.googleusercontent.com",onSuccess:function(t){return y(Object(f.a)({response:t},e))},onFailure:function(e){console.log(e)},cookiePolicy:"single_host_origin",style:{height:"100%"}}),r.a.createElement(b.a,{appId:"364075804676399",fields:"name,email,picture",callback:function(t){return w(Object(f.a)({response:t},e))},onFailure:function(e){console.log(e)}})),r.a.createElement("span",{class:"rst"},"If you have account",r.a.createElement("a",{href:"#"},"Login"))))},_=(a(50),a.p+"static/media/man.70450708.svg"),L=a.p+"static/media/bg2.16afb43f.jpg";var O=function(e){var t=e.profile,a=e.post;return r.a.createElement("article",{className:"post-component"},r.a.createElement("header",null,r.a.createElement("img",{src:t?t.img:_,alt:"profile"}),r.a.createElement("div",null,r.a.createElement("h2",null,t?t.name:"nameUser"),r.a.createElement("p",null,t?t.follower:"NoF"))),r.a.createElement("main",null,r.a.createElement("img",{src:a?a.img:L,alt:"post image"}),r.a.createElement("p",null,a?a.detail:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Industry\u2019s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")),r.a.createElement("footer",null,r.a.createElement("div",{className:"post-footer-left"},r.a.createElement("p",null,"like "),r.a.createElement("p",null,"comment"),r.a.createElement("p",null,"Chat")),r.a.createElement("div",{className:"post-footer-right"})))};var S=function(){return r.a.createElement("div",{style:{paddingBottom:70,display:"flex",flexDirection:"column",alignItems:"center"}},[{profile:{img:"https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg",name:"Kittipat",follower:"12.1K"},post:{img:"https://www.treehugger.com/thmb/bM_zeJcC8UpFkNa39UK69dfoT2w=/735x0/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2017__01__cow-in-pasture-crop2-3b8cdbd62aee45f6ab8d49228fa85272.jpg",detail:"Ipsum is simply dummy text of the printing and typesetting industry. Industry\u2019s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}},{profile:{img:"https://www.flaticon.com/svg/static/icons/svg/3135/3135789.svg",name:"Sutima",follower:"20.4K"},post:{img:"https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg",detail:"simply dummy text of the printing and typesetting industry. Industry\u2019s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}},{profile:{img:"https://www.flaticon.com/svg/static/icons/svg/3011/3011292.svg",name:"Chakriya",follower:"5.12M"},post:{img:"https://dkpo4ygqb6rh6.cloudfront.net/COWSIGNALS_COM/imageresized/4023/8248646f7e35630b2bb4bf597c22b73a/2560_1440_75_fixedjpg/cowsignals_2560px.jpg",detail:"text of the printing and typesetting industry. Industry\u2019s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}}].map((function(e,t){return r.a.createElement("div",{style:{marginTop:32,display:"flex",flexDirection:"column",alignItems:"center"}},r.a.createElement(O,{post:e.post,profile:e.profile,key:t}))})))};a(51);function x(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)("/"),m=Object(c.a)(o,2),u=(m[0],m[1]),p=!!localStorage.getItem("token");!a&&p&&l(!0);var g=window.location.pathname;return r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(d,{menu:a?N({currentPath:g,setPath:u,setIsLogin:l}):C(a)}),r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/register"},p?r.a.createElement(S,null):r.a.createElement(j,{setIsLogin:l})),r.a.createElement(i.a,{path:"/login"},p?r.a.createElement(S,null):r.a.createElement(I,{setIsLogin:l})),r.a.createElement(i.a,{path:"/"},r.a.createElement(S,null)))))}var N=function(e){var t=e.currentPath,a=e.setPath,n=e.setIsLogin,l=[{name:"dashboard",icon:r.a.createElement(m.b,{color:"white"}),iconActive:r.a.createElement(m.a,{color:"white"}),path:"/dashboard"},{name:"market",icon:r.a.createElement(u.b,{color:"white"}),iconActive:r.a.createElement(u.a,{color:"white"}),path:"/market"},{name:"profile",icon:r.a.createElement(g.a,{color:"white"}),iconActive:r.a.createElement(g.b,{color:"white"}),path:"/profile"},{name:"logout",icon:r.a.createElement(p.a,{color:"white"}),iconActive:r.a.createElement(p.a,{color:"white"}),path:"/login"}];return r.a.createElement("div",null,l.map((function(e){return r.a.createElement(s.b,{style:{cursor:"pointer",fontSize:"1.5rem",marginLeft:"0.8rem",color:"white"},to:e.path,onClick:function(){a(e.path),"logout"===e.name&&(!function(e){var t=e.setIsLogin;localStorage.removeItem("token"),console.log("Logout success"),t(!1)}({setIsLogin:n}),a("/login"))}},t.substring(0,e.path.length)===e.path?e.iconActive:e.icon)})))},C=function(e){return r.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},r.a.createElement(s.b,{to:e?"/":"/login",className:"button-style-1"},"Login"),r.a.createElement(s.b,{to:e?"/":"/register",className:"button-style-1",style:{marginLeft:20}},"Register"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.bbf9adc4.chunk.js.map