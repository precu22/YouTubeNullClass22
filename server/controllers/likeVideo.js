import LikedVideo from '../models/likedVideo.js'

export const likeVideoController = async(req,res)=>{
    const likedVideoData= req.body;

    // console.log(likedVideoData)
    const addToLikedVideo= new LikedVideo(likedVideoData);

    try {
        await addToLikedVideo.save();
        res.status(200).json('added to likedVideo')
        // console.log("DOne")
    } catch (error) {
        res.status(400).json(error)       
    }
}

export const getAlllikeVideoController= async (req, res)=>{
    try {
      const files= await LikedVideo.find();
      // res.status(200).send(files)
      res.status(200).json(files);
    } catch (error) {
      console.error('Error fetching liked videos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  
export const deleteLikeVideoController = async (req, res) => {
  const { videoId: videoId, Viewer: Viewer } = req.params;
  // console.log(videoId,Viewer)
  try {
    await LikedVideo.findOneAndDelete({
      videoId: videoId,
      Viewer: Viewer,
    });
    res.status(200).json({ message: "Removed  from your watch Laters" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
