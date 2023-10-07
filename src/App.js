import VideoDB from "./data/data.js";
import "./App.css";

import { useContext, useReducer, useState } from "react";
import AddVideo from "./components/AddVideo.js";
import VideoList from "./components/VideoList.js";
import ThemeContext from "./context/ThemeContext.js";
import VideosContext from "./context/VideosContext.js";
import VideoDispatchContext from "./context/VideoDispatchContext.js";
function App() {
  const [editableVideo, setEditableVideo] = useState(null);

  function videoReducer(videos, action) {
    switch (action.type) {
      case "LOAD":
        return action.payload;
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];

      case "DELETE":
        return videos.filter((video) => video.id !== action.payload);

      case "UPDATE":
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const newVideo = [...videos];
        newVideo.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideo;

      default:
        return videos;
    }
  }

  const [videos, dispatch] = useReducer(videoReducer, []);
  // const [videos, setVideos] = useState(VideoDB); this is commented because i am using reducer from here

  const themeContext = useContext(ThemeContext);
  console.log({ themeContext });

  function newVideo(video) {
    // dispatch({ type: "ADD", payload: video });
    // setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }

  function deleteVideo(id) {
    // dispatch({ type: "DELETE", payload: id });
    //setVideos(videos.filter((video) => video.id !== id));
  }

  function editVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id));
  }
  function updateVideo(video) {
    // dispatch({ type: "UPDATE", payload: video });
    // const index = videos.findIndex((v) => v.id === video.id);
    // const newVideo = [...videos];
    // newVideo.splice(index, 1, video);
    // // setVideos(newVideo);
  }

  return (
    <>
      <VideosContext.Provider value={videos}>
        <VideoDispatchContext.Provider value={dispatch}>
          <div className={`App${themeContext}`}>
            <AddVideo editableVideo={editableVideo} updateVideo={updateVideo} />
            <VideoList editVideo={editVideo} />

            <div style={{ clear: "both" }}></div>
          </div>
        </VideoDispatchContext.Provider>
      </VideosContext.Provider>
    </>
  );
}

export default App;
