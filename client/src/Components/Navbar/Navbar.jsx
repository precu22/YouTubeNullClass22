// import React, {useState} from "react";
// import "./Navbar.css";
// import logo from "./logo.ico";
// import SearchBar from "./SearchBar/SearchBar";
// import { RiVideoAddLine } from "react-icons/ri";
// import { BiUserCircle } from "react-icons/bi";
// import { useEffect } from "react";
// import { GoogleLogin } from "react-google-login";
// import { gapi } from "gapi-script";
// import { Link } from "react-router-dom";
// import { IoMdNotificationsOutline } from "react-icons/io";
// import { useDispatch, useSelector } from "react-redux";
// import { login } from "../../actions/auth";
// import Auth from "../../Pages/Auth/Auth";
// function Navbar({ toggleDrawer,setEditCreateChanelBtn }) {

//   const [AuthBtn, setAuthBtn] = useState(false)
//   const CurrentUser=useSelector(state=>state.currentUserReducer)

//   // const CurrentUser = null;
//   //   const CurrentUser = {
//   //   result: {
//   //     email: "abzxy50312@gmail.com",
//   //     joinedOn: "2222-07-15T09:57:23.489Z",
//   //   },
//   // };
//   console.log(CurrentUser)
//   useEffect(() => {
//     function start() {
//       gapi.client.init({
//         clientId:
//           "747362198694-oavdlt3q6loqpos7b4dlocfh7a3qgssg.apps.googleusercontent.com",
//         scope: "email",
//       });
//     }
//     gapi.load("client:auth2", start);
//   }, []);

//   const dispatch = useDispatch();
//   // const logTmp=()=>{
//   //   dispatch(login({ email:"precious.sukhi@gmail.com" }));
//   // }

//   const onSuccess = (response) => {
//     const Email = response?.profileObj?.email;
//     console.log(Email);
//     dispatch(login({ email: Email }));
//   };

//   const onFailure = (response) => {
//     console.log("Failed", response);
//   };
//   return (
//     <>
//     <div className="Container_Navbar">
//       <div className="Burger_Logo_Navbar">
//         <div className="burger" onClick={() => toggleDrawer()}>
//           <p></p>
//           <p></p>
//           <p></p>
//         </div>

//         <Link to={"/"} className="logo_div_Navbar">
//           <img src={logo} alt="" />
//           <p className="logo_title_navbar">YouTube</p>
//         </Link>
//       </div>
//       <SearchBar />
//       <RiVideoAddLine size={22} className={"vid_bell_Navbar"} />
//       <div className="apps_Box">
//         <p className="appBox"></p>
//         <p className="appBox"></p>
//         <p className="appBox"></p>
//         <p className="appBox"></p>
//         <p className="appBox"></p>
//         <p className="appBox"></p>
//         <p className="appBox"></p>
//         <p className="appBox"></p>
//         <p className="appBox"></p>
//       </div>
//       <IoMdNotificationsOutline size={22} className="vid_bell_Navbar" />
//       <div className="Auth_cont_Navbar">
//         {CurrentUser ? (
//           <>
//             <div className="Chanel_logo_App" onClick={()=>setAuthBtn(true)}>
//               <p className="fstChar_logo_App">
//                 {CurrentUser?.result.name ? (
//                   <>{CurrentUser?.result.name.charAt(0).toUpperCase()}</>
//                 ) : (
//                   <>{CurrentUser?.result.email.charAt(0).toUpperCase()}</>
//                 )}
//               </p>
//             </div>
//           </>
//         ) : (
//           <>
//             <GoogleLogin
//               clientId={
//                 "747362198694-oavdlt3q6loqpos7b4dlocfh7a3qgssg.apps.googleusercontent.com"
//               }
//               onSuccess={onSuccess}
//               onFailure={onFailure}
//               render={(renderProps) => (
//                 <p onClick={renderProps.onClick} className="Auth_Btn">
//                 {/* <p onClick={logTmp} className="Auth_Btn"> */}
//                   <BiUserCircle size={22} />
//                   <b>Sign in</b>
//                 </p>
//                )}
//              />
//           </>
//         )}
//       </div>
//     </div>
//     {
//       AuthBtn &&
//       <Auth
//       setEditCreateChanelBtn={setEditCreateChanelBtn}
//       setAuthBtn={setAuthBtn}
//       User={CurrentUser}
//       />
//     }
//     </>
//   );
// }

// export default Navbar;


// //update by precious on 15/07/24
// import React, {useState} from "react";
// import "./Navbar.css";
// import logo from "./logo.ico";
// import SearchBar from "./SearchBar/SearchBar";
// import { RiVideoAddLine } from "react-icons/ri";
// import { BiUserCircle } from "react-icons/bi";
// import { useEffect } from "react";
// import { GoogleLogin } from "react-google-login";
// import { gapi } from "gapi-script";
// import { Link } from "react-router-dom";
// import { IoMdNotificationsOutline } from "react-icons/io";
// import { useDispatch, useSelector } from "react-redux";
// import { login } from "../../actions/auth";
// import Auth from "../../Pages/Auth/Auth";

