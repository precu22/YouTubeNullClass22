// import React from "react";
// import { FaEdit, FaUpload } from "react-icons/fa";
// import { useSelector } from "react-redux";
// import "./DescribeChanel.css";
// function DecribeChanel({ setEditCreateChanelBtn, Cid,setVidUploadPage }) {
//   const chanels = useSelector((state) => state?.chanelReducers);

//   // console.log(Cid)
//   const currentChanel = chanels.filter((c) => c._id === Cid)[0];

//   const CurrentUser = useSelector((state) => state?.currentUserReducer);
//   console.log(CurrentUser);
//   return (
//     <div className="container3_chanel">
//       <div className="chanel_logo_chanel">
//         <b>{currentChanel?.name.charAt(0).toUpperCase()}</b>
//       </div>
//       <div className="description_chanel">
//         <b> {currentChanel?.name} </b>
//         <p> {currentChanel?.desc} </p>
//       </div>
//       {CurrentUser?.result._id === currentChanel?._id && (
//         <>
//           <p
//             className="editbtn_chanel"
//             onClick={() => {
//               setEditCreateChanelBtn(true);
//             }}
//           >
//             <FaEdit />
//             <b> Edit Chanel</b>
//           </p>
//           <p className="uploadbtn_chanel" onClick={()=>setVidUploadPage(true)}>
//             <FaUpload />
//             <b> Upload Video</b>
//           </p>
//           {/* updated by precious on 09/07 22.14 */}
//           <div className="points_chanel"> 
//             <b>Points: {CurrentUser?.result?.points || 0}</b> {/* Display points */}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default DecribeChanel;

//updated by precious on 11/07: usable code starts here
import React from "react";
import { FaEdit, FaUpload } from "react-icons/fa";
import { useSelector } from "react-redux";
import "./DescribeChanel.css";

function DecribeChanel({ setEditCreateChanelBtn, Cid, setVidUploadPage }) {
  const chanels = useSelector((state) => state?.chanelReducers);
  const currentChanel = chanels.filter((c) => c._id === Cid)[0];
  const CurrentUser = useSelector((state) => state?.currentUserReducer);

  return (
    <div className="container3_chanel">
      <div className="chanel_logo_chanel">
        <b>{currentChanel?.name.charAt(0).toUpperCase()}</b>
      </div>
      <div className="description_chanel">
        <b>{currentChanel?.name}</b>
        <p>{currentChanel?.desc}</p>
      </div>
      <div className="points_chanel">
        <b>Points: {CurrentUser?.result?.points || 0}</b> {/* Display points */}
      </div>
      {CurrentUser?.result._id === currentChanel?._id && (
        <>
          <p
            className="editbtn_chanel"
            onClick={() => {
              setEditCreateChanelBtn(true);
            }}
          >
            <FaEdit />
            <b>Edit Chanel</b>
          </p>
          <p className="uploadbtn_chanel" onClick={() => setVidUploadPage(true)}>
            <FaUpload />
            <b>Upload Video</b>
          </p>
        </>
      )}
    </div>
  );
}

export default DecribeChanel;

// //usable code ends here

// // // //updated by precious on 12/07:
// // // import React from "react";
// // // import { FaEdit, FaUpload } from "react-icons/fa";
// // // import { useSelector } from "react-redux";
// // // import "./DescribeChanel.css";

// // // function DecribeChanel({ setEditCreateChanelBtn, Cid, setVidUploadPage }) {
// // //   const chanels = useSelector((state) => state?.chanelReducers);
// // //   const currentChanel = chanels.filter((c) => c._id === Cid)[0];
// // //   const CurrentUser = useSelector((state) => state?.currentUserReducer);

// // //   return (
// // //     <div className="container3_chanel">
// // //       <div className="chanel_logo_chanel">
// // //         <b>{currentChanel?.name.charAt(0).toUpperCase()}</b>
// // //       </div>
// // //       <div className="description_chanel">
// // //         <b>{currentChanel?.name}</b>
// // //         <p>{currentChanel?.desc}</p>
// // //       </div>
// // //       <div className="points_chanel">
// // //         <b>Points: {CurrentUser?.result?.points || 0}</b> {/* Display points */}
// // //       </div>
// // //       {CurrentUser?.result._id === currentChanel?._id && (
// // //         <>
// // //           <p
// // //             className="editbtn_chanel"
// // //             onClick={() => {
// // //               setEditCreateChanelBtn(true);
// // //             }}
// // //           >
// // //             <FaEdit />
// // //             <b>Edit Chanel</b>
// // //           </p>
// // //           <p className="uploadbtn_chanel" onClick={() => setVidUploadPage(true)}>
// // //             <FaUpload />
// // //             <b>Upload Video</b>
// // //           </p>
// // //         </>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // export default DecribeChanel;


// //update on 17/07 for mongodb
// import React, { useEffect } from "react";
// import { FaEdit, FaUpload } from "react-icons/fa";
// import { useSelector, useDispatch } from "react-redux";
// import { getUserProfile } from "D:/Precious backup/NMIMS-MPSTME/NULLCLASS/YouTubeClone-NullClass-main/YouTubeClone-NullClass-main/client/src/actions/auth.js"; // Assuming you have this action
// import "./DescribeChanel.css";

// function DescribeChanel({ setEditCreateChanelBtn, Cid, setVidUploadPage }) {
//   const dispatch = useDispatch();
//   const chanels = useSelector((state) => state?.chanelReducers);
//   const currentChanel = chanels.filter((c) => c._id === Cid)[0];
//   const CurrentUser = useSelector((state) => state?.currentUserReducer);

//   useEffect(() => {
//     dispatch(getUserProfile());
//   }, [dispatch]);

//   return (
//     <div className="container3_chanel">
//       <div className="chanel_logo_chanel">
//         <b>{currentChanel?.name.charAt(0).toUpperCase()}</b>
//       </div>
//       <div className="description_chanel">
//         <b>{currentChanel?.name}</b>
//         <p>{currentChanel?.desc}</p>
//       </div>
//       <div className="points_chanel">
//         <b>Points: {CurrentUser?.result?.points || 0}</b> {/* Display points */}
//       </div>
//       {CurrentUser?.result._id === currentChanel?._id && (
//         <>
//           <p
//             className="editbtn_chanel"
//             onClick={() => {
//               setEditCreateChanelBtn(true);
//             }}
//           >
//             <FaEdit />
//             <b>Edit Chanel</b>
//           </p>
//           <p className="uploadbtn_chanel" onClick={() => setVidUploadPage(true)}>
//             <FaUpload />
//             <b>Upload Video</b>
//           </p>
//         </>
//       )}
//     </div>
//   );
// }

// export default DescribeChanel;
