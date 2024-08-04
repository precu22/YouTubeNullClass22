//on 02/08
import React, { useRef, useEffect, useState } from "react";
import { connect } from "react-redux";
import { viewVideo } from "../../actions/video";
import "./CustomVideoPlayer.css";

const CustomVideoPlayer = ({ id, videoSrc, viewVideo }) => {
  const videoRef = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchVideo = async () => {
        try {
          await viewVideo(id);
        } catch (err) {
          setError(err);
        }
      };
      fetchVideo();
    }
  }, [id, viewVideo]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleGesture = (e) => {
        if (!video) return;

        const rect = video.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const width = rect.width;
        const height = rect.height;

        if (e.detail === 2) {
          if (x > width * 0.66) {
            video.currentTime += 10;
          } else if (x < width * 0.33) {
            video.currentTime -= 10;
          } else {
            if (video.paused) {
              video.play();
            } else {
              video.pause();
            }
          }
        } else if (e.detail === 3) {
          if (x > width * 0.66) {
            window.close();
          } else if (x < width * 0.33) {
            alert("Comments section will be shown here.");
          } else {
            alert("Next video will be played here.");
          }
        } else if (e.type === "mousedown") {
          if (x > width * 0.66) {
            video.playbackRate = 2.0;
          } else if (x < width * 0.33) {
            video.playbackRate = 0.5;
          }
        } else if (e.type === "mouseup") {
          video.playbackRate = 1.0;
        }
      };

      video.addEventListener("click", handleGesture);
      video.addEventListener("mousedown", handleGesture);
      video.addEventListener("mouseup", handleGesture);

      return () => {
        video.removeEventListener("click", handleGesture);
        video.removeEventListener("mousedown", handleGesture);
        video.removeEventListener("mouseup", handleGesture);
      };
    }
  }, [videoSrc]);

  const fetchWeather = async () => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
          );
          if (!response.ok) throw new Error("Failed to fetch weather data");
          const data = await response.json();
          alert(
            `Location: ${data.name}, Temperature: ${(data.main.temp - 273.15).toFixed(2)}°C`
          );
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      });
    }
  };

  if (error) {
    return <div className="error-message">Error loading video: {error.message}</div>;
  }

  return (
    <div className="video-container">
      <video ref={videoRef} className="video-player" controls>
        {videoSrc ? <source src={videoSrc} type="video/mp4" /> : null}
        Your browser does not support the video tag.
      </video>
      <div className="gesture-overlay" onClick={fetchWeather}></div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  videoSrc: state.video?.data?.filePath ?? "", // Ensure correct path for video source
});

const mapDispatchToProps = {
  viewVideo,
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomVideoPlayer);
