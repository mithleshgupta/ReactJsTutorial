import { useEffect, useState } from "react";
import "../components/AddVideo.css";
import useVideoDispatch from "../hooks/VideoDispatch";

function AddVideo({ editableVideo }) {
  const dispatch = useVideoDispatch();
  const initialState = {
    views: "",
    time: "",
    verified: false,
    title: "",
  };

  const [video, setVideo] = useState(initialState);

  function handleSubmit(e) {
    e.preventDefault();
    if (editableVideo) {
      dispatch({ type: "UPDATE", payload: video });
    } else {
      dispatch({ type: "ADD", payload: video });
    }

    setVideo(initialState);
  }

  function handleChange(e) {
    console.log(e.target.name, e.target.value, e.target.time);
    setVideo({ ...video, [e.target.name]: e.target.value, ...e.target.time });
  }

  useEffect(() => {
    if (editableVideo) {
      setVideo(editableVideo);
    }
  }, [editableVideo]);

  return (
    <form>
      <input
        type="text"
        placeholder="title"
        onChange={handleChange}
        d
        name="title"
        value={video.title}
      />
      <input
        type="text"
        placeholder="views"
        onChange={handleChange}
        name="views"
        value={video.views}
      />
      <input
        type="text"
        placeholder="time"
        onChange={handleChange}
        name="time"
        value={video.time}
      />
      <button
        className="btn"
        onClick={handleSubmit}
        // onClick={() => {
        //   setVideos([
        //     ...videos,
        //     {
        //       id: videos.length + 1,
        //       title: "Express Js Tutorial",
        //       views: "76K",
        //       time: "9 month ago",
        //       verified: false,
        //     },
        //   ]);
        // }}
      >
        {editableVideo ? "Edit" : "Add"}
      </button>
    </form>
  );
}

export default AddVideo;
