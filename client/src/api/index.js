//03/08 morning
import axios from 'axios';

// const API = axios.create({ baseURL: 'http://localhost:5500/api' });
const API = axios.create({ baseURL: 'https://youtubeclone-2-5apa.onrender.com' });

API.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem('Profile') && JSON.parse(localStorage.getItem('Profile')).token;
    if (token) {
      req.headers.authorization = `Bearer ${token}`;  
    }
    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API call error:', error.response ? error.response.data : error.message || error);
    return Promise.reject(error);
  }
);

const logApiCall = (callDescription, call) => async (...args) => {
  try {
    console.log(`API call: ${callDescription} with args:`, args);
    const response = await call(...args);
    console.log(`API response for ${callDescription}:`, response.data);
    return response;
  } catch (error) {
    console.error(`API error for ${callDescription}:`, error.response ? error.response.data : error.message);
    throw error;
  }
};

// Define and export API functions
export const login = logApiCall('login', (authData) => API.post('/user/login', authData));
export const updateChanelData = logApiCall('updateChanelData', (id, updateData) => API.patch(`/user/updateChanel/${id}`, updateData));
export const fetchAllChanel = logApiCall('fetchAllChanel', () => API.get('/user/getAllChanels'));


export const uploadVideo = logApiCall('uploadVideo', (fileData, fileOptions) => API.post('/video/uploadVideo', fileData, fileOptions));
export const getVideos = logApiCall('getVideos', () => API.get('/video/getvideos'));
export const likeVideo = logApiCall('likeVideo', (id, Like) => API.patch(`/video/like/${id}`, { Like }));
export const viewsVideo = logApiCall('viewsVideo', async (id) => API.patch(`/video/view/${id}`));
export const allocatePoints = logApiCall('allocatePoints', (data) => API.post('/user/allocatePoints', data));

export const addToLikedVideo = logApiCall('addToLikedVideo', (likedVideoData) => API.post('/video/likeVideo', likedVideoData));
export const getAlllikedVideo = logApiCall('getAlllikedVideo', () => API.get('/video/getAlllikeVideo'));
export const deletelikedVideo = logApiCall('deletelikedVideo', (videoId, Viewer) => API.delete(`/video/deleteLikedVideo/${videoId}/${Viewer}`));

export const addTowatchLater = logApiCall('addTowatchLater', (watchLaterData) => API.post('/video/watchLater', watchLaterData));
export const getAllwatchLater = logApiCall('getAllwatchLater', () => API.get('/video/getAllwatchLater'));
export const deleteWatchLater = logApiCall('deleteWatchLater', (videoId, Viewer) => API.delete(`/video/deleteWatchlater/${videoId}/${Viewer}`));

export const addToHistory = logApiCall('addToHistory', (HistoryData) => API.post('/video/History', HistoryData));
export const getAllHistory = logApiCall('getAllHistory', () => API.get('/video/getAllHistory'));
export const deleteHistory = logApiCall('deleteHistory', (userId) => API.delete(`/video/deleteHistory/${userId}`));

export const postComment = logApiCall('postComment', (CommentData) => API.post('/comment/post', CommentData));
export const deleteComment = logApiCall('deleteComment', (id) => API.delete(`/comment/delete/${id}`));
export const editComment = logApiCall('editComment', (id, commentBody) => API.patch(`/comment/edit/${id}`, { commentBody }));
export const getAllComment = logApiCall('getAllComment', () => API.get('/comment/get'));
