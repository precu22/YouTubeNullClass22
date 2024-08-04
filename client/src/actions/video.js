import * as api from "../api";
// import { viewsVideo, updateUserPoints } from '../api';  
// import { viewsVideo } from "../api";
import { allocatePoints } from "../Reducers/currentUser";
// import { getAllVideo } from "./video";
// import { allocatePoints } from "./currentUserReducer"; // Assuming allocatePoints action is imported

// export const uploadVideo = (videoData) => async (dispatch) => {
//   try {
//     const { fileData, fileOptions } = videoData;
//     const {data}= await api.uploadVideo(fileData, fileOptions)
//     dispatch({type:'POST_VIDEO',data})
//     dispatch(getAllVideo())
//   } catch (error) {
//     alert(error.response.data.message)
//   }
// };

// export const getAllVideo=()=> async (dispatch)=>{
//   try {
//     const {data}= await api.getVideos();
//     dispatch({type:'FETCH_ALL_VIDEOS',payload:data})
//   } catch (error) {
//       console.log(error)
//   }
// }

// export const likeVideo=(LikeDate)=>async(dispatch)=>{
//   try {
//     const {id,Like}=LikeDate;
//     const {data}= await api.likeVideo(id,Like);
//     dispatch({type:"POST_LIKE",payload:data})
//     dispatch(getAllVideo());
//   } catch (error) {
//     console.log(error)
//   }
// }

// export const viewVideo=(ViewDate)=>async(dispatch)=>{
//   try {
//     const {id}=ViewDate;
//     console.log(id)
//     const {data}= await api.viewsVideo(id)
//     dispatch({type:'POST_VIEWS',data})
//     dispatch(getAllVideo())
//   } catch (error) {
//     console.log(error)
//   }
// }


// import * as api from "../api";
// import { getAllVideo } from "./video";
// import { allocatePoints } from "./currentUserReducer"; // Ensure this import is correct

// export const uploadVideo = (videoData) => async (dispatch) => {
//   try {
//     const { fileData, fileOptions } = videoData;
//     const { data } = await api.uploadVideo(fileData, fileOptions);
//     dispatch({ type: 'POST_VIDEO', data });
//     dispatch(getAllVideo());
//   } catch (error) {
//     alert(error.response.data.message);
//   }
// };

