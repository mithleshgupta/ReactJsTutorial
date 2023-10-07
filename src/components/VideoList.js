import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Video from "../components/Video.js";
import PlayButton from "./PlayButton.js";
import VideosContext from "../context/VideosContext.js";
import useVideoDispatch from "../hooks/VideoDispatch.js";

function VideoList({ editVideo }) {
  const url = "https://api.mockaroo.com/api/78173c60?count=1000&key=3f3d4a20";

  const dispatch = useVideoDispatch();

  async function handleClick() {
    const res = await axios.get(url);
    console.log("Get video", res);
    dispatch({ type: "LOAD", payload: res.data });
  }

  useEffect(() => {
    handleClick();
  }, []);
  const videos = useContext(VideosContext);

  return (
    <>
      {videos.map((item) => (
        <Video
          title={item.title}
          views={item.views}
          time={item.time}
          verified={item.verified}
          id={item.id}
          editVideo={editVideo}
        >
          <PlayButton
            onSmash={() => console.log("Playy ", item.title)}
            onPause={() => console.log("Pause ", item.title)}
          >
            {item.title}
          </PlayButton>
        </Video>
      ))}
      <button onClick={handleClick}>Get Videos</button>
    </>
  );
}

export default VideoList;