// function Navbar({ toggleDrawer, setEditCreateChanelBtn }) {
//   const [AuthBtn, setAuthBtn] = useState(false);
//   const CurrentUser = useSelector(state => state.currentUserReducer);

//   useEffect(() => {
//     function start() {
//       gapi.client.init({
//         clientId: "747362198694-oavdlt3q6loqpos7b4dlocfh7a3qgssg.apps.googleusercontent.com",
//         scope: "email",
//       });
//     }
//     gapi.load("client:auth2", start);
//   }, []);

//   const dispatch = useDispatch();

//   const onSuccess = (response) => {
//     const Email = response?.profileObj?.email;
//     console.log(Email);
//     dispatch(login({ email: Email }));
//   };

//   const onFailure = (response) => {
//     console.log("Failed", response);
//   };

//   return (
//     <>
//       <div className="Container_Navbar">
//         <div className="Burger_Logo_Navbar">
//           <div className="burger" onClick={() => toggleDrawer()}>
//             <p></p>
//             <p></p>
//             <p></p>
//           </div>

//           <Link to={"/"} className="logo_div_Navbar">
//             <img src={logo} alt="" />
//             <p className="logo_title_navbar">YouTube</p>
//           </Link>
//         </div>
//         <SearchBar />
//         <RiVideoAddLine size={22} className={"vid_bell_Navbar"} />
//         <div className="apps_Box">
//           <p className="appBox"></p>
//           <p className="appBox"></p>
//           <p className="appBox"></p>
//           <p className="appBox"></p>
//           <p className="appBox"></p>
//           <p className="appBox"></p>
//           <p className="appBox"></p>
//           <p className="appBox"></p>
//           <p className="appBox"></p>
//         </div>
//         <IoMdNotificationsOutline size={22} className="vid_bell_Navbar" />
//         <div className="Auth_cont_Navbar">
//           {CurrentUser ? (
//             <div className="Chanel_logo_App" onClick={() => setAuthBtn(true)}>
//               <p className="fstChar_logo_App">
//                 {CurrentUser?.result.name ? (
//                   <>{CurrentUser?.result.name.charAt(0).toUpperCase()}</>
//                 ) : (
//                   <>{CurrentUser?.result.email.charAt(0).toUpperCase()}</>
//                 )}
//               </p>
//             </div>
//           ) : (
//             <GoogleLogin
//               clientId="747362198694-oavdlt3q6loqpos7b4dlocfh7a3qgssg.apps.googleusercontent.com"
//               onSuccess={onSuccess}
//               onFailure={onFailure}
//               render={(renderProps) => (
//                 <p onClick={renderProps.onClick} className="Auth_Btn">
//                   <BiUserCircle size={22} />
//                   <b>Sign in</b>
//                 </p>
//               )}
//             />
//           )}
//         </div>
//       </div>
//       {AuthBtn && (
//         <Auth
//           setEditCreateChanelBtn={setEditCreateChanelBtn}
//           setAuthBtn={setAuthBtn}
//           User={CurrentUser}
//         />
//       )}
//     </>
//   );
// }

// export default Navbar;

//update by precious on 16/07
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "./logo.ico";
import SearchBar from "./SearchBar/SearchBar";
import { RiVideoAddLine } from "react-icons/ri";
import { BiUserCircle } from "react-icons/bi";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { Link } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/auth";
import Auth from "../../Pages/Auth/Auth";

function Navbar({ toggleDrawer, setEditCreateChanelBtn }) {
  const [AuthBtn, setAuthBtn] = useState(false);
  const CurrentUser = useSelector((state) => state.currentUserReducer);

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: "747362198694-oavdlt3q6loqpos7b4dlocfh7a3qgssg.apps.googleusercontent.com",
        scope: "email",
      }).then(() => {
        console.log("GAPI client initialized.");
      }).catch((error) => {
        console.error("Error initializing GAPI client:", error);
      });
    }

    gapi.load("client:auth2", start);
  }, []);

  const dispatch = useDispatch();

  const onSuccess = (response) => {
    const Email = response?.profileObj?.email;
    console.log("Login successful. Email:", Email);
    dispatch(login({ email: Email }));
  };

  const onFailure = (response) => {
    console.error("Login failed:", response);
  };

  return (
    <>
      <div className="Container_Navbar">
        <div className="Burger_Logo_Navbar">
          <div className="burger" onClick={() => toggleDrawer()}>
            <p></p>
            <p></p>
            <p></p>
          </div>

          <Link to={"/"} className="logo_div_Navbar">
            <img src={logo} alt="" />
            <p className="logo_title_navbar">YouTube</p>
          </Link>
        </div>
        <SearchBar />
        <RiVideoAddLine size={22} className={"vid_bell_Navbar"} />
        <div className="apps_Box">
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
        </div>
        <IoMdNotificationsOutline size={22} className="vid_bell_Navbar" />
        <div className="Auth_cont_Navbar">
          {CurrentUser ? (
            <>
              <div className="Chanel_logo_App" onClick={() => setAuthBtn(true)}>
                <p className="fstChar_logo_App">
                  {CurrentUser?.result.name ? (
                    <>{CurrentUser?.result.name.charAt(0).toUpperCase()}</>
                  ) : (
                    <>{CurrentUser?.result.email.charAt(0).toUpperCase()}</>
                  )}
                </p>
              </div>
            </>
          ) : (
            <>
              <GoogleLogin
                clientId={"747362198694-oavdlt3q6loqpos7b4dlocfh7a3qgssg.apps.googleusercontent.com"}
                onSuccess={onSuccess}
                onFailure={onFailure}
                render={(renderProps) => (
                  <p onClick={renderProps.onClick} className="Auth_Btn">
                    <BiUserCircle size={22} />
                    <b>Sign in</b>
                  </p>
                )}
              />
            </>
          )}
        </div>
      </div>
      {AuthBtn && (
        <Auth
          setEditCreateChanelBtn={setEditCreateChanelBtn}
          setAuthBtn={setAuthBtn}
          User={CurrentUser}
        />
      )}
    </>
  );
}