// export const getAllVideo = () => async (dispatch) => {
//   try {
//     const { data } = await api.getVideos();
//     dispatch({ type: 'FETCH_ALL_VIDEOS', payload: data });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const likeVideo = (LikeDate) => async (dispatch) => {
//   try {
//     const { id, Like } = LikeDate;
//     const { data } = await api.likeVideo(id, Like);
//     dispatch({ type: "POST_LIKE", payload: data });
//     dispatch(getAllVideo());
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const viewVideo = (ViewDate) => async (dispatch) => {
//   try {
//     const { id, userId } = ViewDate;
//     console.log(id);
//     const { data } = await api.viewsVideo(id);
//     dispatch({ type: 'POST_VIEWS', data });
//     dispatch(getAllVideo());
//     dispatch(allocatePoints(userId, 5)); // Allocate 5 points per video viewed
//   } catch (error) {
//     console.log(error);
//   }
// };

//updated by precious: 09/07 22.21
// import * as api from "../api";  
// import { viewsVideo, updateUserPoints } from '../api';  
// import { allocatePoints } from "../Reducers/currentUser";
export const uploadVideo = (videoData) => async (dispatch) => {
  try {
    const { fileData, fileOptions } = videoData;
    const {data}= await api.uploadVideo(fileData, fileOptions)
    dispatch({type:'POST_VIDEO',data})
    dispatch(getAllVideo())
  } catch (error) {
    alert(error.response.data.message)
  }
};

export const getAllVideo = () => async (dispatch) => {
  try {
    const { data } = await api.getVideos();
    dispatch({ type: 'FETCH_ALL_VIDEOS', payload: data });
  } catch (error) {
    console.log(error);
  }
}

export const likeVideo = (LikeDate) => async (dispatch) => {
  try {
    const { id, Like } = LikeDate;
    const { data } = await api.likeVideo(id, Like);
    dispatch({ type: "POST_LIKE", payload: data });
    dispatch(getAllVideo());
  } catch (error) {
    console.log(error);
  }
}
// update by precious 09/07 22.40
// Inside your viewVideo function
// export const viewVideo = (ViewDate) => async (dispatch) => {
//   try {
//     const { id } = ViewDate;
//     const { data } = await API.viewsVideo(id);
//     dispatch({ type: 'POST_VIEWS', data });
//     dispatch(getAllVideo());
//     dispatch(allocatePoints(ViewDate.id, 2.5)); 
//   } catch (error) {
//     console.log(error);
//   }
// };

//to get previous (above) working code, just un-comment once till this line

//01/08
export const viewVideo = (ViewDate) => async (dispatch) => {
  try {
    const { id } = ViewDate;
    const { data } = await api.viewsVideo(id);
    dispatch({ type: 'POST_VIEWS', data });
    dispatch(getAllVideo());
    dispatch(allocatePoints(ViewDate.userId, 2.5)); 
  } catch (error) {
    console.log(error);
  }
};

//on 02/08
// export const viewVideo = (videoId) => async (dispatch) => {
//   try {
//     const { data } = await api.viewsVideo(videoId);  // videoId should be passed directly
//     dispatch({ type: 'POST_VIEWS', data });
//     dispatch(getAllVideo());
//     dispatch(allocatePoints(ViewDate.userId, 2.5));  // Ensure ViewDate is defined or replace with actual userId
//   } catch (error) {
//     console.log(error);
//   }
// };
// //updated on 17/07
// import * as api from "../api";
// import { viewsVideo } from '../api';  
// import { allocatePoints } from "../Reducers/currentUser";

// export const uploadVideo = (videoData) => async (dispatch) => {
//   try {
//     const { fileData, fileOptions } = videoData;
//     const {data}= await api.uploadVideo(fileData, fileOptions)
//     dispatch({type:'POST_VIDEO',data})
//     dispatch(getAllVideo())
//   } catch (error) {
//     alert(error.response.data.message)
//   }
// };

// export const getAllVideo = () => async (dispatch) => {
//   try {
//     const { data } = await api.getVideos();
//     dispatch({ type: 'FETCH_ALL_VIDEOS', payload: data });
//   } catch (error) {
//     console.log(error);
//   }
// }

// export const likeVideo = (LikeDate) => async (dispatch) => {
//   try {
//     const { id, Like } = LikeDate;
//     const { data } = await api.likeVideo(id, Like);
//     dispatch({ type: "POST_LIKE", payload: data });
//     dispatch(getAllVideo());
//   } catch (error) {
//     console.log(error);
//   }
// }

// // export const viewVideo = (ViewDate) => async (dispatch) => {
// //   try {
// //     const { id, userId } = ViewDate;
// //     console.log(id);
// //     const { data } = await api.viewsVideo(id);
// //     dispatch({ type: 'POST_VIEWS', data });
// //     dispatch(getAllVideo());

// //     // Allocate points to the user
// //     await api.allocatePoints({ userId, points: 2.5 });

// //     // Optionally update the frontend state with new user points
// //     dispatch(allocatePoints(userId, 2.5));
// //   } catch (error) {
// //     console.log(error);
// //   }
// // };

// export const viewVideo = (ViewDate) => async (dispatch) => {
//   try {
//     const { id, userId } = ViewDate;
//     console.log(id);
//     const { data } = await api.viewsVideo(id);
//     dispatch({ type: 'POST_VIEWS', data });
//     dispatch(getAllVideo());

//     // Allocate points to the user
//     await api.allocatePoints({ userId, points: 2.5 });

//     // Optionally update the frontend state with new user points
//     dispatch(allocatePoints(userId, 2.5));
//   } catch (error) {
//     console.log(error);
//   }
// };
