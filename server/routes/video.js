//on 02./08
import express from 'express'

import { uploadVideo, getAllvideos, getVideoById } from '../controllers/video.js'
import { likeController } from '../controllers/like.js'
import { viewController } from '../controllers/views.js'
import { likeVideoController, getAlllikeVideoController, deleteLikeVideoController } from '../controllers/likeVideo.js'
import { watchLaterController, getAllwatchLaterController, deletewatchLaterController } from '../controllers/watchLater.js'
import { HistoryController, getAllHistoryController, deleteHistoryController } from '../controllers/History.js'
import upload from '../Helpers/fileHelpers.js'
import auth from '../middleware/auth.js'
// import { getAllChanels } from '../controllers/chanel.js'
const routes = express.Router();

routes.post("/uploadVideo", auth, upload.single("file"), uploadVideo)
routes.get("/getvideos", getAllvideos);
// routes.get('/getAllChanels',getAllChanels)
routes.get('/video/:id', getVideoById);
routes.patch('/like/:id', auth, likeController)
routes.patch('/view/:id', viewController)

routes.post('/likeVideo', auth, likeVideoController)
routes.get('/getAlllikeVideo', getAlllikeVideoController)
routes.delete('/deleteLikedVideo/:videoId/:Viewer', auth, deleteLikeVideoController)

routes.post('/watchLater', auth, watchLaterController)
routes.get('/getAllwatchLater', getAllwatchLaterController)
routes.delete('/deleteWatchlater/:videoId/:Viewer', auth, deletewatchLaterController)

routes.post('/History', auth, HistoryController)
routes.get('/getAllHistory', getAllHistoryController)
routes.delete('/deleteHistory/:userId', auth, deleteHistoryController)

export default routes;
