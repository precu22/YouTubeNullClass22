//update on 02/08 evening
import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./Components/AllRoutes";
import DrawerSidebar from "./Components/LeftSidebar/DrawerSidebar";
import CreateEditChanel from "./Pages/Chanel/CreateEditChanel";
import VideoUpload from "./Pages/VideoUpload/VideoUpload";
// import CustomVideoPlayer from "./Components/CustomVideoPlayer";  // Import your custom video player
import CustomVideoPlayer from "./Components/CustomVideoPlayer/CustomVideoPlayer";
import { useDispatch } from "react-redux";
import { fetchAllChanel } from "./actions/chanelUser";
import { getAllVideo } from "./actions/video";
import { getAlllikedVideo } from "./actions/likedVideo";
import { getAllwatchLater } from "./actions/watchLater";
import { getAllHistory } from "./actions/History";

function App() {
  const dispatch = useDispatch();
  const [toggleDrawerSidebar, setToggleDrawerSidebar] = useState({
    display: "none",
  });
  const [vidUploadPage, setVidUploadPage] = useState(false);
  const [EditCreateChanelBtn, setEditCreateChanelBtn] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState(null);  // State to hold selected video ID

  // Fetch data on component mount
  React.useEffect(() => {
    dispatch(fetchAllChanel());
    dispatch(getAllVideo());
    dispatch(getAlllikedVideo());
    dispatch(getAllwatchLater());
    dispatch(getAllHistory());
  }, [dispatch]);

  // Toggle drawer sidebar visibility
  const toggleDrawer = () => {
    setToggleDrawerSidebar((prevState) => ({
      display: prevState.display === "none" ? "flex" : "none",
    }));
  };

  // Handler for video play
  const handlePlayVideo = (videoId) => {
    setSelectedVideoId(videoId);  // Set the selected video ID
  };

  return (
    <Router>
      {vidUploadPage && <VideoUpload setVidUploadPage={setVidUploadPage} />}
      {EditCreateChanelBtn && (
        <CreateEditChanel setEditCreateChanelBtn={setEditCreateChanelBtn} />
      )}
      {selectedVideoId && (
        <CustomVideoPlayer 
          videoId={selectedVideoId} 
          onPlay={handlePlayVideo} 
        />
      )}
      <Navbar
        setEditCreateChanelBtn={setEditCreateChanelBtn}
        toggleDrawer={toggleDrawer}
      />
      <DrawerSidebar
        toggleDrawer={toggleDrawer}
        toggleDrawerSidebar={toggleDrawerSidebar}
      />
      <AllRoutes 
        setVidUploadPage={setVidUploadPage} 
        setEditCreateChanelBtn={setEditCreateChanelBtn} 
        onVideoSelect={handlePlayVideo}  // Pass handler to AllRoutes
      />
    </Router>
  );
}

export default App;
