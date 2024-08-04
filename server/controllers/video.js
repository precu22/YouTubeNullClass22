// import videoFiles from "../models/videoFiles.js";
// export const uploadVideo = async (req, res, next) => {
//   if (req.file === undefined) {
//     res.status(404).json({ message: "plz Upload a '.mp4' video file only " });
//   } else {
//     try {
//       const file = new videoFiles({
//         videoTitle: req.body.title,
//         fileName: req.file.originalname,
//         filePath: req.file.path,
//         fileType: req.file.mimetype,
//         fileSize: req.file.size,
//         videoChanel: req.body.chanel,
//         Uploder: req.body.Uploder,
//       });
//     //   console.log(file);
//       await file.save();
//       res.status(200).send("File uploded successfully");
//     } catch (error) {
//       res.status(400).send(error.message);
//     }
//   }
// };
// export const getAllvideos= async (req, res)=>{
//   try {
//     const files= await videoFiles.find();
//     res.status(200).send(files)
//   } catch (error) {
//     res.status(404).send(error.message)
//   }
// }
// // Fetch video details by ID
// export const getVideoById = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const video = await videoFiles.findById(id);
//     if (!video) return res.status(404).json({ message: "Video not found" });

//     res.status(200).json(video);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// //working code ends here

// // //update by precious on 24/07
// // import Video from "../models/auth.js";

// // // Fetch video details by ID
// // export const getVideoById = async (req, res) => {
// //   const { id } = req.params;

// //   try {
// //     const video = await Video.findById(id);
// //     if (!video) return res.status(404).json({ message: "Video not found" });

// //     res.status(200).json(video);
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // };

//working code ends here

//update on 31/7
import videoFiles from "../models/videoFiles.js";

// Upload a video
export const uploadVideo = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "Please upload a '.mp4' video file only" });
  }

  try {
    const file = new videoFiles({
      videoTitle: req.body.title,
      fileName: req.file.originalname,
      filePath: req.file.path,
      fileType: req.file.mimetype,
      fileSize: req.file.size,
      videoChanel: req.body.chanel,
      Uploder: req.body.Uploder,
    });

    await file.save();
    res.status(200).json({ message: "File uploaded successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all videos
export const getAllvideos = async (req, res) => {
  try {
    const files = await videoFiles.find();
    res.status(200).json(files);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get video by ID
export const getVideoById = async (req, res) => {
  const { id } = req.params;

  try {
    const video = await videoFiles.findById(id);
    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }
    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