export default Navbar;


// //update by precious on 17/07
// import React, { useState, useEffect } from "react";
// import "./Navbar.css";
// import logo from "./logo.ico";
// import SearchBar from "./SearchBar/SearchBar";
// import { RiVideoAddLine } from "react-icons/ri";
// import { BiUserCircle } from "react-icons/bi";
// import { GoogleLogin } from "react-google-login";
// import { gapi } from "gapi-script";
// import { Link } from "react-router-dom";
// import { IoMdNotificationsOutline } from "react-icons/io";
// import { useDispatch, useSelector } from "react-redux";
// import { login } from "../../actions/auth";
// import Auth from "../../Pages/Auth/Auth";

// function Navbar({ toggleDrawer, setEditCreateChanelBtn }) {
//   const [AuthBtn, setAuthBtn] = useState(false);
//   const CurrentUser = useSelector((state) => state.currentUserReducer);

//   useEffect(() => {
//     function start() {
//       gapi.client
//         .init({
//           clientId: "747362198694-oavdlt3q6loqpos7b4dlocfh7a3qgssg.apps.googleusercontent.com",
//           scope: "email",
//         })
//         .then(() => {
//           console.log("GAPI client initialized.");
//         })
//         .catch((error) => {
//           console.error("Error initializing GAPI client:", error);
//         });
//     }

//     gapi.load("client:auth2", start);
//   }, []);

//   const dispatch = useDispatch();

//   const onSuccess = (response) => {
//     const Email = response?.profileObj?.email;
//     console.log("Login successful. Email:", Email);
//     dispatch(login({ email: Email }));
//   };

//   const onFailure = (response) => {
//     console.error("Login failed:", response);
//   };

//   return (
//     <>
//       <div className="Container_Navbar">
//         <div className="Burger_Logo_Navbar">
//           <div className="burger" onClick={() => toggleDrawer()}>
//             <p></p>
//             <p></p>
//             <p></p>
//           </div>

//           <Link to={"/"} className="logo_div_Navbar">
//             <img src={logo} alt="" />
//             <p className="logo_title_navbar">YouTube</p>
//           </Link>
//         </div>
//         <SearchBar />
//         <RiVideoAddLine size={22} className={"vid_bell_Navbar"} />
//         <div className="apps_Box">
//           <p className="appBox"></p>
//           <p className="appBox"></p>
//           <p className="appBox"></p>
//           <p className="appBox"></p>
//           <p className="appBox"></p>
//           <p className="appBox"></p>
//           <p className="appBox"></p>
//           <p className="appBox"></p>
//           <p className="appBox"></p>
//         </div>
//         <IoMdNotificationsOutline size={22} className="vid_bell_Navbar" />
//         <div className="Auth_cont_Navbar">
//           {CurrentUser && CurrentUser.result ? (
//             <>
//               <div className="Chanel_logo_App" onClick={() => setAuthBtn(true)}>
//                 <p className="fstChar_logo_App">
//                   {CurrentUser.result.name ? (
//                     <>{CurrentUser.result.name.charAt(0).toUpperCase()}</>
//                   ) : (
//                     <>{CurrentUser.result.email.charAt(0).toUpperCase()}</>
//                   )}
//                 </p>
//               </div>
//             </>
//           ) : (
//             <>
//               <GoogleLogin
//                 clientId={"747362198694-oavdlt3q6loqpos7b4dlocfh7a3qgssg.apps.googleusercontent.com"}
//                 onSuccess={onSuccess}
//                 onFailure={onFailure}
//                 render={(renderProps) => (
//                   <p onClick={renderProps.onClick} className="Auth_Btn">
//                     <BiUserCircle size={22} />
//                     <b>Sign in</b>
//                   </p>
//                 )}
//               />
//             </>
//           )}
//         </div>
//       </div>
//       {AuthBtn && (
//         <Auth
//           setEditCreateChanelBtn={setEditCreateChanelBtn}
//           setAuthBtn={setAuthBtn}
//           User={CurrentUser}
//         />
//       )}
//     </>
//   );
// }

// export default Navbar;
